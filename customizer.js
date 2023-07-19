let toggle = document.querySelector(".toggle")
let body = document.querySelector("body")
toggle.addEventListener('click',function()
  {
   body.classList.toggle('open')
   }
)

var roue = document.getElementById('roue');
var listePhotos = document.getElementById('liste-roues');
var siege = document.getElementById('siege');
var listeBild = document.getElementById('liste-sieges');
var parechoc = document.getElementById('parechoc');
var listeBilder = document.getElementById('liste-parechocs');


 roue.addEventListener('click', function() {
   Display(listePhotos);
   roue.style.backgroundColor='black';
   roue.style.color='white';
 });

siege.addEventListener("click", function() {
  Display(listeBild);
   siege.style.backgroundColor='black';
   siege.style.color='white';
 });

  parechoc.addEventListener("click", function() {
   Display(listeBilder);
  parechoc.style.backgroundColor='black';
   parechoc.style.color='white';
});

function Display(element) {
  if (element.style.display === 'none') {
    hideAll();
    element.style.display = 'flex';
  } else {
    element.style.display = 'none';
  }
}

/* Hier. Wir steuern die Öffnung der Fenster für die Karoserie, die Reifen und das Design*/ 

function hideAll() {
  listePhotos.style.display = 'none';
  listeBild.style.display = 'none';
  listeBilder.style.display = 'none';
  roue.style.backgroundColor='white';
  siege.style.backgroundColor='white';
  parechoc.style.backgroundColor='white';
  roue.style.color='black';
  siege.style.color='black';
  parechoc.style.color='black';
}

var radioElements = document.getElementsByName('check');
var photoContainer = document.getElementById('photoContainer');
var coch = document.getElementById('kik1');
var imgElement = document.querySelector('.img1');

/*Karosserie auswählen und zum Fotocontainer hinzufügen */
for (var i = 0; i < radioElements.length; i++) {
  radioElements[i].addEventListener('change', function() {
    
    if (this.checked) {
      var imageURL = this.parentElement.querySelector('.photo').src;
      coch.style.display = 'block';
      if (imgElement) {

        imgElement.src = imageURL;
        if(imageURL==="http://127.0.0.1:5500/bild/test22.png"){
          if (window.innerWidth < 800){
            imgElement.style.margin='3% 0% 0% 1%';
          }
          else{
            imgElement.style.margin='1% 1% 0% 1%';
          }
        }
        else{
          imgElement.style.margin='0%';
        }
      } else {
        imgElement = document.createElement('img'); /*Erstellung einer Element img fuer das erste bild */
        imgElement.className = 'img1';
        imgElement.src = imageURL;
        imgElement.id='img1';
        imgElement.alt = 'Ausgewählte Reife';
    
        if(imageURL==="http://127.0.0.1:5500/bild/test22.png"){
          imgElement.style.margin='1% 1% 0% 1%';
          photoContainer.appendChild(imgElement);
          
        }
        else{
          photoContainer.appendChild(imgElement);
        }
        

      }
    }
  });
}
var radioElements = document.getElementsByName('check1');
var coch1 = document.getElementById('kik');
var imgElement1 = document.querySelector('.img2');
var photoContainer = document.getElementById('photoContainer');

/*Reife auswählen und zum Fotocontainer hinzufügen */
for (var i = 0; i < radioElements.length; i++) {
  radioElements[i].addEventListener('change', function() {

    if (this.checked) {
      var imageURL = this.parentElement.querySelector('.photo').src;
      coch1.style.display = 'block';

      if (imgElement1) {
        imgElement1.src = imageURL;
      
      } else {
        imgElement1 = document.createElement('img'); /*Erstellung einer Element img  fuer das zweite Bild*/
        imgElement1.className = 'img2';
        imgElement1.id='img2';
        imgElement1.src = imageURL;
        imgElement1.alt = 'Image1 sélectionnée';
        photoContainer.appendChild(imgElement1);
      
      }
    }
  });
}
/*Beschreibung von Autos*/
var autoElements = document.getElementsByClassName('auto');
function showAuto(autoId) {
  for (var i = 0; i < autoElements.length; i++) {
    if (autoElements[i].id === autoId) {
      autoElements[i].style.display = 'block';
    } else {
      autoElements[i].style.display = 'none';
    }
  }
}

const beschreibung = document.getElementById('beschreibung');
const auto1 = document.getElementById('auto1');
const auto2 = document.getElementById('auto2');
const auto3 = document.getElementById('auto3');
var radioElements = document.getElementsByName('check2');
var coch2 = document.getElementById('kik2');
var imgElement2 = document.querySelector('.img3');

