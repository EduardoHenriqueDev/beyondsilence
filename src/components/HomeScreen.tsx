import { ArrowRight, HandMetal, BookOpen, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useGame } from "@/context/GameContext"

export function HomeScreen() {
  const { goToScreen } = useGame()

  return (
    <main
      id="main-content"
      className="flex-1 flex flex-col items-center justify-center px-4 py-10 sm:py-16 min-h-[80vh]"
      aria-label="Tela inicial do jogo Além do Silêncio"
    >
      <div className="max-w-2xl w-full mx-auto text-center space-y-6 sm:space-y-8">
        {/* Hero badge */}
        <div className="flex justify-center">
          <Badge variant="secondary" className="text-xs gap-1.5 px-3 py-1">
            <BookOpen className="size-3" aria-hidden="true" />
            Experiência educativa baseada em história real
          </Badge>
        </div>

        {/* Icon */}
        <div
          className="flex justify-center"
          aria-hidden="true"
        >
          <div className="relative">
            <div className="w-24 h-24 rounded-3xl bg-primary flex items-center justify-center shadow-lg">
              <HandMetal className="size-12 text-primary-foreground" />
            </div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-secondary border-2 border-background flex items-center justify-center">
              <Award className="size-4 text-secondary-foreground" />
            </div>
          </div>
        </div>

        {/* Title */}
        <div className="space-y-3">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground">
            Além do Silêncio
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground font-medium">
            Uma história real. Uma nova perspectiva.
          </p>
        </div>

        {/* Description */}
        <div className="max-w-lg mx-auto">
          <p className="text-base text-muted-foreground leading-relaxed">
            Você está prestes a conhecer a história de uma pessoa surda e
            descobrir como situações aparentemente simples podem se transformar
            em grandes barreiras quando a sociedade não está preparada para
            incluir.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-2 sm:gap-4 max-w-sm mx-auto">
          {[
            { value: "6", label: "Capítulos" },
            { value: "10", label: "Perguntas" },
            { value: "~8min", label: "Experiência" },
          ].map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center gap-1 p-2.5 sm:p-3 rounded-xl bg-secondary"
            >
              <span className="text-lg sm:text-xl font-bold text-foreground">
                {item.value}
              </span>
              <span className="text-xs text-muted-foreground">{item.label}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="space-y-3 pt-2">
          <Button
            size="lg"
            className="gap-2 px-8 py-6 text-base font-semibold rounded-xl shadow-md"
            onClick={() => goToScreen("story-intro")}
            aria-label="Começar a história de Gildete Sousa"
          >
            Começar história
            <ArrowRight className="size-4" aria-hidden="true" />
          </Button>

          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 pt-2">
            <button
              className="text-sm text-muted-foreground underline underline-offset-2 hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
              onClick={() => goToScreen("learn-more")}
            >
              Aprenda mais sobre surdez
            </button>
            <span className="text-muted-foreground" aria-hidden="true">·</span>
            <button
              className="text-sm text-muted-foreground underline underline-offset-2 hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
              onClick={() => goToScreen("sources")}
            >
              Fontes
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
