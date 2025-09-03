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