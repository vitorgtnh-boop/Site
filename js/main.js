(function () {
  const E = window.EMPRESA;
  const end = E.endereco;
  const campos = {
    ...E,
    telefone: E.contato.telefone,
    telefoneLink: "tel:+55" + E.contato.telefone.replace(/\D/g, ""),
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
    if (el.dataset.link === "tel") el.href = campos.telefoneLink;
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
      <ul class="exemplos">${r.exemplos.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>
      <details class="cnae">
        <summary>CNAE${r.cnaes.length > 1 ? "s" : ""} (${r.cnaes.length})</summary>
        <ul>${r.cnaes.map(([c, d, p]) => `<li><strong>${esc(c)}</strong> — ${esc(d)}${p ? " <em>(principal)</em>" : ""}</li>`).join("")}</ul>
      </details>
    </article>`).join("");

  document.getElementById("lista-beneficios").innerHTML = E.beneficiosME.map((b) => `<li>${esc(b)}</li>`).join("");

  document.getElementById("lista-habilitacao").innerHTML = E.habilitacao.map((g) => `
    <h4>${esc(g.grupo)}</h4>
    <ul class="check">${g.itens.map((i) => `<li>${esc(i)}</li>`).join("")}</ul>`).join("");

  document.getElementById("lista-portais").innerHTML = E.portais.map((p) => `
    <li class="${p.ativo ? "ok" : "pendente"}">${esc(p.nome)}<span>${p.ativo ? "Cadastrado" : "Em andamento"}</span></li>`).join("");

  document.getElementById("lista-diferenciais").innerHTML = E.diferenciais.map((d) => `
    <div class="card"><h3>${esc(d.titulo)}</h3><p>${esc(d.texto)}</p></div>`).join("");

  const whats = document.getElementById("btn-whats");
  if (!E.contato.whatsapp) whats.remove();
  else whats.href = `https://wa.me/${E.contato.whatsapp}?text=${encodeURIComponent("Olá! Gostaria de solicitar uma cotação.")}`;

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
