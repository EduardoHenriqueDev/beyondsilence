export interface QuizOption {
  id: "A" | "B" | "C" | "D"
  text: string
}

export interface QuizQuestion {
  id: string
  type: "quiz" | "reflection"
  text: string
  options: QuizOption[]
  correctOption: "A" | "B" | "C" | "D"
  explanation: string
  afterChapterId?: string
}

export interface ReflectionQuestion {
  id: string
  type: "reflection"
  text: string
  scenario: string
  options: { id: string; text: string }[]
  message: string
  afterChapterId?: string
}

export const questions: QuizQuestion[] = [
  {
    id: "q1",
    type: "quiz",
    text: "Qual é a principal diferença entre a Libras e o português sinalizado?",
    afterChapterId: "chapter-1",
    options: [
      { id: "A", text: "A Libras é apenas o português traduzido para gestos." },
      {
        id: "B",
        text: "A Libras é uma língua completa com gramática e estrutura visual-espacial próprias.",
      },
      { id: "C", text: "A Libras é utilizada apenas em escolas especiais." },
      {
        id: "D",
        text: "A Libras e o português sinalizado são a mesma coisa.",
      },
    ],
    correctOption: "B",
    explanation:
      "A Libras é reconhecida como língua completa e independente, com gramática própria, estrutura visual-espacial e capacidade de expressar qualquer ideia ou sentimento. Ela não é uma versão gestual do português — é uma língua com identidade própria, desenvolvida pela comunidade surda brasileira ao longo de décadas.",
  },
  {
    id: "q2",
    type: "quiz",
    text: "Quando a Libras foi reconhecida oficialmente como língua no Brasil?",
    afterChapterId: "chapter-2",
    options: [
      { id: "A", text: "Em 1988, com a Constituição Federal." },
      { id: "B", text: "Em 1990, com o Estatuto da Criança e do Adolescente." },
      { id: "C", text: "Em 2002, com a Lei nº 10.436." },
      { id: "D", text: "Em 2015, com a Lei Brasileira de Inclusão." },
    ],
    correctOption: "C",
    explanation:
      "A Libras foi reconhecida como meio legal de comunicação e expressão pela Lei nº 10.436, de 24 de abril de 2002. Em 2005, o Decreto nº 5.626 regulamentou essa lei, determinando sua inclusão no sistema educacional e em serviços públicos. Esse reconhecimento foi fruto de décadas de luta da comunidade surda brasileira.",
  },
  {
    id: "q3",
    type: "quiz",
    text: "O método 'oralismo', mencionado na história de Gildete, prioriza qual tipo de comunicação para pessoas surdas?",
    afterChapterId: "chapter-3",
    options: [
      {
        id: "A",
        text: "O aprendizado da língua de sinais como primeira língua.",
      },
      {
        id: "B",
        text: "O aprendizado da fala oral, em detrimento da língua de sinais.",
      },
      {
        id: "C",
        text: "O uso de tecnologias de comunicação alternativa.",
      },
      { id: "D", text: "O aprendizado da linguagem escrita exclusivamente." },
    ],
    correctOption: "B",
    explanation:
      "O oralismo é uma abordagem pedagógica que priorizava fazer pessoas surdas aprenderem a falar e a ler lábios, em vez de usar língua de sinais. Por muito tempo foi o método dominante nas escolas, mesmo sendo criticado por especialistas e pela própria comunidade surda, que vê a língua de sinais como mais natural e acessível. Hoje, a abordagem bilíngue (Libras + português) é considerada mais adequada.",
  },
  {
    id: "q4",
    type: "quiz",
    text: "Ao atender uma pessoa surda, qual atitude é mais respeitosa e acessível?",
    afterChapterId: "chapter-4",
    options: [
      {
        id: "A",
        text: "Falar com o acompanhante da pessoa surda, pois é mais prático.",
      },
      {
        id: "B",
        text: "Falar bem devagar e exageradamente para facilitar a leitura labial.",
      },
      {
        id: "C",
        text: "Dirigir-se diretamente à pessoa surda, usar comunicação escrita ou intérprete, e manter contato visual.",
      },
      {
        id: "D",
        text: "Evitar qualquer interação para não causar desconforto.",
      },
    ],
    correctOption: "C",
    explanation:
      "Pessoas surdas têm plena autonomia e devem ser tratadas diretamente, não por meio de terceiros. Manter contato visual, usar comunicação escrita quando necessário e solicitar um intérprete de Libras quando disponível são atitudes respeitosas e inclusivas. Falar de forma exagerada distorce a leitura labial e pode ser visto como condescendente.",
  },
  {
    id: "q5",
    type: "quiz",
    text: "O que é 'barreira de comunicação' no contexto da inclusão de pessoas surdas?",
    afterChapterId: "chapter-4",
    options: [
      {
        id: "A",
        text: "A dificuldade física de ouvir causada pela surdez.",
      },
      {
        id: "B",
        text: "Qualquer obstáculo que impeça uma pessoa surda de acessar informações, serviços ou participar de atividades sociais por falta de acessibilidade comunicacional.",
      },
      {
        id: "C",
        text: "A falta de vontade da pessoa surda de aprender a falar.",
      },
      {
        id: "D",
        text: "A distância geográfica entre escolas especiais e residências.",
      },
    ],
    correctOption: "B",
    explanation:
      "Barreiras de comunicação são obstáculos externos — não características da pessoa. Incluem a ausência de intérpretes de Libras, de legendas em vídeos, de profissionais capacitados para atender surdos, e de materiais em formatos acessíveis. Essas barreiras podem excluir pessoas surdas de serviços de saúde, educação, trabalho e vida social.",
  },
  {
    id: "q6",
    type: "quiz",
    text: "Por que a falta de um intérprete de Libras em uma consulta médica é considerada um problema sério?",
    afterChapterId: "chapter-5",
    options: [
      {
        id: "A",
        text: "Apenas porque dificulta o trabalho do médico.",
      },
      {
        id: "B",
        text: "Porque pode levar a diagnósticos errados, falta de consentimento informado e comprometimento do direito à saúde da pessoa surda.",
      },
      {
        id: "C",
        text: "Porque a consulta fica mais longa.",
      },
      {
        id: "D",
        text: "Porque é obrigatório ter intérprete em todos os ambientes.",
      },
    ],
    correctOption: "B",
    explanation:
      "O acesso à saúde depende de comunicação clara. Sem um intérprete, uma pessoa surda pode não entender o diagnóstico, o tratamento ou os riscos de um procedimento. Isso viola seu direito ao consentimento informado — pilar fundamental da ética médica. A Lei Brasileira de Inclusão (2015) garante às pessoas com deficiência o direito a atendimento com acessibilidade comunicacional.",
  },
  {
    id: "q7",
    type: "quiz",
    text: "Qual é a abordagem educacional considerada mais adequada para crianças surdas atualmente?",
    afterChapterId: "chapter-5",
    options: [
      {
        id: "A",
        text: "Ensino exclusivamente oral, focado na aprendizagem da fala.",
      },
      {
        id: "B",
        text: "Isolamento em escolas especiais sem contato com ouvintes.",
      },
      {
        id: "C",
        text: "Educação bilíngue, com Libras como primeira língua e português escrito como segunda língua.",
      },
      {
        id: "D",
        text: "Aprendizado apenas por meio de tecnologia de texto.",
      },
    ],
    correctOption: "C",
    explanation:
      "A educação bilíngue é reconhecida por especialistas, pela comunidade surda e pela legislação brasileira como a abordagem mais adequada. Nela, a Libras é a primeira língua da criança surda — a língua natural, visual-espacial, acessível desde cedo — e o português escrito é ensinado como segunda língua. Isso respeita a identidade linguística do surdo e garante melhor desenvolvimento cognitivo e social.",
  },
  {
    id: "q8",
    type: "quiz",
    text: "Quando dizemos que a surdez não é a principal causa das dificuldades enfrentadas por pessoas surdas, o que isso significa?",
    afterChapterId: "chapter-final",
    options: [
      {
        id: "A",
        text: "Significa que pessoas surdas não têm nenhuma dificuldade.",
      },
      {
        id: "B",
        text: "Significa que as maiores dificuldades vêm das barreiras sociais, comunicacionais e de acessibilidade criadas pela sociedade, não da condição em si.",
      },
      {
        id: "C",
        text: "Significa que a surdez pode ser completamente curada com tecnologia.",
      },
      {
        id: "D",
        text: "Significa que pessoas surdas são mais capazes do que ouvintes.",
      },
    ],
    correctOption: "B",
    explanation:
      "Esse é o conceito central do modelo social da deficiência: a deficiência não está na pessoa, mas na relação entre a pessoa e uma sociedade que não foi construída para incluí-la. Uma pessoa surda em um ambiente totalmente acessível — com intérpretes, legendas, profissionais capacitados e comunidade que valoriza a Libras — enfrenta muito menos obstáculos. As barreiras são construídas socialmente e podem ser desconstruídas.",
  },
  {
    id: "q9",
    type: "quiz",
    text: "Qual das seguintes afirmações sobre a cultura surda está CORRETA?",
    afterChapterId: "chapter-final",
    options: [
      {
        id: "A",
        text: "Cultura surda é apenas um conjunto de sinais de mãos.",
      },
      {
        id: "B",
        text: "Não existe uma cultura surda — surdos apenas vivem sem som.",
      },
      {
        id: "C",
        text: "A cultura surda é um conjunto de valores, práticas, arte, história e identidade compartilhados pela comunidade surda, tendo a língua de sinais como elemento central.",
      },
      {
        id: "D",
        text: "Cultura surda é exclusiva de pessoas que nasceram surdas.",
      },
    ],
    correctOption: "C",
    explanation:
      "A cultura surda é rica e diversa. Inclui literatura em língua de sinais, teatro, humor, história coletiva, valores e uma visão de mundo própria. A língua de sinais é o elemento central que une essa comunidade. Qualquer pessoa que identifique com esses valores e língua — seja surda de nascença ou não — pode fazer parte da comunidade surda.",
  },
  {
    id: "q10",
    type: "quiz",
    text: "O que você pode fazer no dia a dia para contribuir para um ambiente mais inclusivo para pessoas surdas?",
    afterChapterId: "chapter-final",
    options: [
      {
        id: "A",
        text: "Evitar situações em que precise se comunicar com pessoas surdas.",
      },
      {
        id: "B",
        text: "Aprender alguns sinais básicos em Libras, defender legendas em eventos e apoiar políticas de acessibilidade.",
      },
      {
        id: "C",
        text: "Falar mais devagar e em voz mais alta para facilitar a comunicação.",
      },
      {
        id: "D",
        text: "Contratar sempre um intérprete profissional antes de qualquer conversa.",
      },
    ],
    correctOption: "B",
    explanation:
      "Pequenas ações têm grande impacto. Aprender sinais básicos em Libras demonstra respeito e facilita o contato. Defender legendas em vídeos, eventos e serviços públicos amplia o acesso à informação. Apoiar políticas de inclusão e tratar pessoas surdas com respeito e diretamente — sem intermediários desnecessários — contribui para uma sociedade mais justa. Você não precisa ser intérprete para fazer a diferença.",
  },
]

