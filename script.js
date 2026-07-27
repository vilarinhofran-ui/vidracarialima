const themeStorageKey = "vidracaria-theme";
const mediaStorageKey = "vidracaria-media-items";
const devAuthStorageKey = "vidracaria-dev-auth";
const promoAudioSource = "assets/trilha.mp3";
const flipLogoSource = "assets/logo%20classe%20a.png";

const defaultMediaItems = [
  {
    id: "default-1",
    section: "trabalhos",
    type: "image",
    title: "Projeto realizado",
    description: "Registro real de instalação e acabamento.",
    url: "assets/WhatsApp%20Image%202026-07-23%20at%2011.13.25.jpeg",
  },
  {
    id: "default-2",
    section: "trabalhos",
    type: "image",
    title: "Projeto realizado",
    description: "Acabamento profissional em vidro sob medida.",
    url: "assets/WhatsApp%20Image%202026-07-23%20at%2011.13.25%20%281%29.jpeg",
    imagePosition: "center 34%",
    removeBlueAccent: true,
  },
  {
    id: "default-3",
    section: "trabalhos",
    type: "image",
    title: "Projeto realizado",
    description: "Detalhes de execução e alinhamento técnico.",
    url: "assets/WhatsApp%20Image%202026-07-23%20at%2011.13.28.jpeg",
  },
  {
    id: "default-4",
    section: "trabalhos",
    type: "image",
    title: "Projeto realizado",
    description: "Solução em vidro aplicada no ambiente.",
    url: "assets/WhatsApp%20Image%202026-07-23%20at%2011.13.29.jpeg",
  },
  {
    id: "default-5",
    section: "projetos",
    type: "image",
    title: "Projeto em destaque",
    description: "Aplicação com visual moderno e funcional.",
    url: "assets/WhatsApp%20Image%202026-07-23%20at%2011.13.29.jpeg",
  },
  {
    id: "default-6",
    section: "projetos",
    type: "image",
    title: "Projeto em destaque",
    description: "Qualidade e precisão no resultado final.",
    url: "assets/WhatsApp%20Image%202026-07-23%20at%2011.13.29%20%281%29.jpeg",
  },
  {
    id: "default-7",
    section: "projetos",
    type: "image",
    title: "Projeto em destaque",
    description: "Execução limpa e acabamento valorizado.",
    url: "assets/WhatsApp%20Image%202026-07-23%20at%2011.13.31.jpeg",
  },
  {
    id: "default-8",
    section: "projetos",
    type: "image",
    title: "Projeto em destaque",
    description: "Ambiente transformado com vidros sob medida.",
    url: "assets/WhatsApp%20Image%202026-07-23%20at%2011.13.33.jpeg",
  },
  {
    id: "default-9",
    section: "projetos",
    type: "image",
    title: "Projeto em destaque",
    description: "Mais um projeto concluído com excelência.",
    url: "assets/WhatsApp%20Image%202026-07-23%20at%2011.15.39.jpeg",
  },
  {
    id: "default-10",
    section: "videos",
    type: "video",
    title: "Vídeo em destaque",
    description: "Registro em vídeo de projeto executado.",
    url: "assets/WhatsApp%20Video%202026-07-23%20at%2011.15.39.mp4",
  },
  {
    id: "default-11",
    section: "videos",
    type: "video",
    title: "Vídeo em destaque",
    description: "Demonstração prática do resultado final.",
    url: "assets/WhatsApp%20Video%202026-07-23%20at%2011.17.31.mp4",
    hasNativeAudio: true,
    promoFallback: false,
  },
  {
    id: "default-12",
    section: "avaliacoes",
    type: "video",
    title: "Avaliação em vídeo",
    description: "Depoimento real com foco na experiência e no acabamento.",
    url: "assets/recomenda%C3%A7%C3%A3o.mp4",
    hideMeta: true,
  },
  {
    id: "default-13",
    section: "trabalhos",
    type: "video",
    title: "Box em destaque",
    description: "Execução de box com acabamento premium.",
    url: "assets/box.mp4",
  },
  {
    id: "default-14",
    section: "projetos",
    type: "video",
    title: "Varanda em destaque",
    description: "Projeto de varanda em vidro com visual sofisticado.",
    url: "assets/varanda.mp4",
  },
  {
    id: "default-15",
    section: "videos",
    type: "video",
    title: "Box em vídeo",
    description: "Demonstração em vídeo do projeto de box.",
    url: "assets/box.mp4",
    hasNativeAudio: true,
    promoFallback: false,
  },
  {
    id: "default-16",
    section: "videos",
    type: "video",
    title: "Varanda em vídeo",
    description: "Demonstração em vídeo do fechamento de varanda.",
    url: "assets/varanda.mp4",
  },
];

