const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

function newlist() {
    if (inputBox.value === "") {
    }
    else {
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        li.style.fontSize = "1.1rem";
        listContainer.appendChild(li);
    }
    inputBox.value = "";
};

function del() {
    listContainer.removeChild(listContainer.lastChild);
}
