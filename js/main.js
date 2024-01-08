"use strict";
const catList = document.querySelector(".js-list");

/*CAT 1*/

// const kittenOneImage = "https://dev.adalab.es/gato-siames.webp";
// const kittenOneName = "Anastacio";
// const kittenOneDesc =
//   " Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.";
// const kittenOneRace = "Siamés";

// const kittenOne = `<li class="card">
// <article>
//   <img
//     class="card_img"
//     src= ${kittenOneImage}
//     alt="gatito"
//   />
//   <h3 class="card_title"> ${kittenOneName}</h3>
//   <h4 class="card_race">${kittenOneRace}</h4>
//   <p class="card_description">
//             ${kittenOneDesc}
//    </p>
// </article>
// </li>`;

// /*CAT 2*/
// const kittenTwoImage = "https://dev.adalab.es/sphynx-gato.webp";
// const kittenTwoName = "Fiona";
// const kittenTwoDesc =
//   "Produce fascinación y curiosidad. Exótico, raro, bello, extraño… hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.";
// const kittenTwoRace = "Sphynx";

// const kittenTwo = `<li class="card">
// <img
//   class="card_img"
//   src=${kittenTwoImage}
//   alt="sphynx-cat"
// />
// <h3 class="card_title">${kittenTwoName}</h3>
// <h4 class="card_race">${kittenTwoRace}</h4>
// <p class="card_description">
//   ${kittenTwoDesc}
// </p>
// </li>`;

// /*CAT 3*/

// const kittenThreeImage = "https://dev.adalab.es/maine-coon-cat.webp";
// const kittenThreeName = "Cielo";
// const kittenThreeDesc =
//   "Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.";
// const kittenThreeRace = "Maine Coon";

// const kittenThree = `<li class="card">
// <img
//   class="card_img"
//   src=${kittenThreeImage}
//   alt="maine-coon-cat"
// />
// <h3 class="card_title">${kittenThreeName}</h3>
// <h4 class="card_race">${kittenThreeRace}</h4>
// <p class="card_description">
// ${kittenThreeDesc}
// </p>
// </li>`;

/* LLAMAR A LOS li AL ul del html */

// catList.innerHTML = kittenOne + kittenTwo + kittenThree;

////Añadir nuevo gatito////

const btnAdd = document.querySelector(".js-btn-add");
//declarar constantes del formulario ya que hasta no dar click en el boton no aparece el formularo de nuevo gatito

const inputDesc = document.querySelector(".js-input-desc");
const inputUrl = document.querySelector(".js-input-url");
const inputName = document.querySelector(".js-input-name");
const labelMessageError = document.querySelector(".js-label-error");
const inputRace = document.querySelector(".js-input-race");

// function renderKitten(inputUrl, inputDesc, inputName, inputRace) {
//   //completa el código
//   catList.innerHTML += `<li class="card">
//                         <img
//                           class="card_img"
//                           src=${inputUrl}
//                           alt="foto del gatito"
//                         />
//                         <h3 class="card_title">${inputName}</h3>
//                         <h4 class="card_race">${inputRace}</h4>
//                         <p class="card_description">
//                           ${inputDesc}
//                         </p>
//                         </li>`;
// }
////crear objetos de los gatitos (2.7 OBJETOS)

//ejemplo de un objeto con la información del PRIMER gatito
const kittenData_1 = {
  image: 'https://dev.adalab.es/gato-siames.webp',
  name: 'Anastacio',
  desc: ' Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.',
  race: 'Siamés',
};

//ejemplo de un objeto con la información del SEGUNDO gatito
const kittenData_2 = {
  image: 'https://dev.adalab.es/sphynx-gato.webp',
  name: 'Fiona',
  desc: ' Produce fascinación y curiosidad. Exótico, raro, bello, extraño… hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.',
  race: 'Sphynx',
};

//ejemplo de un objeto con la información del TERCER gatito
const kittenData_3 = {
  image: 'https://dev.adalab.es/maine-coon-cat.webp',
  name: 'Cielo',
  desc: 'Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.',
  race: 'Maine Coon',
};

//Modifica la función renderKitten() para que reciba un objeto como parámetro.

function renderKitten(kittenData) {
  catList.innerHTML += `<li class="card">
                        <img
                          class="card_img"
                          src=${kittenData.image}
                          alt="foto del gatito"
                        />
                        <h3 class="card_title">${kittenData.name}</h3>
                        <h4 class="card_race">${kittenData.race}</h4>
                        <p class="card_description">
                          ${kittenData.desc}
                        </p>
                        </li>`;
}

renderKitten(kittenData_1)
renderKitten(kittenData_2)
renderKitten(kittenData_3)

//función para el desplegable del botón + //

function addNewKitten(event) {
  event.preventDefault(); //sirve para evitar que el formulario se resetee cuando le damos a enviar si hay algo que falta (para no perder todo)
  console.log(event);

  const valueUrl = inputUrl.value;
  const valueDesc = inputDesc.value;
  const valueRace = inputRace.value;
  const valueName = inputName.value;

  if (
    valueUrl === "" ||
    valueDesc === "" ||
    valueName === "" ||
    valueRace === ""
  ) {
    labelMessageError.innerHTML = "¡Uy! parece que has olvidado algo";
  } else {

    const kittenData = {
      image: valueUrl,
      name: valueName,
      desc: valueDesc,
      race: valueRace,
    };

    //invocación de la función renderKitten
    renderKitten(kittenData);

    labelMessageError.innerHTML = "¡Gracias! Tu gatito ha sido añadido";
  }
}

btnAdd.addEventListener("click", addNewKitten);

//variable del icono del btn//
const linkNewFormElement = document.querySelector(".js-ulForm");
// variable del form//
const newFormElement = document.querySelector(".newFormElement");

function handleClickNewCatForm(event) {
  event.preventDefault();
  if (newFormElement.classList.contains("collapsed")) {
    newFormElement.classList.remove("collapsed");
  } else {
    newFormElement.classList.add("collapsed");
  }
}

linkNewFormElement.addEventListener("click", handleClickNewCatForm);
//función para nuevo gatito RENDERIZADA

//Crear filto de gatitos

//Función manejadora del evento
const buttonSearch = document.querySelector(".js-button-search");
const input_search_desc = document.querySelector(".js_in_search_desc");
const input_search_race = document.querySelector(".js_in_search_race");




function filterKitten(event) {
  event.preventDefault();
  const descrSearchText = input_search_desc.value;
  const descrSearchRace = input_search_race.value;
  catList.innerHTML = '';
  // la función includes() siempre incluirá los casos vacíos

  if (!descrSearchText && !descrSearchRace) {
    catList.innerHTML = 'No hay gatitos disponibles';
  }

  else {

    if (kittenOneDesc.includes(descrSearchText.toLowerCase()) || kittenOneRace === descrSearchRace) {
      catList.innerHTML += kittenOne;
      console.log(catList);
    }

    if (kittenTwoDesc.includes(descrSearchText.toLowerCase()) || kittenTwoRace === descrSearchRace) {
      catList.innerHTML += kittenTwo;
      console.log(descrSearchText, descrSearchRace, 'gato calvo');
    }

    if (kittenThreeDesc.includes(descrSearchText.toLowerCase()) || kittenThreeRace === descrSearchRace) {
      catList.innerHTML += kittenThree;

    }
  }
};


buttonSearch.addEventListener("click", filterKitten);





