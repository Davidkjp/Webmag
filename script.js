function getData() {
   fetch('data.json')
     .then((response) => {
       if (!response.ok) {
         throw new Error('Network response was not ok');
       }
       return response.json();
     })
     .then((data) => {
       // Traitez les données comme vous le souhaitez
       console.log('Données récupérées du fichier JSON :', data);
       /// ON ECRIT LE CODE ICI !const journalContainer = document.getElementById("journal-container");
       console.log("Article Principale :", data.journal);
       console.log("Nom du journal :", data.journal.nomJournal);

       console.log("Image article 1 :", data.journal.articles[0].image);

       const logoContainer = document.getElementById('logo-container');
       const logo = document.createElement('img');
       logo.src = data.journal.logo;
       logo.alt = data.journal.nomJournal;
       logoContainer.appendChild(logo);

       
       const accroche = document.getElementById('accroche');
       accroche.textContent = data.journal.phraseAccroche;

       data.journal.articles.forEach((article, index) => {
      console.log(`Article ${index + 1} :`, article.titre);
    });

     const container = document.getElementById('product-container');
     const articles = data.journal.articles;

    articles.forEach(article => {
      const articleElement = document.createElement('div');
      articleElement.classList.add('journal-article');

      articleElement.innerHTML = `
        <img src="${article.image}" alt="${article.titre}">
        <h2>${article.titre}</h2>
        <p><strong>Date :</strong> ${article.date}</p>
        <p><strong>Thème :</strong> ${article.theme}</p>
      `;

      container.appendChild(articleElement);
    });

      /** */

      const auteursContainer = document.getElementById('auteurs-container');
const auteurs = data.journal.auteurs;

auteurs.forEach(auteur => {
  const auteurElement = document.createElement('div');
  auteurElement.classList.add('auteur');

  auteurElement.innerHTML = `
    <img src="${auteur.photo}" alt="${auteur.prenom}">
    <h3>${auteur.prenom}</h3>
    <p><strong>${auteur.typeExperience}</strong></p>
    <p>${auteur.presentation}</p>
  `;

  auteursContainer.appendChild(auteurElement);
});

       /// FIN DU CODE
     })
     .catch((error) => console.error('Erreur lors de la lecture des données :', error));
 }
 
 getData();

 ///ON écrit les fonctions ici

function changeStyleBasedOnTime() {
  const currentHour = new Date().getHours();
  const sayHi = document.getElementById('say-hi');
  const element = document.getElementById('time-based-style');
  if (!sayHi || !element) return;

  if (currentHour >= 5 && currentHour < 9) {
    sayHi.textContent = "Bonjour ! Bienvenue sur ce site";
  } else if (currentHour >= 9 && currentHour < 12) {
    sayHi.textContent = "Bonne matinée ! Bienvenue sur ce site";
  } else if (currentHour >= 12 && currentHour < 18) {
    sayHi.textContent = "Bon après-midi ! Bienvenue sur ce site";
  } else {
    sayHi.textContent = "Bonsoir !";
  }

  element.classList.remove("aurore", "matin", "apres-midi", "soiree", "nuit");

  if (currentHour >= 5 && currentHour < 8) {
    element.classList.add("aurore");
  } else if (currentHour >= 8 && currentHour < 12) {
    element.classList.add("matin");
  } else if (currentHour >= 12 && currentHour < 18) {
    element.classList.add("apres-midi");
  } else if (currentHour >= 18 && currentHour < 22) {
    element.classList.add("soiree");
  } else {
    element.classList.add("nuit");
  }
}

function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  const timeString = `${hours}:${minutes}:${seconds}`;

  const timeDisplay = document.getElementById('time-display');
  if (timeDisplay) {
    timeDisplay.textContent = `Il est ${timeString}`;
  }

  changeStyleBasedOnTime();
}

window.onload = function () {
               
  updateClock();
  setInterval(updateClock, 1000);
};