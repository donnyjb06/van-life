import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About/About";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="" element={<Home />} />
				<Route path="/about" element={<About />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
