import { Check, X, ArrowRight, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ProgressBar } from "@/components/ProgressBar";
import { useGame } from "@/context/GameContext";
import { questions } from "@/data/questions";
import { POINTS_PER_QUESTION } from "@/types/game";

export function QuizQuestion() {
  const { state, dispatch, goToScreen } = useGame();

  const question = questions[state.currentQuestionIndex];

  if (!question) {
    goToScreen("result");
    return null;
  }

  const isLastQuestion = state.currentQuestionIndex === questions.length - 1;

  const handleSelect = (optionId: "A" | "B" | "C" | "D") => {
    if (state.showFeedback) {
      return;
    }

    const isCorrect = optionId === question.correctOption;

    dispatch({
      type: "SELECT_OPTION",
      optionId,
    });

    dispatch({
      type: "SUBMIT_ANSWER",
      correct: isCorrect,
    });
  };

  const handleContinue = () => {
    if (isLastQuestion) {
      goToScreen("result");
      return;
    }

    dispatch({
      type: "NEXT_QUESTION",
    });

    goToScreen("quiz");
  };

  return (
    <main id="main-content" className="flex-1 px-4 sm:px-6 py-8 sm:py-12">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Progresso e pontuação */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <Badge variant="outline" className="gap-1.5">
              <HelpCircle className="size-3" aria-hidden="true" />
              Pergunta {state.currentQuestionIndex + 1} de {questions.length}
            </Badge>

            <div
              className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium"
              aria-label={`Pontuação atual: ${state.score} pontos`}
            >
              <span aria-hidden="true">⭐</span>
              <span>{state.score} pts</span>
            </div>
          </div>

          <ProgressBar
            current={state.currentQuestionIndex + 1}
            total={questions.length}
            label="Progresso do quiz"
          />
        </div>

        {/* 
          Área principal do quiz.

          Mobile:
          1 coluna → pergunta em cima / explicação embaixo

          Computador:
          2 colunas → pergunta à esquerda / explicação à direita
        */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          {/* CARD DA PERGUNTA */}
          <Card className="animate-in fade-in-0 duration-500">
            <CardContent className="pt-6 space-y-6">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight leading-snug">
                {question.text}
              </h2>

              {/* Alternativas */}
              <div className="space-y-3" role="group" aria-label="Alternativas">
                {question.options.map((option) => {
                  const isSelected = state.selectedOption === option.id;

                  const isCorrectOption = option.id === question.correctOption;

                  const showResult = state.showFeedback;

                  let variant:
                    | "default"
                    | "outline"
                    | "destructive"
                    | "secondary" = "outline";

                  let className =
                    "w-full justify-start text-left h-auto py-4 px-4 sm:px-5 text-base gap-3 transition-all whitespace-normal break-words";

                  if (showResult && isCorrectOption) {
                    variant = "default";
                    className += " ring-2 ring-primary";
                  } else if (showResult && isSelected && !isCorrectOption) {
                    variant = "destructive";
                  } else if (isSelected && !showResult) {
                    variant = "secondary";
                  }

                  return (
                    <Button
                      key={option.id}
                      variant={variant}
                      className={className}
                      onClick={() => handleSelect(option.id)}
                      disabled={state.showFeedback}
                      aria-pressed={isSelected}
                      aria-label={`Alternativa ${option.id}: ${option.text}`}
                    >
                      <span
                        className="flex size-7 shrink-0 items-center justify-center rounded-full border-2 border-current text-sm font-bold"
                        aria-hidden="true"
                      >
                        {showResult && isCorrectOption ? (
                          <Check className="size-4" />
                        ) : showResult && isSelected && !isCorrectOption ? (
                          <X className="size-4" />
                        ) : (
                          option.id
                        )}
                      </span>

                      <span className="flex-1 text-left leading-relaxed">
                        {option.text}
                      </span>
                    </Button>
                  );
                })}
              </div>

              {/* Feedback resumido */}
              {state.showFeedback && (
                <div className="pt-2">
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex size-10 shrink-0 items-center justify-center rounded-full ${
                        state.isCorrect
                          ? "bg-primary text-primary-foreground"
                          : "bg-destructive text-white"
                      }`}
                      aria-hidden="true"
                    >
                      {state.isCorrect ? (
                        <Check className="size-5" />
                      ) : (
                        <X className="size-5" />
                      )}
                    </div>

                    <div>
                      <p className="font-semibold text-base">
                        {state.isCorrect
                          ? "Resposta correta!"
                          : "Resposta incorreta"}
                      </p>

                      <p className="text-sm text-muted-foreground">
                        {state.isCorrect
                          ? `+${POINTS_PER_QUESTION} pontos`
                          : `A resposta correta era a alternativa ${question.correctOption}`}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* CARD DA EXPLICAÇÃO */}
          {state.showFeedback && (
            <Card
              className={`animate-in fade-in-0 slide-in-from-bottom-4 duration-500 ${
                state.isCorrect ? "border-primary" : "border-destructive"
              }`}
            >
              <CardContent className="pt-6 space-y-5">
                <div className="flex items-center gap-3">
                  <div
                    className={`flex size-10 shrink-0 items-center justify-center rounded-full ${
                      state.isCorrect
                        ? "bg-primary text-primary-foreground"
                        : "bg-destructive text-white"
                    }`}
                    aria-hidden="true"
                  >
                    {state.isCorrect ? (
                      <Check className="size-5" />
                    ) : (
                      <X className="size-5" />
                    )}
                  </div>

                  <div>
                    <p className="font-semibold text-base">
                      {state.isCorrect
                        ? "Resposta correta!"
                        : "Resposta incorreta"}
                    </p>

                    <p className="text-sm text-muted-foreground">
                      {state.isCorrect
                        ? `Você ganhou ${POINTS_PER_QUESTION} pontos.`
                        : `A resposta correta era a alternativa ${question.correctOption}.`}
                    </p>
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <p className="text-sm font-semibold">
                    Por que essa resposta?
                  </p>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {question.explanation}
                  </p>
                </div>

                <div className="flex justify-end pt-2">
                  <Button
                    size="lg"
                    className="gap-2 px-8"
                    onClick={handleContinue}
                    aria-label={
                      isLastQuestion
                        ? "Ver resultado"
                        : "Continuar para a próxima pergunta"
                    }
                  >
                    {isLastQuestion ? "Ver resultado" : "Continuar"}

                    <ArrowRight className="size-4" aria-hidden="true" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </main>
  );
}
