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
const buildCard = c => {
  //info needed to build a card.
  let card = document.createElement("div");
  card.setAttribute("class", "card");
  let id = cards.length;
  card.setAttribute("id", id);
  let cardTitle = c.title;
  let cardBody = c.body;
  card.innerHTML = `<div class='card_title'>${cardTitle}</div><button>edit</button>
                    <div class='card_body'>${cardBody}</div><button>edit</button>
                    <button>delete card</button>`;
  return cardCont.appendChild(card);
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

// newCard.addEventListener("click", () => addCard(blankCard));

cardsOnLoad(cards);
