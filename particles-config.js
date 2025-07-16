particlesJS("particles-js", {
    particles: {
      number: {
        value: 400,
        density: { enable: true, value_area: 800 }
      },
      color: { value: "#7aa0c4" },
      shape: { type: "circle" },
      opacity: {
        value: 0.4,
        random: true
      },
      size: {
        value: 6,
        random: true
      },
      line_linked: {
        enable: true,
        distance: 120,
        color: "#999999",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 8,
        direction: "none",
        out_mode: "out"
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "repulse" },
        onclick: { enable: true, mode: "push" }
      },
      modes: {
        repulse: { distance: 100 },
        push: { particles_nb: 4 }
      }
    },
    retina_detect: true
  });
  