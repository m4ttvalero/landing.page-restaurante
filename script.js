"use strict";
/* ============ CONFIGURAÇÕES (substituir pelo restaurante real) ============ */
const CONFIG = {
  whatsapp: "5511900000000", // DDI+DDD+número, só dígitos (número fictício)
  phone: "(11) 0000-0000", // telefone demonstrativo
  address: "Rua Exemplo, 000 — Cidade/UF (endereço fictício)",
  hours: [
    ["Ter a qui", "12h–15h · 19h–23h"],
    ["Sex e sáb", "12h–16h · 19h–00h"],
    ["Dom", "12h–17h"],
    ["Seg", "Fechado"],
  ],
  mapsUrl: "https://www.google.com/maps", // trocar pelo link real do local
  mapEmbed: "", // URL de embed do Google Maps; vazio = sem mapa
  social: {
    Instagram: "https://www.instagram.com/",
    Facebook: "https://www.facebook.com/",
  },
  times: [
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "14:00",
    "19:00",
    "19:30",
    "20:00",
    "20:30",
    "21:00",
    "21:30",
  ],
  maxGuests: 10,
};
/* ============ DADOS DEMONSTRATIVOS ============ */
const IMG = (id) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1000&q=80`;
const DISHES = [
  {
    id: 1,
    cat: "Entradas",
    name: "Burrata e tomate assado",
    desc: "Burrata cremosa, tomate assado e azeite de ervas.",
    price: 48,
    img: IMG("1540189549336-e6e99c3679fe"),
    ing: "Burrata, tomate, azeite, manjericão, pão rústico",
  },
  {
    id: 2,
    cat: "Entradas",
    name: "Salada da estação",
    desc: "Folhas, vegetais da época e vinagrete leve.",
    price: 36,
    img: IMG("1546069901-ba9599a7e63c"),
    ing: "Folhas, vegetais sazonais, vinagrete de limão",
  },
  {
    id: 3,
    cat: "Pratos principais",
    name: "Filé na brasa",
    desc: "Corte grelhado com redução de vinho e legumes.",
    price: 96,
    img: IMG("1544025162-d76694265947"),
    ing: "Filé bovino, redução de vinho, legumes assados",
    star: true,
  },
  {
    id: 4,
    cat: "Pratos principais",
    name: "Peixe do dia",
    desc: "Pescado do dia, purê rústico e ervas frescas.",
    price: 88,
    img: IMG("1519708227418-c8fd9a32b7a2"),
    ing: "Peixe do dia, purê, ervas, manteiga clarificada",
  },
  {
    id: 5,
    cat: "Pratos principais",
    name: "Prato da casa",
    desc: "Criação autoral que muda a cada estação.",
    price: 104,
    img: IMG("1504674900247-0877df9cc836"),
    ing: "Proteína da estação, acompanhamentos sazonais, molho da casa",
    feat: true,
  },
  {
    id: 6,
    cat: "Massas",
    name: "Tagliatelle ao funghi",
    desc: "Massa fresca, cogumelos salteados e parmesão.",
    price: 72,
    img: IMG("1621996346565-e3dbc646d9a9"),
    ing: "Massa fresca, cogumelos, manteiga, parmesão",
    star: true,
  },
  {
    id: 7,
    cat: "Massas",
    name: "Spaghetti ao limone",
    desc: "Creme cítrico, pimenta-do-reino e raspas de limão.",
    price: 64,
    img: IMG("1473093295043-cdd812d0e601"),
    ing: "Spaghetti, limão siciliano, manteiga, pimenta",
  },
  {
    id: 8,
    cat: "Sobremesas",
    name: "Bolo de chocolate",
    desc: "Chocolate intenso, textura úmida e calda quente.",
    price: 34,
    img: IMG("1578985545062-69928b1d9587"),
    ing: "Chocolate, cacau, ovos, manteiga",
  },
  {
    id: 9,
    cat: "Sobremesas",
    name: "Sobremesa da casa",
    desc: "Sugestão do chef, que muda com a estação.",
    price: 38,
    img: IMG("1551024506-0bccd828d307"),
    ing: "Ingredientes de estação — consulte o restaurante",
    star: true,
  },
  {
    id: 10,
    cat: "Bebidas",
    name: "Drink autoral",
    desc: "Coquetel de assinatura com cítricos e ervas.",
    price: 42,
    img: IMG("1470337458703-46ad1756a187"),
    ing: "Destilado, cítricos, ervas, xarope da casa",
  },
];
const GALLERY = [
  ["1517248135467-4c7edcad34c4", "Salão do restaurante"],
  ["1476224203421-9ac39bcb3327", "Prato servido à mesa"],
  ["1493770348161-369560ae357d", "Mesa com pratos e ingredientes"],
  ["1555396273-367ea4eb4db5", "Ambiente com iluminação suave"],
  ["1482049016688-2d3e1b311543", "Entrada com ingredientes frescos"],
  ["1514933651103-005eec06c04b", "Detalhe do salão à noite"],
].map(([id, alt]) => ({ src: IMG(id), alt }));

/* ============ UTILIDADES ============ */
const $ = (s, r = document) => r.querySelector(s);
const brl = (n) =>
  n.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
const digits = (s) => s.replace(/\D/g, "");

/* ============ HEADER E MENU MOBILE ============ */
const hdr = $("#topo"),
  nav = $("#nav"),
  burger = $("#burger");
const onScroll = () => hdr.classList.toggle("solid", scrollY > 40);
addEventListener("scroll", onScroll, { passive: true });
onScroll();
function toggleNav(open) {
  nav.classList.toggle("open", open);
  burger.setAttribute("aria-expanded", open);
  burger.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
  document.body.style.overflow = open ? "hidden" : "";
}
burger.addEventListener("click", () =>
  toggleNav(!nav.classList.contains("open")),
);
nav.addEventListener("click", (e) => {
  if (e.target.closest("a")) toggleNav(false);
});
addEventListener("keydown", (e) => {
  if (e.key === "Escape" && nav.classList.contains("open")) {
    toggleNav(false);
    burger.focus();
  }
});

/* ============ CARDÁPIO ============ */
const cats = ["Todos", ...new Set(DISHES.map((d) => d.cat))];
let current = "Todos";
function renderFilters() {
  $("#filters").innerHTML = cats
    .map(
      (c) =>
        `<button type="button" aria-pressed="${c === current}" data-cat="${c}">${c}</button>`,
    )
    .join("");
  $("#footCats").innerHTML = cats
    .slice(1)
    .map((c) => `<a href="#cardapio" data-cat="${c}">${c}</a>`)
    .join("");
}
function renderMenu() {
  const list = DISHES.filter((d) => current === "Todos" || d.cat === current);
  $("#menuGrid").innerHTML = list
    .map(
      (d) => `
    <button class="dish" type="button" data-id="${d.id}" aria-label="${d.name}, ${brl(d.price)}. Ver detalhes">
      <div class="ph"><img loading="lazy" src="${d.img}" alt="${d.name}"></div>
      <h3>${d.name}<b>${brl(d.price)}</b></h3><p>${d.desc}</p>${d.star ? '<span class="tag">Destaque da casa</span>' : ""}
    </button>`,
    )
    .join("");
}
function setCat(c) {
  current = c;
  renderFilters();
  renderMenu();
}
$("#filters").addEventListener("click", (e) => {
  const b = e.target.closest("button");
  if (b) setCat(b.dataset.cat);
});
$("#footCats").addEventListener("click", (e) => {
  const a = e.target.closest("a");
  if (a) setCat(a.dataset.cat);
});

/* ============ MODAL DE PRATO ============ */
const dish = $("#dish");
function openDish(id) {
  const d = DISHES.find((x) => x.id === +id);
  if (!d) return;
  $("#dImg").src = d.img;
  $("#dImg").alt = d.name;
  $("#dImg").parentElement.classList.remove("fail");
  $("#dCat").textContent = d.cat;
  $("#dName").textContent = d.name;
  $("#dDesc").textContent = d.desc;
  $("#dIng").textContent = "Ingredientes (demonstrativo): " + d.ing;
  $("#dPrice").textContent = brl(d.price);
  dish.showModal();
}
$("#menuGrid").addEventListener("click", (e) => {
  const b = e.target.closest(".dish");
  if (b) openDish(b.dataset.id);
});
document.addEventListener("click", (e) => {
  if (e.target.matches("[data-close]")) e.target.closest("dialog").close();
  else if (e.target.tagName === "DIALOG") e.target.close(); // clique fora
});

/* ============ PRATO EM DESTAQUE ============ */
const feat = DISHES.find((d) => d.feat);
$("#featName").textContent = feat.name;
$("#featDesc").textContent = feat.desc;
$("#featPrice").textContent = brl(feat.price);
$("#featBtn").addEventListener("click", () => openDish(feat.id));

/* ============ GALERIA + LIGHTBOX ============ */
const lb = $("#lb");
let idx = 0;
$("#galGrid").innerHTML = GALLERY.map(
  (g, i) =>
    `<button type="button" data-i="${i}" aria-label="Ampliar: ${g.alt}"><img loading="lazy" src="${g.src}" alt="${g.alt}"></button>`,
).join("");
function showPhoto(i) {
  idx = (i + GALLERY.length) % GALLERY.length;
  $("#lbImg").src = GALLERY[idx].src;
  $("#lbImg").alt = GALLERY[idx].alt;
}
$("#galGrid").addEventListener("click", (e) => {
  const b = e.target.closest("button");
  if (b) {
    showPhoto(+b.dataset.i);
    lb.showModal();
  }
});
$("#prev").addEventListener("click", () => showPhoto(idx - 1));
$("#next").addEventListener("click", () => showPhoto(idx + 1));
lb.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") showPhoto(idx - 1);
  if (e.key === "ArrowRight") showPhoto(idx + 1);
});
let x0 = 0;
lb.addEventListener(
  "touchstart",
  (e) => {
    x0 = e.touches[0].clientX;
  },
  { passive: true },
);
lb.addEventListener("touchend", (e) => {
  const dx = e.changedTouches[0].clientX - x0;
  if (Math.abs(dx) > 50) showPhoto(idx + (dx < 0 ? 1 : -1));
});

/* ============ RESERVAS (WHATSAPP) ============ */
const form = $("#form");
form.hora.innerHTML =
  '<option value="">Selecione</option>' +
  CONFIG.times.map((t) => `<option>${t}</option>`).join("");
form.pessoas.innerHTML =
  '<option value="">Selecione</option>' +
  Array.from(
    { length: CONFIG.maxGuests },
    (_, i) =>
      `<option value="${i + 1}">${i + 1} ${i ? "pessoas" : "pessoa"}</option>`,
  ).join("");
const today = new Date(Date.now() - new Date().getTimezoneOffset() * 6e4)
  .toISOString()
  .slice(0, 10);
form.data.min = today;
function check(f) {
  const v = f.value.trim();
  let m = "";
  if (f.name === "nome" && v.length < 3) m = "Informe seu nome.";
  else if (f.name === "tel" && !/^\d{10,11}$/.test(digits(v)))
    m = "Informe DDD e telefone válidos.";
  else if (f.name === "data")
    m = !v
      ? "Escolha uma data."
      : v < today
        ? "A data não pode ser passada."
        : "";
  else if ((f.name === "hora" || f.name === "pessoas") && !v)
    m = "Selecione uma opção.";
  f.classList.toggle("bad", !!m);
  f.setAttribute("aria-invalid", !!m);
  if (f.nextElementSibling) f.nextElementSibling.textContent = m;
  return !m;
}
const fields = ["nome", "tel", "data", "hora", "pessoas"].map((n) => form[n]);
fields.forEach((f) => f.addEventListener("blur", () => check(f)));
function buildMessage(d) {
  const [y, m, day] = d.data.split("-");
  return [
    "Olá! Gostaria de solicitar uma reserva na VÉRA:",
    `Nome: ${d.nome}`,
    `Telefone: ${d.tel}`,
    `Data: ${day}/${m}/${y}`,
    `Horário: ${d.hora}`,
    `Pessoas: ${d.pessoas}`,
    `Observações: ${d.obs || "—"}`,
  ].join("\n");
}
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const ok = fields.map(check).every(Boolean);
  const msg = $("#formMsg");
  msg.className = "form-msg full";
  if (!ok) {
    msg.textContent = "Revise os campos destacados.";
    fields.find((f) => f.classList.contains("bad")).focus();
    return;
  }
  const data = Object.fromEntries(new FormData(form));
  const url = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(buildMessage(data))}`;
  msg.classList.add("ok");
  msg.textContent =
    "Abrindo o WhatsApp. Sua solicitação será enviada ao restaurante e só é confirmada após a resposta deles.";
  window.open(url, "_blank", "noopener");
});

