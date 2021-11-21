const team = [
  { name: 'Wayne',
    lastname: 'Barnett',
    position: 'Founder & CEO',
    photo: 'img/wayne-barnett-founder-ceo.jpg'},
  { name: 'Angela',
    lastname: 'Carrol',
    position: 'Chief Editor',
    photo: 'img/angela-caroll-chief-editor.jpg'},
  { name: 'Walter',
    lastname: 'Gordon',
    position: 'Office Manager',
    photo: 'img/walter-gordon-office-manager.jpg'},
  { name: 'Angela',
    lastname: 'Lopez',
    position: 'Social Media Menager',
    photo: 'img/angela-lopez-social-media-manager.jpg'},
  { name: 'Scott',
    lastname: 'Estrada',
    position: 'Developer',
    photo: 'img/scott-estrada-developer.jpg'},
  { name: 'Barbara',
    lastname: 'Ramos',
    position: 'Graphic Designer',
    photo: 'img/barbara-ramos-graphic-designer.jpg'},
  { name: 'Oluwatobiloba',
    lastname: 'Ray',
    position: 'New Team Member',
    photo: 'img/new-team-member-01.jpg'},
  { name: 'Dalton',
    lastname: 'Rasmussen',
    position: 'New Team Member',
    photo: 'img/new-team-member-02.jpg'},
  { name: 'Ari',
    lastname: 'Satako',
    position: 'New Team Member',
    photo: 'img/new-team-member-03.jpg'},
];

// creo un ciclo for che mi stampi le card
for (let i = 0; i < team.length; i++) {
document.getElementById('team-container').innerHTML += 
`
<div class="team-card">
  <div class="card-image">
    <img src="${team[i].photo}" alt="${team[i].name} ${team[i].lastname}"/>
  </div>
  <div class="card-text">
    <h3>${team[i].name} ${team[i].lastname}</h3>
    <p>${team[i].position}</p>
  </div>
</div>
`
}

// creo due variabili contenenti due funzioni per prendermi id e classi dal dom
let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);

// creo variabili per ogni input e per ogni classe che devo cambiare
let username = id("name"),
  role = id("role"),
  image = id("image"),
  form = id("form"),
  
  errorMsg = classes("error"),
  successIcon = classes("success-icon"),
  failureIcon = classes("failure-icon");

  // aggiungo a form un addEventListener per eseguire una funzione
  
  // form.addEventListener('submit', function(i) {
form.addEventListener("submit", (i) => {

  // preventDefault è un metodo che evita al form di essere inviato nonostante il click su submit
  i.preventDefault();

  let userE = engine(username, 0, "Username cannot be blank or number");
  let roleE = engine(role, 1, "Role cannot be blank or number");
  let imgE = engine(image, 2, "Image cannot be blank or number");

  if (userE == true && roleE == true && imgE == true) {
    document.getElementById('team-container').innerHTML += 
    `
    <div class="team-card">
      <div class="card-image">
        <img src="${image.value}" alt="${username.value}"/>
      </div>
      <div class="card-text">
        <h3>${username.value}</h3>
        <p>${role.value}</p>
      </div>
    </div>
    `
  }
});

  // questa funzione serve a controllare gli input. il segnaposto id serve a selezionare, serial serve per indicare il numero di pusto dell'elemento nell'array della classe e message serve per indicare il contenuto che vogliamo far vedere come esito dell'errore.
  let engine = (id, serial, message) => {

    if (id.value.trim() === "" || isNaN(id.value) == false){
      errorMsg[serial].innerHTML = message;
      id.style.border = "2px solid red";
      
      failureIcon[serial].style.opacity = "1";
      successIcon[serial].style.opacity = "0";

      return false;

    } else {
      errorMsg[serial].innerHTML = "";
      id.style.border = "2px solid green";
      
      failureIcon[serial].style.opacity = "0";
      successIcon[serial].style.opacity = "1";

      return true;
    }
  }