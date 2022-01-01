import { useState, useEffect } from "react";
import "./editDeleteForm.css";
import { Tooltip, Input } from "antd";
import "antd/dist/antd.css";
import { GiCancel } from "react-icons/gi";
import { updateCases } from "./../../api/APIUtils";
const colorEven = {
  backgroundColor: "#aaa0",
};

const colorOdd = {
  backgroundColor: "#cccc",
};

export const RenderModalContain = ({ modalData, handleModal }) => {
  const [edit, setedit] = useState(null);
  const [data, setDistrictData] = useState(modalData);

  ///edit absolute function

  const handleUpdate = (datas) => {
    const name = {};
    name.activeToday = datas.activeToday;
    name.deathToday = datas.deathToday;
    name.recoveredToday = datas.recoveredToday;
    name.testedToday = datas.testedToday;

    name.vaccinatedToday = datas.vaccinatedToday;

    updateCases(name, datas.id)
      .then((res) => console.log(res))
      .catch((err) => console.log(err.response.data));
  };

  const editAbsolute = () => {
    return (
      <div className="edit-container-absolute">
        <div className="edit-container">
          <div placeholder="Basic usage" className="input-modal">
            Active Today
          </div>
          <div placeholder="Basic usage" className="input-modal">
            Death Today
          </div>
          <div placeholder="Basic usage" className="input-modal">
            Recovered Today
          </div>
          <div placeholder="Basic usage" className="input-modal">
            Tested Today
          </div>
          <div placeholder="Basic usage" className="input-modal">
            Vaccinated Today
          </div>
        </div>
        <div className="edit-container">
          <Input
            placeholder="Basic usage"
            value={edit.activeToday}
            className="input-modal"
            onChange={(e) => {
              return setedit({ ...edit, activeToday: e.target.value });
            }}
          />
          <Input
            placeholder="Basic usage"
            value={edit.deathToday}
            className="input-modal"
            onChange={(e) => {
              return setedit({ ...edit, deathToday: e.target.value });
            }}
          />{" "}
          <Input
            placeholder="Basic usage"
            value={edit.recoveredToday}
            className="input-modal"
            onChange={(e) => {
              return setedit({ ...edit, recoveredToday: e.target.value });
            }}
          />{" "}
          <Input
            placeholder="Basic usage"
            value={edit.testedToday}
            className="input-modal"
            onChange={(e) => {
              return setedit({ ...edit, testedToday: e.target.value });
            }}
          />{" "}
          <Input
            placeholder="Basic usage"
            value={edit.vaccinatedToday}
            className="input-modal"
            onChange={(e) => {
              return setedit({ ...edit, vaccinatedToday: e.target.value });
            }}
          />
        </div>
        <div
          className="cancel-edit"
          onClick={() => {
            setedit(null);
          }}
        >
          <GiCancel color="red" />
        </div>
      </div>
    );
  };

  //   const update = () => {
  //     return;
  //     const uD = { ...edit };
  //     const name = {};
  //     name.activeToday = uD.activeToday;
  //     name.deathToday = uD.deathToday;
  //     name.recoveredToday = uD.recoveredToday;
  //     name.testedToday - uD.testedToday;
  //     name.vaccinatedToday = uD.vaccinatedToday;
  //     console.log(uD);
  //   };

  return (
    <div className="contain">
      <div className="modal-body">
        <div className="capitalize">District Name: {data.name}</div>

        <div className="modal-map-contain">
          <div className="modal-table-row-header">
            <div className="modal-table-col1">Active Today</div>
            <div className="modal-table-col1">Death Today</div>
            <div className="modal-table-col1">Recovered Today</div>
            <div className="modal-table-col1">Tested Today</div>
            <div className="modal-table-col1">Vaccinated Today</div>
          </div>

          {data.data.map((dat, i) => (
            <Tooltip key={dat.i} placement="left" title="Click to edit">
              <div
                style={
                  i % 2 == 0 ? (dat.id == edit?.id ? colorEven : {}) : colorOdd
                }
                className="modal-table-row-table-body"
                onClick={() => {
                  setedit(dat);
                }}
              >
                <div className="modal-table-col2">{dat.activeToday}</div>
                <div className="modal-table-col2">{dat.deathToday}</div>
                <div className="modal-table-col2">{dat.recoveredToday}</div>
                <div className="modal-table-col2">{dat.testedToday}</div>
                <div className="modal-table-col2">{dat.vaccinatedToday}</div>
              </div>
            </Tooltip>
          ))}
        </div>
      </div>
      {edit != null ? editAbsolute() : null}

      <div className="modal-bottom">
        {edit != null ? (
          <div className="button edit" onClick={() => handleUpdate(edit)}>
            Update
          </div>
        ) : null}

        <div className="button cancel" onClick={handleModal}>
          cancel
        </div>
      </div>
    </div>
  );
};
