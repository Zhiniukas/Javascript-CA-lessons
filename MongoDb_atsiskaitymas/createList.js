const createElementWithParams = (tagName, params) => {
    const element = document.createElement(tagName);

    Object.assign(element, params);

    return element;
};

const populateList = (members) => {
    const createMembersList = document.querySelector("#output");
    const elementList = document.createElement("div");

    elementList.className = "userList";

    members.forEach(member => {
        const rowElement = document.createElement("div");
        const loginData = createElementWithParams("div", { textContent: member.login });
        const imgdata = createElementWithParams("div");
        const img = document.createElement("img");

        rowElement.className = "record";
        loginData.className = "loginPlaceholder";

        img.src = member.avatar_url;
        imgdata.append(img);
        rowElement.append(loginData, imgdata);
        elementList.append(rowElement);
    });

    document.getElementById("message").style.display = "none";

    createMembersList.append(elementList);
}

export { populateList }