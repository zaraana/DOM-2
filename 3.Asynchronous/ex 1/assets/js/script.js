

// Ex 1
const button = document.getElementById('jsonContent');
button.addEventListener('click', function(){
    fetch("./assets/js/data.json")
        .then((response) => response.json())
        .then((data) => {
            const list = document.getElementById('list');
            list.innerHTML = ' ';
            data.forEach(item => {
                const listItem = document.createElement('li');
                listItem.textContent = item.name;
                list.appendChild(listItem);
            });
        })
    .catch((error) => {
        console.log("There was an error!", error);
    });
});