/* ============ LOCALIZAÇÃO, CONTATO, RODAPÉ ============ */
$("#addr").textContent = CONFIG.address;
$("#hours").innerHTML = CONFIG.hours
  .map(([d, h]) => `<dt>${d}</dt><dd>${h}</dd>`)
  .join("");
$("#telLink").textContent = CONFIG.phone + " (demonstrativo)";
$("#telLink").href = "tel:" + digits(CONFIG.phone);
$("#wa").href =
  `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent("Olá! Vim pelo site da VÉRA.")}`;
$("#maps").href = CONFIG.mapsUrl;
$("#map").innerHTML = CONFIG.mapEmbed
  ? `<iframe loading="lazy" title="Mapa" src="${CONFIG.mapEmbed}"></iframe>`
  : "Mapa indisponível na demonstração. Configure mapEmbed para exibir a localização real.";
$("#social").innerHTML = Object.entries(CONFIG.social)
  .map(
    ([n, u]) =>
      `<li><a href="${u}" target="_blank" rel="noopener">${n}</a></li>`,
  )
  .join("");
$("#fAddr").textContent = CONFIG.address;
$("#fTel").textContent = CONFIG.phone;
$("#fHours").textContent = CONFIG.hours
  .slice(0, 2)
  .map((h) => h.join(": "))
  .join(" | ");
$("#year").textContent = new Date().getFullYear();

/* ============ FALHA DE IMAGEM + REVELAÇÃO ============ */
addEventListener(
  "error",
  (e) => {
    if (e.target.tagName === "IMG") {
      const p = e.target.closest(".ph,.feat-img,.gal-grid button,.about-img");
      if (p) p.classList.add("fail");
    }
  },
  true,
);
const io =
  "IntersectionObserver" in window
    ? new IntersectionObserver(
        (es) =>
          es.forEach((en) => {
            if (en.isIntersecting) {
              en.target.classList.add("in");
              io.unobserve(en.target);
            }
          }),
        { threshold: 0.12 },
      )
    : null;
document
  .querySelectorAll(".rv")
  .forEach((el) => (io ? io.observe(el) : el.classList.add("in")));

renderFilters();
renderMenu();