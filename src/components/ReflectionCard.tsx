import { Heart, ArrowRight, Check } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useGame, gameSequence } from "@/context/GameContext";
import { reflectionQuestions } from "@/data/questions";
import type { SequenceItem } from "@/context/GameContext";

export function ReflectionCard() {
  const { dispatch, goToScreen } = useGame();
  const [selected, setSelected] = useState<string | null>(null);

  const reflectionItems = gameSequence.filter(
    (item) => item.type === "reflection",
  ) as (SequenceItem & { type: "reflection" })[];

  const currentReflectionItem = reflectionItems[0];
  if (
    !currentReflectionItem ||
    currentReflectionItem.reflectionIndex === undefined
  ) {
    goToScreen("chapter");
    return null;
  }

  const reflection = reflectionQuestions[currentReflectionItem.reflectionIndex];
  if (!reflection) {
    goToScreen("chapter");
    return null;
  }

  const handleSubmit = () => {
    if (!selected) return;
    const currentSeqIdx = gameSequence.findIndex(
      (item) =>
        item.type === "reflection" &&
        item.reflectionIndex === currentReflectionItem.reflectionIndex,
    );

    const nextItem = gameSequence[currentSeqIdx + 1];

    if (nextItem?.type === "chapter" && nextItem.chapterIndex !== undefined) {
      dispatch({ type: "COMPLETE_REFLECTION" });
      return;
    }

    if (nextItem?.type === "quiz" && nextItem.questionIndex !== undefined) {
      if (state.answeredQuestions > 0) {
        dispatch({ type: "NEXT_QUESTION" });
      }

      goToScreen("quiz");
      return;
    }

    goToScreen("result");
  };

  return (
    <main id="main-content" className="flex-1 px-4 sm:px-6 py-8 sm:py-12">
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="text-center space-y-2">
          <Badge variant="secondary" className="gap-1.5">
            <Heart className="size-3" aria-hidden="true" />
            Momento de reflexão
          </Badge>
          <p className="text-xs text-muted-foreground">
            Esta pergunta não afeta sua pontuação
          </p>
        </div>

        <Card className="animate-in fade-in-0 duration-500">
          <CardContent className="pt-6 space-y-6">
            <div className="space-y-2">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight leading-snug">
                {reflection.text}
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed italic">
                {reflection.scenario}
              </p>
            </div>

            <div
              className="space-y-3"
              role="group"
              aria-label="Opções de reflexão"
            >
              <p className="text-sm font-semibold">Como você se sentiria?</p>
              {reflection.options.map((option) => (
                <Button
                  key={option.id}
                  variant={selected === option.id ? "default" : "outline"}
                  className="w-full justify-start text-left h-auto py-4 px-4 sm:px-5 text-base gap-3 transition-all"
                  onClick={() => setSelected(option.id)}
                  aria-pressed={selected === option.id}
                >
                  <span
                    className={`flex size-6 shrink-0 items-center justify-center rounded-full border-2 ${
                      selected === option.id
                        ? "border-primary-foreground bg-primary-foreground text-primary"
                        : "border-current"
                    }`}
                    aria-hidden="true"
                  >
                    {selected === option.id && <Check className="size-3.5" />}
                  </span>
                  <span className="flex-1">{option.text}</span>
                </Button>
              ))}
            </div>

            {selected && (
              <div className="p-4 rounded-lg bg-muted border border-border/50 animate-in fade-in-0 duration-300">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {reflection.message}
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        <div className="flex justify-end">
          <Button
            size="lg"
            className="gap-2 px-8"
            onClick={handleSubmit}
            disabled={!selected}
            aria-label="Continuar após a reflexão"
          >
            Continuar
            <ArrowRight className="size-4" aria-hidden="true" />
          </Button>
        </div>
      </div>
    </main>
  );
}
