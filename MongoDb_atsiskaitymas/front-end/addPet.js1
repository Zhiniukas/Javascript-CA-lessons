const addPet = async () => {
  const nameInputValue = document.querySelector("#petName").value.trim();
  const ageValue = document.querySelector("#petAge").value;
  const typeValue = document.querySelector("#petType").value;

  const newPet = JSON.stringify({
    firstName: nameInputValue,
    type: typeValue,
    age: +ageValue,
  });

  try {
    const myHeaders = new Headers();
    myHeaders.append("Content-type", "application/json");

    const request = await fetch("http://localhost:5000/pet", {
      method: "POST",
      headers: myHeaders,
      body: newPet,
    });
    return request;
  } catch (error) {
    alert(error);
  }
};

document.body
  .querySelector("#petForm")
  .addEventListener("submit", async (event) => {
    event.preventDefault();

    await addPet();
  });
