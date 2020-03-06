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
  // prevent page from refreshing on submit
  e.preventDefault();

  // Get inpul elements from the form
  let newCTitle = document.getElementById("title");
  let newCBody = document.getElementById("body");
  let newCPoints = 2;

  // format values into a new hairstyle object
  const hairstyle = {
    title: newCTitle.value,
    body: newCBody.value,
    poinits: newCPoints,
    id: cards.length
  };

  const div = document.createElement("div");
  const h3 = document.createElement("h3");
  const bodyDiv = document.createElement("div");
  const body = document.querySelector(".cards_container");
  div.appendChild(h3);
  div.appendChild(bodyDiv);

  body.append(div);
  // Add text to an element
  h3.textContent = card.title;
  // Add class to an element
  div.classList.add("card");
  // Add an attribute to a element

  // Clear the form
  newCTitle.value = "";
  newCBody.value = "";
  newCPoints.value = "";
};

const button = document.querySelector('button[type="submit"]');
button.addEventListener("click", addCard);

const buildCard = card => {
  // Create elements needed to build a card
  const div = document.createElement("div");
  const h3 = document.createElement("h3");
  const bodyDiv = document.createElement("div");

  // Append newly created elements into the DOM
  const body = document.querySelector(".cards_container");
  body.append(div);
  div.append(h3);
  div.append(bodyDiv);
  // Set content and attributes
  h3.innerHTML = card.title;
  bodyDiv.innerHTML = card.body;
  div.setAttribute("class", "card");

  // Edit Step 1: Create the edit btn and form for each card
  const editBtn = document.createElement("button");
  editBtn.innerText = "Edit";
  editBtn.classList.add("edit-btn" + card.id);

  editBtn.addEventListener("click", () => editStyle(card));

  const editForm = document.createElement("form");
  editForm.classList.add("hidden");
  // Edit Step 2: Ensure that each edit form can be uniquely id'ed
  editForm.classList.add("edit-form" + card.id, "edit-form");
  editForm.innerHTML = `
      <label for="title">Card title</label>
      <input id="title" type="text" />
      <label for="body">Card body</label>
      <input id="body" type="text" />
  `;
  div.append(editBtn);
  div.append(editForm);
};

const editCard = card => {
  // Edit Step 3: Grab the correct edit form
  // And unhide/hide the form as needed
  const editForm = document.querySelector(".edit-form" + card.id);
  editForm.classList.toggle("hidden");

  const editBtn = document.querySelector(".edit-btn" + card.id);

  // Edit Step 4: when in edit mode, update btn text to reflect this
  editBtn.innerText = "Done Editing";

  // Edit Step 5: Add event listener to the edit button
  // This will take user input and update the UI
  // To reflect the user's changes
  editBtn.addEventListener("click", () => {
    const editForm = document.querySelector(".edit-form" + card.id);
    // Edit Step 6: Construct a new hairstlye object with the users changes
    // To replace the previous hairstyle info
    // The values should either be new user input or default values if not changed by user
    const editedCardTitle =
      editForm.querySelector("input#title").value || card.title;
    const editedCardBody =
      editForm.querySelector("input#body").value || card.body;

    // Edit Step 7: Create the new hairstyle object that includes users changes
    const updatedCard = {
      title: editedCardTitle,
      body: editedCardBody,
      id: card.id
    };

    // Edit Step 8: Update the particular hairstyle with new hairstyle object
    // use hairstyle.id - 1 since data id's start at 1 while array indexes start at 0
    cards[card.id - 1] = updatedCard;

    // Edit Step 9: Find the hairstyle container in the HTML
    // Replace with a new list of hairstyle cards that include the updated hairstyle
    const cardsContainer = document.querySelector(".cards_container");
    cardsContainer.innerHTML = "";
    cards.forEach(card => buildCard(card));

    // Edit Step 10: Remove Edit mode styles
    editForm.classList.toggle("hidden");
    editBtn.innerText = "Edit";
  });
};

cards.forEach(card => buildCard(card));
