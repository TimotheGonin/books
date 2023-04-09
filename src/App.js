import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import AddBooks from "./containers/AddBooks";
import SearchBooks from "./containers/SearchBooks";
import Footer from "./components/Footer";

function App() {
	return (
		<Router className="App">
			<NavBar />
			<Routes>
				<Route exact path="/" element={<AddBooks />} />
				<Route path="/search" element={<SearchBooks />} />
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
