const populateTable = (pets) => {
  const tableEl = document.querySelector("#petsTable");

  const tableBodyEl = document.querySelector("#output");
  tableBodyEl.innerHTML = "";

  pets.forEach((pet) => {
    const tableRowEl = document.createElement("tr");
    const firstNameEl = document.createElement("td");
    const typeEl = document.createElement("td");
    const ageEl = document.createElement("td");

    const { firstName, type, age } = pet;

    firstNameEl.textContent = firstName;
    typeEl.textContent = type;
    ageEl.textContent = age;

    tableRowEl.append(firstNameEl, typeEl, ageEl);
    tableBodyEl.append(tableRowEl);
  });

  tableEl.append(tableBodyEl);
};

export { populateTable };
