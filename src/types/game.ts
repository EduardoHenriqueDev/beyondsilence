export type GameScreen =
  | "home"
  | "story-intro"
  | "chapter"
  | "quiz"
  | "quiz-feedback"
  | "reflection"
  | "result"
  | "learn-more"
  | "sources"

export interface AccessibilitySettings {
  fontSize: "sm" | "md" | "lg" | "xl"
  highContrast: boolean
  reducedMotion: boolean
  simplifiedReading: boolean
}

export interface GameState {
  screen: GameScreen
  currentChapterIndex: number
  currentQuestionIndex: number
  score: number
  correctAnswers: number
  incorrectAnswers: number
  selectedOption: string | null
  showFeedback: boolean
  isCorrect: boolean | null
  totalQuestions: number
  answeredQuestions: number
  gameCompleted: boolean
  accessibility: AccessibilitySettings
}

export type GameAction =
  | { type: "GO_TO_SCREEN"; screen: GameScreen }
  | { type: "NEXT_CHAPTER" }
  | { type: "SELECT_OPTION"; optionId: string }
  | { type: "SUBMIT_ANSWER"; correct: boolean }
  | { type: "NEXT_QUESTION" }
  | { type: "COMPLETE_REFLECTION" }
  | { type: "RESTART_GAME" }
  | { type: "SET_FONT_SIZE"; size: AccessibilitySettings["fontSize"] }
  | { type: "TOGGLE_HIGH_CONTRAST" }
  | { type: "TOGGLE_REDUCED_MOTION" }
  | { type: "TOGGLE_SIMPLIFIED_READING" }

export const POINTS_PER_QUESTION = 100

export function getScoreClassification(score: number): {
  title: string
  message: string
  level: "beginner" | "intermediate" | "advanced"
} {
  if (score <= 300) {
    return {
      title: "Você começou sua jornada",
      message:
        "Talvez algumas ideias ainda sejam novas para você. O importante é continuar aprendendo. Cada passo conta na construção de uma sociedade mais inclusiva.",
      level: "beginner",
    }
  }
  if (score <= 700) {
    return {
      title: "Você está no caminho da inclusão",
      message:
        "Você já percebeu algumas das barreiras enfrentadas pelas pessoas surdas, mas ainda há muito para descobrir. Continue explorando e aprendendo.",
      level: "intermediate",
    }
  }
  return {
    title: "Você enxergou além do silêncio",
    message:
      "Você demonstrou uma boa compreensão sobre inclusão, acessibilidade e os desafios apresentados na história. Sua conscientização faz diferença.",
    level: "advanced",
  }
}
