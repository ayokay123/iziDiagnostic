import React, { useState } from "react";

export const Result = ({ diag }) => {
  const [data, setData] = useState(diag);

  function RenderResult(diag) {
    if (Array.isArray(diag) && diag.length) {
      return (
        <div className="container">
          <h1 className="text-center mt-2">Results</h1>
          <table className="table mt-3 text-center">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Chance</th>
                <th scope="col">Specialisation</th>
              </tr>
            </thead>
            <tbody>
              {diag.map((item, i) => (
                <tr>
                  <td>{item["Issue"]["Name"]}</td>
                  <td>{item["Issue"]["Accuracy"]}%</td>
                  <td>
                    {item["Specialisation"].map(s => (
                      <span key={s["ID"]}>{s["Name"]}, </span>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    } else {
      return <div></div>;
    }
  }

  return <div>{RenderResult(data)}</div>;
};
