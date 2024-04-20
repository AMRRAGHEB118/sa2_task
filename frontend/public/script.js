const resultElm = document.getElementById("result");
const formElm = document.getElementById("form");

formElm.addEventListener("submit", (event) => {
    event.preventDefault();
    fetch("http://localhost:3001/api/countLetters", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ paragraph: document.getElementById("paragraph").value }),
    })
        .then((response) => response.json())
        .then((data) => {
            resultElm.innerHTML = `Value : ${data.message}`;
            resultElm.style.display = "block";
        })
        .catch((error) => {
            console.error("Error:", error);
        });
});

const hideResult = () => {
    resultElm.style.display = "none";
}