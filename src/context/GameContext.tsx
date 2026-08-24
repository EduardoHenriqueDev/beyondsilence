import React, {
  createContext,
  useContext,
  useReducer,
  useEffect,
  type ReactNode,
} from "react";
import type {
  GameState,
  GameAction,
  AccessibilitySettings,
  GameScreen,
} from "@/types/game";
import { POINTS_PER_QUESTION } from "@/types/game";
import { storyChapters } from "@/data/story";
import { questions, reflectionQuestions } from "@/data/questions";

const ACCESSIBILITY_KEY = "alem-do-silencio-accessibility";

function loadAccessibility(): AccessibilitySettings {
  try {
    const stored = localStorage.getItem(ACCESSIBILITY_KEY);
    if (stored) return JSON.parse(stored) as AccessibilitySettings;
  } catch {
  }

  return {
    fontSize: "md",
    highContrast: false,
    reducedMotion: false,
    simplifiedReading: false,
  };
}

const initialState: GameState = {
  screen: "home",
  currentChapterIndex: 0,
  currentQuestionIndex: 0,
  score: 0,
  correctAnswers: 0,
  incorrectAnswers: 0,
  selectedOption: null,
  showFeedback: false,
  isCorrect: null,
  totalQuestions: questions.length,
  answeredQuestions: 0,
  gameCompleted: false,
  accessibility: loadAccessibility(),
};

export interface SequenceItem {
  type: "chapter" | "quiz" | "reflection";
  chapterIndex?: number;
  questionIndex?: number;
  reflectionIndex?: number;
}

function buildSequence(): SequenceItem[] {
  const seq: SequenceItem[] = [];

  const addedQuestions = new Set<number>();
  const addedReflections = new Set<number>();

  for (let ci = 0; ci < storyChapters.length; ci++) {
    const chapter = storyChapters[ci];

    seq.push({
      type: "chapter",
      chapterIndex: ci,
    });

    questions.forEach((question, questionIndex) => {
      if (
        question.afterChapterId === chapter.id &&
        !addedQuestions.has(questionIndex)
      ) {
        seq.push({
          type: "quiz",
          questionIndex,
        });

        addedQuestions.add(questionIndex);
      }
    });

    reflectionQuestions.forEach((reflection, reflectionIndex) => {
      if (
        reflection.afterChapterId === chapter.id &&
        !addedReflections.has(reflectionIndex)
      ) {
        seq.push({
          type: "reflection",
          reflectionIndex,
        });

        addedReflections.add(reflectionIndex);
      }
    });
  }

  questions.forEach((question, questionIndex) => {
    if (!question.afterChapterId && !addedQuestions.has(questionIndex)) {
      seq.push({
        type: "quiz",
        questionIndex,
      });

      addedQuestions.add(questionIndex);
    }
  });

  questions.forEach((_, questionIndex) => {
    if (!addedQuestions.has(questionIndex)) {
      seq.push({
        type: "quiz",
        questionIndex,
      });

      addedQuestions.add(questionIndex);
    }
  });

  return seq;
}

export const gameSequence = buildSequence();

function gameReducer(state: GameState, action: GameAction): GameState {
  switch (action.type) {
    case "GO_TO_SCREEN":
      return {
        ...state,
        screen: action.screen,
      };

    case "NEXT_CHAPTER":
      return {
        ...state,
        currentChapterIndex: state.currentChapterIndex + 1,
        screen: "chapter",
      };

    case "SELECT_OPTION":
      return {
        ...state,
        selectedOption: action.optionId,
      };

    case "SUBMIT_ANSWER": {
      const newScore = action.correct
        ? state.score + POINTS_PER_QUESTION
        : state.score;

      return {
        ...state,
        showFeedback: true,
        isCorrect: action.correct,
        score: newScore,
        correctAnswers: action.correct
          ? state.correctAnswers + 1
          : state.correctAnswers,
        incorrectAnswers: !action.correct
          ? state.incorrectAnswers + 1
          : state.incorrectAnswers,
        answeredQuestions: state.answeredQuestions + 1,
        screen: "quiz-feedback",
      };
    }

    case "NEXT_QUESTION":
      return {
        ...state,
        currentQuestionIndex: state.currentQuestionIndex + 1,
        selectedOption: null,
        showFeedback: false,
        isCorrect: null,
      };

    case "COMPLETE_REFLECTION":
      return {
        ...state,
        screen: "chapter",
      };

    case "RESTART_GAME":
      return {
        ...initialState,
        accessibility: state.accessibility,
        screen: "home",
      };

    case "SET_FONT_SIZE":
      return {
        ...state,
        accessibility: {
          ...state.accessibility,
          fontSize: action.size,
        },
      };

    case "TOGGLE_HIGH_CONTRAST":
      return {
        ...state,
        accessibility: {
          ...state.accessibility,
          highContrast: !state.accessibility.highContrast,
        },
      };

    case "TOGGLE_REDUCED_MOTION":
      return {
        ...state,
        accessibility: {
          ...state.accessibility,
          reducedMotion: !state.accessibility.reducedMotion,
        },
      };

    case "TOGGLE_SIMPLIFIED_READING":
      return {
        ...state,
        accessibility: {
          ...state.accessibility,
          simplifiedReading: !state.accessibility.simplifiedReading,
        },
      };

    default:
      return state;
  }
}

interface GameContextValue {
  state: GameState;
  dispatch: React.Dispatch<GameAction>;
  goToScreen: (screen: GameScreen) => void;
}

const GameContext = createContext<GameContextValue | null>(null);

export function GameProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(gameReducer, initialState);

  useEffect(() => {
    try {
      localStorage.setItem(
        ACCESSIBILITY_KEY,
        JSON.stringify(state.accessibility),
      );
    } catch {
    }
  }, [state.accessibility]);

  useEffect(() => {
    const root = document.documentElement;

    const fontSizeMap = {
      sm: "14px",
      md: "16px",
      lg: "18px",
      xl: "20px",
    };

    root.style.setProperty(
      "--base-font-size",
      fontSizeMap[state.accessibility.fontSize],
    );

    root.classList.toggle("high-contrast", state.accessibility.highContrast);

    root.classList.toggle(
      "reduced-motion",
      state.accessibility.reducedMotion ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    );

    root.classList.toggle(
      "simplified-reading",
      state.accessibility.simplifiedReading,
    );
  }, [state.accessibility]);

  const goToScreen = (screen: GameScreen) => {
    dispatch({
      type: "GO_TO_SCREEN",
      screen,
    });
  };

  return (
    <GameContext.Provider
      value={{
        state,
        dispatch,
        goToScreen,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  const ctx = useContext(GameContext);

  if (!ctx) {
    throw new Error("useGame must be used within a GameProvider");
  }

  return ctx;
}
