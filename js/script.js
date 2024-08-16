const counter = document.getElementById("counter");
const title = document.getElementById("title");

let x = 0;
function clickcounter() {
    x++;
    counter.textContent = x;

    switch(x) {
        case 10: title.textContent = "You've reached 10 clicks! Keep going!"; break;
        case 50: title.textContent = "Wow, 50 clicks already! You're on fire!"; break;
        case 100: title.textContent = "100 clicks! You're unstoppable!"; break;
        case 200: title.textContent = "200 clicks! You're a clicking champion!"; break;
        case 500: title.textContent = "You're still here? Keep clicking!"; break;
        case 1000: title.textContent = "Alright, stop clicking already! I'm tired of coming up with new messages. 😓"; break;
        case 1200: title.textContent = "Wow, you really didn't believe me that the last message was the final one, huh? 😅"; break;
        case 1500: title.textContent = "Okay, that's it! You're going to hurt your hand. Stop now! ✋";
        counter.classList.add("hidden");
        break;
    }

}

counter.addEventListener("click", clickcounter); 