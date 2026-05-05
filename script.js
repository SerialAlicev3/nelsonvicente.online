const translations = {
  pt: {
    pageTitle: "Nelson Vicente | Serial Alice & Projetos",
    heroKicker: "Founder of Serial Alice",
    heroSubtitle: "Infraestrutura verificavel para energia e IA.",
    viewProjects: "Ver projetos",
    linksKicker: "Comeca aqui",
    linksTitle: "Energy -> Compute -> Proof",
    serialAliceText: "Produto: prova para sistemas de IA e energia",
    siriusText: "Visao: infraestrutura energetica e inovacao aplicada",
    shieldConsoleText: "Consola: acesso operacional ao ShieldSky",
    shieldText: "Futuro: camada de seguranca e cloud em desenvolvimento",
    joaquimText: "Social: projeto em homenagem ao meu pai",
    instagramText: "Atualizacoes, contexto e sinal pessoal",
    tiktokText: "Nelson & Snow: conteudo social",
    statProof: "Proof for AI",
    statEnergy: "Energy systems",
    statTools: "Compute rails",
    footerText: "Serial Alice primeiro. O resto vem a seguir.",
    quickActionsLabel: "Contactos principais",
    highlightsLabel: "Destaques",
    profilePhotoAlt: "Foto de Nelson Vicente",
  },
  en: {
    pageTitle: "Nelson Vicente | Serial Alice & Projects",
    heroKicker: "Founder of Serial Alice",
    heroSubtitle: "Verifiable energy & AI infrastructure.",
    viewProjects: "View projects",
    linksKicker: "Start here",
    linksTitle: "Energy -> Compute -> Proof",
    serialAliceText: "Product: proof for AI & energy systems",
    siriusText: "Vision: energy infrastructure and applied innovation",
    shieldConsoleText: "Console: operational access for ShieldSky",
    shieldText: "Future: security and cloud layer in development",
    joaquimText: "Social: tribute project in honor of my father",
    instagramText: "Updates, context and personal signal",
    tiktokText: "Nelson & Snow: social content",
    statProof: "Proof for AI",
    statEnergy: "Energy systems",
    statTools: "Compute rails",
    footerText: "Serial Alice first. Everything else follows.",
    quickActionsLabel: "Main contacts",
    highlightsLabel: "Highlights",
    profilePhotoAlt: "Photo of Nelson Vicente",
  },
};

const buttons = document.querySelectorAll("[data-set-lang]");
const textNodes = document.querySelectorAll("[data-i18n]");
const attrNodes = document.querySelectorAll("[data-i18n-attr]");

function setLanguage(lang) {
  const dictionary = translations[lang] || translations.pt;

  document.documentElement.lang = lang === "pt" ? "pt" : "en";
  document.documentElement.dataset.lang = lang;
  document.title = dictionary.pageTitle;
  localStorage.setItem("preferred-language", lang);

  textNodes.forEach((node) => {
    const key = node.dataset.i18n;
    if (dictionary[key]) {
      node.textContent = dictionary[key];
    }
  });

  attrNodes.forEach((node) => {
    node.dataset.i18nAttr.split(",").forEach((pair) => {
      const [attr, key] = pair.split(":").map((value) => value.trim());
      if (attr && dictionary[key]) {
        node.setAttribute(attr, dictionary[key]);
      }
    });
  });

  buttons.forEach((button) => {
    const active = button.dataset.setLang === lang;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
}

buttons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.setLang));
});

setLanguage(localStorage.getItem("preferred-language") || "pt");
