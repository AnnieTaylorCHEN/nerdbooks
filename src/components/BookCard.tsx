import { Link } from 'react-router-dom';

import './BookCard.css';

interface BookCardProps {
	title: string;
    isbn?: string;
	thumbnailUrl?: string;
	authors: string[];
	status: string;
	categories: string[];
}

const BookCard = ({
	title,
    isbn,
	thumbnailUrl,
	authors,
	status,
	categories,
}: BookCardProps) => {

	return (
		<Link to={`/${isbn}`} className="book__card">
			{thumbnailUrl ? (
				<img src={thumbnailUrl} alt={title} />
			) : (
				'No book cover available'
			)}
			<h2>{title}</h2>
			<p>
				authors:{' '}
				{authors.map((author, index) => (
					<li key={author + index}>{author}</li>
				))}
			</p>
			<p>status: {status}</p>
			<p>
				categories:{' '}
				{categories.map((category, index) => (
					<li key={category + index}>{category}</li>
				))}
			</p>
		</Link>
	);
};

export default BookCard;
