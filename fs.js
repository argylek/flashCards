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

const addCard = e => {
  e.preventDefault();

  //get html inputs from form
  let newCardTitle = document.getElementById("title");
  let newCardBody = document.getElementById("body");
  let newCardPoints = 2;

  //format that information for my creation method
  const newCard = {
    title: newCardTitle.value,
    body: newCardBody.value,
    points: 2,
    id: cards.length
  };

  const deleteButton = document.getElementsByClassName("delete");
  const newCardTitle = document.getElementById("title");
  const newCardBody = document.getElementById("body");
  const newCardPoints = 2;
  const div = document.createElement("div");
  const h3 = document.createElement("h4");
  const cardCont = document.querySelector("cards_container");
  div.appendChild(h3);
  cardCont.append(div);

  div.classList.add("card");

  //clear the form
  newCardTitle.value = "";
  newCardBody.value = "";
  newCardPoints.value = "";
};

const button = document.querySelector('button[type="submit"]');
button.addEventListener("click", addCard);

const buildCard = c => {
  //info needed to build a card.
  let card = document.createElement("div");
  card.setAttribute("class", "card");
  let id = cards.length;
  card.setAttribute("id", id);
  let cardTitle = object.title;
  let cardBody = object.body;
  card.innerHTML = `<div class='card_title'>${cardTitle}</div><button>edit</button>
                    <div class='card_body'>${cardBody}</div><button>edit</button>
                    <button>delete card</button>`;
  return cardCont.appendChild(card);
};

const cardsOnLoad = arrayOfObjects => {
  arrayOfObjects.forEach(card => {
    pushCard(card);
  });
};

// const deleteCard = id => {
//   let cId = toString(id);
//   let element = document.getElementById(cId);
//   element.parentNode.removeChild(element);
// };

const addCard = e => {
  debugger;
  e.preventDefault();
  const newCard = {
    title: newCardTitle,
    body: newCardBody,
    points: 2,
    id: cards.length
  };
  pushCard(newCard);
  //clear the form
  newCardTitle.value = "";
  newCardBody.value = "";
  newCardPoints.value = "";
};

const submitBtn = document.querySelector("button");
submitBtn.addEventListener("click", addCard);

// newCard.addEventListener("click", () => addCard(blankCard));

cardsOnLoad(cards);
