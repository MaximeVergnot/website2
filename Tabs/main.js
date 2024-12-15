// Sélectionner tous les éléments <li> avec la classe 'tab' (les onglets)
const tabs = document.querySelectorAll('.tab');

// Sélectionner tous les éléments <div> avec la classe 'content' (les contenus associés aux onglets)
const contents = document.querySelectorAll('.content');

// Pour chaque onglet (tab), on ajoute un événement 'click'
tabs.forEach(tab => {
    tab.addEventListener('click', function() {
        // Supprimer la classe 'tab-active' de tous les onglets (on enlève la sélection de l'onglet actif)
        tabs.forEach(t => t.classList.remove('tab-active'));

        // Supprimer la classe 'active' de tous les contenus (on cache tous les contenus)
        contents.forEach(content => content.classList.remove('active'));
        
        // Ajouter la classe 'tab-active' à l'onglet cliqué (pour le marquer comme actif)
        this.classList.add('tab-active');
        
        // Vérifier si l'onglet cliqué a une classe spécifique (tab-content1, tab-content2, ou tab-content3)
        // Si c'est le cas, on affiche le contenu correspondant en lui ajoutant la classe 'active'
        if(this.classList.contains('tab-content1')) {
            document.querySelector('.content1').classList.add('active'); // Affiche le contenu 1
        } else if(this.classList.contains('tab-content2')) {
            document.querySelector('.content2').classList.add('active'); // Affiche le contenu 2
        } else if(this.classList.contains('tab-content3')) {
            document.querySelector('.content3').classList.add('active'); // Affiche le contenu 3
        }
    });
});