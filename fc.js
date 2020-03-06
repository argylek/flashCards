var cards = [
  {
    title: "school things all the time",
    body: "all the things you need to learn",
    points: 2
  },
  {
    title: "more things",
    body: "some things that you might need to learn",
    points: 1
  }
];
let blankCard = {
  title: "your title here",
  body: "answer to your card",
  points: 2
};
const cardCont = document.getElementById("cards_container");
const editForm = document.createElement("form");
const editBtn = document.createElement("button");

const buildCard = c => {
  //info needed to build a card.
  let card = document.createElement("div");
  card.classList.add("card");
  let id = Math.random();
  card.setAttribute("id", id);
  let cardTitle = c.title;
  let cardBody = c.body;

  //what the card will look like
  card.innerHTML = `<h3 class='card_title'>${cardTitle}</h3>
                    <div class='card_body'>${cardBody}</div>`;
  // info needed for edit form

  //created form to edit

  editForm.classList.add("edit-form");
  editForm.classList.add("hidden");
  editForm.innerHTML = `<label for="title">Card Title</label>
                      <input id="title" type="text" />
                      
                      <label for="body">Card Body</label>
                      <input id="body" type="text" />`;

  //create edit button
  editBtn.innerText = "edit";
  editBtn.classList.add("edit-btn");

  //final card build and push to page
  card.append(editBtn);
  card.append(editForm);
  return cardCont.appendChild(card);
};

const editCard = card => {
  const editForm = document.querySelector("edit-form" + card.id);
  editForm.classList.toggle("hidden");
};

const addCard = e => {
  e.preventDefault();

  //get html inputs from form
  const newCardTitle = document.getElementById("title");
  const newCardBody = document.getElementById("body");
  const newCardPoints = 2;
  // const cardCont = document.querySelector("cards_container");

  //format that information for my creation method
  const newCard = {
    title: newCardTitle.value,
    body: newCardBody.value,
    points: newCardPoints,
    id: cards.length
  };

  buildCard(newCard);

  // const deleteButton = document.getElementsByClassName("delete");

  //clear the form
  newCardTitle.value = "";
  newCardBody.value = "";
  newCardPoints.value = "";
};

// edit form for each card

const cardsOnLoad = arrayOfObjects => {
  arrayOfObjects.forEach(card => {
    buildCard(card);
  });
};

// const deleteCard = id => {
//   let cId = toString(id);
//   let element = document.getElementById(cId);
//   element.parentNode.removeChild(element);
// };

// const submitBtn = document.querySelector("button");
// submitBtn.addEventListener("click", addCard);

const button = document.querySelector('button[type="submit"]');
button.addEventListener("click", addCard);

editBtn.addEventListener("click", editCard(element.id));

// newCard.addEventListener("click", () => addCard(blankCard));

cardsOnLoad(cards);

// I'm super suck and need to get some sleep. Things are broken and i'll try to fix them in the morning and finish stuff up
//crud isn't working and the stuff I'm finding online gets me close but isn't working.
