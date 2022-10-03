import React, { useState } from "react";
import TableHead from "./TableHeader";
import TableRow from "./TableRow";

const DataTable = () => {
  const initalState = [
    {
      id: 0,
      firstName: "Student1",
      lastName: "Studentsson1",
      age: 22,
      country: "Sweden",
    },
    {
      id: 1,
      firstName: "Student2",
      lastName: "Studentsson2",
      age: 20,
      country: "Sweden",
    },
  ];
  const [studentList, setSudentList] = useState(initalState);
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-6 offset-3">
          <table className="table">
            <TableHead></TableHead>
            <TableRow studentList={studentList}></TableRow>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DataTable;