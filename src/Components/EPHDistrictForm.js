import { useState, useEffect } from "react";
import "./EPHDistrictForm.css";
import Navigation from "./Navigation";
import { getAllAddress } from "./../api/APIUtils";

export const EPHDistrictForm = () => {
  const [data, setdata] = useState([]);
  const [modal, setmodal] = useState(false);
  const handleModal = () => {
    setmodal((prev) => !prev);
  };

  useEffect(() => {
    getAllAddress()
      .then((data) => {
        setdata(
          data.data.filter((dat) => dat.name === "eastern highlands")[0]
            .districts
        );
      })
      .catch((err) => console.log(err.response));
  }, []);
  return (
    <div className="container">
      <>
        <Navigation />
      </>

      <div className="sub-container">
        <div className="header">EPH DISTRICT COVID-19 SUMMARY </div>
        <div>
          <table className="ehp-district-table1">
            <thead>
              <tr>
                <th>Districts</th>
                <th>Cases</th>
                <th>Deaths</th>
                <th>Active</th>
                <th>Recovered</th>
                <th>24 hours</th>
                <th>Total Tests</th>
                <th>Testing %</th>
                <th>Positivity</th>
              </tr>
            </thead>

            {data?.map((item, i) => (
              <tbody
                style={i % 2 != 0 ? { backgroundColor: "#ddd" } : null}
                className="row"
                onClick={handleModal}
              >
                <tr>
                  <td>{item.name}</td>
                  <td>{item.totalCases}</td>
                  <td>{item.deaths}</td>
                  <td>{item.active}</td>
                  <td>{item.recovered}</td>
                  <td>{item.twentyfourhours || 0}</td>
                  <td>{item.totalTested}</td>
                  <td>{item.testing || 0}</td>
                  <td>{item.totalCases}</td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
        {modal && (
          <div className="modal">
            <div className="modal-absolute" onClick={handleModal} />
            <div className="modal-Contain">{renderModalContain()}</div>
          </div>
        )}
      </div>
    </div>
  );
};

const renderModalContain = () => <div className="contain">hello</div>;
