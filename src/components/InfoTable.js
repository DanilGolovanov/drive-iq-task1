import React from 'react'
import Table from 'react-bootstrap/Table'
import Row from './Row'

export default function InfoTable(props) {

    function renderHeader() {
        let headings = [];
        console.log(props.entries)

        try {
            let keys = Object.keys(props.entries[0]);
            for (let i = 0; i < keys.length; i++) 
                headings.push(<th key={keys[i]}>{keys[i]}</th>);
        }
        catch(e) {
            console.log(e)
        }
        finally {
            return headings;
        }
    }

    function renderEntries() {
		let entries = [];		
		for (let i = 0; i < props.entries.length; i++) {
			entries.push(
				<Row
					index={i}
					key={i}
					data={props.entries[i]}
				/>
			);			
		}

		return entries;
	}
    
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    { renderHeader() }
                </tr>
            </thead>
            <tbody>
                { renderEntries() }
            </tbody>
        </Table>
    )
}