const credentials = {
  username: "classea.admin@1997",
  password: "classea.admin@1997",
};

const catalogCardLabels = {
  divisorias: "Divisórias",
  coberturas: "Coberturas",
  "guarda-corpo": "Guarda-corpo",
  telas: "Telas",
  muros: "Muros",
  espelhos: "Espelhos",
  "box-de-vidro": "Box de vidro",
  portas: "Portas",
  janelas: "Janelas",
  diversos: "Diversos",
};

const sectionLabels = {
  projetos: "Projetos",
  trabalhos: "Trabalhos",
  videos: "Vídeos",
  avaliacoes: "Avaliações",
  catalogo: "Catálogo",
};

const handleWhatsAppClick = (event) => {
  if (event) {
    event.preventDefault();
  }

  const fallbackUrl =
    "https://api.whatsapp.com/send/?phone=41991371768&text&type=phone_number&app_absent=0&utm_source=ig";
  const anchor =
    event && event.currentTarget instanceof HTMLAnchorElement
      ? event.currentTarget
      : null;
  const targetUrl = anchor?.href || fallbackUrl;

  if (typeof window.gtag === "function") {
    gtag("event", "conversion", {
      send_to: "AW-18044176642/UT1YCOvsppocEIKSkZxD",
    });
  }

  window.open(targetUrl, "_blank", "noopener,noreferrer");
};

const menuToggle = document.querySelector(".menu-toggle");
const themeToggle = document.querySelector(".theme-toggle");
const navigation = document.querySelector(".nav-links");
const yearElement = document.querySelector("#year");
const navLinks = document.querySelectorAll(".nav-links a");

const preferredTheme = localStorage.getItem(themeStorageKey) || "dark";

const setMenuState = (isOpen) => {
  if (!navigation || !menuToggle) {
    return;
  }
  navigation.classList.toggle("is-open", isOpen);
  menuToggle.classList.toggle("is-active", isOpen);
  document.body.classList.toggle("menu-open", isOpen);
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
};

const applyTheme = (theme) => {
  document.body.dataset.theme = theme;
  if (!themeToggle) {
    return;
  }
  themeToggle.innerHTML =
    theme === "light"
      ? '<span class="theme-toggle-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M12 3v2.2"/><path d="M12 18.8V21"/><path d="M4.2 4.2l1.6 1.6"/><path d="M18.2 18.2l1.6 1.6"/><path d="M3 12h2.2"/><path d="M18.8 12H21"/><path d="M4.2 19.8l1.6-1.6"/><path d="M18.2 5.8l1.6-1.6"/><circle cx="12" cy="12" r="4.5"/></svg></span><span class="sr-only">Tema claro</span>'
      : '<span class="theme-toggle-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M21 14.8A8.5 8.5 0 1 1 9.2 3a7 7 0 1 0 11.8 11.8Z"/></svg></span><span class="sr-only">Tema escuro</span>';
  themeToggle.setAttribute("aria-pressed", String(theme === "light"));
  themeToggle.setAttribute(
    "aria-label",
    theme === "light"
      ? "Alternar para tema escuro"
      : "Alternar para tema claro",
  );
};

const observeReveals = () => {
  const revealElements = document.querySelectorAll(".reveal");
  if (!revealElements.length || !("IntersectionObserver" in window)) {
    revealElements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 },
  );

  revealElements.forEach((element) => observer.observe(element));
};

const initActiveSectionObserver = () => {
  const sectionLinks = Array.from(navLinks).filter((link) =>
    (link.getAttribute("href") || "").startsWith("#"),
  );
  if (!sectionLinks.length || !("IntersectionObserver" in window)) {
    return;
  }

  const activeSectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }
        sectionLinks.forEach((link) => {
          link.classList.toggle(
            "is-active",
            link.getAttribute("href") === `#${entry.target.id}`,
          );
        });
      });
    },
    { threshold: 0.45 },
  );

  document.querySelectorAll("main section[id]").forEach((section) => {
    activeSectionObserver.observe(section);
  });
};

const readMediaItems = () => {
  try {
    const raw = localStorage.getItem(mediaStorageKey);
    const parsed = raw ? JSON.parse(raw) : [];
    if (!Array.isArray(parsed)) {
      return [...defaultMediaItems];
    }
    return [...defaultMediaItems, ...parsed];
  } catch {
    return [...defaultMediaItems];
  }
};

const saveMediaItems = (items) => {
  localStorage.setItem(mediaStorageKey, JSON.stringify(items));
};

