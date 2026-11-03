/*
 * ============================================================
 *  DADOS DA EMPRESA — edite SOMENTE este arquivo
 * ============================================================
 *  Fonte dos dados cadastrais: Comprovante de Inscrição e de
 *  Situação Cadastral (Receita Federal), emitido em 02/11/2026.
 * ============================================================
 */
window.EMPRESA = {
  razaoSocial: "VITOR GABRIEL OLIVEIRA MARTINS COMERCIO E SERVICOS LTDA",
  nomeFantasia: "O M Serviços Comerciais",
  marca: { linha1: "O M", linha2: "Serviços Comerciais" },
  cnpj: "69.879.478/0001-30",
  dataAbertura: "29/10/2026",
  porte: "ME – Microempresa",
  naturezaJuridica: "Sociedade Empresária Limitada (206-2)",
  situacao: "Ativa",

  endereco: {
    logradouro: "Rua Joanópolis, 476",
    bairro: "Cidade Jardim",
    cidade: "Campinas",
    uf: "SP",
    cep: "13050-411",
  },

  contato: {
    telefone: "(19) 7823-5858",
    whatsapp: "", // ex.: "5519999999999" (DDI 55 + DDD + número). Vazio = botões de WhatsApp ocultos.
    email: "vitor_gabriel-2011@hotmail.com",
    horario: "Segunda a sexta, das 8h às 18h",
  },

  /* Compromisso exibido no site — ajuste para o que a empresa consegue cumprir */
  prazoCotacao: "1 dia útil",

  /* Faixa de números — use apenas informações verdadeiras */
  numeros: [
    { valor: "5", rotulo: "linhas de fornecimento" },
    { valor: "11", rotulo: "atividades registradas no CNPJ" },
    { valor: "ME", rotulo: "benefícios da LC 123/2006" },
    { valor: "SP", rotulo: "sede em Campinas, atendimento estadual" },
  ],

  /*
   * LINHAS DE FORNECIMENTO
   * Os "cnaes" devem ficar idênticos ao Cartão CNPJ.
   */
  ramos: [
    {
      id: "alimentos",
      icone: "carrinho",
      principal: true,
      titulo: "Gêneros alimentícios",
      resumo: "Atacado e varejo de alimentos, com fracionamento e montagem de kits.",
      descricao: "Fornecemos alimentos perecíveis e não perecíveis em grandes volumes ou em entregas parceladas, conforme o cronograma do órgão. Também fazemos fracionamento e montagem de kits e cestas.",
      itens: ["Cestas básicas e kits de alimentação", "Gêneros para alimentação escolar", "Alimentos para hospitais, abrigos e creches", "Cereais, grãos, farinhas e massas", "Óleos, enlatados e conservas", "Café, açúcar, chás e itens de copa", "Leite, achocolatados e biscoitos", "Água mineral e bebidas"],
      cnaes: [
        ["47.12-1-00", "Comércio varejista de mercadorias em geral, com predominância de produtos alimentícios – minimercados, mercearias e armazéns", true],
        ["46.39-7-01", "Comércio atacadista de produtos alimentícios em geral"],
        ["46.39-7-02", "Comércio atacadista de produtos alimentícios em geral, com atividade de fracionamento e acondicionamento associada"],
        ["46.91-5-00", "Comércio atacadista de mercadorias em geral, com predominância de produtos alimentícios"],
      ],
    },
    {
      id: "consumo",
      icone: "pacote",
      titulo: "Materiais de consumo",
      resumo: "Mercadorias em geral para o dia a dia de repartições e unidades.",
      descricao: "Itens de uso contínuo para manter repartições, escolas e unidades de saúde funcionando, com reposição programada por ata de registro de preços.",
      itens: ["Utilidades domésticas", "Copa e cozinha", "Descartáveis (copos, pratos, talheres)", "Artigos de uso pessoal", "Garrafas térmicas e utensílios", "Itens diversos sob demanda"],
      cnaes: [
        ["46.93-1-00", "Comércio atacadista de mercadorias em geral, sem predominância de alimentos ou de insumos agropecuários"],
        ["47.59-8-99", "Comércio varejista de outros artigos de uso pessoal e doméstico não especificados anteriormente"],
        ["47.89-0-99", "Comércio varejista de outros produtos não especificados anteriormente"],
      ],
    },
    {
      id: "informatica",
      icone: "monitor",
      titulo: "Informática e telefonia",
      resumo: "Equipamentos, periféricos e suprimentos de TI e comunicação.",
      descricao: "Equipamentos e suprimentos para modernizar o atendimento ao cidadão e o trabalho administrativo, com marcas de mercado e nota fiscal com garantia do fabricante.",
      itens: ["Computadores e notebooks", "Monitores, teclados e mouses", "Toners, cartuchos e suprimentos", "Nobreaks, estabilizadores e cabos", "Pen drives, HDs e SSDs", "Telefones, headsets e rádios comunicadores"],
      cnaes: [
        ["47.51-2-01", "Comércio varejista especializado de equipamentos e suprimentos de informática"],
        ["47.52-1-00", "Comércio varejista especializado de equipamentos de telefonia e comunicação"],
      ],
    },
    {
      id: "eletros",
      icone: "geladeira",
      titulo: "Eletrodomésticos e eletrônicos",
      resumo: "Equipamentos para cozinhas, escritórios, escolas e unidades.",
      descricao: "Linha branca, eletroportáteis e áudio e vídeo para equipar cozinhas industriais e de escolas, salas de reunião e ambientes de atendimento.",
      itens: ["Geladeiras e freezers", "Bebedouros e purificadores", "Fogões, micro-ondas e fornos", "Cafeteiras e eletroportáteis", "Ventiladores e climatizadores", "TVs, caixas de som e microfones"],
      cnaes: [
        ["47.53-9-00", "Comércio varejista especializado de eletrodomésticos e equipamentos de áudio e vídeo"],
      ],
    },
    {
      id: "flores",
      icone: "planta",
      titulo: "Plantas e flores",
      resumo: "Arranjos e plantas para eventos e ambientação.",
      descricao: "Arranjos florais e plantas ornamentais para solenidades, cerimônias oficiais, homenagens e ambientação de prédios públicos.",
      itens: ["Arranjos para solenidades e eventos", "Coroas de flores", "Plantas ornamentais em vaso", "Mudas para ambientação"],
      cnaes: [
        ["47.89-0-02", "Comércio varejista de plantas e flores naturais"],
      ],
    },
  ],

  /* Quem a empresa atende */
  publicos: [
    { icone: "predio", titulo: "Prefeituras e secretarias" },
    { icone: "escola", titulo: "Educação e alimentação escolar" },
    { icone: "saude", titulo: "Saúde e assistência social" },
    { icone: "balanca", titulo: "Câmaras, tribunais e assembleias" },
    { icone: "universidade", titulo: "Universidades e institutos" },
    { icone: "sirene", titulo: "Segurança pública" },
    { icone: "pessoas", titulo: "Autarquias e fundações" },
    { icone: "pacote", titulo: "Empresas públicas e Sistema S" },
  ],

  /* Formas de contratação (Lei 14.133/2021) */
  modalidades: [
    { icone: "martelo", titulo: "Pregão eletrônico", texto: "Participamos de pregões com proposta conforme o termo de referência, para entrega única ou por registro de preços." },
    { icone: "raio", titulo: "Dispensa eletrônica", texto: "Atendemos compras diretas de menor valor (art. 75), com resposta rápida e documentação pronta." },
    { icone: "texto", titulo: "Adesão a ata (carona)", texto: "Quando tivermos ata de registro de preços vigente, outros órgãos podem aderir a ela, conforme o art. 86." },
    { icone: "etiqueta", titulo: "Cotação para pesquisa de preços", texto: "Enviamos orçamento formal, com CNPJ e validade, para compor a pesquisa de preços do seu processo." },
  ],

  /* Etapas do atendimento */
  etapas: [
    { titulo: "Envio da demanda", texto: "O órgão envia o edital, o termo de referência ou a lista de itens." },
    { titulo: "Cotação formal", texto: "Retornamos com proposta detalhada, com marca, unidade, preço e validade." },
    { titulo: "Contratação", texto: "Participamos do certame ou formalizamos a contratação direta." },
    { titulo: "Empenho e entrega", texto: "Entregamos conforme a nota de empenho e o cronograma combinado." },
    { titulo: "Faturamento", texto: "Emitimos a nota fiscal e acompanhamos o atesto e o pagamento." },
  ],

  /*
   * Documentação de habilitação (Lei 14.133/2021, arts. 62 a 70)
   * status: "disponivel" | "providenciando"
   *   - "disponivel" mostra o selo verde "Disponível" (e a validade, se houver)
   *   - "providenciando" lista o documento sem selo
   * validade: data de vencimento (opcional, ex.: "15/04/2027")
   */
  documentos: [
    { grupo: "Jurídica", nome: "Contrato social e alterações", status: "disponivel" },
    { grupo: "Jurídica", nome: "Cartão CNPJ", status: "disponivel" },
    { grupo: "Fiscal e trabalhista", nome: "CND Federal e Dívida Ativa da União", status: "providenciando" },
    { grupo: "Fiscal e trabalhista", nome: "Certidão de débitos estaduais (SP)", status: "providenciando" },
    { grupo: "Fiscal e trabalhista", nome: "Certidão de débitos municipais (Campinas)", status: "providenciando" },
    { grupo: "Fiscal e trabalhista", nome: "CRF – Regularidade do FGTS", status: "providenciando" },
    { grupo: "Fiscal e trabalhista", nome: "CNDT – Débitos trabalhistas", status: "providenciando" },
    { grupo: "Econômico-financeira", nome: "Balanço de abertura", status: "providenciando" },
    { grupo: "Econômico-financeira", nome: "Certidão negativa de falência", status: "providenciando" },
    { grupo: "Técnica", nome: "Atestados de capacidade técnica", status: "providenciando" },
  ],

  /* Cadastros em portais — só aparecem no site os que tiverem ativo: true */
  portais: [
    { nome: "Compras.gov.br / SICAF", ativo: false },
    { nome: "PNCP – Portal Nacional de Contratações Públicas", ativo: false },
    { nome: "BEC/SP – Bolsa Eletrônica de Compras", ativo: false },
    { nome: "Portais municipais (BLL, Licitanet, BNC e outros)", ativo: false },
  ],

  beneficiosME: [
    "Participação em itens exclusivos para ME/EPP de até R$ 80 mil (art. 48, I)",
    "Preferência em caso de empate ficto (arts. 44 e 45)",
    "Prazo para regularização fiscal após a habilitação (art. 43)",
  ],

  diferenciais: [
    { icone: "lista", titulo: "Fornecedor multilinha", texto: "Alimentos, materiais de consumo, TI e eletros em um único CNPJ, com menos fornecedores para gerenciar." },
    { icone: "caminhao", titulo: "Entrega programada", texto: "Entregas únicas ou parceladas, conforme o cronograma do empenho ou da ata." },
    { icone: "escudo", titulo: "Conformidade", texto: "Documentação acompanhada de perto e propostas aderentes ao termo de referência." },
    { icone: "relogio", titulo: "Resposta rápida", texto: "Cotações e esclarecimentos com agilidade, para não atrasar o seu processo." },
  ],

  faq: [
    { p: "Vocês emitem cotação para pesquisa de preços?", r: "Sim. Enviamos orçamento formal em papel timbrado, com CNPJ, descrição, marca, preço unitário, prazo de entrega e validade da proposta." },
    { p: "Como funciona o pagamento?", r: "Seguimos o rito da administração pública: entrega após a nota de empenho, emissão de nota fiscal e pagamento no prazo previsto no edital ou contrato." },
    { p: "Vocês entregam fora de Campinas?", r: "Sim. Atendemos Campinas, a Região Metropolitana e demais municípios do estado de São Paulo. Outras regiões são avaliadas caso a caso." },
    { p: "A empresa é ME? Pode participar de itens exclusivos?", r: "Sim. Somos microempresa e podemos participar de itens e lotes exclusivos para ME/EPP, nos termos da LC 123/2006." },
    { p: "Como solicito a documentação de habilitação?", r: "Use o formulário de contato ou escreva para o nosso e-mail informando o número do processo. Enviamos o kit completo de documentos." },
  ],
};