export const reflectionQuestions: ReflectionQuestion[] = [
  {
    id: "r1",
    type: "reflection",
    text: "Imagine que você chega a um ambiente onde ninguém consegue se comunicar com você da maneira que você precisa.",
    scenario:
      "Você está em uma reunião importante. Todos ao seu redor estão conversando, rindo e tomando decisões — mas ninguém consegue transmitir para você o que está sendo dito. Você tenta pedir informações, mas as pessoas desviam o olhar ou apontam para um papel com palavras que não explicam o contexto.",
    options: [
      { id: "a", text: "Frustrado(a) e invisível" },
      { id: "b", text: "Ansioso(a) e excluído(a)" },
      { id: "c", text: "Indiferente" },
      { id: "d", text: "Curioso(a) e desafiado(a)" },
    ],
    message:
      "Não há resposta certa ou errada aqui. O importante é perceber que essa é a realidade cotidiana de muitas pessoas surdas em ambientes sem acessibilidade. A exclusão não precisa ser intencional para ser real e dolorosa.",
    afterChapterId: "chapter-2",
  },
  {
    id: "r2",
    type: "reflection",
    text: "Reflita sobre a seguinte situação.",
    scenario:
      "Uma pessoa surda chega ao banco onde você trabalha. Não há intérprete disponível. Você não sabe Libras. A pessoa tenta se comunicar por escrito, mas a fila está grande e seus colegas estão impacientes. O que passa pela sua cabeça?",
    options: [
      { id: "a", text: "Sinto que quero ajudar, mas não sei como" },
      { id: "b", text: "Percebo que o problema é estrutural, não da pessoa" },
      { id: "c", text: "Sinto que a situação está além da minha responsabilidade" },
      { id: "d", text: "Penso em alternativas criativas para me comunicar" },
    ],
    message:
      "Essa situação acontece todos os dias em bancos, hospitais, repartições públicas e empresas por todo o Brasil. A responsabilidade pela acessibilidade não é individual — é institucional. Mas cada pessoa pode contribuir com empatia, criatividade e advocacia por mudanças.",
    afterChapterId: "chapter-4",
  },
]
