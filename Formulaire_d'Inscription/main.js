// Récupère le formulaire par son ID
const form = document.getElementById('registrationForm');

// Ajoute un écouteur d'événement sur le formulaire pour intercepter la soumission
form.addEventListener('submit', function (event) {
    // Empêche le formulaire de se soumettre automatiquement
    event.preventDefault();

    // Récupère les différents champs du formulaire
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    const category = document.querySelector('input[name="category"]:checked');

    // Réinitialise les classes valid et invalid sur tous les champs
    [username, email, password, confirmPassword].forEach(field => {
        field.classList.remove('valid', 'invalid');
    });

    let isValid = true; // Flag pour vérifier si toutes les conditions sont remplies

    // Verification du pseudo (minimum 6 caractères)
    if (username.value.length >= 6) {
        username.classList.add('valid');
    } else {
        username.classList.add('invalid');
        alert('Le pseudo doit contenir au moins 6 caractères.');
        isValid = false; // Si le pseudo est invalide, on bloque la soumission
    }

    // Verification du mot de passe (minimum 8 caractères)
    if (password.value.length >= 8) {
        password.classList.add('valid');
    } else {
        password.classList.add('invalid');
        isValid = false;
    }

    // Vérifie que les mots de passe correspondent
    if (password.value === confirmPassword.value && confirmPassword.value.length > 0) {
        confirmPassword.classList.add('valid');
    } else {
        confirmPassword.classList.add('invalid');
        alert('Les mots de passe ne correspondent pas.');
        isValid = false; // Si les mots de passe ne correspondent pas, on bloque la soumission
    }

    // Verification qu'une catégorie a été sélectionnée
    if (!category) {
        alert('Veuillez choisir une catégorie.');
        isValid = false; // Si aucune catégorie n'est sélectionnée, on bloque la soumission
    }

    // Si tous les champs sont valides, on affiche une alerte de succès
    if (isValid) {
        alert('Inscription réussie !');
        form.reset(); // Réinitialise le formulaire
        [username, email, password, confirmPassword].forEach(field => {
            field.classList.remove('valid', 'invalid'); // Enlève les classes après réinitialisation
        });
    } else {
        alert('Veuillez corriger les erreurs.'); // Si des erreurs sont présentes, on demande la correction
    }
});
