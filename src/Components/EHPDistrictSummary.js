import React from "react";
import "./EHPDistrictSummary.css";

const EHPDistrictSummary = () => {
  const districtSummary = [
    {
      district: "Goroka",
      cases: 33,
      deaths: 33,
      active: 0,
      recovered: 0,
      twentyfourhours: 0,
      totaltests: 0,
      testing: 0,
      positivity: 0,
    },
    {
      district: "Kainantu",
      cases: 33,
      deaths: 33,
      active: 0,
      recovered: 0,
      twentyfourhours: 0,
      totaltests: 0,
      testing: 0,
      positivity: 0,
    },
    {
      district: "Daulo",
      cases: 33,
      deaths: 33,
      active: 0,
      recovered: 0,
      twentyfourhours: 0,
      totaltests: 0,
      testing: 0,
      positivity: 0,
    },
    {
      district: "Lufa",
      cases: 33,
      deaths: 33,
      active: 0,
      recovered: 0,
      twentyfourhours: 0,
      totaltests: 0,
      testing: 0,
      positivity: 0,
    },
    {
      district: "Okapa",
      cases: 33,
      deaths: 33,
      active: 0,
      recovered: 0,
      twentyfourhours: 0,
      totaltests: 0,
      testing: 0,
      positivity: 0,
    },
    {
      district: "Henganofi",
      cases: 33,
      deaths: 33,
      active: 0,
      recovered: 0,
      twentyfourhours: 0,
      totaltests: 0,
      testing: 0,
      positivity: 0,
    },
    {
      district: "Unggai/Bena",
      cases: 33,
      deaths: 33,
      active: 0,
      recovered: 0,
      twentyfourhours: 0,
      totaltests: 0,
      testing: 0,
      positivity: 0,
    },
    {
      district: "Obura/Wonernara",
      cases: 33,
      deaths: 33,
      active: 0,
      recovered: 0,
      twentyfourhours: 0,
      totaltests: 0,
      testing: 0,
      positivity: 0,
    },
  ];

  return (
    <>
      <h3 className="eph-summary-heading">EPH DISTRICT COVID-19 SUMMARY</h3>
      <p className="eph-summary-subheading">Updated at November 19, 2021</p>
      <div className="district-summary-table">
        <table className="ehp-district-table">
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

          {districtSummary.map((item, i) => {
            if (i % 2 == 0) {
              return (
                <tbody>
                  <tr>
                    <td>{item.district}</td>
                    <td>{item.cases}</td>
                    <td>{item.deaths}</td>
                    <td>{item.active}</td>
                    <td>{item.recovered}</td>
                    <td>{item.twentyfourhours}</td>
                    <td>{item.totaltests}</td>
                    <td>{item.testing}</td>
                    <td>{item.positivity}</td>
                  </tr>
                </tbody>
              );
            } else {
              return (
                <tbody>
                  <tr style={{ backgroundColor: "#dddddd" }}>
                    <td>{item.district}</td>
                    <td>{item.cases}</td>
                    <td>{item.deaths}</td>
                    <td>{item.active}</td>
                    <td>{item.recovered}</td>
                    <td>{item.twentyfourhours}</td>
                    <td>{item.totaltests}</td>
                    <td>{item.testing}</td>
                    <td>{item.positivity}</td>
                  </tr>
                </tbody>
              );
            }
          })}
        </table>
      </div>
    </>
  );
};

export default EHPDistrictSummary;
