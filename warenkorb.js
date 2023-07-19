let toggle = document.querySelector(".toggle")
let body = document.querySelector("body")

toggle.addEventListener('click',function(){
    body.classList.toggle('open')
})
var warenkorb = document.getElementById("auto");
var altwarenkorb = document.getElementById("leer");

document.addEventListener('DOMContentLoaded', function() {
    var panier = document.getElementById('panier');

    if (localStorage.getItem('img1') && localStorage.getItem('img2') && localStorage.getItem('img3')) {
       
        warenkorb.style.display='block';
        altwarenkorb.style.display='none';
       
        var bSrc = localStorage.getItem('img1');
       var bSrc1 = localStorage.getItem('img2');
      var bSrc2 = localStorage.getItem('img3');
      var colorValue = localStorage.getItem('color');
         
       var img1 = document.createElement('img');
       img1.src = bSrc;
       var img2 = document.createElement('img');
       img2.src = bSrc1;
       img2.style.filter=colorValue;
       var img3 = document.createElement('img');
       img3.src = bSrc2;
       img3.className='img3';

       panier.appendChild(img1);
       panier.appendChild(img2);
       panier.appendChild(img3);

       const beschreibung = localStorage.getItem('beschreib');

       if (beschreibung) {
            const Beschreibung = document.getElementById('beschreibung');
            Beschreibung.innerHTML = beschreibung;
        }

       localStorage.removeItem('img1');
       localStorage.removeItem('img2');
       localStorage.removeItem('img3');
       localStorage.removeItem('beschreib');
       localStorage.removeItem('colorValue');
    }
});



// Verifizierung der Kartenummer
//--------------------------------------------------

let kartenummerinput = document.getElementById('kartenummer')
let cardType = document.getElementById('cardType')

//Wir hören dem Klick auf das Eingabefeld für die Kartennummer zu
kartenummerinput.addEventListener('input',oncardInput)
kartenummerinput.addEventListener('change',oncardNumberChange)

kartenummerinput.addEventListener('input', oncardNumberChange);

function oncardInput(event){
    //Validierungsregex für eine Visa- und Maestro-Karte
    const MASTERCARD_REGEX=/^(5[1-5][0-9]{14}|2(22[1-9][0-9]{12}|2[3-9][0-9]{13}|[3-6][0-9]{14}|7[0-1][0-9]{13}|720[0-9]{12}))$/
    const VISA_REGEX = /^4[0-9]{12}(?:[0-9]{3})?$/

    let mastercard= document.getElementById('mastercard');
    let visa= document.getElementById('visa');
    let error= document.getElementById('error')

    cardType.className = "card-type"
// wenn der Regex einer karte erfüllt wird, dann diese anzeigen uns die anderen verstecken
    if (MASTERCARD_REGEX.test(event.target.value)) {

        visa.style.display='none';
        error.style.display='none'
        mastercard.style.display='block';
    }
    else if (VISA_REGEX.test(event.target.value)) {
         cardType.classList.add('is-visa')

        mastercard.style.display='none';
        error.style.display='none'
        visa.style.display='block';
    }
}

function oncardNumberChange (event){
if (isvalidcardNumber(event.target.value)) {
     kartenummerinput.classList.remove('invalid')
      cardType.classList.remove('is-error')

}
else{
     kartenummerinput.classList.add('invalid')
     cardType.classList.add('is-error')
      mastercard.style.display='none';
    visa.style.display='none';
    error.style.display='block'
 
}
}

kartenummerinput.addEventListener('input', oncardNumberChange);

//
function isvalidcardNumber (cardNumber) {
    const VALID_REGEX = /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/
    return VALID_REGEX.test(cardNumber)
}

// Zahlungsmethode
//---------------------------------------------------------

let baliseInfo=document.querySelector(".info")  // Informaionen über die Karte
   baliseInfo.style.display = "none"
   let baliseInfo0 = document.querySelector(".bloc p") // Informaionen über Paypal
   let backgroundfenster = document.querySelector(".backgroundfenster")
   let bezahlenbutton = document.querySelector(".bezahlen") 
    let balisefooter = document.querySelector('footer')
    let baliseclose=document.querySelector(".close")

    //Wir überprüfen die Auswahl des Benutzers, indem wir die "Input" durchlaufen
let inputbutton = document.querySelectorAll(".bloc input") 
 for (let i = 0; i < inputbutton.length; i++) {
    inputbutton[i].addEventListener("change",(event) =>{

      // wenn es um eine Kredikarte geht,
        if (inputbutton[i].checked && event.target.value ==="kredit-/Debitkarte") {
            let baliseInfo0 = document.querySelector(".bloc p") 
            baliseInfo0.style.display="none"  // verstecken wir die info uber paypal
            baliseInfo.style.display = "block" // Zeigen wir die Info über Kreditkarte
         }
         else{              // Paypal
            baliseInfo.style.display = "none" 
            baliseInfo0.style.display="inline"
         }
    })


 }

 function bezahlenFensterAnzeigen() {
    let backgroundfenster = document.querySelector(".backgroundfenster")
    // Das Hintergrundfenster ist standardmäßig ausgeblendet (display:none)
    // Durch das Hinzufügen der Klasse „aktiv“ wird deren Anzeige geändert und sichtbar gemacht.
     backgroundfenster.classList.add("active")
    // backgroundfenster.style.display="flex"  // eine andere Alternative
    balisefooter.style.display = 'none'
}

function bezahlenFensterAusbleden() {
    let backgroundfenster = document.querySelector(".backgroundfenster")
    // Das Hintergrundfenster ist standardmäßig ausgeblendet (Anzeige: keine). 
    // Durch das Löschen der „aktiven“ Klasse wird diese Standardanzeige wiederhergestellt.
    backgroundfenster.classList.remove("active")
    backgroundfenster.style.display="none"
    balisefooter.style.display = 'block'
}


function bezahlenFensterVerwalten() {
    // Wir hören dem Klick auf den „bezahlen“-Button zu
  let bezahlenbutton = document.querySelector(".bezahlen")
  bezahlenbutton.addEventListener("click", () => {
        // Wenn wir auf den Bezahlen-Button geklickt haben, wird das Hintergrundfenster angezeigt
       bezahlenFensterAnzeigen()
    })

    // Wir lauschen dem Klick auf das Kreuz
    backgroundfenster.addEventListener("click", (event) => {
        // Wenn wir genau auf das Kreuz geklickt hätten
        if ( event.target ===baliseclose ) {
            // Also verstecken dasHintergrundfenster
            bezahlenFensterAusbleden()
        }
    })
}
bezahlenFensterVerwalten()

const end=document.getElementById('end');
const end1=document.getElementById('end1');

end.addEventListener('click', ()=>{
    window.location.href='bezahlen.html';
});
end1.addEventListener('click', ()=>{
    window.location.href='bezahlen.html';
});
