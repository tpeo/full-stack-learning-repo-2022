import React, { useState } from "react";

export default function CityList(props) {

  return (
    <div>
      <h1>{props.text}</h1>

      <ul>
        {props.results.map((result) => (
            <li onClick={() => props.func(result)}>
              {result.name}, {result.state}
            </li>
        ))}
    </ul>

    </div>
  );
}
