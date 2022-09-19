import React from 'react';
import TableAction from './TableAction';

const TableRow = (props) => {
    return (
        <tbody>
           {props.student.map(item=>
           <tr key={item}>
                <td>{item.id}</td>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.age}</td>
                <td><TableAction student={item}></TableAction></td>
           </tr>
    
           )
            }      
            
           </tbody>

    );
};

export default TableRow;