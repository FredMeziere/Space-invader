const app = {
    invader: document.getElementById('invader'),
    defaultGridSize: 16,
    defaultPixelSize: 20,
    selectedColor: 'white',
    styles: [
      'white',
      'black',
      'yellow',
      'green',
    ],
    createGrid: function (gridSize = 8, pixelSize = 30){
        // on crée un div pour accueillir les pixels
        const gridElem = document.createElement('div');
        
        // on lui ajoute la classe 'grid'
        gridElem.classList.add('grid');
        
        // on lui donne la largeur voulue (pour que les pixels wrap correctement)
        gridElem.style.width = gridSize * pixelSize + 'px';
        
        // on crée le nombre de pixels demandé (gridSize * gridSize)
        // avec une boucle for 
        for(let pixelIndex = 0; pixelIndex < gridSize * gridSize; pixelIndex++){
          app.createPixel(pixelSize, gridElem);
        }
        // on met en place un gestionnaire d'évènement au clic sur la grille
        gridElem.addEventListener('click', app.onPixelClick);
       
        // on vide le div #invader
        app.invader.innerHTML = '';
        
        // on ajoute la grille dans le div #invader
        app.invader.appendChild(gridElem);
      },
     
      // fonction pour la création des pixel
      createPixel: function (pixelSize, container){
       
        //on crée un div
        const pixelElem = document.createElement('div');
        
        // on lui ajoute la classe 'pixel'
        pixelElem.classList.add('pixel');
        
        // on lui ajoute la classe 'pixel--white'
        pixelElem.classList.add('pixel--white');
        
        // on défini sa taille
        pixelElem.style.width = pixelSize + 'px';
        pixelElem.style.height = pixelSize + 'px';
        
        // on l'ajoute au container
        container.appendChild(pixelElem);
      },

      //fonction pour la gestion des clicks sur les pixels

      onPixelClick: function (event){
       
        // si le clic à bien eu lieu sur un élément ayant la classe 'pixel'
        if(event.target.classList.contains('pixel')){
          
            // on selectionne le pixel cliqué
          const pixel = event.target;

          // on supprime les classes des couleurs déjà présentes
          app.styles.forEach(function(style){
            pixel.classList.remove('pixel--' + style);
          });

          // on ajoute la classe correspondant à la couleur de dessin sélectionnée
          //couleurs stockées au début du code dans un tableau
          pixel.classList.add('pixel--' + app.selectedColor);
        }
      },
      
      // fonction pour la gestion/ création du formulaire pour le choix des pixels + tailles
      createForm: function (){
        // on selectionne le formulaire
        const form = document.querySelector('.configuration');

        // on crée les 2 inputs
        app.createInput('Taille de la grille', form);
        app.createInput('Taille des pixels', form);

        // on crée le bouton de soumission
        const submitBtn = document.createElement('button');
        submitBtn.type = 'submit';
        submitBtn.textContent = 'Valider';

        // on ajoute le bouton dans le formulaire
        form.appendChild(submitBtn);

        // on met en place un gestionnaire d'évènement à la soumission du formulaire
        form.addEventListener('submit', app.onFormSubmit);
      },
      
      
     
    };

    //app.init
  


