import { populateTable } from "./populateTable.js";

const ageEl = document.querySelector("#ageSort");
const dogButton = document.querySelector("#dogButton");

let petSelection = ["dog", "cat", "bunny"];
let order = "asc";

const getPets = async () => {
  try {
    const response = await fetch(
      `http://localhost:5000/pets/${petSelection.join(",")}/${order}`,
    );
    const pets = await response.json();

    populateTable(pets);
  } catch (error) {
    console.log(error);
  }
};

await getPets();

ageEl.addEventListener("click", async (e) => {
  const text = e.target.textContent;

  if (text.includes("ASC")) {
    e.target.textContent = text.replace("ASC", "DSC");
    order = "dsc";
  } else {
    e.target.textContent = text.replace("DSC", "ASC");
    order = "asc";
  }
  await getPets();
});

document.querySelectorAll("button").forEach((button) =>
  button.addEventListener("click", async (e) => {
    e.target.classList.toggle("selected");

    const petClicked = e.target.textContent.toLowerCase();

    if (petSelection.includes(petClicked)) {
      petSelection = petSelection.filter(
        (petStored) => petStored !== petClicked,
      );
    } else {
      petSelection.push(petClicked);
    }
    await getPets();
  }),
);
