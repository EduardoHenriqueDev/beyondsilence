import { ArrowRight, Info, MapPin, Calendar, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useGame } from "@/context/GameContext"
import { storyPerson } from "@/data/story"

export function StoryIntro() {
  const { goToScreen } = useGame()

  return (
    <main id="main-content" className="flex-1 px-4 sm:px-6 py-8 sm:py-12">
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="text-center space-y-2">
          <Badge variant="secondary" className="gap-1.5">
            <Info className="size-3" aria-hidden="true" />
            A história por trás do jogo
          </Badge>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
            {storyPerson.name}
          </h1>
          <p className="text-base text-muted-foreground leading-relaxed max-w-lg mx-auto">
            {storyPerson.briefDescription}
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Contexto da história</CardTitle>
            <CardDescription>
              Esta é uma história real, baseada em fontes públicas confiáveis.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="flex items-start gap-3 p-3 rounded-lg bg-secondary">
                <User className="size-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="text-xs font-medium text-muted-foreground">Pessoa</p>
                  <p className="text-sm font-semibold">{storyPerson.name}</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg bg-secondary">
                <MapPin className="size-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="text-xs font-medium text-muted-foreground">País</p>
                  <p className="text-sm font-semibold">{storyPerson.country}</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg bg-secondary">
                <Calendar className="size-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="text-xs font-medium text-muted-foreground">Período</p>
                  <p className="text-sm font-semibold">{storyPerson.period}</p>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-sm font-semibold">Resumo da trajetória</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {storyPerson.summary}
              </p>
            </div>

            <div className="p-3 rounded-lg border border-border bg-muted/50">
              <p className="text-xs text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Aviso:</strong> Esta experiência
                é baseada em fontes públicas sobre a comunidade surda brasileira.
                Nenhum fato foi inventado. Ao final, você poderá consultar todas as
                fontes utilizadas.
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-center pt-2">
          <Button
            size="lg"
            className="gap-2 px-8"
            onClick={() => goToScreen("chapter")}
            aria-label="Iniciar a narrativa interativa"
          >
            Começar narrativa
            <ArrowRight className="size-4" aria-hidden="true" />
          </Button>
        </div>
      </div>
    </main>
  )
}
