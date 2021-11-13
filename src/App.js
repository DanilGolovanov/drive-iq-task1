import React, { useState, useEffect } from 'react'
import axios from 'axios'
import InfoTable from './components/InfoTable'
import { Button } from 'react-bootstrap'

function App() {

	const [entries, setEntries] = useState([]);
	// separate state for headings to fetch them when page loads, so that 
	// the empty table is displayed with headings that were fetched from 
	// the API endpoint (better than just hard coding them)
	const [headings, setHeadings] = useState([]);

	// useEffect(() => {
	// 	const response = axios.get('http://universities.hipolabs.com/search?country=Australia')
	// 	setHeadings(response.data)
	// 	console.log(headings)
	// }, [headings])

	async function fetchEntries() {
		const response = await axios.get('http://universities.hipolabs.com/search?country=Australia')
		setEntries(response.data)
	}

	return (
		<div className="App">
			<Button onClick={fetchEntries}>LOAD</Button>
			{entries.length !== 0
				? <InfoTable entries={entries} />
				: <h1>Entries were not loaded yet.</h1>
			}
		</div>
  	);
}

export default App;
