import React, { useState } from 'react'
import axios from 'axios'
import InfoTable from './components/InfoTable'
import { Button } from 'react-bootstrap'

function App() {

	const [entries, setEntries] = useState([]);

	async function fetchEntries() {
		const response = await axios.get('http://universities.hipolabs.com/search?country=Australia')
		setEntries(response.data)
	}

	function addEntry() {
		let copyEntries = [...entries]

		if (copyEntries.length !== 0) {
			copyEntries.push(entries[0])
			setEntries(copyEntries)
		} else {
			alert('No data in the table. Load data to be able to add entry.')
		}
	}

	function deleteEntry() {
		let copyEntries = [...entries]
		
		if (copyEntries.length !== 0) {
			copyEntries.pop()
			setEntries(copyEntries)
		} else {
			alert('No data in the table. Load data to be able to delete entry.')
		}
	}

	return (
		<div className="App">
			<div>
				<h1 className="text-center">Software Development Assessment - Task 1</h1>
				<div className="d-flex justify-content-center p-2">
					<Button onClick={fetchEntries} className="mx-2">LOAD</Button>
					<Button onClick={addEntry} className="mx-2" variant="success">ADD</Button>
					<Button onClick={deleteEntry} className="mx-2" variant="danger">DELETE</Button>
				</div>
			</div>
			{entries.length !== 0
				? <InfoTable entries={entries}/>
				: <h1 className="text-center">Entries were not loaded yet.</h1>
			}
		</div>
  	);
}

export default App;
