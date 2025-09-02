<<<<<<< HEAD
import React from 'react';

const BookList = ({ books, selectBook, deleteBook, addToCart }) => {
    return (
        <div className="book-list">
            <ul>
                {books.map(book => (
                    <li key={book.id}>
                        <span>{book.title}</span>
                        <span> by {book.author}</span>
                        <span> - {book.price.toFixed(2)}</span>
                        {addToCart && (
                            <button onClick={() => addToCart(book)}>Add to Cart</button>
                        )}
                        {selectBook && (
                            <button onClick={() => selectBook(book)}>View Details</button>
                        )}
                        {deleteBook && (
                            <button onClick={() => deleteBook(book.id)}>Delete</button>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BookList;
=======
import React from 'react';

const BookList = ({ books, selectBook, deleteBook, addToCart }) => {
    return (
        <div className="book-list">
            <ul>
                {books.map(book => (
                    <li key={book.id}>
                        <span>{book.title}</span>
                        <span> by {book.author}</span>
                        <span> - {book.price.toFixed(2)}</span>
                        {addToCart && (
                            <button onClick={() => addToCart(book)}>Add to Cart</button>
                        )}
                        {selectBook && (
                            <button onClick={() => selectBook(book)}>View Details</button>
                        )}
                        {deleteBook && (
                            <button onClick={() => deleteBook(book.id)}>Delete</button>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BookList;
>>>>>>> d3a88dcbfb8f63e877cb54f6523e0c85f8f9af1c
