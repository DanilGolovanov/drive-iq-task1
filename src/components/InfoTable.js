import React from 'react'
import Table from 'react-bootstrap/Table'

export default function InfoTable(props) {

    function renderHeader() {
        let headings = [];

        try {
            let keys = Object.keys(props.entries[0]);
            for (let i = 0; i < keys.length; i++) 
                headings.push(<th key={keys[i]}>{keys[i]}</th>);
        }
        catch(e) {
            console.log(e)
        }
        finally {
            console.log(headings)
            return headings;
        }
    }
    
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    {renderHeader()}
                </tr>
            </thead>
            <tbody>
                {}
            </tbody>
        </Table>
    )
}
