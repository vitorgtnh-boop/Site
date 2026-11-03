/*
 * ============================================================
 *  DADOS DA EMPRESA — edite SOMENTE este arquivo
 * ============================================================
 *  Fonte: Comprovante de Inscrição e de Situação Cadastral
 *  (Receita Federal), emitido em 02/11/2026.
 * ============================================================
 */
window.EMPRESA = {
  razaoSocial: "VITOR GABRIEL OLIVEIRA MARTINS COMERCIO E SERVICOS LTDA",
  nomeFantasia: "O M Serviços Comerciais",
  cnpj: "69.879.478/0001-30",
  slogan: "Fornecimento de gêneros alimentícios, materiais de consumo, informática e eletroeletrônicos para órgãos públicos, com documentação regular, preço competitivo e entrega no prazo.",
  dataAbertura: "29/10/2026",
  porte: "ME – Microempresa",
  naturezaJuridica: "Sociedade Empresária Limitada",
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
    whatsapp: "", // ex.: "5519999999999" (DDI 55 + DDD + número). Vazio = botão oculto.
    email: "vitor_gabriel-2011@hotmail.com",
    horario: "Segunda a sexta, 8h às 18h",
  },

  /*
   * LINHAS DE FORNECIMENTO
   * Agrupam os CNAEs do Cartão CNPJ em categorias que os órgãos
   * públicos costumam licitar. "cnaes" deve ficar idêntico ao cartão.
   */
  ramos: [
    {
      principal: true,
      titulo: "Gêneros alimentícios",
      descricao: "Fornecimento no varejo e no atacado, inclusive com fracionamento e montagem de kits.",
      exemplos: ["Cestas básicas", "Merenda / alimentação escolar", "Alimentos para hospitais, abrigos e creches", "Café, açúcar e itens de copa", "Kits e porções fracionadas"],
      cnaes: [
        ["47.12-1-00", "Comércio varejista de mercadorias em geral, com predominância de produtos alimentícios – minimercados, mercearias e armazéns", true],
        ["46.39-7-01", "Comércio atacadista de produtos alimentícios em geral"],
        ["46.39-7-02", "Comércio atacadista de produtos alimentícios em geral, com atividade de fracionamento e acondicionamento associada"],
        ["46.91-5-00", "Comércio atacadista de mercadorias em geral, com predominância de produtos alimentícios"],
      ],
    },
    {
      titulo: "Materiais de consumo e utilidades",
      descricao: "Mercadorias em geral para o dia a dia de repartições, escolas e unidades de saúde.",
      exemplos: ["Utilidades domésticas", "Copa e cozinha", "Descartáveis", "Artigos de uso pessoal", "Itens diversos sob demanda"],
      cnaes: [
        ["46.93-1-00", "Comércio atacadista de mercadorias em geral, sem predominância de alimentos ou de insumos agropecuários"],
        ["47.59-8-99", "Comércio varejista de outros artigos de uso pessoal e doméstico não especificados anteriormente"],
        ["47.89-0-99", "Comércio varejista de outros produtos não especificados anteriormente"],
      ],
    },
    {
      titulo: "Informática e telefonia",
      descricao: "Equipamentos, periféricos e suprimentos de informática e comunicação.",
      exemplos: ["Computadores e notebooks", "Monitores, teclados e mouses", "Toners, cartuchos e suprimentos", "Telefones e headsets", "Rádios comunicadores e acessórios"],
      cnaes: [
        ["47.51-2-01", "Comércio varejista especializado de equipamentos e suprimentos de informática"],
        ["47.52-1-00", "Comércio varejista especializado de equipamentos de telefonia e comunicação"],
      ],
    },
    {
      titulo: "Eletrodomésticos e eletroeletrônicos",
      descricao: "Equipamentos para escritórios, cozinhas, escolas e unidades de atendimento.",
      exemplos: ["Geladeiras e freezers", "Bebedouros e purificadores", "Micro-ondas, fogões e cafeteiras", "Ventiladores e climatizadores", "TVs e equipamentos de áudio e vídeo"],
      cnaes: [
        ["47.53-9-00", "Comércio varejista especializado de eletrodomésticos e equipamentos de áudio e vídeo"],
      ],
    },
    {
      titulo: "Plantas e flores",
      descricao: "Arranjos e plantas para eventos, cerimônias e ambientação de prédios públicos.",
      exemplos: ["Arranjos para solenidades", "Coroas de flores", "Plantas ornamentais", "Mudas para ambientação"],
      cnaes: [
        ["47.89-0-02", "Comércio varejista de plantas e flores naturais"],
      ],
    },
  ],

  /* Benefícios de ME/EPP em licitações (LC 123/2006) */
  beneficiosME: [
    "Participação em itens exclusivos para ME/EPP de até R$ 80 mil (art. 48, I)",
    "Preferência em caso de empate ficto (arts. 44 e 45)",
    "Prazo para regularização fiscal após a habilitação (art. 43)",
  ],

  /* Documentação de habilitação (Lei 14.133/2021, arts. 62 a 70) */
  habilitacao: [
    { grupo: "Jurídica", itens: ["Contrato social e alterações", "Cartão CNPJ", "Documentos dos sócios"] },
    { grupo: "Fiscal, social e trabalhista", itens: ["CND Federal e Dívida Ativa da União", "Certidão Estadual (SP)", "Certidão Municipal (Campinas)", "CRF – FGTS", "CNDT – Débitos Trabalhistas"] },
    { grupo: "Econômico-financeira", itens: ["Balanço de abertura / patrimonial", "Certidão negativa de falência"] },
    { grupo: "Técnica", itens: ["Atestados de capacidade técnica", "Alvará e licenças, quando exigidos"] },
  ],

  /* Cadastros em portais de compras — marque ativo: true quando estiver cadastrado */
  portais: [
    { nome: "Compras.gov.br / SICAF", ativo: false },
    { nome: "PNCP – Portal Nacional de Contratações Públicas", ativo: false },
    { nome: "BEC/SP – Bolsa Eletrônica de Compras", ativo: false },
    { nome: "Portal de Compras de Campinas e municípios da RMC", ativo: false },
  ],

  diferenciais: [
    { titulo: "Mix completo", texto: "Alimentos, materiais de consumo, informática e eletros em um único fornecedor." },
    { titulo: "Atacado e fracionamento", texto: "Atendemos grandes volumes e também montagem de kits e porções." },
    { titulo: "Microempresa (ME)", texto: "Apta a itens exclusivos e com benefícios da LC 123/2006." },
    { titulo: "Base em Campinas/SP", texto: "Logística ágil para Campinas, Região Metropolitana e interior paulista." },
  ],
};
