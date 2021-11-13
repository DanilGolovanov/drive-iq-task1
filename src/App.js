import axios from 'axios'

function App() {

	async function fetchUnis() {
		const response = await axios.get('http://universities.hipolabs.com/search?country=Australia')
		console.log(response.data)
	}

	return (
		<div className="App">
			<button onClick={fetchUnis}>LOAD</button>
			<h1>Hello World</h1>
		</div>
  	);
}

export default App;
