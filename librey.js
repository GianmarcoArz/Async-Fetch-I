const libreriaUrl = "https://striveschool-api.herokuapp.com/books";

const getLibri = function () {
  fetch(libreriaUrl)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Errore nella lettura dei libri");
      }
    })
    .then((arraybook) => {
      console.log(arraybook);
      const contLibri = document.getElementById("libreria");
      arraybook.forEach((book) => {
        const card = document.createElement("div");
        card.classList.add("col-12", "col-md-4", "col-xl-3");
        card.innerHTML = `<div class="card" id="card">
            <img src="${book.img}" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">${book.title}</h5>
              <p class="card-text">
              <button class="btn btn-danger" id="scarta">scarta</button>
              <button class="btn btn-primary" id="scarta">aggiungi</button>
                ${book.price} Euro
              </p>
            </div>`;
        contLibri.appendChild(card);
        const buttonscarta = card.querySelector(".btn-danger");
        const buttonaggiungi = card.querySelector(".btn-primary");

        buttonscarta.addEventListener("click", function () {
          card.classList.add("d-none");
        });
        buttonaggiungi.addEventListener("click", function () {
          const carrello = document.getElementById("carrello");
          const libro = document.createElement("li");
          libro.innerText = `titolo : ${book.title}`;
          carrello.appendChild(libro);
        });
      });
    })
    .catch((error) => {
      console.log("error");
    });
};

getLibri();
