const setEditModal = (isbn, title, author, publisher, publishdate, numberofpages) => {
    
    document.getElementById('isbn').value = isbn;
    document.getElementById('title').value = title;
    document.getElementById('author').value = author;
    document.getElementById('publisher').value = publisher;
    document.getElementById('publishdate').value = publishdate;
    document.getElementById('numberofpages').value = numberofpages;

}

const deleteBook=(book_isbn) => {

    fetch('/books', {
        method: 'delete',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            isbn: book_isbn 
        })
    })
        .then(res => {
            if (res.ok) return res.json()
        })
        .then(response => {
            window.location.reload(true)
        })
        .catch(console.error)
}