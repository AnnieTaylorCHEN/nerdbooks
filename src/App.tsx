import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BookList from './components/BookList';
import BookDetails from './components/BookDetails';

function App() {
	return (
		<Router>
			<h1>Nerd Books 🤓</h1>

			<Routes>
				<Route path="/" element={<BookList />} />
				<Route path="/:id" element={<BookDetails />} />
			</Routes>
		</Router>
	);
}

export default App;
