/** @format */

import React from "react";

export default function Alert(props) {
  const capitalize = (data) => {
    return data.charAt(0).toUpperCase() + data.toLowerCase().slice(1);
  };
  return (
    <div style={{height:"50px"}}>
      {props.alert && (
      <div
        className={`alert alert-${props.alert.type} alert-dismissible fade show`}
        role='alert'>
        <strong>{capitalize(props.alert.type)}</strong> :{" "}
        {capitalize(props.alert.message)}
      </div>
      )}
    </div>
  );
}
