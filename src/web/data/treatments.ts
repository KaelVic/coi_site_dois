export interface Benefit {
  icon: string;
  title: string;
  description: string;
}

export interface Step {
  number: string;
  title: string;
  description: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Treatment {
  slug: string;
  name: string;
  tagline: string;
  heroSubtitle: string;
  heroImage: string;
  overviewTitle: string;
  overviewParagraphs: string[];
  overviewPoints: string[];
  benefits: Benefit[];
  processTitle: string;
  steps: Step[];
  faqs: FAQ[];
  ctaText: string;
}

export const treatments: Treatment[] = [
  {
    slug: "cirurgia",
    name: "Cirurgia",
    tagline: "Intervenção segura, recuperação orientada.",
    heroSubtitle: "Procedimentos cirúrgicos realizados com precisão técnica, planejamento individualizado e acompanhamento completo.",
    heroImage: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=1400&q=80&auto=format&fit=crop",
    overviewTitle: "O que é a cirurgia odontológica?",
    overviewParagraphs: [
      "A cirurgia odontológica abrange uma série de procedimentos que demandam intervenção cirúrgica na cavidade bucal. Realizada por especialistas com formação específica, é indicada quando os tratamentos convencionais não são suficientes para resolver o problema.",
      "No COI, cada procedimento cirúrgico é precedido por uma avaliação clínica detalhada, exames de imagem e planejamento individualizado para garantir segurança e eficácia.",
    ],
    overviewPoints: [
      "Extrações simples e complexas",
      "Remoção de dentes inclusos (sisos)",
      "Cirurgias pré-protéticas e pré-implantes",
      "Biópsias e remoção de lesões",
      "Regeneração óssea guiada",
    ],
    benefits: [
      {
        icon: "◇",
        title: "Planejamento preciso",
        description: "Cada cirurgia é planejada com base em exames detalhados, minimizando riscos e otimizando o resultado.",
      },
      {
        icon: "◇",
        title: "Segurança clínica",
        description: "Protocolos de biossegurança rigorosos e equipamentos de última geração para procedimentos seguros.",
      },
      {
        icon: "◇",
        title: "Recuperação orientada",
        description: "Instruções pós-operatórias claras e acompanhamento ativo durante todo o período de cicatrização.",
      },
      {
        icon: "◇",
        title: "Anestesia eficiente",
        description: "Técnicas anestésicas modernas garantem conforto durante o procedimento e controle da dor no pós-operatório.",
      },
    ],
    processTitle: "Como funciona o procedimento",
    steps: [
      { number: "01", title: "Avaliação inicial", description: "Exame clínico completo, tomografia ou radiografia e análise do histórico de saúde." },
      { number: "02", title: "Planejamento cirúrgico", description: "Definição da técnica mais adequada, orientações pré-operatórias e agendamento." },
      { number: "03", title: "Procedimento", description: "Realização da cirurgia com anestesia local, técnica minimamente invasiva sempre que possível." },
      { number: "04", title: "Acompanhamento pós-operatório", description: "Revisão em 7 dias, orientação sobre medicação e monitoramento da cicatrização." },
    ],
    faqs: [
      { question: "A cirurgia dói?", answer: "O procedimento é realizado sob anestesia local, portanto você não sentirá dor durante a cirurgia. No pós-operatório, desconfortos são normais e controlados com medicação prescrita pelo cirurgião." },
      { question: "Quanto tempo dura a recuperação?", answer: "Depende do procedimento. Extrações simples têm recuperação de 2 a 3 dias. Cirurgias mais complexas podem levar de 7 a 14 dias para recuperação completa." },
      { question: "Preciso ficar de repouso após a cirurgia?", answer: "Recomendamos repouso relativo nas primeiras 24 horas, evitando esforços físicos intensos. A maioria dos pacientes retorna às atividades normais no dia seguinte." },
      { question: "Existe alguma contraindicação?", answer: "Condições como diabetes não controlada, uso de anticoagulantes ou problemas cardíacos exigem avaliação médica prévia. Avaliamos cada caso individualmente durante a consulta." },
    ],
    ctaText: "Agende sua avaliação cirúrgica",
  },

  {
    slug: "clinico-geral",
    name: "Clínico Geral",
    tagline: "A base de uma saúde bucal duradoura.",
    heroSubtitle: "Cuidado preventivo e restaurador completo para manter sua saúde bucal em equilíbrio.",
    heroImage: "https://images.unsplash.com/photo-1588776814546-1ffbb64f04c3?w=1400&q=80&auto=format&fit=crop",
    overviewTitle: "O que faz o clínico geral?",
    overviewParagraphs: [
      "O clínico geral é o ponto de entrada para um atendimento odontológico completo. É o profissional responsável por diagnosticar, prevenir e tratar as condições mais comuns da saúde bucal, além de encaminhar para especialistas quando necessário.",
      "No COI, o clínico geral atua de forma integrada com toda a equipe, garantindo que cada paciente receba um plano de tratamento coerente, preventivo e acessível.",
    ],
    overviewPoints: [
      "Consultas de rotina e prevenção",
      "Restaurações (obturações)",
      "Profilaxia e limpeza profissional",
      "Diagnóstico precoce de cáries e doenças",
      "Tratamento de sensibilidade dentária",
      "Aplicação de flúor e selantes",
    ],
    benefits: [
      {
        icon: "◇",
        title: "Prevenção eficaz",
        description: "Consultas regulares detectam problemas cedo, evitando tratamentos mais complexos e custosos.",
      },
      {
        icon: "◇",
        title: "Restaurações duráveis",
        description: "Materiais modernos e técnicas adesivas garantem restaurações funcionais e esteticamente integradas.",
      },
      {
        icon: "◇",
        title: "Atendimento integral",
        description: "Cuidamos desde a saúde dos tecidos até a função mastigatória, com visão sistêmica do paciente.",
      },
      {
        icon: "◇",
        title: "Acompanhamento contínuo",
        description: "Histórico clínico mantido para monitorar a evolução da saúde bucal ao longo do tempo.",
      },
    ],
    processTitle: "Como é a consulta",
    steps: [
      { number: "01", title: "Anamnese", description: "Coleta de histórico médico e odontológico, queixas e objetivos do paciente." },
      { number: "02", title: "Exame clínico e de imagem", description: "Inspeção visual, sondagem periodontal e radiografias quando necessárias." },
      { number: "03", title: "Diagnóstico e plano", description: "Identificação de todas as necessidades e elaboração de plano de tratamento priorizado." },
      { number: "04", title: "Tratamento e manutenção", description: "Execução dos procedimentos indicados e agendamento de retornos preventivos." },
    ],
    faqs: [
      { question: "De quanto em quanto tempo devo ir ao dentista?", answer: "Para pacientes sem histórico de doenças bucais ativas, recomendamos consultas a cada 6 meses. Pacientes com maior risco podem necessitar de visitas mais frequentes." },
      { question: "A limpeza profissional machuca?", answer: "A profilaxia é um procedimento confortável. Em casos de sensibilidade aumentada, podemos aplicar anestesia tópica para maior conforto." },
      { question: "Obturações antigas precisam ser trocadas?", answer: "Restaurações antigas devem ser avaliadas periodicamente. Sinais de infiltração, fratura ou desgaste indicam necessidade de substituição." },
      { question: "Criança também pode consultar no COI?", answer: "Sim. Atendemos pacientes de todas as idades e temos atenção especial ao acolhimento de crianças para que a experiência seja positiva desde o início." },
    ],
    ctaText: "Agendar consulta com clínico geral",
  },

  {
    slug: "clareamento-dental",
    name: "Clareamento Dental",
    tagline: "Brilho natural. Resultado seguro.",
    heroSubtitle: "Técnica controlada para um sorriso mais claro, sem comprometer a saúde dos seus dentes.",
    heroImage: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1400&q=80&auto=format&fit=crop",
    overviewTitle: "O que é o clareamento dental?",
    overviewParagraphs: [
      "O clareamento dental é um procedimento estético que remove pigmentações e manchas dos dentes, resultando em um sorriso visivelmente mais claro. Pode ser realizado no consultório (clareamento a laser ou LED) ou em casa com moldeiras personalizadas.",
      "No COI, a indicação é feita após avaliação criteriosa das causas das manchas e das condições de saúde bucal, garantindo que o tratamento seja eficaz e seguro.",
    ],
    overviewPoints: [
      "Clareamento de consultório (sessão única ou múltiplas)",
      "Clareamento caseiro com moldeiras individuais",
      "Tratamento combinado (consultório + casa)",
      "Adequado para manchas externas por café, chá, vinho",
      "Não indicado para dentes com restaurações anteriores",
    ],
    benefits: [
      {
        icon: "◇",
        title: "Resultado visível",
        description: "Clareamento de 2 a 8 tons dependendo da técnica utilizada e das condições iniciais dos dentes.",
      },
      {
        icon: "◇",
        title: "Segurança supervisionada",
        description: "Concentrações de peróxido controladas e aplicação por profissional qualificado protegem esmalte e gengiva.",
      },
      {
        icon: "◇",
        title: "Procedimento não invasivo",
        description: "Sem desgaste de estrutura dentária. O tratamento age na superfície e no interior do esmalte.",
      },
      {
        icon: "◇",
        title: "Durabilidade real",
        description: "Com manutenção adequada, os resultados se mantêm por 1 a 3 anos, dependendo dos hábitos do paciente.",
      },
    ],
    processTitle: "Etapas do tratamento",
    steps: [
      { number: "01", title: "Avaliação e limpeza", description: "Análise da coloração atual, saúde gengival e profilaxia para otimizar o resultado." },
      { number: "02", title: "Proteção gengival", description: "Aplicação de barreira de proteção nas gengivas antes do gel clareador." },
      { number: "03", title: "Aplicação do agente clareador", description: "Aplicação do gel de peróxido e ativação por luz LED quando indicada." },
      { number: "04", title: "Manutenção e retoque", description: "Orientações sobre alimentação, higiene e possibilidade de retoque domiciliar para prolongar o resultado." },
    ],
    faqs: [
      { question: "O clareamento sensibiliza os dentes?", answer: "Sensibilidade transitória é comum durante e após o tratamento. Ela desaparece em 24-72 horas. Usamos dessensibilizantes para minimizar o desconforto." },
      { question: "Clareamento funciona em restaurações e facetas?", answer: "Não. O clareamento age somente na estrutura natural do dente. Restaurações de resina ou porcelana não clareiam e podem precisar de substituição após o tratamento." },
      { question: "Quantas sessões são necessárias?", answer: "O clareamento de consultório pode ser feito em 1 a 3 sessões. O caseiro leva de 2 a 4 semanas de uso noturno. O resultado varia conforme o grau de manchamento." },
      { question: "Existe contraindicação?", answer: "Gestantes, pacientes com cáries ativas, doença periodontal não tratada ou hipersensibilidade severa não devem realizar o procedimento sem avaliação prévia." },
    ],
    ctaText: "Agendar avaliação de clareamento",
  },

  {
    slug: "endodontia",
    name: "Endodontia",
    tagline: "Preservar o dente natural é sempre a primeira escolha.",
    heroSubtitle: "O tratamento de canal, quando indicado, elimina a dor e salva seu dente com precisão e conforto.",
    heroImage: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=1400&q=80&auto=format&fit=crop",
    overviewTitle: "O que é a endodontia?",
    overviewParagraphs: [
      "A endodontia é a especialidade odontológica que trata da polpa dentária — o tecido interno do dente composto por nervos e vasos sanguíneos. O tratamento de canal (ou tratamento endodôntico) é indicado quando essa polpa está inflamada ou infectada, seja por cárie profunda, fratura ou trauma.",
      "Com tecnologia moderna como localizadores apicais eletrônicos e instrumentação rotatória, os tratamentos endodônticos atuais são seguros, previsíveis e, na maioria dos casos, realizados em uma única sessão.",
    ],
    overviewPoints: [
      "Tratamento de canal em dentes com polpa inflamada ou necrótica",
      "Retratamento endodôntico",
      "Cirurgia parendodôntica (apicectomia)",
      "Tratamento de urgência para dor de origem pulpar",
    ],
    benefits: [
      {
        icon: "◇",
        title: "Eliminação imediata da dor",
        description: "Na maioria dos casos, o alívio da dor ocorre já durante ou imediatamente após a primeira sessão.",
      },
      {
        icon: "◇",
        title: "Preservação do dente natural",
        description: "Evitar a extração mantém a integridade do arco dentário e previne reabsorção óssea.",
      },
      {
        icon: "◇",
        title: "Alta taxa de sucesso",
        description: "Tratamentos endodônticos bem realizados têm índice de sucesso superior a 95% a longo prazo.",
      },
      {
        icon: "◇",
        title: "Procedimento confortável",
        description: "Com anestesia adequada e técnica precisa, o tratamento de canal é muito mais confortável do que a reputação sugere.",
      },
    ],
    processTitle: "Etapas do tratamento de canal",
    steps: [
      { number: "01", title: "Diagnóstico e imagem", description: "Radiografia periapical e/ou tomografia para mapeamento dos canais e avaliação da extensão do problema." },
      { number: "02", title: "Anestesia e acesso", description: "Anestesia local eficiente e abertura do acesso à câmara pulpar com isolamento absoluto." },
      { number: "03", title: "Instrumentação e desinfecção", description: "Remoção do tecido pulpar, modelagem dos canais com limas rotatórias e irrigação com solução desinfetante." },
      { number: "04", title: "Obturação e restauração", description: "Preenchimento hermético dos canais e restauração provisória ou definitiva conforme planejado." },
    ],
    faqs: [
      { question: "O tratamento de canal dói?", answer: "Com anestesia local adequada, o procedimento é realizado sem dor. Pode haver sensibilidade leve nos dias seguintes, controlada com analgésicos comuns." },
      { question: "Quantas sessões são necessárias?", answer: "Na maioria dos casos, realizamos em 1 sessão. Dentes com infecção ativa ou anatomia complexa podem requerer 2 sessões." },
      { question: "O dente tratado pode ser salvo para sempre?", answer: "O dente tratado endodonticamente pode durar a vida toda se receber restauração adequada e for acompanhado regularmente. A proteção com coroa é frequentemente recomendada." },
      { question: "Meu dente ficará escurecido após o tratamento?", answer: "O escurecimento pode ocorrer em alguns casos, especialmente após traumas. Existe procedimento específico (clareamento interno) para tratar esse efeito." },
    ],
    ctaText: "Agendar avaliação endodôntica",
  },

  {
    slug: "implantodontia",
    name: "Implantodontia",
    tagline: "A solução definitiva para dentes ausentes.",
    heroSubtitle: "Implantes osseointegrados que devolvem função, conforto e estética com resultado de longa duração.",
    heroImage: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1400&q=80&auto=format&fit=crop",
    overviewTitle: "O que é a implantodontia?",
    overviewParagraphs: [
      "A implantodontia é a especialidade que substitui dentes perdidos por meio de implantes de titânio inseridos no osso maxilar. Após a osseointegração — o processo em que o implante se funde ao osso — a coroa protética é fixada, devolvendo aparência e função natural ao dente.",
      "É a opção mais próxima de um dente natural em termos de funcionalidade, conforto e longevidade. No COI, cada caso é planejado com tomografia computadorizada e software de planejamento cirúrgico para máxima precisão.",
    ],
    overviewPoints: [
      "Implante unitário para dente ausente",
      "Implantes múltiplos para reabilitação parcial",
      "Protocolo All-on-4 / All-on-6 para edêntulos totais",
      "Implante imediato pós-extração",
      "Carga imediata (dente no mesmo dia) quando indicada",
    ],
    benefits: [
      {
        icon: "◇",
        title: "Função mastigatória plena",
        description: "Permite mastigar todos os alimentos normalmente, sem restrições alimentares como em próteses removíveis.",
      },
      {
        icon: "◇",
        title: "Preservação óssea",
        description: "O implante estimula o osso ao redor, prevenindo a reabsorção que ocorre naturalmente após a perda dentária.",
      },
      {
        icon: "◇",
        title: "Estética natural",
        description: "A coroa protética é confeccionada sob medida para integrar perfeitamente ao sorriso existente.",
      },
      {
        icon: "◇",
        title: "Longevidade comprovada",
        description: "Com higiene adequada e acompanhamento, implantes dentários podem durar décadas ou a vida toda.",
      },
    ],
    processTitle: "Etapas do tratamento com implante",
    steps: [
      { number: "01", title: "Planejamento digital", description: "Tomografia computadorizada e planejamento virtual da posição ideal do implante." },
      { number: "02", title: "Cirurgia de instalação", description: "Inserção do implante de titânio sob anestesia local. Procedimento rápido e preciso." },
      { number: "03", title: "Osseointegração", description: "Período de 2 a 4 meses para que o implante se integre ao osso completamente." },
      { number: "04", title: "Coroa protética", description: "Moldagem e confecção da coroa definitiva, instalada sobre o implante osseointegrado." },
    ],
    faqs: [
      { question: "O implante é para qualquer pessoa?", answer: "A maioria das pessoas é candidata. Condições como diabetes não controlada, tabagismo intenso ou quantidade óssea insuficiente requerem avaliação adicional. A tomografia nos dá a resposta precisa." },
      { question: "Quanto tempo leva o tratamento completo?", answer: "Em média, de 3 a 6 meses do início ao fim. Em casos selecionados de carga imediata, o dente pode ser colocado no mesmo dia da cirurgia." },
      { question: "A cirurgia de implante dói?", answer: "O procedimento é feito com anestesia local e é muito bem tolerado. O desconforto pós-operatório é controlado com analgésicos por 2 a 3 dias." },
      { question: "Implante tem durabilidade garantida?", answer: "Implantes osseointegrados com boa higiene e acompanhamento regular têm taxas de sucesso acima de 97% em 10 anos e podem durar a vida toda." },
    ],
    ctaText: "Agendar avaliação para implante",
  },

  {
    slug: "estetica-dental",
    name: "Estética Dental",
    tagline: "Um sorriso que comunica equilíbrio e naturalidade.",
    heroSubtitle: "Procedimentos estéticos planejados para harmonizar proporcionalidade, cor e forma sem exageros.",
    heroImage: "https://images.unsplash.com/photo-1571772996211-2f02c9727629?w=1400&q=80&auto=format&fit=crop",
    overviewTitle: "O que é a estética dental?",
    overviewParagraphs: [
      "A odontologia estética reúne tratamentos que melhoram a aparência do sorriso preservando ou restaurando a saúde bucal. O objetivo não é a perfeição artificial, mas o equilíbrio entre estética, função e individualidade de cada paciente.",
      "No COI, o planejamento estético considera proporções faciais, cor de pele, forma dos lábios e expectativas realistas do paciente — para um resultado que pareça sempre parte de quem você é.",
    ],
    overviewPoints: [
      "Facetas de porcelana e resina composta",
      "Lentes de contato dental (ultrafinas)",
      "Restaurações diretas em resina",
      "Reanatomização e reconturno gengival",
      "Design digital do sorriso (DDS)",
    ],
    benefits: [
      {
        icon: "◇",
        title: "Design personalizado",
        description: "Simulação digital prévia para que você visualize o resultado antes de qualquer procedimento.",
      },
      {
        icon: "◇",
        title: "Mínimo desgaste",
        description: "Técnicas minimamente invasivas que preservam ao máximo a estrutura natural dos dentes.",
      },
      {
        icon: "◇",
        title: "Resultado harmonioso",
        description: "Equilíbrio entre cor, forma e posicionamento para um sorriso que não parece artificial.",
      },
      {
        icon: "◇",
        title: "Materiais de alta qualidade",
        description: "Cerâmicas e resinas de última geração com excelente mimética natural e durabilidade.",
      },
    ],
    processTitle: "Processo do tratamento estético",
    steps: [
      { number: "01", title: "Análise e simulação", description: "Fotografias clínicas, análise de proporcionalidade facial e simulação digital do sorriso idealizado." },
      { number: "02", title: "Planejamento e mock-up", description: "Aprovação do design e confecção de um modelo provisório (mock-up) para validação em boca antes do definitivo." },
      { number: "03", title: "Preparo e moldagem", description: "Preparo mínimo dos dentes quando necessário e moldagem de precisão para confecção no laboratório." },
      { number: "04", title: "Instalação e ajustes", description: "Cimentação das restaurações definitivas, ajustes oclusais e orientações de manutenção." },
    ],
    faqs: [
      { question: "Faceta de resina ou de porcelana — qual escolher?", answer: "A resina é mais conservadora e pode ser feita em uma sessão. A porcelana oferece maior durabilidade e naturalidade, porém exige mais sessões e investimento maior. O melhor material depende de cada caso." },
      { question: "As facetas são para sempre?", answer: "Facetas de porcelana duram em média 10 a 20 anos. As de resina têm vida útil de 5 a 8 anos com boa higiene e manutenção." },
      { question: "O processo causa sensibilidade?", answer: "Pode haver sensibilidade temporária nos dentes preparados. É passageira e controlada com dessensibilizantes." },
      { question: "Preciso mudar minha alimentação após o tratamento?", answer: "Não há restrições permanentes, mas recomendamos evitar morder objetos duros, abrir embalagens com os dentes ou consumir alimentos muito corantes em excesso." },
    ],
    ctaText: "Agendar análise do sorriso",
  },

  {
    slug: "ortodontia",
    name: "Ortodontia",
    tagline: "Alinhamento que vai além da estética.",
    heroSubtitle: "Correção da posição dos dentes e da oclusão para uma função mastigatória eficiente e um sorriso equilibrado.",
    heroImage: "https://images.unsplash.com/photo-1629909615184-74f495363b67?w=1400&q=80&auto=format&fit=crop",
    overviewTitle: "O que é a ortodontia?",
    overviewParagraphs: [
      "A ortodontia é a especialidade que corrige a posição dos dentes e a relação entre os arcos dentários superior e inferior. Além da estética, trata problemas funcionais como dificuldade de mastigação, desgaste dental excessivo e dores na articulação temporomandibular (ATM).",
      "No COI, o tratamento ortodôntico é planejado com análise cefalométrica, modelos de estudo e, quando indicado, planejamento digital para maior precisão e previsibilidade.",
    ],
    overviewPoints: [
      "Aparelho fixo metálico convencional",
      "Aparelho fixo estético (cerâmico ou safira)",
      "Alinhadores transparentes (invisalign-like)",
      "Ortodontia interceptativa em crianças",
      "Ortodontia associada a implantes ou cirurgia ortognática",
    ],
    benefits: [
      {
        icon: "◇",
        title: "Função mastigatória",
        description: "Oclusão correta distribui forças de forma equilibrada, prevenindo desgastes e disfunções da ATM.",
      },
      {
        icon: "◇",
        title: "Higiene facilitada",
        description: "Dentes alinhados são mais fáceis de higienizar, reduzindo risco de cáries e doença periodontal.",
      },
      {
        icon: "◇",
        title: "Resultado estético",
        description: "Sorriso equilibrado e harmonioso como resultado natural do alinhamento correto.",
      },
      {
        icon: "◇",
        title: "Opções discretas",
        description: "Alinhadores transparentes e aparelhos estéticos para quem prefere maior discrição durante o tratamento.",
      },
    ],
    processTitle: "Como funciona o tratamento",
    steps: [
      { number: "01", title: "Diagnóstico ortodôntico", description: "Fotografias, radiografias, modelos digitais e análise cefalométrica para diagnóstico preciso." },
      { number: "02", title: "Plano de tratamento", description: "Definição da mecânica, aparelho indicado e tempo estimado de tratamento." },
      { number: "03", title: "Instalação do aparelho", description: "Colagem ou entrega dos alinhadores e orientação de uso e higiene." },
      { number: "04", title: "Consultas de manutenção", description: "Ativações mensais (aparelhos fixos) ou troca de alinhadores a cada 1-2 semanas." },
      { number: "05", title: "Contenção", description: "Uso de contenção após remoção do aparelho para estabilização dos resultados." },
    ],
    faqs: [
      { question: "Qual a idade ideal para começar o tratamento?", answer: "Crianças podem iniciar tratamento interceptativo por volta dos 7 anos. Adultos podem realizar ortodontia em qualquer idade — não há limite superior." },
      { question: "Quanto tempo dura o tratamento?", answer: "Em média de 18 a 30 meses para tratamentos completos. Casos simples podem ser resolvidos em menos tempo com alinhadores." },
      { question: "Alinhador é tão eficiente quanto aparelho fixo?", answer: "Para a maioria dos casos, sim. Casos mais complexos podem ainda requerer aparelho fixo. A melhor opção é definida durante a consulta de planejamento." },
      { question: "O aparelho interfere na alimentação?", answer: "Com aparelho fixo, deve-se evitar alimentos muito duros ou pegajosos. Com alinhadores, remove-se para comer, sem restrições alimentares." },
    ],
    ctaText: "Agendar avaliação ortodôntica",
  },

  {
    slug: "periodontia",
    name: "Periodontia",
    tagline: "Saúde da gengiva, base de tudo.",
    heroSubtitle: "Prevenção e tratamento das doenças que afetam os tecidos de suporte dos dentes.",
    heroImage: "https://images.unsplash.com/photo-1598256989900-22fac8ecf7e2?w=1400&q=80&auto=format&fit=crop",
    overviewTitle: "O que é a periodontia?",
    overviewParagraphs: [
      "A periodontia é a especialidade voltada para a saúde da gengiva e do osso alveolar — os tecidos que sustentam os dentes. A doença periodontal (gengivite e periodontite) é uma infecção bacteriana crônica que, sem tratamento, pode levar à perda dentária e tem relação comprovada com doenças sistêmicas como diabetes e doenças cardiovasculares.",
      "No COI, o diagnóstico periodontal é feito de forma criteriosa com sondagem completa e exames de imagem, seguido de tratamento personalizado conforme a severidade do caso.",
    ],
    overviewPoints: [
      "Diagnóstico e classificação da doença periodontal",
      "Raspagem e alisamento radicular (RAR)",
      "Cirurgia periodontal de acesso",
      "Regeneração tecidual guiada",
      "Tratamento de recessão gengival",
      "Manutenção periodontal periódica",
    ],
    benefits: [
      {
        icon: "◇",
        title: "Preservação dos dentes",
        description: "Controle da periodontite impede a progressão da perda óssea e a consequente perda dentária.",
      },
      {
        icon: "◇",
        title: "Saúde sistêmica",
        description: "Inflamação gengival controlada reduz carga inflamatória sistêmica, beneficiando a saúde geral.",
      },
      {
        icon: "◇",
        title: "Estética gengival",
        description: "Tratamento de recessões e excessos gengivais para um contorno harmonioso e funcional.",
      },
      {
        icon: "◇",
        title: "Estabilidade a longo prazo",
        description: "Protocolo de manutenção periódica garante que a doença permaneça controlada após o tratamento ativo.",
      },
    ],
    processTitle: "Fases do tratamento periodontal",
    steps: [
      { number: "01", title: "Diagnóstico completo", description: "Sondagem periodontal, radiografias e classificação da doença por tipo e severidade." },
      { number: "02", title: "Fase higiênica", description: "Orientação de higiene personalizada e raspagem supra e subgengival para eliminação do biofilme." },
      { number: "03", title: "Reavaliação", description: "Análise da resposta ao tratamento inicial após 4 a 6 semanas para decisão sobre necessidade cirúrgica." },
      { number: "04", title: "Manutenção", description: "Consultas periódicas (3-6 meses) para monitoramento e prevenção de recidiva." },
    ],
    faqs: [
      { question: "Gengiva que sangra é problema sério?", answer: "Sangramento é sempre sinal de inflamação — nunca deve ser ignorado. Pode indicar gengivite (reversível) ou periodontite (que requer tratamento especializado)." },
      { question: "Periodontite tem cura?", answer: "Tem controle. A periodontite não tem cura definitiva, mas com tratamento adequado e manutenção regular, pode ser completamente estabilizada e os dentes mantidos por décadas." },
      { question: "O tratamento periodontal dói?", answer: "A raspagem pode causar sensibilidade durante e após o procedimento. Em casos mais avançados, utilizamos anestesia local. O desconforto diminui progressivamente." },
      { question: "Quem tem diabetes corre mais risco?", answer: "Sim. Existe relação bidirecional: diabetes aumenta o risco de periodontite, e periodontite dificulta o controle glicêmico. O tratamento periodontal melhora o controle do diabetes." },
    ],
    ctaText: "Agendar avaliação periodontal",
  },

  {
    slug: "protese-dental",
    name: "Prótese Dental",
    tagline: "Reabilitação com função e naturalidade.",
    heroSubtitle: "Soluções protéticas personalizadas para restaurar a integridade do sorriso e da mastigação.",
    heroImage: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=1400&q=80&auto=format&fit=crop",
    overviewTitle: "O que é a prótese dental?",
    overviewParagraphs: [
      "A prótese dental é a área responsável pela reabilitação oral de pacientes com perda parcial ou total de dentes. As próteses modernas, fixas ou removíveis, são confeccionadas com materiais de alta tecnologia que reproduzem com fidelidade a aparência e a função dos dentes naturais.",
      "No COI, cada prótese é planejada de forma integrada com as demais especialidades — periodontia, implantodontia e oclusão — para garantir resultado funcional, estético e duradouro.",
    ],
    overviewPoints: [
      "Coroa unitária (cerâmica, zircônia)",
      "Prótese parcial fixa (ponte)",
      "Prótese total (convencional ou sobre implantes)",
      "Prótese parcial removível (PPR)",
      "Prótese sobre implantes (protocolo ou unitária)",
      "Prótese provisória durante reabilitação",
    ],
    benefits: [
      {
        icon: "◇",
        title: "Restauração da função",
        description: "Mastigação eficiente e fala natural com próteses adequadas ao seu perfil anatômico.",
      },
      {
        icon: "◇",
        title: "Estética integrada",
        description: "Materiais cerâmicos contemporâneos com translucidez e textura próximas ao dente natural.",
      },
      {
        icon: "◇",
        title: "Conforto e adaptação",
        description: "Planejamento cuidadoso da oclusão e da forma para adaptação rápida e sem desconforto.",
      },
      {
        icon: "◇",
        title: "Opções para cada necessidade",
        description: "De coroas unitárias a reabilitações totais — soluções para todos os graus de comprometimento dental.",
      },
    ],
    processTitle: "Como é o processo de reabilitação",
    steps: [
      { number: "01", title: "Planejamento integral", description: "Análise da situação bucal completa, definição dos tipos de prótese e sequência de tratamento." },
      { number: "02", title: "Preparo e moldagem", description: "Preparo dos dentes pilares e moldagem de precisão para confecção laboratorial." },
      { number: "03", title: "Provisório e teste", description: "Instalação de prótese provisória para avaliação estética e funcional antes do definitivo." },
      { number: "04", title: "Instalação definitiva", description: "Cimentação ou instalação da prótese definitiva com ajuste oclusal e estético final." },
    ],
    faqs: [
      { question: "Quanto tempo dura uma coroa de porcelana?", answer: "Coroas de cerâmica ou zircônia têm vida útil média de 15 a 25 anos com higiene adequada e visitas regulares ao dentista." },
      { question: "Prótese total x implante: qual é melhor?", answer: "Implantes oferecem mais conforto, estabilidade e preservam o osso. A prótese convencional é uma alternativa para pacientes que não têm indicação ou condições para implantes." },
      { question: "A prótese removível fica solta?", answer: "Próteses removíveis bem adaptadas têm retenção satisfatória. Com o passar do tempo, podem necessitar reembasamento. A fixação em implantes elimina esse problema completamente." },
      { question: "É preciso tirar a prótese removível para dormir?", answer: "Recomendamos remover para descanso noturno e higienização. Isso também permite que os tecidos gengivais descansem." },
    ],
    ctaText: "Agendar avaliação protética",
  },

  {
    slug: "harmonizacao-facial",
    name: "Harmonização Facial",
    tagline: "Equilíbrio entre saúde, estética e identidade.",
    heroSubtitle: "Procedimentos minimamente invasivos para harmonizar proporções faciais com naturalidade e segurança.",
    heroImage: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1400&q=80&auto=format&fit=crop",
    overviewTitle: "O que é a harmonização facial?",
    overviewParagraphs: [
      "A harmonização orofacial (HOF) é uma área da odontologia que integra procedimentos estéticos minimamente invasivos para equilibrar as proporções faciais — especialmente da região inferior do rosto, onde o dentista tem amplo domínio anatômico.",
      "No COI, os protocolos são baseados em análise facial criteriosa e respeito à identidade do paciente. Nunca buscamos padrões artificiais, mas o melhor equilíbrio possível para cada rosto.",
    ],
    overviewPoints: [
      "Toxina botulínica (Botox) para bruxismo e estética",
      "Preenchimento labial com ácido hialurônico",
      "Bioremodelação facial",
      "Tratamento de gummy smile",
      "Assimetrias do sorriso",
      "Hidratação labial",
    ],
    benefits: [
      {
        icon: "◇",
        title: "Abordagem segura",
        description: "Realizado por cirurgião-dentista com formação específica e profundo conhecimento da anatomia facial.",
      },
      {
        icon: "◇",
        title: "Resultado natural",
        description: "Planejamento baseado em análise facial individual para resultados que preservam suas características únicas.",
      },
      {
        icon: "◇",
        title: "Minimamente invasivo",
        description: "Procedimentos realizados com agulhas finas e anestesia tópica, com tempo de recuperação mínimo.",
      },
      {
        icon: "◇",
        title: "Integração com odontologia",
        description: "Harmonização que considera o sorriso e a oclusão para um resultado coerente e funcional.",
      },
    ],
    processTitle: "Etapas do processo",
    steps: [
      { number: "01", title: "Análise facial", description: "Avaliação das proporções, simetrias, musculatura e desejos do paciente para planejamento personalizado." },
      { number: "02", title: "Plano terapêutico", description: "Definição dos procedimentos indicados, materiais utilizados e expectativas de resultado." },
      { number: "03", title: "Aplicação", description: "Procedimento realizado com anestesia tópica, materiais certificados e técnicas de precisão." },
      { number: "04", title: "Acompanhamento", description: "Avaliação em 15 a 30 dias para análise do resultado e ajustes quando necessário." },
    ],
    faqs: [
      { question: "Dentista pode realizar harmonização facial?", answer: "Sim. O Conselho Federal de Odontologia (CFO) regulamenta a harmonização orofacial como área de atuação odontológica. Cirurgiões-dentistas com formação específica estão habilitados para esses procedimentos." },
      { question: "O botox para bruxismo é diferente do estético?", answer: "O princípio é o mesmo, mas a indicação e a técnica diferem. Para bruxismo, aplicamos nos músculos da mastigação para reduzir a força do apertamento. Para estética, tratamos rugas e assimetrias." },
      { question: "Os resultados são permanentes?", answer: "Toxina botulínica dura de 4 a 6 meses. Ácido hialurônico tem duração de 12 a 18 meses. Manutenção periódica garante continuidade dos resultados." },
      { question: "Existe risco de reação alérgica?", answer: "Reações graves são raras. Fazemos anamnese detalhada antes do procedimento e os materiais utilizados são certificados pela ANVISA." },
    ],
    ctaText: "Agendar avaliação de harmonização",
  },
];

export function getTreatmentBySlug(slug: string): Treatment | undefined {
  return treatments.find((t) => t.slug === slug);
}
