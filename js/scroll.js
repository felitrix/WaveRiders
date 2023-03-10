// Obtém o tamanho da tela
let screenWidth = window.innerWidth;

// Se o tamanho da tela for menor que 768px (dispositivos móveis)
if (screenWidth < 1024) {
  // Desativa as animações do GSAP para os elementos com a classe "animated-element"
  gsap.set("", { clearProps: "all" });
} else {
  window.onload = function () {
    gsap.from(".texto-header h1", { duration: 1, x: -100, opacity: 0 });
    gsap.from(".texto-header p", { duration: 1, y: 100, opacity: 0 });
  };
  //Adicionando o plugin ScrollTrigger
  gsap.registerPlugin(ScrollTrigger);

  //Criando as animações com ScrollTrigger

  //Section objetivo

  gsap.from(".section-objetivo h2", {
    duration: 1,
    x: 80,
    opacity: 0,
    scrollTrigger: {
      trigger: ".section-objetivo h2",
      start: "top 650px center",
      end: "bottom center",
      toggleActions: "play none none none",
    },
  });

  gsap.from(".section-objetivo .separador-texto-header-objetivo", {
    duration: 1,
    x: 80,
    opacity: 0,
    scrollTrigger: {
      trigger: ".section-objetivo .separador-texto-header-objetivo",
      start: "top 650px center",
      end: "bottom center",
      toggleActions: "play none none none",
    },
  });

  gsap.from(".section-objetivo .objetivo-texto-descricao", {
    duration: 1,
    x: 80,
    opacity: 0,
    scrollTrigger: {
      trigger: ".section-objetivo .objetivo-texto-descricao",
      start: "top 650px center",
      end: "bottom center",
      toggleActions: "play none none none",
    },
  });

  //Section equipe

  gsap.from(".section-equipe .texto-header-equipe", {
    duration: 1,
    y: 60,
    opacity: 0,
    scrollTrigger: {
      trigger: ".section-equipe .texto-header-equipe",
      start: "top 750px center",
      end: "bottom center",
      toggleActions: "play none none none",
    },
  });

  gsap.from(".section-equipe .texto-descritivo-equipe", {
    duration: 1,
    y: 60,
    opacity: 0,
    scrollTrigger: {
      trigger: ".section-equipe .texto-descritivo-equipe",
      start: "top 750px center",
      end: "bottom center",
      toggleActions: "play none none none",
    },
  });

  //Section instagram

  gsap.from(".section-instagram-feed .center", {
    duration: 1,
    y: 70,
    opacity: 0,
    scrollTrigger: {
      trigger: ".section-instagram-feed .center",
      start: "top 750px center",
      end: "bottom center",
      toggleActions: "play none none none",
    },
  });

  gsap.from(".section-instagram-feed .texto-header-instagram-feed", {
    duration: 1,
    y: 70,
    opacity: 0,
    scrollTrigger: {
      trigger: ".section-instagram-feed .texto-header-instagram-feed",
      start: "top 750px center",
      end: "bottom center",
      toggleActions: "play none none none",
    },
  });

  gsap.from(".section-instagram-feed .texto-descritivo-instagram-feed", {
    duration: 1,
    y: 70,
    opacity: 0,
    scrollTrigger: {
      trigger: ".section-instagram-feed .texto-descritivo-instagram-feed",
      start: "top 750px center",
      end: "bottom center",
      toggleActions: "play none none none",
    },
  });
}
