// write a function that prints 1,2,3 at a interval of 2 sec without using predefined fun
let counter = 1;
let startTime = Date.now();

function customSetInterval() {
    if (counter <= 3) {
        console.log(counter);
        counter++;

        while (Date.now() - startTime < 2000) {

        }
        startTime = Date.now();
        customSetInterval();
    }
}

customSetInterval()