import { ArrowRight, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ProgressBar } from "@/components/ProgressBar";
import { useGame, gameSequence } from "@/context/GameContext";
import { storyChapters } from "@/data/story";
import type { SequenceItem } from "@/context/GameContext";

export function StoryChapter() {
  const { state, dispatch, goToScreen } = useGame();

  const chapter = storyChapters[state.currentChapterIndex];
  if (!chapter) {
    goToScreen("result");
    return null;
  }

  // Find what comes after this chapter in the sequence
  const currentSeqIdx = gameSequence.findIndex(
    (item) =>
      item.type === "chapter" &&
      item.chapterIndex === state.currentChapterIndex,
  );
  const nextItem: SequenceItem | undefined = gameSequence[currentSeqIdx + 1];

  const handleContinue = () => {
    if (nextItem?.type === "quiz" && nextItem.questionIndex !== undefined) {
      if (state.answeredQuestions > 0) {
        dispatch({ type: "NEXT_QUESTION" });
      }

      goToScreen("quiz");
      return;
    }

    if (
      nextItem?.type === "reflection" &&
      nextItem.reflectionIndex !== undefined
    ) {
      goToScreen("reflection");
      return;
    }

    if (state.currentChapterIndex < storyChapters.length - 1) {
      dispatch({ type: "NEXT_CHAPTER" });
    } else {
      goToScreen("result");
    }
  };

  const isLastChapter = state.currentChapterIndex === storyChapters.length - 1;

  return (
    <main id="main-content" className="flex-1 px-4 sm:px-6 py-8 sm:py-12">
      <div className="max-w-2xl mx-auto space-y-6">
        {/* Chapter indicator */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <Badge variant="outline" className="gap-1.5">
              <BookOpen className="size-3" aria-hidden="true" />
              {chapter.type === "intro"
                ? "Introdução"
                : `Capítulo ${chapter.chapterNumber} de ${storyChapters.length - 1}`}
            </Badge>
            <span className="text-xs text-muted-foreground">
              {state.currentChapterIndex + 1} / {storyChapters.length}
            </span>
          </div>
          <ProgressBar
            current={state.currentChapterIndex + 1}
            total={storyChapters.length}
            label="Progresso da narrativa"
          />
        </div>

        {/* Chapter content */}
        <Card className="animate-in fade-in-0 duration-500">
          <CardContent className="pt-6 space-y-4">
            <div className="space-y-1">
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
                {chapter.title}
              </h1>
              {chapter.subtitle && (
                <p className="text-base text-muted-foreground font-medium">
                  {chapter.subtitle}
                </p>
              )}
            </div>

            <div className="space-y-4 pt-2">
              {chapter.content.map((paragraph, idx) => (
                <p
                  key={idx}
                  className="text-base text-foreground/90 leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {chapter.note && (
              <div className="p-3 rounded-lg bg-muted border border-border/50">
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {chapter.note}
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Continue button */}
        <div className="flex justify-end">
          <Button
            size="lg"
            className="gap-2 px-8"
            onClick={handleContinue}
            aria-label={
              isLastChapter
                ? "Ver resultado final"
                : "Continuar para a próxima etapa"
            }
          >
            {isLastChapter ? "Ver resultado" : "Continuar"}
            <ArrowRight className="size-4" aria-hidden="true" />
          </Button>
        </div>
      </div>
    </main>
  );
}