const uniqueMediaItems = (items) => {
  const seen = new Set();
  return items.filter((item) => {
    const urlPart = (item.url || "").trim().toLowerCase();
    const titlePart = (item.title || "").trim().toLowerCase();
    const descriptionPart = (item.description || "").trim().toLowerCase();
    const catalogPart = (item.catalogCard || "").trim().toLowerCase();
    const key = `${item.section}|${catalogPart}|${item.type}|${urlPart}|${titlePart}|${descriptionPart}`;
    if (seen.has(key)) {
      return false;
    }
    seen.add(key);
    return true;
  });
};

const toInstagramEmbedUrl = (url) => {
  const match = url.match(/instagram\.com\/(p|reel|tv)\/([^/?#]+)/i);
  if (!match) {
    return url;
  }
  const kind = match[1].toLowerCase();
  const code = match[2];
  return `https://www.instagram.com/${kind}/${code}/embed`;
};

const isBrandLogoImage = (url) => {
  const normalized = (url || "").toLowerCase();
  return (
    normalized.includes("logo%20classe%20a") ||
    normalized.includes("logo classe a")
  );
};

const createMediaElement = (item) => {
  if (item.type === "video") {
    const video = document.createElement("video");
    video.src = item.url;
    video.controls = true;
    video.preload = "metadata";
    video.playsInline = true;
    if (item.id) {
      video.dataset.mediaId = item.id;
    }
    if (item.promoFallback === false) {
      video.dataset.promoFallback = "off";
    }
    if (typeof item.hasNativeAudio === "boolean") {
      video.dataset.hasNativeAudio = item.hasNativeAudio ? "1" : "0";
    }
    return video;
  }

  if (item.type === "embed") {
    const iframe = document.createElement("iframe");
    iframe.src = toInstagramEmbedUrl(item.url);
    iframe.loading = "lazy";
    iframe.referrerPolicy = "strict-origin-when-cross-origin";
    iframe.allow = "autoplay; encrypted-media; clipboard-write; fullscreen";
    iframe.title = item.title || "Mídia incorporada";
    return iframe;
  }

  const img = document.createElement("img");
  img.src = item.url;
  img.loading = "lazy";
  img.alt = item.title || "Imagem de projeto";
  if (isBrandLogoImage(item.url)) {
    img.classList.add("media-image-contain");
  }
  if (item.imagePosition) {
    img.style.objectPosition = item.imagePosition;
  }
  return img;
};

const renderMediaGrid = (container) => {
  const section = container.dataset.mediaSection;
  const enableImageFlip =
    section === "portfolio-projetos" || section === "projetos";
  const normalizedSections =
    section === "portfolio-projetos" ? ["trabalhos", "projetos"] : [section];
  const sectionItems = uniqueMediaItems(
    readMediaItems().filter((item) =>
      normalizedSections.includes(item.section),
    ),
  );
  container.innerHTML = "";

  if (!sectionItems.length) {
    const placeholder = document.createElement("article");
    placeholder.className = "project-card media-card";
    placeholder.innerHTML =
      "<h3>Nenhuma mídia publicada</h3><p>Use o painel do desenvolvedor para publicar URLs de imagem, vídeo ou embed.</p>";
    container.appendChild(placeholder);
    return;
  }

  sectionItems.forEach((item) => {
    const article = document.createElement("article");
    article.className = `project-card media-card media-type-${item.type} reveal is-visible`;
    if (item.removeBlueAccent) {
      article.classList.add("media-card-no-blue-point");
    }

    const frame = document.createElement("div");
    frame.className = "media-frame";
    if (item.type === "image" && enableImageFlip) {
      const flipInner = document.createElement("div");
      flipInner.className = "media-flip-inner";

      const frontFace = document.createElement("div");
      frontFace.className = "media-flip-face media-flip-front";

      const frontImage = document.createElement("img");
      frontImage.src = item.url;
      frontImage.loading = "lazy";
      frontImage.alt = item.title || "Imagem de projeto";
      if (isBrandLogoImage(item.url)) {
        frontImage.classList.add("media-image-contain");
      }
      if (item.imagePosition) {
        frontImage.style.objectPosition = item.imagePosition;
      }
      frontFace.appendChild(frontImage);

      const backFace = document.createElement("div");
      backFace.className = "media-flip-face media-flip-back";

      const frontLogo = document.createElement("img");
      frontLogo.className = "media-flip-logo";
      frontLogo.src = flipLogoSource;
      frontLogo.alt = "Logo Vidracaria Classe A";

      const frontLabel = document.createElement("span");
      frontLabel.className = "media-flip-label";
      frontLabel.textContent = "Vidracaria Classe A";

      backFace.append(frontLogo, frontLabel);

      flipInner.append(frontFace, backFace);
      frame.appendChild(flipInner);
    } else {
      frame.appendChild(createMediaElement(item));
    }

    article.appendChild(frame);

    if (!item.hideMeta) {
      const title = document.createElement("h3");
      title.textContent = item.title || "Projeto";

      const description = document.createElement("p");
      description.textContent =
        item.description || "Conteúdo publicado diretamente no site.";

      article.append(title, description);
    }

    container.appendChild(article);
  });
};

const renderCatalogMediaCards = () => {
  const catalogCards = document.querySelectorAll(
    ".catalog-card[data-catalog-key]",
  );
  if (!catalogCards.length) {
    return;
  }

  const catalogItems = uniqueMediaItems(
    readMediaItems().filter(
      (item) =>
        item.section === "catalogo" &&
        ["image", "video", "embed"].includes(item.type),
    ),
  );

  catalogCards.forEach((card) => {
    const cardKey = card.dataset.catalogKey;
    const mediaSlot = card.querySelector("[data-catalog-media]");
    if (!cardKey || !mediaSlot) {
      return;
    }

    const cardMedia = catalogItems.find((item) => item.catalogCard === cardKey);

    mediaSlot.innerHTML = "";
    mediaSlot.hidden = !cardMedia;
    card.classList.toggle("catalog-card-has-media", Boolean(cardMedia));

    if (!cardMedia) {
      return;
    }

    const frame = document.createElement("div");
    frame.className = "media-frame catalog-media-frame";
    frame.appendChild(createMediaElement(cardMedia));
    mediaSlot.appendChild(frame);
  });
};

const refreshDevMediaList = () => {
  const mediaList = document.querySelector("#dev-media-list");
  if (!mediaList) {
    return;
  }

  const customItems = readMediaItems().filter(
    (item) => !item.id.startsWith("default-"),
  );

  mediaList.innerHTML = "";

  if (!customItems.length) {
    const empty = document.createElement("p");
    empty.textContent = "Nenhuma mídia personalizada publicada ainda.";
    mediaList.appendChild(empty);
    return;
  }

  customItems.forEach((item) => {
    const wrapper = document.createElement("article");
    wrapper.className = "dev-media-item";

    const sectionLabel = sectionLabels[item.section] || item.section;
    const catalogSuffix =
      item.section === "catalogo" && item.catalogCard
        ? ` • ${catalogCardLabels[item.catalogCard] || item.catalogCard}`
        : "";

    const summary = document.createElement("p");
    summary.textContent = `${sectionLabel}${catalogSuffix} • ${item.type.toUpperCase()} • ${item.title || "Sem título"}`;

    const removeButton = document.createElement("button");
    removeButton.type = "button";
    removeButton.className = "btn btn-secondary dev-remove";
    removeButton.textContent = "Remover";
    removeButton.setAttribute("data-remove-id", item.id);

    wrapper.append(summary, removeButton);
    mediaList.appendChild(wrapper);
  });
};

const renderAllMedia = () => {
  document.querySelectorAll(".js-media-gallery").forEach((grid) => {
    renderMediaGrid(grid);
  });
  renderCatalogMediaCards();
  renderTestimonials();
  initSharedPromoAudio();
};

const initSharedPromoAudio = () => {
  const sectionVideoSelector = [
    "#videos video",
    "#vitrine-movimento video",
    "#projetos video",
    "#galeria-videos video",
    "#galeria-projetos video",
  ].join(", ");
  const videos = Array.from(document.querySelectorAll(sectionVideoSelector));
  if (!videos.length) {
    return;
  }

  let promoAudio = document.querySelector("#global-promo-audio");
  if (!promoAudio) {
    promoAudio = document.createElement("audio");
    promoAudio.id = "global-promo-audio";
    promoAudio.src = promoAudioSource;
    promoAudio.loop = true;
    promoAudio.preload = "auto";
    promoAudio.hidden = true;
    document.body.appendChild(promoAudio);
  }

  promoAudio.src = promoAudioSource;

  const hasNativeAudioTrack = (video) => {
    if (video.dataset.hasNativeAudio === "1") {
      return true;
    }

    if (video.dataset.hasNativeAudio === "0") {
      return false;
    }

    if (typeof video.mozHasAudio === "boolean") {
      return video.mozHasAudio;
    }

    const tracks = video.audioTracks;
    if (tracks && typeof tracks.length === "number") {
      return tracks.length > 0;
    }

    return false;
  };

  const shouldUsePromoFallback = (video) => {
    if (video.dataset.promoFallback === "off") {
      return false;
    }

    return !hasNativeAudioTrack(video);
  };

  const syncPromoAudioState = () => {
    const hasPlayingVideoWithoutNativeAudio = videos.some(
      (video) => !video.paused && !video.ended && shouldUsePromoFallback(video),
    );

    if (hasPlayingVideoWithoutNativeAudio) {
      promoAudio.play().catch(() => {
        // Browsers may block autoplay until user interaction.
      });
      return;
    }

    promoAudio.pause();
    promoAudio.currentTime = 0;
  };

  videos.forEach((video) => {
    if (video.dataset.promoAudioBound === "1") {
      return;
    }

    video.dataset.promoAudioBound = "1";

    video.addEventListener("play", () => {
      syncPromoAudioState();
    });

    video.addEventListener("pause", () => {
      syncPromoAudioState();
    });

    video.addEventListener("ended", () => {
      syncPromoAudioState();
    });

    video.addEventListener("loadedmetadata", () => {
      syncPromoAudioState();
    });

    video.addEventListener("volumechange", () => {
      syncPromoAudioState();
    });
  });

  syncPromoAudioState();
};

const renderTestimonials = () => {
  const container = document.querySelector(".js-testimonials-grid");
  if (!container) {
    return;
  }

  const createStarsRating = (ratingValue = 5) => {
    const safeRating = Math.max(1, Math.min(5, Number(ratingValue) || 5));
    const rating = document.createElement("div");
    rating.className = "testimonial-rating testimonial-rating-stars";
    rating.setAttribute("aria-label", `Avaliacao ${safeRating} estrelas`);
    rating.innerHTML = `${'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.7 14.9 8.6 21.4 9.5 16.7 14.1 17.8 20.6 12 17.6 6.2 20.6 7.3 14.1 2.6 9.5 9.1 8.6 12 2.7Z"/></svg>'.repeat(safeRating)}<span class="sr-only">${safeRating} estrelas</span>`;
    return rating;
  };

  const toDisplayDate = (dateValue) => {
    const parsedDate = new Date(dateValue || "");
    if (Number.isNaN(parsedDate.getTime())) {
      return "Publicado recentemente";
    }
    return `Publicado em ${parsedDate.toLocaleDateString("pt-BR")}`;
  };

  const getInitials = (text) => {
    const parts = String(text || "")
      .trim()
      .split(/\s+/)
      .filter(Boolean);
    if (!parts.length) {
      return "CL";
    }
    return parts
      .slice(0, 2)
      .map((part) => part[0]?.toUpperCase() || "")
      .join("");
  };

  const items = uniqueMediaItems(
    readMediaItems().filter((item) => item.section === "avaliacoes"),
  );
  const mediaItems = items.filter((item) => item.type !== "review");
  const reviewItems = items.filter((item) => item.type === "review");

  container.innerHTML = "";

  if (!mediaItems.length && !reviewItems.length) {
    const placeholder = document.createElement("article");
    placeholder.className = "service-card testimonial-card";
    const title = document.createElement("h3");
    title.textContent = "Avaliacoes em breve";
    const description = document.createElement("p");
    description.textContent =
      "Em breve, novos depoimentos de clientes satisfeitos.";
    placeholder.append(createStarsRating(), title, description);
    container.appendChild(placeholder);
    return;
  }

  mediaItems.forEach((item) => {
    const article = document.createElement("article");
    article.className = "service-card testimonial-card reveal is-visible";
    article.appendChild(createStarsRating());

    if (item.type === "video" || item.type === "embed") {
      article.classList.add("testimonial-media-card");
    }

    const frame = document.createElement("div");
    frame.className = "media-frame";
    frame.appendChild(createMediaElement(item));
    article.appendChild(frame);

    if (!item.hideMeta) {
      const title = document.createElement("h3");
      title.textContent = item.title || "Avaliação em vídeo";
      const description = document.createElement("p");
      description.textContent =
        item.description || "Depoimento real de cliente.";
      article.append(title, description);
    }

    container.appendChild(article);
  });

  reviewItems.forEach((item) => {
    const article = document.createElement("article");
    article.className =
      "service-card testimonial-card testimonial-review-card reveal is-visible";

    const reviewerName =
      String(item.reviewer || "").trim() || String(item.title || "Cliente");
    const reviewerLocation = String(item.reviewCity || "").trim();
    const reviewerRating = Math.max(1, Math.min(5, Number(item.rating) || 5));

    const topRow = document.createElement("div");
    topRow.className = "testimonial-review-top";

    const identity = document.createElement("div");
    identity.className = "testimonial-review-identity";

    const avatar = document.createElement("span");
    avatar.className = "testimonial-review-avatar";
    avatar.textContent = getInitials(reviewerName);

    const identityText = document.createElement("div");
    identityText.className = "testimonial-review-identity-text";

    const name = document.createElement("strong");
    name.textContent = reviewerName;

    const location = document.createElement("span");
    location.textContent = reviewerLocation || "Cliente verificado";

    identityText.append(name, location);
    identity.append(avatar, identityText);

    const publishedAt = document.createElement("small");
    publishedAt.className = "testimonial-review-date";
    publishedAt.textContent = toDisplayDate(item.createdAt);

    topRow.append(identity, publishedAt);

    const title = document.createElement("h3");
    title.textContent = item.title || "Avaliação de cliente";

    const description = document.createElement("p");
    description.textContent =
      item.description || "Excelente atendimento e acabamento impecável.";

    article.append(
      topRow,
      createStarsRating(reviewerRating),
      title,
      description,
    );
    container.appendChild(article);
  });
};

const initDevPanel = () => {
  const loginForm = document.querySelector("#dev-login-form");
  const publishForm = document.querySelector("#dev-publish-form");
  const loginMessage = document.querySelector("#dev-login-message");
  const publishMessage = document.querySelector("#dev-publish-message");
  const logoutButton = document.querySelector("#dev-logout");
  const mediaList = document.querySelector("#dev-media-list");
  const devSection = document.querySelector("#painel-dev");
  const mainElement = document.querySelector("main");
  const typeSelect = publishForm.querySelector('select[name="type"]');
  const sectionSelect = publishForm.querySelector('select[name="section"]');
  const urlInput = publishForm.querySelector('input[name="url"]');
  const descriptionInput = publishForm.querySelector(
    'input[name="description"]',
  );
  const reviewOnlyFields = publishForm.querySelector("#review-only-fields");
  const reviewerInput = publishForm.querySelector('input[name="reviewer"]');
  const ratingInput = publishForm.querySelector('select[name="rating"]');
  const reviewCityInput = publishForm.querySelector('input[name="reviewCity"]');
  const catalogOnlyFields = publishForm.querySelector("#catalog-only-fields");
  const catalogCardInput = publishForm.querySelector(
    'select[name="catalogCard"]',
  );
  const publicSections = mainElement
    ? Array.from(mainElement.querySelectorAll("section")).filter(
        (section) => section.id !== "painel-dev",
      )
    : [];

  if (
    !loginForm ||
    !publishForm ||
    !loginMessage ||
    !publishMessage ||
    !mediaList
  ) {
    return;
  }

  const setDevSessionUI = () => {
    const isAuthenticated = localStorage.getItem(devAuthStorageKey) === "1";
    const adminGateRequested =
      new URLSearchParams(window.location.search).get("admin") === "1";
    const showDevSection = isAuthenticated || adminGateRequested;

    if (!showDevSection && window.location.hash === "#painel-dev") {
      window.location.hash = "#home";
    }

    if (devSection) {
      devSection.hidden = !showDevSection;
      devSection.classList.toggle("is-authenticated", isAuthenticated);
    }

    if (isAuthenticated) {
      document.body.classList.add("dev-focus-mode");
      publicSections.forEach((section) => {
        section.hidden = true;
      });
    } else {
      document.body.classList.remove("dev-focus-mode");
      publicSections.forEach((section) => {
        section.hidden = false;
      });
    }

    loginForm.hidden = isAuthenticated;
    publishForm.hidden = !isAuthenticated;
    if (isAuthenticated) {
      refreshDevMediaList();
    }
  };

  const syncPublishFields = () => {
    if (!typeSelect || !urlInput || !descriptionInput) {
      return;
    }

    const isCatalogSection = sectionSelect?.value === "catalogo";

    if (isCatalogSection && typeSelect.value === "review") {
      typeSelect.value = "image";
    }

    const isReview = typeSelect.value === "review";
    if (reviewOnlyFields) {
      reviewOnlyFields.hidden = !isReview;
    }

    if (catalogOnlyFields) {
      catalogOnlyFields.hidden = !isCatalogSection;
    }

    if (catalogCardInput) {
      catalogCardInput.required = Boolean(isCatalogSection);
    }

    urlInput.required = !isReview;
    urlInput.disabled = isReview;
    urlInput.placeholder = isReview
      ? "Não é necessário para avaliação escrita"
      : "https://...";

    if (reviewerInput) {
      reviewerInput.required = isReview;
    }

    if (ratingInput) {
      ratingInput.required = isReview;
    }

    if (reviewCityInput) {
      reviewCityInput.required = false;
    }

    descriptionInput.placeholder = isReview
      ? "Escreva a avaliação do cliente"
      : "Ex: Projeto concluído em Curitiba";
  };

  if (typeSelect) {
    typeSelect.addEventListener("change", syncPublishFields);
  }

  if (sectionSelect) {
    sectionSelect.addEventListener("change", syncPublishFields);
  }

  syncPublishFields();

  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(loginForm);
    const username = String(formData.get("username") || "").trim();
    const password = String(formData.get("password") || "").trim();

    if (
      username === credentials.username &&
      password === credentials.password
    ) {
      localStorage.setItem(devAuthStorageKey, "1");
      window.location.hash = "#painel-dev";
      loginMessage.textContent = "Acesso liberado.";
      setDevSessionUI();
      return;
    }

    loginMessage.textContent = "Login ou senha inválidos.";
  });

  publishForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const isAuthenticated = localStorage.getItem(devAuthStorageKey) === "1";
    if (!isAuthenticated) {
      publishMessage.textContent =
        "Faça login com usuário e senha para publicar mídia.";
      setDevSessionUI();
      return;
    }

    const formData = new FormData(publishForm);

    const item = {
      id: `media-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      section: String(formData.get("section") || "projetos"),
      type: String(formData.get("type") || "image"),
      title: String(formData.get("title") || "Projeto"),
      description: String(formData.get("description") || ""),
      url: String(formData.get("url") || "").trim(),
      reviewer: String(formData.get("reviewer") || "").trim(),
      rating: Number(formData.get("rating") || 5),
      reviewCity: String(formData.get("reviewCity") || "").trim(),
      catalogCard: String(formData.get("catalogCard") || "").trim(),
      createdAt: new Date().toISOString(),
    };

    if (item.section === "catalogo") {
      if (!item.catalogCard) {
        publishMessage.textContent =
          "Selecione o card do catálogo para vincular a mídia.";
        return;
      }

      if (item.type === "review") {
        publishMessage.textContent =
          "No catálogo, publique apenas imagem, vídeo ou embed.";
        return;
      }
    } else {
      item.catalogCard = "";
    }

    if (item.type === "review") {
      item.url = "";
      item.rating = Math.max(1, Math.min(5, Number(item.rating) || 5));
      if (!item.reviewer) {
        item.reviewer = item.title || "Cliente";
      }
    }

    if (item.type !== "review") {
      try {
        new URL(item.url);
      } catch {
        publishMessage.textContent = "Informe uma URL válida.";
        return;
      }
    }

    const customItems = readMediaItems().filter(
      (media) => !media.id.startsWith("default-"),
    );
    customItems.unshift(item);
    saveMediaItems(customItems);
    publishMessage.textContent = "Mídia publicada com sucesso.";
    publishForm.reset();
    syncPublishFields();
    renderAllMedia();
    refreshDevMediaList();
  });

  mediaList.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) {
      return;
    }

    const removeId = target.getAttribute("data-remove-id");
    if (!removeId) {
      return;
    }

    const customItems = readMediaItems().filter(
      (item) => !item.id.startsWith("default-") && item.id !== removeId,
    );
    saveMediaItems(customItems);
    publishMessage.textContent = "Mídia removida.";
    renderAllMedia();
    refreshDevMediaList();
  });

  if (logoutButton) {
    logoutButton.addEventListener("click", () => {
      localStorage.removeItem(devAuthStorageKey);
      if (window.location.hash === "#painel-dev") {
        window.location.hash = "#home";
      }
      publishMessage.textContent = "Sessão encerrada.";
      setDevSessionUI();
    });
  }

  window.addEventListener("hashchange", () => {
    setDevSessionUI();
  });

  setDevSessionUI();
};

const initAdminLockForm = () => {
  const form = document.querySelector("#admin-lock-form");
  const message = document.querySelector("#admin-lock-message");

  if (!(form instanceof HTMLFormElement) || !(message instanceof HTMLElement)) {
    return;
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const username = String(formData.get("username") || "").trim();
    const password = String(formData.get("password") || "").trim();

    if (
      username === credentials.username &&
      password === credentials.password
    ) {
      localStorage.setItem(devAuthStorageKey, "1");
      message.textContent = "Autenticação confirmada. Redirecionando...";

      const redirectUrl = new URL(window.location.href);
      redirectUrl.searchParams.set("admin", "1");
      redirectUrl.hash = "#painel-dev";
      window.location.href = redirectUrl.toString();
      return;
    }

    message.textContent = "Login ou senha inválidos.";
  });
};

const initLeadForms = () => {
  const handleLeadSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const nome = formData.get("nome") || "Visitante";
    const telefone = formData.get("telefone") || "";
    const servicos = formData.getAll("servico").filter(Boolean);
    const tiposVidro = formData.getAll("tipoVidro").filter(Boolean);
    const mensagem = formData.get("mensagem") || "";
    const redeSocial = formData.get("redeSocial") || "whatsapp";

    const lines = [];
    lines.push("Solicitação de Orçamento");
    lines.push("");
    lines.push("(Venho pelo site da Vidraçaria Classe A)");
    lines.push("");
    lines.push(`Nome: ${nome}`);
    if (telefone) lines.push(`WhatsApp: ${telefone}`);
    if (servicos.length) {
      lines.push("");
      lines.push("Serviços solicitados:");
      servicos.forEach((s) => lines.push(`  - ${s}`));
    }
    if (tiposVidro.length) {
      lines.push("");
      lines.push("Tipo(s) de vidro:");
      tiposVidro.forEach((t) => lines.push(`  - ${t}`));
    }
    if (mensagem) {
      lines.push("");
      lines.push("Observações:");
      lines.push(mensagem);
    }

    const text = lines.join("\n");
    const socialTargets = {
      whatsapp: `https://api.whatsapp.com/send/?phone=41991371768&text=${encodeURIComponent(text)}&type=phone_number&app_absent=0&utm_source=ig`,
      instagram: "https://www.instagram.com/vidrosclassea_sjp/",
    };

    const targetUrl = socialTargets[redeSocial] || socialTargets.whatsapp;
    window.open(targetUrl, "_blank", "noopener,noreferrer");
    event.currentTarget.reset();
  };

  const glassMap = {
    "box para banheiro": ["temperado", "jateado"],
    "espelhos sob medida": ["espelhado"],
    "portas e janelas": ["temperado", "incolor"],
    "guarda-corpos": ["temperado"],
    "fachadas comerciais": ["temperado"],
    "manutenção e troca": [],
    "fachadas e vitrines": ["temperado", "incolor"],
    "espelhos decorativos": ["espelhado"],
    "envidraçamento de sacadas": ["temperado"],
  };

  document.querySelectorAll(".lead-form, .contact-form").forEach((form) => {
    form.addEventListener("submit", handleLeadSubmit);

    form.querySelectorAll('input[name="servico"]').forEach((cb) => {
      cb.addEventListener("change", () => {
        const suggested = new Set();
        form
          .querySelectorAll('input[name="servico"]:checked')
          .forEach((s) =>
            (glassMap[s.value] || []).forEach((g) => suggested.add(g)),
          );
        form.querySelectorAll('input[name="tipoVidro"]').forEach((glassCb) => {
          if (suggested.has(glassCb.value)) glassCb.checked = true;
        });
      });
    });
  });
};

