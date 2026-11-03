(function () {
  const E = window.EMPRESA;
  const end = E.endereco;
  const campos = {
    ...E,
    telefone: E.contato.telefone,
    email: E.contato.email,
    horario: E.contato.horario,
    cidadeUf: `${end.cidade}/${end.uf}`,
    enderecoCompleto: `${end.logradouro}, ${end.bairro} — ${end.cidade}/${end.uf}, CEP ${end.cep}`,
  };

  document.querySelectorAll("[data-campo]").forEach((el) => {
    const v = campos[el.dataset.campo];
    if (v == null) return;
    el.textContent = v;
    if (el.dataset.link === "mailto") el.href = `mailto:${v}`;
  });
  document.title = `${E.nomeFantasia} | Fornecedor para o Setor Público`;
  document.getElementById("ano").textContent = new Date().getFullYear();

  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  const ramos = [...E.ramos].sort((a, b) => (b.principal ? 1 : 0) - (a.principal ? 1 : 0));
  document.getElementById("lista-ramos").innerHTML = ramos.map((r) => `
    <article class="card ramo${r.principal ? " ramo--principal" : ""}">
      ${r.principal ? '<span class="tag tag--sm">Atividade principal</span>' : ""}
      <h3>${esc(r.titulo)}</h3>
      <p>${esc(r.descricao)}</p>
      <p class="cnae"><strong>CNAE ${esc(r.cnae)}</strong> — ${esc(r.cnaeDescricao)}</p>
    </article>`).join("");

  document.getElementById("lista-habilitacao").innerHTML = E.habilitacao.map((g) => `
    <h4>${esc(g.grupo)}</h4>
    <ul class="check">${g.itens.map((i) => `<li>${esc(i)}</li>`).join("")}</ul>`).join("");

  document.getElementById("lista-portais").innerHTML = E.portais.map((p) => `
    <li class="${p.ativo ? "ok" : "pendente"}">${esc(p.nome)}<span>${p.ativo ? "Cadastrado" : "Em andamento"}</span></li>`).join("");

  document.getElementById("lista-diferenciais").innerHTML = E.diferenciais.map((d) => `
    <div class="card"><h3>${esc(d.titulo)}</h3><p>${esc(d.texto)}</p></div>`).join("");

  const whats = document.getElementById("btn-whats");
  whats.href = `https://wa.me/${E.contato.whatsapp}?text=${encodeURIComponent("Olá! Gostaria de solicitar uma cotação.")}`;

  document.getElementById("form-contato").addEventListener("submit", (ev) => {
    ev.preventDefault();
    const f = new FormData(ev.target);
    const assunto = `Pedido de cotação — ${f.get("orgao")}${f.get("edital") ? " — " + f.get("edital") : ""}`;
    const corpo = `Órgão: ${f.get("orgao")}\nResponsável: ${f.get("nome")}\nE-mail: ${f.get("email")}\nProcesso/Edital: ${f.get("edital") || "-"}\n\n${f.get("mensagem")}`;
    window.location.href = `mailto:${E.contato.email}?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(corpo)}`;
  });

  const btn = document.querySelector(".menu-btn");
  const nav = document.querySelector(".nav");
  btn.addEventListener("click", () => {
    const aberto = nav.classList.toggle("aberta");
    btn.setAttribute("aria-expanded", aberto);
  });
  nav.addEventListener("click", (e) => { if (e.target.tagName === "A") nav.classList.remove("aberta"); });
})();
