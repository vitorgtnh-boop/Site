# O M Serviços Comerciais — site institucional

Site estático (HTML, CSS e JavaScript puros, sem dependências) para apresentar a empresa a
órgãos públicos e apoiar a participação em licitações.

## Seções
- **Início**: proposta de valor e cartão de "cotação para pesquisa de preços"
- **Produtos**: 5 linhas de fornecimento em abas, com os CNAEs de cada uma
- **Setor público**: quem atendemos e formas de contratação (Lei 14.133/2021)
- **Como trabalhamos**: etapas do pedido ao pagamento
- **Documentação**: documentos de habilitação, cadastros em portais e benefícios de ME
- **A empresa**: apresentação, diferenciais e dados cadastrais
- **Dúvidas**: perguntas frequentes de compradores públicos
- **Contato**: canais e formulário que gera o e-mail de solicitação

## Como editar
Todo o conteúdo fica em **`js/empresa.js`**:

| O que mudar | Campo |
|---|---|
| WhatsApp (ativa os botões) | `contato.whatsapp` |
| E-mail / telefone | `contato.email`, `contato.telefone` |
| Prazo de resposta de cotações | `prazoCotacao` |
| Documento ficou pronto | `documentos[].status = "disponivel"` e `validade` |
| Cadastro aprovado em portal | `portais[].ativo = true` |
| Produtos de cada linha | `ramos[].itens` |

Os demais arquivos: `index.html` (estrutura), `css/style.css` (visual), `js/main.js`
(comportamento), `js/icones.js` (ícones) e `assets/logo.svg` (logotipo).

## Visualizar
Abra `index.html` no navegador.

## Publicar grátis (GitHub Pages)
Settings → Pages → Branch `main` / pasta raiz.
