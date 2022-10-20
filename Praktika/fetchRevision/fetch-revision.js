const showPosts = async (idNumber) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts"); // "/posts" yra endpoint.
    const posts = await response.json();

    console.log(posts);
    return (posts[idNumber])
}

const createInputForm = () => {
    const inputBox = document.createElement('input');
    inputBox.setAttribute('type', 'input');
    inputBox.setAttribute('id', 'input');
    inputBox.setAttribute('name', 'input');
    document.body.appendChild(inputBox);

    const inputButton = document.createElement('button');
    inputButton.innerHTML = 'Input ID number';
    inputButton.setAttribute('id', 'inputButton');

    const form = document.createElement('form');
    form.append(inputBox, inputButton);
    document.body.append(form);
}

const createTableSkeleton = () => {
    const id = document.createElement('th');
    id.innerText = 'ID';

    const image = document.createElement('th');
    image.innerText = 'Image';

    const firstName = document.createElement('th');
    firstName.innerText = 'First name';

    const lastName = document.createElement('th');
    lastName.innerText = 'Last name';

    const city = document.createElement('th');
    city.innerText = 'City ';

    const favColor = document.createElement('th');
    favColor.innerText = 'Fav color';

    const tr = document.createElement('tr');
    tr.append(id, image, firstName, lastName, city, favColor);

    const thead = document.createElement('thead');
    thead.append(tr);

    const table = document.createElement('table');
    table.append(thead, document.createElement('tbody'));
    document.body.append(table);
}

function populateTable(robots) {
    const tbody = document.querySelector('tbody');
    tbody.innerHTML = '';

    robots.forEach(robot => {
        const id = document.createElement('td');
        id.innerText = robot.id

        const img = document.createElement('img');
        img.src = robot.image;
        img.setAttribute('alt', 'UserPicture');
        const image = document.createElement('td');
        image.append(img);

        const [name, surname] = robot.name.split(' ');

        const firstName = document.createElement('td');
        firstName.innerText = name;

        const lastName = document.createElement('td');
        lastName.innerText = surname;

        const city = document.createElement('td');
        city.innerText = robot.city;

        const favColor = document.createElement('td');
        favColor.innerText = robot.fav_color;

        const tr = document.createElement('tr')
        tr.append(id, image, firstName, lastName, city, favColor);
        tbody.append(tr);
    });
}

createInputForm();
createTableSkeleton();
const postas = await showPosts();
populateTable(postas)

document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();
    const idValue = document.getElementById('input').value;
    console.log(idValue);
    if (typeof (idValue) === "number") populateTable(postas)
    else console.log(postas);
})

