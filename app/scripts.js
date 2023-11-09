/* api de NYtimes*/
const apiKey = 'h3mchP8GfLtpSWSH7mnjAAbPglA9AxrO';
const apiUrl = 'https://api.nytimes.com/svc/books/v3/lists';
var listName = 'hardcover-fiction';

function Show(listName) {
    const requestUrl = `${apiUrl}/${listName}.json?api-key=${apiKey}`;
    var genero = document.getElementById('genero');

    genero.innerHTML = '';

    fetch(requestUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Error en la solicitud a la API');
            }
            return response.json();
        })
        .then((data) => {
            const books = data.results.books;
            const bookListContainer = document.getElementById('bookList');
            let row = null;

            genero.innerHTML = listName.replace(/-/g, ' ').toUpperCase();
            bookListContainer.innerHTML = '';

            books.forEach((book, index) => {
                if (index % 4 === 0) {
                    row = document.createElement('div');
                    row.className = 'row';
                    bookListContainer.appendChild(row);
                }

                const col = document.createElement('div');
                col.className = 'col-md-3';

                const bookDiv = document.createElement('div');
                bookDiv.className = 'mb-4 shadow-sm book';

                const textDiv = document.createElement('div');
                textDiv.className = 'mb-4 text-center';

                bookDiv.innerHTML = `
                    <img src="${book.book_image}" class="card-img-top" alt="${book.title}">
                `;

                bookDiv.addEventListener('click', () => {

                    // Función para abrir modal
                    function openModal() {

                        // Crea y muestra modal
                        const modal = document.createElement('div');
                        modal.classList.add('book-modal');

                        modal.innerHTML = `
                        <div class="book-modal-content">
                        <span class="close">&times;</span>
                        <h2>${book.title}</h2>
                        <img class="img-fluid" src="${book.book_image}">  
                        <p><strong>Autore:</strong> ${book.author}</p>
                        <p><strong>Editorial:</strong> ${book.publisher}</p>
                        <p><strong>Descripción:</strong> ${book.description}</p>
                        </div>
                        `;

                        document.body.appendChild(modal);


                        // Obtén el botón de cerrar
                        const closeBtn = modal.querySelector('.close');

                        // Agrega un manejador para cerrar el modal
                        closeBtn.addEventListener('click', () => {
                            modal.remove();
                        });

                    }

                    openModal();
                });

                textDiv.innerHTML = `
                <div class="card-body">
                <h5 class="card-title">${book.title}</h5>
                <p class="card-text"><strong>Autore:</strong> ${book.author}</p>
                </div>
                `;

                col.appendChild(bookDiv);
                col.appendChild(textDiv);
                row.appendChild(col);
            });
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

document.getElementById('hardcover-fiction').addEventListener('click', function (event) {
    event.preventDefault();
    listName = this.id;
    Show(listName);
});

document.getElementById('hardcover-nonfiction').addEventListener('click', function (event) {
    event.preventDefault();
    listName = this.id;
    Show(listName);
});

document.getElementById('trade-fiction-paperback').addEventListener('click', function (event) {
    event.preventDefault();
    listName = this.id;
    Show(listName);
});

document.getElementById('mass-market-paperback').addEventListener('click', function (event) {
    event.preventDefault();
    listName = this.id;
    Show(listName);
});

document.getElementById('paperback-nonfiction').addEventListener('click', function (event) {
    event.preventDefault();
    listName = this.id;
    Show(listName);
});

document.getElementById('young-adult').addEventListener('click', function (event) {
    event.preventDefault();
    listName = this.id;
    Show(listName);
});

document.getElementById('picture-books').addEventListener('click', function (event) {
    event.preventDefault();
    listName = this.id;
    Show(listName);
});

document.getElementById('advice-how-to-and-miscellaneous').addEventListener('click', function (event) {
    event.preventDefault();
    listName = this.id;
    Show(listName);
});

document.getElementById('science').addEventListener('click', function (event) {
    event.preventDefault();
    listName = this.id;
    Show(listName);
});

document.getElementById('travel').addEventListener('click', function (event) {
    event.preventDefault();
    listName = this.id;
    Show(listName);
});

Show(listName);
/* termina api nytimes*/


