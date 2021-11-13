import React, { useState } from 'react'
import axios from 'axios'
import InfoTable from './components/InfoTable'

function App() {
	const [entries, setEntries] = useState([])

	async function fetchEntries() {
		const response = await axios.get('http://universities.hipolabs.com/search?country=Australia')
		setEntries(response.data)
	}

	return (
		<div className="App">
			<button onClick={fetchEntries}>LOAD</button>
			<InfoTable entries={entries} />
			<h1>Hello World</h1>
		</div>
  	);
}

export default App;
