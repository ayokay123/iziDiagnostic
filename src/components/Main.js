import React, { useState, useEffect } from "react";
import Select from "react-select";
import { getToken } from "../api/auth";
import { getSymptoms, getDiagnosis } from "../api/request";
import SweetAlert from "sweetalert2-react";
import { Table } from "./Table";

export const Main = () => {
  const [year, setYear] = useState(1000);
  const [token, setToken] = useState("");
  const [symptom, setSymptom] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [gender, setGender] = useState("male");
  const [diag, setDiag] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    async function tokenGetter() {
      const repToken = await getToken();
      setToken(repToken.Token);
    }

    tokenGetter();
  }, []);

  useEffect(() => {
    if (token !== "") {
      async function symptomGetter() {
        const repSymp = await getSymptoms(token);
        let rel = [];
        Object.keys(repSymp).map((item, i) => {
          rel.push({
            value: String(repSymp[item]["ID"]),
            label: repSymp[item]["Name"],
          });
        });
        setSymptom(rel);
      }

      symptomGetter();
    }
  }, [token, diag]);

  function handleChange(selectedOption) {
    setSelectedOption(selectedOption);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const fin = [];
    Object.keys(selectedOption).map((item, i) => {
      fin.push({
        ID: +selectedOption[item]["value"],
        Name: selectedOption[item]["label"],
      });
    });

    const rep2 = await getDiagnosis(token, fin, year);
    setDiag(rep2);
    setSelectedOption(null);
  }

  return (
    <>
      <div className="py-5 sectionOne">
        <h1 className="text-center display-2 my-5 unclickable">
          Symptom Diagnolist
        </h1>
      </div>

      <div className="parallax-diag">
        <div className="row">
          <div className="parallax-shade-diag col-12 row py-5">
            <div className="col-md-2 col-1"></div>
            <div className="col-md-8 col-10 main-form">
              <form className="form-group" onSubmit={handleSubmit}>
                <div className="row py-5">
                  <div className="col-1 col-md-2"></div>
                  <div className="col-5 col-md-4 px-5">
                    <div>
                      <label className="form-text">Year of birth:</label>
                    </div>
                    <div>
                      <input
                        type="text"
                        name="year"
                        id="year"
                        maxLength="4"
                        onChange={(e) => setYear(+e.target.value)}
                        className="form-control"
                        placeholder="AAAA"
                      />
                    </div>
                  </div>
                  <div className="col-5 col-md-4 px-5">
                    <div>
                      <label className="form-text">Gender:</label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        value="male"
                        name="R1"
                        checked={gender === "male"}
                        onChange={(e) => setGender(e.target.value)}
                        className="form-check-input"
                      />
                      <label className="form-check-label">Male</label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        name="R1"
                        value="female"
                        checked={gender === "female"}
                        onChange={(e) => setGender(e.target.value)}
                        className="form-check-input"
                      />
                      <label className="form-check-label">Female</label>
                    </div>
                  </div>
                  <div className="col-1 col-md-2"></div>
                </div>

                <div className="row">
                  <div className="col-1 col-md-2"></div>
                  <div className="col-10 col-md-8 py-2">
                    <label className="font-akber">Symptoms:</label>
                  </div>
                  <div className="col-1 col-md-2"></div>
                </div>
                <div className="row">
                  <div className="col-1 col-md-2"></div>
                  <div className="col-10 col-md-8 py-2">
                    <Select
                      className="selc mx-auto mt-3"
                      value={selectedOption}
                      onChange={handleChange}
                      options={symptom}
                      isMulti
                    />
                  </div>
                  <div className="col-1 col-md-2"></div>
                </div>

                <div className="row">
                  <div className="col-1 col-md-2"></div>
                  <div className="col-10 col-md-8 py-2 form-img">
                    <div className="mt-5 py-3 btn-center">
                      <button
                        className="btn btn-inline btn-warning btn-lg mr-2"
                        id="alert"
                        onClick={() => setShow(true)}
                      >
                        DIAGNOSE
                      </button>
                      <SweetAlert
                        show={show}
                        title="Results"
                        text="Results are Here. Scroll down to see them"
                        onConfirm={() => setShow(false)}
                      />
                    </div>
                  </div>
                  <div className="col-1 col-md-2"></div>
                </div>
              </form>
            </div>
            <div className="col-md-2 col-1"></div>
          </div>
        </div>
      </div>
      <Table diag={diag} />
    </>
  );
};