/*Design auswählen und zum Fotocontainer hinzufügen */
for (var i = 0; i < radioElements.length; i++) {
  radioElements[i].addEventListener('change', function() {

    if(imgElement && imgElement1)
    {
      if (this.checked) {
        var imageURL = this.parentElement.querySelector('.photo').src;
        coch2.style.display = 'block';
        if (imgElement2) {

          imgElement2.src = imageURL;
          if (imgElement1.src.includes('test11.png')) {
            showAuto('auto1');
          } else if (imgElement1.src.includes('test21.png')) {
            showAuto('auto2');
          } 
        } else {
          imgElement2 = document.createElement('img');
          imgElement2.className = 'img3';
          imgElement2.id ='img3';
          imgElement2.src = imageURL;
          imgElement2.alt = 'Image2 sélectionnée';
          photoContainer.appendChild(imgElement2);
          warenkorbbtn.style.display='block';
          if (imgElement1.src.includes('test11.png')) {  /*Beschreibung von Autos anzeigen nach der Auwahl von der dritte teil*/
            showAuto('auto1');
          } else if (imgElement1.src.includes('test21.png')) {
            showAuto('auto2');
          } else if (imgElement1.src.includes('test31.png')) {
            showAuto('auto3');
          }
        }
      }
    }
    else{
      alert('Wählen Sie zuerst die zwei andere Teilen!!');
    }
  });
}

/*  Farben von Autos*/
var coll1 = document.getElementById('coll1');
coll1.addEventListener("click", function(){
 coll1.style.borderColor='green';
 coll2.style.borderColor='white';
 coll3.style.borderColor='white';
  imgElement1.style.filter='hue-rotate(-100deg)';
}); 
var coll2 = document.getElementById('coll2');
coll2.addEventListener("click", function(){
   coll2.style.borderColor='green';
   coll3.style.borderColor='white';
   coll1.style.borderColor='white';
  imgElement1.style.filter='hue-rotate(-190deg)';
});
var coll3 = document.getElementById('coll3');
coll3.addEventListener("click", function(){
 coll3.style.borderColor='green';
 coll2.style.borderColor='white';
 coll1.style.borderColor='white';
  imgElement1.style.filter='hue-rotate(0deg)';
});

/*Rechnung von der Gesamte Preis */
const rouesRadios = document.getElementsByName('check');
const siegesRadios = document.getElementsByName('check1');
const parechocsRadios = document.getElementsByName('check2');
const collist = document.getElementsByName('coll');

function getSelectedValue(radios) { // die Value von ausgewählte Bilder zurückgeben
  for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) { 
      return radios[i].value;
    }
  }
  return null;
}


function calculateAndUpdateTotalPrice() {

  const rouesValue = getSelectedValue(rouesRadios);
  const siegesValue = getSelectedValue(siegesRadios);
  const parechocsValue = getSelectedValue(parechocsRadios);


  if (rouesValue && siegesValue && parechocsValue) {

    const rouesPrice = parseFloat(rouesValue); // die Preisen in Float umrechnen
    const siegesPrice = parseFloat(siegesValue);
    const parechocsPrice = parseFloat(parechocsValue);
    // Preis Rechnen
    const totalPrice = rouesPrice + siegesPrice + parechocsPrice ;

    // jetzt der neue Preis hinzufügen
    const totalPriceElement = document.querySelector('.final-price');
    totalPriceElement.textContent = 'Neu: ' + totalPrice + '€';
  } else {
    console.log('Wählen sie Bitte eine Option für jede Gruppe.');
  }
}

rouesRadios.forEach(radio => {
  radio.addEventListener('change', calculateAndUpdateTotalPrice);
});

siegesRadios.forEach(radio => {
  radio.addEventListener('change', calculateAndUpdateTotalPrice);
});

parechocsRadios.forEach(radio => {
  radio.addEventListener('change', calculateAndUpdateTotalPrice);
});

// die Bilder und Beschreibung in localstorage hinzufügen , damit wir von den Warenkorb wieder aufrufen können
function Beschreibung(){
  for (var i = 0; i < autoElements.length; i++) {
    if (autoElements[i].style.display === 'block') {
      var data = autoElements[i].id;
      const Beschrei = document.getElementById(data).innerHTML;
      localStorage.setItem('beschreib', Beschrei);
    }
  }
};

document.addEventListener('DOMContentLoaded', function() {
  var warenkorbbtn = document.getElementById('warenkorbbtn');
  
  warenkorbbtn.addEventListener('click', function() {
    var imgs = document.getElementById('img1');
    var imgSrc = imgs.getAttribute('src');
    
    var imgs1 = document.getElementById('img2');
    var imgSrc1 = imgs1.getAttribute('src');

    var imgs2 = document.getElementById('img3');
    var imgSrc2 = imgs2.getAttribute('src');

    var style = window.getComputedStyle(imgElement1);
    var colorValue = style.getPropertyValue('filter');
    localStorage.setItem('color', colorValue);

    localStorage.setItem('img1', imgSrc);
    localStorage.setItem('img2', imgSrc1);
    localStorage.setItem('img3', imgSrc2);
    

    Beschreibung();
    
    // window.location.href = 'warenkorb.html';
  });
});

const questions = document.querySelectorAll('.question');

const colp=0;
questions.forEach(question => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;
    answer.style.display = answer.style.display === 'none' ? 'block' : 'none';
  });
});




