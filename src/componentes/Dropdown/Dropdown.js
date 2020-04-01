import React, {useEffect, useRef, useState} from "react";
import './Dropdown.css'

const Dropdown = props => {
  const {options, selectedOption, onChange} = props;

  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const [selection, setSelection] = useState(undefined);

  useEffect(() => {
    setSelection(selectedOption);
  },[selectedOption]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  },[ref]);

  const handleChange =  (item) => {
    setSelection(item);
    onChange(item);
    setOpen(false);
  };


  return (
    <div className="dd-wrapper" ref={ref}>
      <div className="dd-header" onClick={() => setOpen(true)}>
        <div className="dd-header-title">{selection}</div>

      </div>
      {open && <ul className="dd-list" onClick={e => e.stopPropagation()}>
        {options.map((item)=> (
          <li className="dd-list-item" key={item} onClick={() => handleChange(item)}>{item}</li>
        ))}
      </ul>}
    </div>
  )
};

export default Dropdown;