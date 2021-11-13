import React, { useState, useEffect } from 'react'
import axios from 'axios'
import InfoTable from './components/InfoTable'
import { Button } from 'react-bootstrap'

function App() {

	const [entries, setEntries] = useState([]);

	async function fetchEntries() {
		const response = await axios.get('http://universities.hipolabs.com/search?country=Australia')
		setEntries(response.data)
	}

	return (
		<div className="App">
			<div>
				<h1 className="text-center">Software Development Assessment - Task 1</h1>
				<div className="d-flex justify-content-center p-2">
					<Button onClick={fetchEntries} className="mx-2">LOAD</Button>
					<Button onClick={fetchEntries} className="mx-2" variant="success">ADD</Button>
					<Button onClick={fetchEntries} className="mx-2" variant="danger">DELETE</Button>
				</div>
			</div>
			<InfoTable entries={entries}/>
		</div>
  	);
}

export default App;
