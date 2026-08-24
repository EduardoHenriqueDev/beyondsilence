import { ArrowLeft, ExternalLink, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { useGame } from "@/context/GameContext"
import { sources, storyPerson } from "@/data/story"

export function SourcesSection() {
  const { goToScreen } = useGame()

  return (
    <main id="main-content" className="flex-1 px-4 sm:px-6 py-8 sm:py-12">
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="space-y-3">
          <Button
            variant="ghost"
            size="sm"
            className="gap-1.5 -ml-2"
            onClick={() => goToScreen("home")}
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            Voltar
          </Button>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Fontes e referências
          </h1>
          <p className="text-base text-muted-foreground leading-relaxed">
            Esta experiência foi construída a partir de fontes públicas e tem
            finalidade educativa. Nenhum fato foi inventado.
          </p>
        </div>

        {/* Story source */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <BookOpen className="size-5 text-primary" aria-hidden="true" />
              A história por trás do jogo
            </CardTitle>
            <CardDescription>
              A narrativa é baseada na trajetória de {storyPerson.name}.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="grid sm:grid-cols-2 gap-3 text-sm">
              <div>
                <p className="text-xs font-medium text-muted-foreground">Nome</p>
                <p className="font-semibold">{storyPerson.name}</p>
              </div>
              <div>
                <p className="text-xs font-medium text-muted-foreground">País</p>
                <p className="font-semibold">{storyPerson.country}</p>
              </div>
              <div>
                <p className="text-xs font-medium text-muted-foreground">Período</p>
                <p className="font-semibold">{storyPerson.period}</p>
              </div>
            </div>
            <Separator />
            <p className="text-sm text-muted-foreground leading-relaxed">
              {storyPerson.summary}
            </p>
          </CardContent>
        </Card>

        {/* Sources list */}
        <div className="space-y-3">
          <h2 className="text-lg font-semibold">Fontes utilizadas</h2>
          {sources.map((source, idx) => (
            <Card key={idx}>
              <CardContent className="pt-5">
                <div className="space-y-2">
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-primary hover:underline underline-offset-2 flex items-start gap-1.5"
                  >
                    {source.title}
                    <ExternalLink
                      className="size-3.5 shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                  </a>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {source.description}
                  </p>
                  <p className="text-xs text-muted-foreground/70 break-all">
                    {source.url}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Disclaimer */}
        <Card className="bg-secondary">
          <CardContent className="pt-6">
            <p className="text-sm text-muted-foreground leading-relaxed text-center">
              Esta experiência foi construída a partir de fontes públicas e tem
              finalidade educativa. Todos os links acima levam às páginas
              originais onde as informações podem ser verificadas.
            </p>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
