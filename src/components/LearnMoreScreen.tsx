import {
  HandMetal,
  Users,
  Accessibility,
  GraduationCap,
  MessageSquare,
  Heart,
  ArrowLeft,
  ExternalLink,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { useGame } from "@/context/GameContext"

const learnTopics = [
  {
    icon: HandMetal,
    title: "Libras",
    description:
      "Libras é a Língua Brasileira de Sinais e possui estrutura linguística própria. Ela não é simplesmente o português feito com as mãos — é uma língua completa, com gramática, sintaxe e vocabulário próprios, estruturada no espaço visual-espacial.",
    points: [
      "Reconhecida oficialmente pela Lei nº 10.436/2002",
      "Possui gramática e estrutura próprias, independentes do português",
      "É a língua natural das pessoas surdas no Brasil",
    ],
  },
  {
    icon: Users,
    title: "Cultura Surda",
    description:
      "A cultura surda é um conjunto de valores, práticas, arte, história e identidade compartilhados pela comunidade surda. A língua de sinais é o elemento central que une essa comunidade.",
    points: [
      "Inclui literatura, teatro, humor e arte em língua de sinais",
      "Tem uma visão de mundo própria, baseada na experiência visual",
      "Não se limita a pessoas que nasceram surdas — acolhe qualquer pessoa que se identifique",
    ],
  },
  {
    icon: Accessibility,
    title: "Acessibilidade",
    description:
      "Acessibilidade comunicacional é a garantia de que pessoas surdas possam acessar informações, serviços e espaços sociais de forma equivalente aos ouvintes.",
    points: [
      "Intérpretes de Libras em escolas, hospitais e serviços públicos",
      "Legendas em vídeos, programas e eventos",
      "Materiais didáticos e digitais em formatos acessíveis",
    ],
  },
  {
    icon: GraduationCap,
    title: "Educação Inclusiva",
    description:
      "A educação bilíngue — com Libras como primeira língua e português escrito como segunda — é considerada a abordagem mais adequada para crianças surdas, respeitando sua identidade linguística.",
    points: [
      "Libras como primeira língua de aprendizado",
      "Português escrito ensinado como segunda língua",
      "Intérpretes de Libras em sala de aula e formação de professores",
    ],
  },
  {
    icon: MessageSquare,
    title: "Barreiras de Comunicação",
    description:
      "Barreiras de comunicação são obstáculos externos que impedem pessoas surdas de acessar informações e participar plenamente da sociedade. Não são características da pessoa — são falhas do ambiente.",
    points: [
      "Ausência de intérpretes e legendas",
      "Profissionais despreparados para atender surdos",
      "Falta de materiais em formatos acessíveis",
    ],
  },
  {
    icon: Heart,
    title: "Como agir com respeito",
    description:
      "Pequenas atitudes fazem grande diferença na inclusão de pessoas surdas no dia a dia.",
    points: [
      "Dirija-se diretamente à pessoa surda, não ao acompanhante",
      "Use comunicação escrita ou gestos quando não souber Libras",
      "Mantenha contato visual e não fale de forma exagerada",
      "Aprenda alguns sinais básicos — demonstra respeito e facilita o contato",
    ],
  },
]

export function LearnMoreScreen() {
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
            Aprenda mais
          </h1>
          <p className="text-base text-muted-foreground leading-relaxed">
            Informações curtas sobre surdez, Libras, cultura surda e como
            contribuir para uma sociedade mais inclusiva.
          </p>
        </div>

        <div className="space-y-4">
          {learnTopics.map((topic) => {
            const Icon = topic.icon
            return (
              <Card key={topic.title}>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Icon className="size-5 text-primary" aria-hidden="true" />
                    {topic.title}
                  </CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    {topic.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {topic.points.map((point, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span
                          className="flex size-1.5 shrink-0 rounded-full bg-primary mt-1.5"
                          aria-hidden="true"
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <Card className="bg-secondary">
          <CardContent className="pt-6 space-y-3">
            <h2 className="text-base font-semibold flex items-center gap-2">
              <ExternalLink className="size-4" aria-hidden="true" />
              Saiba mais
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Para aprofundar seus conhecimentos, consulte as fontes utilizadas
              nesta experiência educativa.
            </p>
            <Button
              variant="outline"
              size="sm"
              className="gap-1.5"
              onClick={() => goToScreen("sources")}
            >
              Ver fontes e referências
              <ExternalLink className="size-3.5" aria-hidden="true" />
            </Button>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
