import { useState } from 'react';

//DATA
import books from '../data/100_books.json';

import AddBook from './AddBook';
import BookCard from './BookCard';

const BookList = () => {
	const getNewBook = localStorage.getItem('nerdbooks');
	let newBook: any;
	let allBooks: any;
	if (getNewBook){
		newBook =  JSON.parse(getNewBook);
		allBooks = [newBook, ...books];
	} else {
		allBooks = books;
	}
	

	const [showAddBook, setShowAddBook] = useState(false);
	return (
		<div className="content-container">
			<button onClick={() => setShowAddBook(!showAddBook)}>Add book</button>
			{showAddBook && <AddBook />}

			<section className="book__grid">
				{allBooks.map((book: any, index: number) => (
					<BookCard
						key={book.title + index}
						title={book.title}
						isbn={book.isbn}
						thumbnailUrl={book.thumbnailUrl}
						authors={book.authors}
						status={book.status}
						categories={book.categories}
					/>
				))}
			</section>
		</div>
	);
};

export default BookList;
