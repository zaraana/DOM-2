
// synchronous  = Executes line by line consecutively in a sequential manner 
//                             Code that waits for an operation to complete.

// asynchronous = Allows multiple operations to be performed 
//                               concurrently without waiting. Doesn't block the execution 
//                               flow and allows the program to continue.
//                               (I/O operations, network requests, fetching data)
//                               Handled with: Callbacks, Promises, Async/Await




// Promise = An Object that manages asynchronous operations.
//                    Wrap a Promise Object around {asynchronous code}
//                    "I promise to return a value"

// DO THESE CHORES IN ORDER

// 1. WALK THE DOG
// 2. CLEAN THE KITCHEN
// 3. TAKE OUT THE TRASH


// fetch = Function used for making HTTP requests to fetch resources.
//         (JSON style data, images, files)
//         Simplifies asynchronous data fetching in JavaScript and
//         used for interacting with APIs to retrieve and send
//         data asynchronously over the web.
//         fetch(url, {options})



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

