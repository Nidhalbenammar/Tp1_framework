let books = [
  {id:1, titre:'Atomic habits', auteur:'James Clear', prix:30},
  {id:2, titre:'Power of habits', auteur:'Jeff Olsen', prix:25}
];

const showBooks = ()=>{

  const tbody = document.querySelector('#tab1 tbody');

  let newHTML = '';
  books.forEach(
    (book,index)=>{
      newHTML += '<tr>';
        newHTML += '<td>' + book.id + '</td>';
        newHTML += `<td>${book.titre}</td>`;
        newHTML += `<td>${book.auteur}</td>`;
        newHTML += `<td>${book.prix}</td>`;
        newHTML += `<td><button class='edit-button'>Editer</button></td>`;
        newHTML += `<td><button class='delete-button' onclick="deleteBook(${index})">Supprimer  </button></td>`;
      newHTML += '</tr>';
    }
  );

  tbody.innerHTML = newHTML;


}

const showAddForm = ()=>{
  document.getElementById('formAjout').classList.remove('hide');
}

const addBook = (e)=>{
  e.preventDefault();
  const newBook = {
    id: books[books.length-1].id + 1,
    titre : document.getElementById('titre').value,
    auteur : document.getElementById('auteur').value,
    prix : document.getElementById('prix').value
  }
  books.push(newBook);

  showBooks();

}


const editBook = (index) => {
  const book = books[index];

  const newTitle = prompt('Entrez un nouveau titre:', book.titre);
  const newAuthor = prompt('Entrez un nouveau auteur:', book.auteur);
  const newPrice = prompt('Enter un nouveau prix:', book.prix);

  
  if (newTitle !== null) {
    book.titre = newTitle;
  }
  if (newAuthor !== null) {
    book.auteur = newAuthor;
  }
  if (newPrice !== null) {
    book.prix = parseFloat(newPrice); 
  }

  showBooks();
}


const deleteBook = (index) => {
  if (index >= 0 && index < books.length) {
    if (confirm('Are you sure you want to delete this book?')) {
      books.splice(index, 1);
      showBooks();
    }
  } 
}

const init = () => {
  showBooks();
  document.getElementById('btnAjout').addEventListener('click', showAddForm);
  document.getElementById('addForm').addEventListener('submit', addBook);

  const editButtons = document.querySelectorAll('.edit-button');
  const deleteButtons = document.querySelectorAll('.delete-button');

  editButtons.forEach((button, index) => {
    button.addEventListener('click', () => editBook(index));
  });

  deleteButtons.forEach((button, index) => {
    button.addEventListener('click', () => deleteBook(index));
  });
}

window.addEventListener('load', init);
