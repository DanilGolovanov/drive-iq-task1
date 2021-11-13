import React from 'react'

export default function Row(props) {
    
    function renderData() {
        let info = []
        for (const property in props.data) {
            // use previously generated uni index + id of the property to create a unique key
            info.push(
                <td key={props.index + '-' + props.data[property]}>
                    {props.data[property]}
                </td>
            );
        }

        return info
    }
    
    return (
        <tr>
            { renderData() }
        </tr>
    )
}
