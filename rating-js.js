const questionContainer = document.getElementById("question-container");
const tyContainer = document.getElementById("thank-you-container");
const submitButton = document.getElementById("submit-button");
const ratings = document.querySelectorAll(".circle-button");
const summary = document.getElementById("summary");
let ratingValue = "";

ratings.forEach(button => {
    button.addEventListener("click", () => {
        ratings.forEach(btn => {
            btn.classList.remove("selected")
        })
        button.classList.add("selected");
        ratingValue = button.value;
    })
})


const submit = () => {
    
    tyContainer.classList.add("show");
    summary.innerHTML = `You selected ${ratingValue} out of 5`
    
}

submitButton.addEventListener("click", submit)
