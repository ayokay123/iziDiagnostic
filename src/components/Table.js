import React, { useState, useEffect } from "react";

export const Table = ({ diag }) => {
  const [data, setData] = useState(diag);

  useEffect(() => {
    setData(diag);
  }, [diag]);

  function renderTable(date) {
    if (Array.isArray(date) && date.length) {
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
              {date.map((item, i) => (
                <tr>
                  <td>{item["Issue"]["Name"]}</td>
                  <td>{item["Issue"]["Accuracy"]}%</td>
                  <td>
                    {item["Specialisation"].map((s) => (
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

  return <>{renderTable(data)}</>;
};
