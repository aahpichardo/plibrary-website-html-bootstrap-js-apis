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
                bookDiv.className = 'card mb-4 shadow-sm';

                bookDiv.innerHTML = `
                    <img src="${book.book_image}" class="card-img-top" alt="${book.title}">
                    <div class="card-body">
                        <h5 class="card-title">${book.title}</h5>
                        <p class="card-text"><strong>Author(s):</strong> ${book.author}</p>
                        <p class="card-text"><strong>Description:</strong> ${book.description}</p>
                        <p class="card-text"><strong>ISBN:</strong> ${book.primary_isbn10}</p>
                    </div>
                `;

                col.appendChild(bookDiv);
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

 
