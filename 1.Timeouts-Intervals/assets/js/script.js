const currentTitle = document.title;
document.title = "Timeouts and intervals";

// console.log(document.title);

// Trying setTimeout()
    // function greet() {
    //     console.log("Hello, world!");
    // }
    
    // setTimeout(greet, 1000);

    // function greet(name) {
    //     console.log(`Hello, ${name}!`);
    //     }
        
    //     setTimeout(greet, 1000, "Zahra");

    // console.log("⚠️! In exactly two seconds something very cute will show up");

    // function theCuteness() {
    // console.log("😘");
    // }

    // setTimeout(theCuteness, 2000);

    // this is AWESOMEEE!!
    // EX.
    // function theExplosion() {
    //     alert("BOOM!");
    //     }
        
    //     const button = document.createElement("button");
    //     button.textContent = "WARNING";
    //     button.addEventListener("click", () => {
    //         // this will delay the event by 5 seconds
    //         setTimeout(theExplosion, 5000);
    //     });
    //     document.body.appendChild(button);


    // EX.1
        // function typeWriter(word) {
        //     let index = 0;
        //     const interval = setInterval(() => {
        //     if (index < word.length) {
        //         console.log(word.charAt(index));
        //         //  is a JavaScript string method that returns the character at the specified index position within a string. 
        //         index++;
        //     } else {
        //         clearInterval(interval);
        //     }
        //     }, 1000);
        // }
        
        // typeWriter("Keller");

        // EX.2

            function timePassed() {
                let seconds = 0;
                setInterval(() => {
                seconds++;
                if (seconds < 60) {
                    document.body.innerText = seconds + " seconds have passed";
                    console.log(seconds + " seconds have passed");
                } else {
                    const minutes = Math.floor(seconds / 60);
                    if (minutes === 1) {
                    document.body.innerText = "1 minute has passed";
                    console.log("1 minute has passed");
                    } else {
                    // document.body.innerText = minutes + " minutes have passed";
                    // console.log(minutes + " minutes have passed");
                    }
                }
                }, 1000);
            }
            
            timePassed();
