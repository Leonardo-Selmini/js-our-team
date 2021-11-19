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
  { name: 'Mitchell',
    lastname: 'Fuller',
    position: 'New Team Member',
    photo: 'img/new-team-member-04.jpg'}
];

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


