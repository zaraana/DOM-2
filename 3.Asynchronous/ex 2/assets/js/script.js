

// Ex 2

const button = document.getElementById('addBtn');
const divResult = document.getElementById('results');
const inputName = document.getElementById('Input');


button.addEventListener('click', function(){

    const inputName = document.getElementById('Input');
    fetch(`https://api.agify.io?name=${inputName.value}`)
    .then((response) => response.json())
    .then((data) => {
        const newDiv = document.createElement('div');
        const name = data.name;
        const age = data.age;
        newDiv.textContent = `${name} is ${age} years old.`;
        divResult.appendChild(newDiv)
    })
    .catch((error) => {
        console.log("There was an error!", error);
    });
});
