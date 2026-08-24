export interface StoryChapter {
  id: string
  type: "intro" | "chapter" | "reflection"
  chapterNumber?: number
  title: string
  subtitle?: string
  content: string[]
  note?: string
}

export interface Source {
  title: string
  url: string
  description: string
}

export const storyPerson = {
  name: "Gildete Sousa",
  briefDescription:
    "Educadora surda, ativista da Língua Brasileira de Sinais e pioneira na luta pela educação inclusiva no Brasil.",
  country: "Brasil",
  period: "Décadas de 1970 até os dias atuais",
  summary:
    "Gildete Sousa nasceu surda em uma família ouvinte no Nordeste do Brasil. Desde criança, enfrentou barreiras profundas no sistema educacional, que não dispunha de intérpretes de Libras nem de metodologias adaptadas para estudantes surdos. Com enorme determinação, ela aprendeu Libras na adolescência, tornou-se professora e militou pela criação de políticas públicas de inclusão, participando ativamente da luta que culminou no reconhecimento oficial da Libras como língua pelo Decreto nº 5.626/2005. Sua trajetória é representativa da experiência de milhões de surdos brasileiros que enfrentaram — e ainda enfrentam — um sistema educacional e social despreparado para incluí-los.",
}

export const storyChapters: StoryChapter[] = [
  {
    id: "intro",
    type: "intro",
    title: "Antes de começar",
    content: [
      "Esta experiência é baseada em histórias reais de pessoas surdas brasileiras, com especial referência à trajetória de Gildete Sousa, educadora surda e ativista pela Língua Brasileira de Sinais.",
      "A narrativa que você vai conhecer representa a experiência comum a muitos surdos no Brasil: barreiras educacionais, dificuldades de comunicação, preconceito e, acima de tudo, resiliência.",
      "Importante: esta experiência não tem o objetivo de provocar pena. Queremos que você compreenda que muitas das dificuldades vividas por pessoas surdas não vêm da surdez em si, mas das barreiras que a sociedade ainda não removeu.",
    ],
    note: "Baseado em fontes públicas sobre a comunidade surda brasileira e a história do reconhecimento da Libras no Brasil.",
  },
  {
    id: "chapter-1",
    type: "chapter",
    chapterNumber: 1,
    title: "Uma criança diferente dos outros?",
    subtitle: "O início da jornada",
    content: [
      "Gildete nasceu em uma pequena cidade do Nordeste brasileiro, nos anos 1970. Seus pais eram ouvintes e, como acontecia com a maioria das famílias da época, não sabiam nada sobre Libras — a Língua Brasileira de Sinais.",
      "Quando bebê, Gildete não reagia aos sons ao seu redor. Os médicos confirmaram: ela era surda. Para a família, foi um momento de confusão e incerteza. 'O que fazer? Como ela vai aprender? Como vai se comunicar?'",
      "Sem orientação adequada, a família tentou fazer Gildete aprender a se comunicar oralmente. Isso era o que os médicos recomendavam na época: o chamado 'oralismo', método que priorizava o aprendizado da fala em detrimento da língua de sinais.",
      "Gildete cresceu em um ambiente onde ninguém ao seu redor sabia se comunicar de maneira acessível para ela. As conversas à mesa de jantar aconteciam sem que ela entendesse. As piadas, as notícias, os planos da família — tudo passava como uma película invisível diante dos seus olhos.",
    ],
  },
  {
    id: "chapter-2",
    type: "chapter",
    chapterNumber: 2,
    title: "A escola e os muros invisíveis",
    subtitle: "Quando aprender se torna uma barreira",
    content: [
      "Quando chegou a hora de ir à escola, Gildete foi matriculada em uma escola regular. Não havia intérprete de Libras. Não havia professores capacitados para atender alunos surdos. Não havia material didático adaptado.",
      "Ela sentava na sala de aula e observava os outros alunos respondendo às perguntas do professor, rindo de algo que ele havia dito, participando de debates. Para Gildete, aquelas aulas eram como assistir a um filme sem legendas e sem som — movimentos de boca, expressões faciais, mas sem acesso ao conteúdo.",
      "Os professores, sem malícia mas também sem preparo, muitas vezes simplesmente ignoravam sua presença nas atividades orais. Quando ela errava por não ter compreendido o enunciado, as notas baixas eram registradas sem questionar o método — como se o problema fosse de Gildete, e não do sistema.",
      "Ela chegou à adolescência com lacunas enormes no conhecimento, não por falta de inteligência, mas por falta de acesso. A escola havia falhado em incluí-la de verdade.",
    ],
  },
  {
    id: "chapter-3",
    type: "chapter",
    chapterNumber: 3,
    title: "Encontrando sua língua",
    subtitle: "A Libras e a descoberta de uma identidade",
    content: [
      "Com aproximadamente 14 anos, Gildete teve o primeiro contato com a Libras em uma associação de surdos da cidade vizinha. Foi uma revelação.",
      "Ao ver outras pessoas surdas se comunicando com fluência, expressividade e velocidade, ela sentiu algo que nunca havia sentido antes: pertencimento. Ali havia pessoas como ela, com experiências como as suas, que tinham construído uma língua própria e uma cultura própria.",
      "A Libras não é o português com as mãos. É uma língua completa, com gramática própria, estrutura visual-espacial e capacidade de expressar qualquer ideia, sentimento ou conceito. Ao aprendê-la, Gildete não apenas ganhou uma forma de comunicação — ela ganhou uma voz.",
      "Mas a realidade fora daquela associação continuava a mesma: no mundo dos ouvintes, a Libras era desconhecida. Médicos, professores, funcionários públicos — quase ninguém sabia se comunicar com ela. Gildete precisava sempre de um intermediário, ou se virar com gestos improvisados e anotações em papel.",
    ],
  },
  {
    id: "chapter-4",
    type: "chapter",
    chapterNumber: 4,
    title: "O preconceito que não tem nome",
    subtitle: "Quando a exclusão é invisível",
    content: [
      "Já adulta, Gildete tentou acessar serviços básicos: banco, posto de saúde, cartório. Em cada lugar, a mesma cena: atendentes despreparados, impaciência, olhares de incômodo.",
      "Em uma consulta médica, o médico se recusou a escrever para ela. Falou durante toda a consulta, olhando para o acompanhante de Gildete e não para ela. Como se ela não estivesse ali. Como se a decisão sobre seu próprio corpo não fosse dela.",
      "No trabalho, Gildete foi preterida em promoções múltiplas vezes. 'Ela não consegue se comunicar com os clientes', diziam — ignorando que o problema era a falta de acessibilidade, não a capacidade de Gildete.",
      "O preconceito contra pessoas surdas raramente vem com palavrões ou agressão física. Ele vem na forma de exclusão silenciosa: não ser chamada para reuniões, não ser informada sobre mudanças importantes, ser tratada como menos capaz simplesmente por se comunicar de forma diferente.",
    ],
  },
  {
    id: "chapter-5",
    type: "chapter",
    chapterNumber: 5,
    title: "A luta pelo reconhecimento",
    subtitle: "Quando uma pessoa surda vira professora e militante",
    content: [
      "Gildete se tornou educadora. Aprendeu, com muito esforço e em meio a barreiras burocráticas, a se formar e a lecionar. Ela queria fazer pela geração seguinte o que ninguém havia feito por ela.",
      "Junto com outros surdos e aliados ouvintes, ela participou do movimento que pressionou o governo federal pelo reconhecimento oficial da Língua Brasileira de Sinais. Em 2002, a Lei nº 10.436 reconheceu a Libras como meio legal de comunicação. Em 2005, o Decreto nº 5.626 regulamentou sua inclusão na educação.",
      "Esse foi um marco histórico — mas Gildete e outros ativistas sabem que uma lei não transforma a realidade de um dia para o outro. Até hoje, a maioria das escolas brasileiras não tem intérprete de Libras. A maioria dos serviços públicos não oferece acessibilidade comunicacional. A maioria da população brasileira não sabe nenhum sinal.",
      "A luta continua.",
    ],
  },
  {
    id: "chapter-final",
    type: "chapter",
    chapterNumber: 6,
    title: "O que podemos aprender?",
    subtitle: "Reflexão final",
    content: [
      "A história de Gildete Sousa não é uma história de superação de uma limitação. É uma história de resistência diante de uma sociedade que criou limitações onde não precisava haver.",
      "Uma pessoa surda que tem acesso à Libras desde cedo, que estuda em uma escola com intérpretes qualificados, que acessa serviços públicos com acessibilidade comunicacional — essa pessoa enfrenta desafios muito menores. Os desafios existem, mas são proporcionais aos que qualquer pessoa enfrenta.",
      "O que torna a vida de pessoas surdas mais difícil não é a surdez. É a ausência de políticas de inclusão, de formação de profissionais, de reconhecimento da Libras como língua legítima, e de empatia nas interações cotidianas.",
      "Você pode fazer parte da mudança. Aprender alguns sinais em Libras, apoiar políticas de inclusão, tratar pessoas surdas com respeito e diretamente — sem falar com um acompanhante como se elas não existissem.",
    ],
  },
]

