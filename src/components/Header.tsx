import { HandMetal, Trophy } from "lucide-react"
import { AccessibilityPanel } from "@/components/AccessibilityPanel"
import { useGame } from "@/context/GameContext"

export function Header() {
  const { state, goToScreen } = useGame()
  const isInGame =
    state.screen !== "home" &&
    state.screen !== "learn-more" &&
    state.screen !== "sources"

  return (
    <header
      role="banner"
      className="sticky top-0 z-40 w-full border-b border-border/50 bg-background/90 backdrop-blur-sm"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        <button
          onClick={() => goToScreen("home")}
          className="flex items-center gap-2 text-sm font-semibold text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md px-1"
          aria-label="Além do Silêncio - página inicial"
        >
          <HandMetal className="size-5 text-primary" aria-hidden="true" />
          <span className="hidden sm:block">Além do Silêncio</span>
        </button>

        <div className="flex items-center gap-1">
          {isInGame && (
            <div
              className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium"
              aria-label={`Pontuação atual: ${state.score} pontos`}
            >
              <Trophy className="size-3.5" aria-hidden="true" />
              <span>{state.score} pts</span>
            </div>
          )}
          <AccessibilityPanel />
        </div>
      </div>
    </header>
  )
}
