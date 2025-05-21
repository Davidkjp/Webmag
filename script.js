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
       /// ON ECRIT LE CODE ICI !
       let journal = data.journal.nomJournal;
      console.log(journal) 

      journal = data.journal.phraseAccroche;
      console.log(journal)

      journal = data.journal.logo;
      console.log(journal)

      journal = data.journal.pdf
      console.log(journal)

      journal =data.journal.texteAppelAction
      console.log(journal)

      let articlePrincipal = data.journal.articlePrincipal
      console.log(articlePrincipal)
      

      

       /// FIN DU CODE
     })
     .catch((error) => console.error('Erreur lors de la lecture des données :', error));
 }
 
 getData();

 ///ON écrit les fonctions ici