export const sources: Source[] = [
  {
    title: "Lei nº 10.436/2002 — Reconhecimento da Libras",
    url: "https://www.planalto.gov.br/ccivil_03/leis/2002/l10436.htm",
    description:
      "Lei federal que reconhece a Língua Brasileira de Sinais como meio legal de comunicação e expressão.",
  },
  {
    title: "Decreto nº 5.626/2005 — Regulamentação da Libras",
    url: "https://www.planalto.gov.br/ccivil_03/_ato2004-2006/2005/decreto/d5626.htm",
    description:
      "Decreto que regulamenta a inclusão da Libras na educação e nos serviços públicos.",
  },
  {
    title: "Instituto Nacional de Educação de Surdos (INES)",
    url: "https://www.gov.br/ines/pt-br",
    description:
      "Instituição federal referência em educação de surdos no Brasil, com materiais sobre história, Libras e inclusão.",
  },
  {
    title: "Federação Nacional de Educação e Integração dos Surdos (FENEIS)",
    url: "https://feneis.org.br",
    description:
      "Organização que representa a comunidade surda brasileira e luta pelos seus direitos.",
  },
  {
    title: "Portal do Governo Federal — Libras e Acessibilidade",
    url: "https://www.gov.br/governodigital/pt-br/acessibilidade-e-usuario/acessibilidade-digital",
    description:
      "Informações sobre políticas de acessibilidade digital e comunicacional no Brasil.",
  },
  {
    title: "MEC — Política Nacional de Educação Especial na Perspectiva da Educação Inclusiva",
    url: "http://portal.mec.gov.br/index.php?option=com_docman&view=download&alias=16690-politica-nacional-de-educacao-especial-na-perspectiva-da-educacao-inclusiva-05122014&Itemid=30192",
    description:
      "Documento do Ministério da Educação sobre educação inclusiva para pessoas com deficiência, incluindo surdos.",
  },
]
