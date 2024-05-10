document.addEventListener('DOMContentLoaded', function () {
    const orderButtons = document.querySelectorAll('.order-btn'); // Sélection de tous les boutons Commander

    orderButtons.forEach(function(button) { 
        button.addEventListener('click', function() {
            alert('Votre commande a été passée !'); 
        });
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.querySelector('.contact-form'); // Sélection du formulaire de contact

    contactForm.addEventListener('submit', function(event) { 
        const emailInput = contactForm.querySelector('input[type="email"]'); 
        const messageInput = contactForm.querySelector('textarea'); // Sélection du textarea

        // Validation de l'adresse e-mail
        if (!isValidEmail(emailInput.value)) {
            event.preventDefault(); 
            alert('Veuillez saisir une adresse e-mail valide.');
        }

        // Validation du message
        if (messageInput.value.trim() === '') {
            event.preventDefault();
            alert('Veuillez saisir un message.');
        }
    });
});

