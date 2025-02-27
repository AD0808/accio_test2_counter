const countElement = document.getElementById("count");
const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");
const clearBtn = document.getElementById("clear");
const errorElement = document.getElementById("error");

let count = 0;

incrementBtn.addEventListener("click", () => {
    count++;
    countElement.innerHTML = count;
    errorElement.style.display = "none";
    if(count > 0){
        clearBtn.style.display = "block";
    }
});

decrementBtn.addEventListener("click", () => {
    if (count > 0) {
        count--;
        countElement.innerHTML = count;
        if(count === 0){
            clearBtn.style.display = "none";
        }
    } else {
        errorElement.style.display = "block";
    }
});

clearBtn.addEventListener("click", () => {
    count = 0;
    countElement.innerHTML = count;
    clearBtn.style.display = "none";
});
        