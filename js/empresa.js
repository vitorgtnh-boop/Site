/*
 * ============================================================
 *  DADOS DA EMPRESA — edite SOMENTE este arquivo
 * ============================================================
 *  Todo o conteúdo do site (nome, CNPJ, ramos de atuação,
 *  contatos, documentos de habilitação) vem daqui.
 *
 *  Campos marcados com "PREENCHER" ainda precisam dos dados
 *  oficiais do Cartão CNPJ (Receita Federal).
 * ============================================================
 */
window.EMPRESA = {
  razaoSocial: "PREENCHER – Razão Social conforme Cartão CNPJ",
  nomeFantasia: "PREENCHER – Nome Fantasia",
  cnpj: "69.879.478/0001-30",
  slogan: "Fornecimento e serviços para o setor público com transparência, prazo e conformidade legal.",
  dataAbertura: "PREENCHER",
  porte: "PREENCHER (ME / EPP / Demais)", // ME/EPP têm benefícios da LC 123/2006 em licitações
  naturezaJuridica: "PREENCHER",

  endereco: {
    logradouro: "PREENCHER",
    bairro: "PREENCHER",
    cidade: "PREENCHER",
    uf: "UF",
    cep: "00000-000",
  },

  contato: {
    telefone: "(00) 0000-0000",
    whatsapp: "5500000000000", // somente números, com DDI 55 + DDD
    email: "contato@suaempresa.com.br",
    horario: "Segunda a sexta, 8h às 18h",
  },

  /*
   * RAMOS DE ATUAÇÃO (CNAEs) — copie do Cartão CNPJ.
   * principal: true marca a atividade principal.
   * "titulo" e "descricao" são textos comerciais para o site;
   * "cnae" e "cnaeDescricao" devem ser idênticos ao cartão.
   */
  ramos: [
    {
      principal: true,
      cnae: "0000-0/00",
      cnaeDescricao: "PREENCHER – descrição oficial da atividade principal",
      titulo: "Atividade principal",
      descricao: "Texto comercial explicando o que a empresa entrega nesta atividade.",
      icone: "star",
    },
    {
      cnae: "0000-0/00",
      cnaeDescricao: "PREENCHER – atividade secundária",
      titulo: "Atividade secundária",
      descricao: "Texto comercial explicando o que a empresa entrega nesta atividade.",
      icone: "box",
    },
  ],

  /* Documentação de habilitação (Lei 14.133/2021, arts. 62 a 70) */
  habilitacao: [
    { grupo: "Jurídica", itens: ["Contrato social e alterações", "Cartão CNPJ", "Documentos dos sócios"] },
    { grupo: "Fiscal, social e trabalhista", itens: ["CND Federal e Dívida Ativa da União", "Certidão Estadual", "Certidão Municipal", "CRF – FGTS", "CNDT – Débitos Trabalhistas"] },
    { grupo: "Econômico-financeira", itens: ["Balanço patrimonial", "Certidão negativa de falência"] },
    { grupo: "Técnica", itens: ["Atestados de capacidade técnica", "Registros em conselhos, quando exigidos"] },
  ],

  /* Cadastros em portais de compras — marque ativo: true quando estiver cadastrado */
  portais: [
    { nome: "Compras.gov.br / SICAF", ativo: false },
    { nome: "PNCP – Portal Nacional de Contratações Públicas", ativo: false },
    { nome: "Portal de compras do Estado", ativo: false },
    { nome: "BLL / Licitanet / outros portais municipais", ativo: false },
  ],

  diferenciais: [
    { titulo: "Conformidade legal", texto: "Documentação de habilitação sempre atualizada e disponível para conferência." },
    { titulo: "Cumprimento de prazos", texto: "Logística e planejamento para entregar dentro do prazo contratual." },
    { titulo: "Preço competitivo", texto: "Propostas objetivas, alinhadas ao termo de referência e ao mercado." },
    { titulo: "Atendimento dedicado", texto: "Um responsável acompanha cada contrato do empenho à entrega." },
  ],
};