const initBaseUI = () => {
  if (yearElement) {
    yearElement.textContent = String(new Date().getFullYear());
  }
  applyTheme(preferredTheme);

  if (menuToggle && navigation) {
    menuToggle.addEventListener("click", () => {
      const isOpen = !navigation.classList.contains("is-open");
      setMenuState(isOpen);
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 920) {
        setMenuState(false);
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        setMenuState(false);
      }
    });

    document.addEventListener("click", (event) => {
      if (
        window.innerWidth > 920 ||
        !navigation.classList.contains("is-open")
      ) {
        return;
      }
      if (
        !navigation.contains(event.target) &&
        !menuToggle.contains(event.target)
      ) {
        setMenuState(false);
      }
    });
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const nextTheme =
        document.body.dataset.theme === "light" ? "dark" : "light";
      localStorage.setItem(themeStorageKey, nextTheme);
      applyTheme(nextTheme);
    });
  }

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      setMenuState(false);
    });
  });

  const googleReviewInput = document.querySelector("#google-review-link");
  if (googleReviewInput instanceof HTMLElement) {
    const openGoogleReview = () => {
      const targetUrl = googleReviewInput.dataset.reviewUrl;
      if (!targetUrl) {
        return;
      }
      window.open(targetUrl, "_blank", "noopener,noreferrer");
    };

    googleReviewInput.addEventListener("click", openGoogleReview);
    googleReviewInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openGoogleReview();
      }
    });
  }

  document
    .querySelectorAll('a[href*="wa.me/"], a[href*="api.whatsapp.com/send"]')
    .forEach((link) => {
      if (link.dataset.whatsappTracked === "1") {
        return;
      }

      link.dataset.whatsappTracked = "1";
      link.addEventListener("click", handleWhatsAppClick);
    });

  document
    .querySelectorAll('button[data-whatsapp-cta="hero-budget"]')
    .forEach((button) => {
      if (button.dataset.whatsappTracked === "1") {
        return;
      }

      button.dataset.whatsappTracked = "1";
      button.addEventListener("click", handleWhatsAppClick);
    });

  observeReveals();
  initActiveSectionObserver();
};

initBaseUI();
initLeadForms();
renderAllMedia();
initDevPanel();
initAdminLockForm();

window.addEventListener("storage", (event) => {
  if (event.key === mediaStorageKey) {
    renderAllMedia();
    refreshDevMediaList();
  }
});
