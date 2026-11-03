(function () {
  "use strict";
  const E = window.EMPRESA;
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const ico = window.icone;
  const end = E.endereco;

  /* ---------- Campos simples ---------- */
  const campos = {
    ...E,
    marca1: E.marca.linha1,
    marca2: E.marca.linha2,
    telefone: E.contato.telefone,
    email: E.contato.email,
    horario: E.contato.horario,
    situacaoMin: E.situacao.toLowerCase(),
    cidadeUf: `${end.cidade}/${end.uf}`,
    enderecoCompleto: `${end.logradouro}, ${end.bairro}, ${end.cidade}/${end.uf}, CEP ${end.cep}`,
  };
  $$("[data-campo]").forEach((el) => {
    const v = campos[el.dataset.campo];
    if (v != null) el.textContent = v;
  });
  $$('[data-link="tel"]').forEach((a) => (a.href = "tel:+55" + E.contato.telefone.replace(/\D/g, "")));
  $$('[data-link="mailto"]').forEach((a) => (a.href = "mailto:" + E.contato.email));
  $("#ano").textContent = new Date().getFullYear();

  /* ---------- WhatsApp ---------- */
  $$("[data-whats]").forEach((a) => {
    if (!E.contato.whatsapp) return a.remove();
    a.href = `https://wa.me/${E.contato.whatsapp}?text=${encodeURIComponent("Olá! Gostaria de solicitar uma cotação.")}`;
  });

  /* ---------- Listas ---------- */
  $("#lista-numeros").innerHTML = E.numeros.map((n) => `
    <div class="numero"><strong>${esc(n.valor)}</strong><span>${esc(n.rotulo)}</span></div>`).join("");

  // Abas de produtos
  $("#abas-produtos").innerHTML = E.ramos.map((r, i) => `
    <button role="tab" id="aba-${r.id}" aria-controls="painel-${r.id}" aria-selected="${i === 0}" tabindex="${i === 0 ? 0 : -1}" class="aba">
      ${ico(r.icone)}<span>${esc(r.titulo)}</span>
    </button>`).join("");
  $("#paineis-produtos").innerHTML = E.ramos.map((r, i) => `
    <div role="tabpanel" id="painel-${r.id}" aria-labelledby="aba-${r.id}" class="painel-produto" ${i === 0 ? "" : "hidden"}>
      <div class="painel-produto__texto">
        <div class="painel-produto__icone">${ico(r.icone)}</div>
        ${r.principal ? '<span class="chip chip--azul">Atividade principal</span>' : ""}
        <h3>${esc(r.titulo)}</h3>
        <p>${esc(r.descricao)}</p>
        <a href="#contato" class="btn btn--primario" data-cotar="${r.id}">Cotar itens desta linha ${ico("seta")}</a>
        <details class="cnaes">
          <summary>Atividades no CNPJ (${r.cnaes.length})</summary>
          <ul>${r.cnaes.map(([c, d, p]) => `<li><code>${esc(c)}</code><span>${esc(d)}${p ? " <em>· principal</em>" : ""}</span></li>`).join("")}</ul>
        </details>
      </div>
      <ul class="itens">${r.itens.map((x) => `<li>${ico("check")}${esc(x)}</li>`).join("")}</ul>
    </div>`).join("");

  const abas = $$(".aba");
  function ativar(aba, foco) {
    abas.forEach((a) => {
      const sel = a === aba;
      a.setAttribute("aria-selected", sel);
      a.tabIndex = sel ? 0 : -1;
      $("#" + a.getAttribute("aria-controls")).hidden = !sel;
    });
    if (foco) aba.focus();
  }
  abas.forEach((a, i) => {
    a.addEventListener("click", () => ativar(a));
    a.addEventListener("keydown", (e) => {
      const d = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[e.key];
      if (d) { e.preventDefault(); ativar(abas[(i + d + abas.length) % abas.length], true); }
    });
  });

  $("#lista-publicos").innerHTML = E.publicos.map((p) => `
    <div class="publico">${ico(p.icone)}<span>${esc(p.titulo)}</span></div>`).join("");

  $("#lista-modalidades").innerHTML = E.modalidades.map((m) => `
    <article class="cartao">
      <div class="cartao__icone">${ico(m.icone)}</div>
      <h3>${esc(m.titulo)}</h3>
      <p>${esc(m.texto)}</p>
    </article>`).join("");

  $("#lista-etapas").innerHTML = E.etapas.map((e, i) => `
    <li><span class="linha-tempo__n">${i + 1}</span><h3>${esc(e.titulo)}</h3><p>${esc(e.texto)}</p></li>`).join("");

  // Documentos agrupados
  const grupos = [...new Set(E.documentos.map((d) => d.grupo))];
  const rotuloStatus = { disponivel: "Disponível" };
  $("#lista-documentos").innerHTML = grupos.map((g) => `
    <div class="doc-grupo">
      <h3>${esc(g)}</h3>
      <ul>${E.documentos.filter((d) => d.grupo === g).map((d) => `
        <li>
          ${ico("documento")}
          <span class="doc-nome">${esc(d.nome)}${d.validade ? `<small>Válido até ${esc(d.validade)}</small>` : ""}</span>
          ${d.status === "disponivel" ? `<span class="chip chip--ok">${rotuloStatus.disponivel}</span>` : ""}
        </li>`).join("")}
      </ul>
    </div>`).join("");

  const portais = E.portais.filter((p) => p.ativo);
  if (portais.length) {
    $("#lista-portais").innerHTML = portais.map((p) => `
      <li><span>${esc(p.nome)}</span><span class="chip chip--ok">Cadastrado</span></li>`).join("");
  } else {
    $("#lista-portais").closest(".painel").remove();
  }
  $("#lista-beneficios").innerHTML = E.beneficiosME.map((b) => `<li>${ico("check")}<span>${esc(b)}</span></li>`).join("");

  $("#lista-diferenciais").innerHTML = E.diferenciais.map((d) => `
    <div class="diferencial">${ico(d.icone)}<div><h3>${esc(d.titulo)}</h3><p>${esc(d.texto)}</p></div></div>`).join("");

  $("#lista-faq").innerHTML = E.faq.map((f, i) => `
    <details class="faq__item" ${i === 0 ? "open" : ""}><summary>${esc(f.p)}</summary><p>${esc(f.r)}</p></details>`).join("");

  $("#rodape-linhas").innerHTML = E.ramos.map((r) => `<li><a href="#produtos" data-abrir="${r.id}">${esc(r.titulo)}</a></li>`).join("");
  $("#check-linhas").innerHTML = E.ramos.map((r) => `
    <label class="check"><input type="checkbox" name="linhas" value="${esc(r.titulo)}"><span>${esc(r.titulo)}</span></label>`).join("");

  /* ---------- Ícones estáticos ---------- */
  $$("i[data-icon]").forEach((i) => (i.outerHTML = ico(i.dataset.icon)));

  /* ---------- Atalhos: "cotar esta linha" / abrir aba pelo rodapé ---------- */
  document.addEventListener("click", (e) => {
    const cotar = e.target.closest("[data-cotar]");
    if (cotar) {
      const r = E.ramos.find((x) => x.id === cotar.dataset.cotar);
      $$('#check-linhas input').forEach((c) => (c.checked = c.value === r.titulo));
    }
    const abrir = e.target.closest("[data-abrir]");
    if (abrir) ativar($("#aba-" + abrir.dataset.abrir));
    if (e.target.closest("#btn-kit")) $('select[name="tipo"]').value = "Documentação de habilitação";
  });

  /* ---------- Formulário ---------- */
  const form = $("#form-contato");
  form.addEventListener("submit", (ev) => {
    ev.preventDefault();
    const erro = $(".form__erro", form);
    if (!form.checkValidity()) {
      erro.hidden = false;
      form.querySelector(":invalid").focus();
      return;
    }
    erro.hidden = true;
    const f = new FormData(form);
    const linhas = f.getAll("linhas").join(", ") || "-";
    const assunto = `${f.get("tipo")} – ${f.get("orgao")}${f.get("edital") ? " – " + f.get("edital") : ""}`;
    const corpo = [
      `Órgão/entidade: ${f.get("orgao")}`,
      `Responsável: ${f.get("nome")}`,
      `E-mail: ${f.get("email")}`,
      `Telefone: ${f.get("telefone") || "-"}`,
      `Tipo: ${f.get("tipo")}`,
      `Processo/edital: ${f.get("edital") || "-"}`,
      `Linhas de interesse: ${linhas}`,
      "",
      f.get("mensagem"),
    ].join("\n");
    window.location.href = `mailto:${E.contato.email}?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(corpo)}`;
  });

  /* ---------- Menu mobile ---------- */
  const btn = $(".menu-btn");
  const nav = $("#nav");
  const fecharMenu = () => { nav.classList.remove("aberta"); btn.setAttribute("aria-expanded", "false"); btn.innerHTML = ico("menu"); };
  btn.addEventListener("click", () => {
    const aberto = nav.classList.toggle("aberta");
    btn.setAttribute("aria-expanded", aberto);
    btn.innerHTML = ico(aberto ? "fechar" : "menu");
  });
  nav.addEventListener("click", (e) => { if (e.target.closest("a")) fecharMenu(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") fecharMenu(); });

  /* ---------- Cabeçalho com sombra, botão topo, link ativo ---------- */
  const topo = $("#topo");
  const voltar = $(".voltar-topo");
  const onScroll = () => {
    const y = window.scrollY;
    topo.classList.toggle("rolado", y > 10);
    voltar.classList.toggle("visivel", y > 700);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  const links = $$('.nav a[href^="#"]:not(.nav__cta)');
  const obs = new IntersectionObserver((ents) => {
    ents.forEach((en) => {
      if (!en.isIntersecting) return;
      links.forEach((l) => l.classList.toggle("ativo", l.getAttribute("href") === "#" + en.target.id));
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  links.forEach((l) => { const s = $(l.getAttribute("href")); if (s) obs.observe(s); });

  /* ---------- Animação de entrada ---------- */
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const alvos = $$(".secao__cab, .cartao, .publico, .linha-tempo li, .doc-grupo, .painel, .diferencial, .ficha, .faq__item, .numero");
    alvos.forEach((a) => a.classList.add("revelar"));
    const io = new IntersectionObserver((ents) => {
      ents.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("visto"); io.unobserve(en.target); } });
    }, { rootMargin: "0px 0px -8% 0px" });
    alvos.forEach((a) => io.observe(a));
  }
})();
