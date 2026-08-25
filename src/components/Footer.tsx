import { ExternalLink } from "lucide-react"
import { useGame } from "@/context/GameContext"

export function Footer() {
  const { goToScreen } = useGame()
  return (
    <footer
      role="contentinfo"
      className="w-full border-t border-border/50 bg-background mt-auto"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-6 space-y-4">
        <p className="text-xs text-muted-foreground text-center leading-relaxed">
          Esta experiência educativa é baseada em fontes públicas sobre a
          comunidade surda brasileira e tem finalidade exclusivamente educativa.
          Nenhum acontecimento foi inventado.{" "}
          <button
            onClick={() => goToScreen("sources")}
            className="underline underline-offset-2 hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
          >
            Ver fontes e referências
            <ExternalLink className="inline size-3 ml-0.5" aria-hidden="true" />
          </button>
        </p>
        <p className="text-xs text-muted-foreground text-center">
          Desenvolvido para conscientização sobre inclusão de pessoas surdas
        </p>
      </div>
    </footer>
  )
}
