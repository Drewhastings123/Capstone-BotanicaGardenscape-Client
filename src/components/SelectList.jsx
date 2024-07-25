import React from "react";

export default function SelectList({
  theList,
  theListName,
  theParentForm,
  onChangeFunction,
}) {
  const ConsoleTheSelected = (e) => {
    console.log(e.target.value);
  };

  return (
    <div>
      {/*<label
        htmlFor={`${theListName}_${theParentForm}`}
        className="form-label mt-4"
      >
        {`${theListName}`}
      </label>*/}
      <select
        className="form-select"
        name={theListName}
        id={`${theListName}_${theParentForm}`}
        onChange={onChangeFunction || ConsoleTheSelected}
      >
        {theList && theList.length > 0
          ? theList.map((opt) => {
              return (
                // eslint-disable-next-line react/jsx-key
                <option value={String(opt.id)} key={String(opt.id)}>
                  {opt.zone_name + " (" + opt.temp_range + ") "}
                </option>
              );
            })
          : "<option>No items</option>"}
      </select>
    </div>
  );
}
