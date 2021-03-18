import React, { useState, useEffect } from "react";
import { EditableText, EditableNumber } from "react-editables";

function SingleCourse(props) {
  const [name, setName] = useState(null);
  const [id, setId] = useState(null);
  const [credit, setCredit] = useState(null);

  useEffect(() => {
    
  });

  const changeName = (val) => {
  };
  const changeId = (val) => {
    props.updateMainData("name", props.sem, props.sem, val);
  };
  const changeCredit = (val) => {};

  return (
    <div className="col-3">
      <div className="card px-1 my-2 bg-warning">
        <div className="card-body">
          <EditableText
            value={props.name}
            onChange={changeName}
            placeholder="Name"
          />
          <EditableText
            value={props.id}
            onChange={changeId}
            placeholder="Course ID"
          />
          <EditableNumber
            value={props.credits}
            onChange={changeCredit}
            placeholder="Credits"
          />
        </div>
      </div>
    </div>
  );
}

export default SingleCourse;
