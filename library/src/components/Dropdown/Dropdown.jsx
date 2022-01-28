import {useState} from "react";
import DropdownComponent from "../modules/Dropdown";

function Dropdown({ backgroundColor, options, size}) {
  const [selected, setSelected] = useState("Choose One");
  return (
    <div className="App">
     <DropdownComponent value={selected} backgroundColor={backgroundColor} size={size} onSelected={setSelected} options={options} />
    </div>
  );
}

export default Dropdown;
