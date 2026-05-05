const translations = {
  pt: {
    pageTitle: "Nelson Vicente | Links & Projetos",
    heroKicker: "Fundador da Sirius GreenTech",
    heroSubtitle:
      "Certificados energeticos, camadas de prova, sistemas de IA e ferramentas praticas para projetos serios.",
    viewProjects: "Ver projetos",
    linksKicker: "Todos os links",
    linksTitle: "Sites e projetos",
    serialAliceText: "Prova criptografica para IA, computacao, dados e processos",
    siriusText: "Projeto mae: energia, sustentabilidade e automacao inteligente",
    shieldConsoleText: "Consola operacional do projeto Shield Sky",
    shieldText: "Projeto em desenvolvimento",
    joaquimText: "Projeto social em homenagem ao meu pai",
    instagramText: "Perfil pessoal e atualizacoes dos projetos",
    tiktokText: "Conteudo social e momentos com o Snow",
    statProof: "Sistemas de prova",
    statEnergy: "Energia pronta",
    statTools: "Ferramentas reais",
    footerText: "Links oficiais e projetos ativos",
    quickActionsLabel: "Contactos principais",
    highlightsLabel: "Destaques",
    profilePhotoAlt: "Foto de Nelson Vicente",
  },
  en: {
    pageTitle: "Nelson Vicente | Links & Projects",
    heroKicker: "Founder of Sirius GreenTech",
    heroSubtitle:
      "Energy certificates, proof layers, AI systems and practical tools for serious projects.",
    viewProjects: "View projects",
    linksKicker: "All links",
    linksTitle: "Sites and projects",
    serialAliceText: "Cryptographic proof for AI, compute, data and processes",
    siriusText: "Parent project: energy, sustainability and intelligent automation",
    shieldConsoleText: "Operational console for the Shield Sky project",
    shieldText: "Project in development",
    joaquimText: "Social project in tribute to my father",
    instagramText: "Personal profile and project updates",
    tiktokText: "Social content and moments with Snow",
    statProof: "Proof systems",
    statEnergy: "Energy ready",
    statTools: "Buildable tools",
    footerText: "Official links and active projects",
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
