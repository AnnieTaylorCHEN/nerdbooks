import { useState } from 'react';

import './AddBook.css';

const AddBook = () => {
	const [title, setTitle] = useState('');
	const [isbn, setIsbn] = useState('');
	const [pageCount, setPageCount] = useState('');
	const [date, setDate] = useState('');
	const [thumbnailUrl, setThumbnailUrl] = useState('');
	const [summary, setSummary] = useState('');
	const [details, setDetails] = useState('');
	const [authors, setAuthors] = useState('');
	const [status, setStatus] = useState('');
	const [categories, setCategories] = useState('');

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const newBook = {
			title,
			isbn,
			pageCount,
			date: { $date: date},
			thumbnailUrl,
			summary,
			details,
			authors : [authors],
			status,
			categories: [categories],
		};
		localStorage.setItem('nerdbooks', JSON.stringify(newBook));
		setTitle('');
		setIsbn('');
		setPageCount('');
		setDate('');
		setThumbnailUrl('');
		setSummary('');
		setDetails('');
		setAuthors('');
		setStatus('');
		setCategories('');
	};

	return (
		<div className="content-container">
			<form id="form" className="add-book-form" onSubmit={handleSubmit}>
				<div>
					<label htmlFor="title">Title</label>
					<input
						type="text"
						id="title"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
					/>
				</div>
				<div>
					<label htmlFor="isbn">ISBN</label>
					<input
						type="text"
						id="isbn"
						value={isbn}
						onChange={(e) => setIsbn(e.target.value)}
					/>
				</div>
				<div>
					<label htmlFor="pagecount">page count</label>
					<input
						type="number"
						id="pagecount"
						value={pageCount}
						onChange={(e) => setPageCount(e.target.value)}
					/>
				</div>
				<div>
					<label htmlFor="date">published date</label>
					<input
						type="date"
						id="date"
						value={date}
						onChange={(e) => setDate(e.target.value)}
					/>
				</div>
				<div>
					<label htmlFor="thumbnailUrl">thumbnail url</label>
					<input
						type="text"
						id="thumbnailUrl"
						value={thumbnailUrl}
						onChange={(e) => setThumbnailUrl(e.target.value)}
					/>
				</div>
				<div>
					<label htmlFor="shortDescription">summary</label>
					<input
						type="text"
						id="shortDescription"
						value={summary}
						onChange={(e) => setSummary(e.target.value)}
					/>
				</div>
				<div>
					<label htmlFor="longDescription">details</label>
					<input
						type="text"
						id="longDescription"
						value={details}
						onChange={(e) => setDetails(e.target.value)}
					/>
				</div>
				<div>
					<label htmlFor="authors">authors</label>
					<input
						type="text"
						id="authors"
						value={authors}
						onChange={(e) => setAuthors(e.target.value)}
					/>
				</div>
				<div>
					<label htmlFor="status">status</label>
					<input
						type="text"
						id="status"
						value={status}
						onChange={(e) => setStatus(e.target.value)}
					/>
				</div>
				<div>
					<label htmlFor="categories">categories</label>
					<input
						type="text"
						id="categories"
						value={categories}
						onChange={(e) => setCategories(e.target.value)}
					/>
				</div>

				<button type="submit">Add</button>
			</form>
		</div>
	);
};

export default AddBook;
