'use strict';
const catList = document.querySelector('.js-list');

/*CAT 1*/

const kittenOneImage = 'https://dev.adalab.es/gato-siames.webp';
const kittenOneName = 'Anastacio';
const kittenOneDesc = ' Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.';
const kittenOneRace = 'Siamés';

const kittenOne = `<li class="card">
<article>
  <img
    class="card_img"
    src= ${kittenOneImage}
    alt="gatito"
  />
  <h3 class="card_title"> ${kittenOneName}</h3>
  <h4 class="card_race">${kittenOneRace}</h4>
  <p class="card_description">
            ${kittenOneDesc}
   </p>
</article>
</li>`;

console.log(kittenOne);


/*CAT 2*/
const kittenTwoImage = 'https://dev.adalab.es/sphynx-gato.webp';
const kittenTwoName = 'Fiona';
const kittenTwoDesc = 'Produce fascinación y curiosidad. Exótico, raro, bello, extraño…\ hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.';
const kittenTwoRace = 'Sphynx';

const kittenTwo = `<li class="card">
<img
  class="card_img"
  src=${kittenTwoImage}
  alt="sphynx-cat"
/>
<h3 class="card_title">${kittenTwoName}</h3>
<h4 class="card_race">${kittenTwoRace}</h4>
<p class="card_description">
  ${kittenTwoDesc}
</p>
</li>`


/*CAT 3*/

const kittenThreeImage = 'https://dev.adalab.es/maine-coon-cat.webp';
const kittenThreeName = 'Cielo';
const kittenThreeDesc = 'Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.';
const kittenThreeRace = 'Maine Coon';

const kittenThree = `<li class="card">
<img
  class="card_img"
  src=${kittenThreeImage}
  alt="maine-coon-cat"
/>
<h3 class="card_title">${kittenThreeName}</h3>
<h4 class="card_race">${kittenThreeRace}</h4>
<p class="card_description">
${kittenThreeDesc}
</p>
</li>`


/* LLAMAR A LOS li AL ul del html */

catList.innerHTML = kittenOne + kittenTwo + kittenThree;


//Filtrando gatitos  por descripción//
const input_search_desc = document.querySelector('.js_in_search_desc');
const descrSearchText = input_search_desc.value;

if (kittenOne.includes(descrSearchText)) {
  catList.innerHTML = kittenOne
}

if (kittenTwo.includes(descrSearchText)) {
  catList.innerHTML = kittenTwo
}

if (kittenThree.includes(descrSearchText)) {
  catList.innerHTML = kittenThree
}



////Añadir nuevo gatito////

const btnAdd = document.querySelector(".js-btn-add");
//declarar constantes del formulario ya que hasta no dar click en el boton no aparece el formularo de nuevo gatito

const inputDesc = document.querySelector('.js-input-desc');
const inputPhoto = document.querySelector('.js-input-photo');
const inputName = document.querySelector('.js-input-name');
const labelMessageError = document.querySelector('.js-label-error');


btnAdd.addEventListener('click', (event) => {

  event.preventDefault();
  console.log(event);

  const valueDesc = inputDesc.value;
  const valuePhoto = inputPhoto.value;
  const valueName = inputName.value;

  if (valueDesc === '' || valuePhoto === '' || valueName === '') {
    //completa el código

    labelMessageError.innerHTML = "¡Uy! parece que has olvidado algo";

  } else {
    //completa el código


  }

})