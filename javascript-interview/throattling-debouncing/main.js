// Debouncing and Throttling are techniques in js to optimise the application and browser performance.

// Debounce function limits the execution of a function call and waits for a certain amount of time before running it again.

// Throttling is a technique where we make the function call in a predetermined time interval irrespective of continuous user actions.

// Ques 1 - create a button UI and add debounce as follows =>
// --> Show "Button Pressed <X> Times" every time button is pressed
// --> Increase "Triggered <Y> Times" count after 800ms of debounce

const btn = document.querySelector(".increment_btn");
const btnPress = document.querySelector(".increment_pressed");
const count = document.querySelector(".increment_count");

var pressedCount = 0;
var triggerCount = 0;

// debounce polyfill
const myDebounce = (callback, delay) => {
    let timer;
    return function (...args) {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
            callback(...args)
        }, delay)
    }
}

// polyfill for throttling function
const myThrottle = (callback, delay) => {
    let last = 0;
    return function (...args) {
        let now = new Date().getTime();
        if (now - last < delay) return;
        last = now;
        return callback(...args)
    }
}

const debounceCount = myThrottle(() => {
    triggerCount += 1;
    count.innerHTML = triggerCount
}, 800)

btn.addEventListener("click", () => {
    btnPress.innerHTML = ++pressedCount;
    debounceCount();
})

