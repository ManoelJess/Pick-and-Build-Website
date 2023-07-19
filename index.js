//Teil fuer die Toggle
let toggle = document.querySelector(".toggle")
let body = document.querySelector("body")
 
toggle.addEventListener('click',function()
  {
    body.classList.toggle('open')
  }
)

var signUpLink = document.getElementById('wepp');                               // signUpLink selektieren
var loginLink = document.getElementById('ilinkLog');                            // loginLink selektieren  
var loginForm = document.querySelector('.iformSign .iformBox:first-child');     // loginForm selektieren
var signUpForm = document.getElementById('iformBoxSign');                       // signUpForm selektieren
let signup = document.getElementById('buttonSign');                             // signup selektieren  

signup.addEventListener('click', function(event){
  event.preventDefault();
  loginForm.style.display = 'grid';                                              // Login verstecken
  signUpForm.style.display = 'none';
});

signUpLink.addEventListener('click', function(event) {
    event.preventDefault();
    loginForm.style.display = 'none';                                             // Login verstecken
    signUpForm.style.display = 'grid';                                            // Sign Up zeigen
});

loginLink.addEventListener('click', function(event) {
    event.preventDefault();
    signUpForm.style.display = 'none';                                            // Sign Up verstecken
    loginForm.style.display = 'grid';                                             // Login zeigen
});

loginLink.addEventListener('click', function(event) {
    event.preventDefault();
    signUpForm.style.display = 'none';                                            // Sign Up verstecken
    loginForm.style.display = 'grid';                                             // Login zeigen
});

// LoginButton selektieren
var loginButton = document.getElementById('but');

// LoginButton selektieren
var startButton = document.getElementById('istartbtn');

// Div mit der Klasse "Bout" 
var boutDiv = document.querySelector('.bout');

// Dem Klick auf die Schaltfläche "Login" einen Ereignishandler hinzufügen
loginButton.addEventListener('click', function(event) {
  event.preventDefault();                                                       // Verhindern des Standardverhaltens des Formulars

  boutDiv.style.display = 'grid';                                               // Div mit der Klasse "Bout" zeigen
});

const ibtn = document.getElementById('istartbtn');
const log = document.getElementById('but');
const formlogin = document.getElementById('iformBoxLogin');
const iwarenkorb =document.getElementById('iwarenkorb');
const icustomizer =document.getElementById('icustomizer');
const iwerb =document.getElementById('iwerbung');

but.addEventListener('click', function(){
    formlogin.style.display = 'none';                                            // formlogin verstecken
    ibtn.style.display = 'flex';                                                 // StartButton zeigen
    iwarenkorb.style.display = 'flex';                                           // Warenkorbslink zeigen
    icustomizer.style.display = 'flex';                                          // Customizerslink zeigen
    iwerbung.style.display = 'block';
  });

