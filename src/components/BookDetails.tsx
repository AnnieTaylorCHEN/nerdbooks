import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

//DATA
import books from '../data/100_books.json';

import './BookDetails.css';

interface BookDetails {
	title: string;
	isbn?: string;
	pageCount: number;
	publishedDate: { $date: string | undefined };
	thumbnailUrl?: string;
	shortDescription?: string;
	longDescription?: string;
	authors: string[];
	status: string;
	categories: string[];
}

const BookDetails = () => {
	const { id } = useParams();

	const getBook = (id: string) => {
		return books.filter((book: BookDetails| any) => book.isbn === id);
	};
	let book: BookDetails | any;

	if (id) {
		book = getBook(id)[0];
	}

	const  {
		title,
		isbn,
		pageCount,
		publishedDate,
		thumbnailUrl,
		shortDescription,
		longDescription,
		authors,
		status,
		categories,
	} = book;

	const [showDetails, setShowDetails] = useState(false);

	return (
		<section className="book__details">
			<Link to="/">
				<button>Back to books</button>
			</Link>
			<div>
				{thumbnailUrl ? (
					<img src={thumbnailUrl} alt={title} />
				) : (
					'No book cover available'
				)}
				<h2>{title}</h2>
				<p>isbn: {isbn ? isbn : 'NA'} </p>
				<p>pages: {pageCount}</p>
				<p>published on: {publishedDate ? publishedDate.$date : 'NA'}</p>
				<p>summary: {shortDescription ? shortDescription : 'NA'}</p>
				<button onClick={() => setShowDetails(!showDetails)}>
					{' '}
					show details
				</button>
				{showDetails && (
					<p>details: {longDescription ? longDescription : 'NA'}</p>
				)}

				<p>
					authors:{' '}
					{authors.map((author:string, index:number) => (
						<li key={author + index}>{author}</li>
					))}
				</p>
				<p>status: {status}</p>
				<p>
					categories:{' '}
					{categories.map((category:string, index: number) => (
						<li key={category + index}>{category}</li>
					))}
				</p>
			</div>
		</section>
	);
};

export default BookDetails;
