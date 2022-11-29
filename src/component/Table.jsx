import React, { useState } from "react";
import "./table.css";
import {BsArrowDownUp} from 'react-icons/bs';

export default function Table({ data = null, columns = null, striped = true }) {
  const [text, setText] = useState("Asc");


  const onSortChange = (e) => {
    let field = e.currentTarget.value;
    console.log(text);
    if (text === "Asc") {
      setText("Desc");

      // console.log(field);
      if (field === "person") {
        data.sort((a, b) =>
          a[field].name > b[field].name
            ? 1
            : a[field].name < b[field].name
            ? -1
            : 0
        );
      } else {
        data.sort((a, b) =>
          a[field] > b[field] ? 1 : a[field] < b[field] ? -1 : 0
        );
      }

      // data.sort(AscCompare);

      // console.log(data);
    } else {
      setText("Asc");
      // [...data].sort((a, b) => b[field] - a[field]);
      // data.sort(DescCompare);
      // console.log(field);

      if (field === "person") {
        data.sort((a, b) =>
          a[field].name > b[field].name
            ? -1
            : a[field].name < b[field].name
            ? 1
            : 0
        );
      } else {
        data.sort((a, b) =>
          a[field] > b[field] ? -1 : a[field] < b[field] ? 1 : 0
        );
      }
    }
  };
  return (
    <div>
      <table>
        <thead>
          {columns &&
            columns.map((head) => {
              return (
                <th>
                  <span>{head.header}</span>
                  <button value={head.field} onClick={onSortChange} className={head.visibilty ? "btnVisible" : "btnHide"} >
                      {/* {text && <BsArrowDownUp />} */}
                        <BsArrowDownUp/>
                  </button>  
                  
                </th>
              );
            })}
        </thead>
        <tbody>
          {data &&
            data.map((row) => {
              return (
                <tr className={`${striped && "striped"}`}>
                  {columns.map((col) => {
                    return col.field === "person" ? (
                      <td>
                        <img src={row[col.field].avatar} alt={row[col.field].avatar}/>
                        <p>{row[col.field].name}</p>
                      </td>
                    ) : col.field === "email" ? (
                      <td>
                        <a href="google.com">{row[col.field]}</a>
                      </td>
                    ) : (
                      <td>{row[col.field]}</td>
                    );
                  })}

                  
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
