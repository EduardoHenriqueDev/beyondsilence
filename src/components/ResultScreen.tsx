import {
  RotateCcw,
  BookOpen,
  Award,
  Check,
  X,
  Star,
  Sprout,
  Rocket,
  Trophy,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useGame } from "@/context/GameContext"
import { getScoreClassification, POINTS_PER_QUESTION } from "@/types/game"

export function ResultScreen() {
  const { state, dispatch, goToScreen } = useGame()
  const classification = getScoreClassification(state.score)
  const maxScore = state.totalQuestions * POINTS_PER_QUESTION

  const levelStyles = {
    beginner: "from-blue-500 to-cyan-500",
    intermediate: "from-violet-500 to-purple-500",
    advanced: "from-amber-500 to-orange-500",
  }

  const levelIcons = {
    beginner: Sprout,
    intermediate: Rocket,
    advanced: Trophy,
  }

  const LevelIcon = levelIcons[classification.level]

  return (
    <main id="main-content" className="flex-1 px-4 py-8 sm:py-12">
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="text-center space-y-3">
          <Badge variant="secondary" className="gap-1.5">
            <Award className="size-3" aria-hidden="true" />
            Resultado final
          </Badge>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Sua jornada
          </h1>
        </div>

        {/* Score card */}
        <Card className="overflow-hidden">
          <div
            className={`bg-gradient-to-br ${levelStyles[classification.level]} p-6 sm:p-8 text-center text-white`}
          >
            <div className="mb-2 flex justify-center" aria-hidden="true">
              <LevelIcon className="size-12" />
            </div>
            <p className="text-sm font-medium opacity-90">Pontuação total</p>
            <p className="text-4xl sm:text-5xl font-extrabold tracking-tight">
              {state.score}
            </p>
            <p className="text-sm opacity-80">de {maxScore} pontos</p>
          </div>
          <CardContent className="pt-6 space-y-4">
            <div className="text-center space-y-2">
              <h2 className="text-xl font-bold">{classification.title}</h2>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-md mx-auto">
                {classification.message}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4">
          <Card>
            <CardContent className="pt-6 flex flex-col items-center gap-2">
              <div className="flex size-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Check className="size-6" aria-hidden="true" />
              </div>
              <p className="text-3xl font-bold">{state.correctAnswers}</p>
              <p className="text-sm text-muted-foreground">Acertos</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 flex flex-col items-center gap-2">
              <div className="flex size-12 items-center justify-center rounded-full bg-destructive text-white">
                <X className="size-6" aria-hidden="true" />
              </div>
              <p className="text-3xl font-bold">{state.incorrectAnswers}</p>
              <p className="text-sm text-muted-foreground">Erros</p>
            </CardContent>
          </Card>
        </div>

        {/* Score breakdown */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
              <Star className="size-4 text-primary" aria-hidden="true" />
              Detalhamento
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Perguntas respondidas</span>
              <span className="font-medium">
                {state.answeredQuestions} / {state.totalQuestions}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Pontos por acerto</span>
              <span className="font-medium">{POINTS_PER_QUESTION} pts</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Aproveitamento</span>
              <span className="font-medium">
                {Math.round(
                  (state.correctAnswers / state.totalQuestions) * 100
                )}
                %
              </span>
            </div>
          </CardContent>
        </Card>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2 px-4 sm:px-0">
          <Button
            size="lg"
            variant="outline"
            className="gap-2"
            onClick={() => goToScreen("learn-more")}
            aria-label="Aprender mais sobre inclusão de pessoas surdas"
          >
            <BookOpen className="size-4" aria-hidden="true" />
            Conheça mais sobre inclusão
          </Button>
          <Button
            size="lg"
            className="gap-2"
            onClick={() => dispatch({ type: "RESTART_GAME" })}
            aria-label="Jogar novamente"
          >
            <RotateCcw className="size-4" aria-hidden="true" />
            Jogar novamente
          </Button>
        </div>
      </div>
    </main>
  )
}
