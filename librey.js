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
        card.classList.add("col", "col-md-3", "col-lg-4");
        card.innerHTML = `<div class="card" id="card">
            <img src="${book.img}" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">${book.title}</h5>
              <p class="card-text">
              <button class="btn btn-primary" id="scarta">scarta</button>
                ${book.price} Euro
              </p>
            </div>`;
        contLibri.appendChild(card);
        const button = card.querySelector(".btn-primary");
        button.addEventListener("click", function () {
          card.classList.add("d-none");
        });
      });
    })
    .catch((error) => {
      console.log("error");
    });
};

getLibri();
