import React, { useState, useEffect } from "react";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";



const Main = ()=>{
const [studentList, setStudentList] = useState([{id:1, firstName:'Leo', lastName:'Yoosefi', age:30, birthday:'2022-12-02', country:'Sweden', city:'Umeå'},
                                            {id:2, firstName:'Negar', lastName:'Haghighi', age:30, birthday:'', country:'Iran', city:'Mashhad'}]);
return(
    
    <div className="container">
        <div className="col-5 offset-3">
        <table className="table" >
        <TableHeader></TableHeader>     
        <TableRow student={studentList}></TableRow>
    </table>
        </div>
    
    </div>
)
}

export default Main;