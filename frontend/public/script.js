const resultElm = document.getElementById("result");
const formElm = document.getElementById("form");
const resultWriteCharactersElm = document.getElementById("resultWriteCharacters");
const writeCharactersFormElm = document.getElementById("writeCharactersForm");


formElm.addEventListener("submit", (event) => {
    event.preventDefault();
    fetch("http://localhost:3000/api/countLetters", {
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

writeCharactersFormElm.addEventListener("submit", (event) => {
    event.preventDefault();
    fetch("http://localhost:3000/api/writeCharacters", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ paragraph: document.getElementById("paragraphForWriteCharacters").value }),
    })
        .then((response) => response.json())
        .then((data) => {
            resultWriteCharactersElm.innerHTML = `Value : ${data.message}`;
            resultWriteCharactersElm.style.display = "block";
        })
        .catch((error) => {
            console.error("Error:", error);
        });
});

const hideResultForWriteCharacters = () => {
    resultWriteCharactersElm.style.display = "none";
}