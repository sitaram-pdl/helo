import { useState, useEffect } from "react";
import "./editDeleteForm.css";
import { Tooltip, Input, Select } from "antd";
import "antd/dist/antd.css";
import { GiCancel } from "react-icons/gi";
import { adduserdata, addhealthworkerdatadata } from "./../../api/APIUtils";
const colorEven = {
  backgroundColor: "#aaa0",
};

const colorOdd = {
  backgroundColor: "#cccc",
};
const { Option } = Select;

export const RenderModalContain = ({ modalData, handleModal }) => {
  const [edit, setedit] = useState({});
  const [data, setDistrictData] = useState(modalData);
  const [type, setType] = useState();

  const add = (type) => {
    switch (type) {
      case "Users":
        adduserdata();

        break;
      case "HealthWorkers":
        addhealthworkerdatadata();
        break;

      default:
        alert("select options");
        break;
    }
  };

  const editAbsolute = () => {
    return (
      <div>
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
            placeholder="  Active Today"
            value={edit.activeToday}
            className="input-modal"
            onChange={(e) => {
              return setedit({ ...edit, activeToday: e.target.value });
            }}
          />
          <Input
            placeholder=" Death Today"
            value={edit.deathToday}
            className="input-modal"
            onChange={(e) => {
              return setedit({ ...edit, deathToday: e.target.value });
            }}
          />{" "}
          <Input
            placeholder=" Recovered Today"
            value={edit.recoveredToday}
            className="input-modal"
            onChange={(e) => {
              return setedit({ ...edit, recoveredToday: e.target.value });
            }}
          />{" "}
          <Input
            placeholder=" Tested Today"
            value={edit.testedToday}
            className="input-modal"
            onChange={(e) => {
              return setedit({ ...edit, testedToday: e.target.value });
            }}
          />{" "}
          <Input
            placeholder="Vaccinated Today"
            value={edit.vaccinatedToday}
            className="input-modal"
            onChange={(e) => {
              return setedit({ ...edit, vaccinatedToday: e.target.value });
            }}
          />
        </div>
      </div>
    );
  };

  return (
    <div className="contain">
      <div className="modal-body">
        <div className="capitalize">District Name: {data.name}</div>
      </div>
      <div>
        <Select
          style={{ width: 120 }}
          allowClear
          onChange={(e) => {
            console.log(e);
            setType(e);
          }}
        >
          <Option value="Users">Users</Option>
          <Option value="HealthWorkers">Health Worker</Option>
        </Select>
      </div>
      {editAbsolute()}
      <div className="modal-bottom">
        <div className="button edit" onClick={() => add(type)}>
          Add data
        </div>

        <div className="button cancel" onClick={handleModal}>
          cancel
        </div>
      </div>
    </div>
  );
};
