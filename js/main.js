document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      alert("Formulaire envoyé !");
      // Ici tu pourras déclencher un événement GA via GTM
    });
  }

  const ctaButton = document.getElementById("cta-button");
  if (ctaButton) {
    ctaButton.addEventListener("click", function () {
      console.log("Clic sur le bouton CTA");
      // Ici aussi, GTM pourra capter cet événement
    });
  }
});
