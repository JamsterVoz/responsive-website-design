import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import "./index.css";

const App = () => {
	return (
		<div className="relative min-h-screen flex flex-col">
			<div
				className="absolute top-0 left-0 w-full h-full -z-10 bg-split"
				style={{
					background: "linear-gradient(to bottom right, white 10%, orange 10%)",
				}}
			></div>
			<Navbar />
			<Hero />
		</div>
	);
};

export default App;
