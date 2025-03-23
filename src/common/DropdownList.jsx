import React from "react";

const DropdownList = () => {
  return (
    <ul className="list-group text-start">
        <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      Content for list item
    </div>
    <span class="text-muted rounded-pill">V</span>
  </li>
      <li className="list-group-item">
        <input className="form-check-input me-1" type="checkbox" id="firstCheckbox" />
        <label className="form-check-label" htmlFor="firstCheckbox">First checkbox</label>
      </li>
      <li className="list-group-item">
        <input className="form-check-input me-1" type="checkbox" id="secondCheckbox" />
        <label className="form-check-label" htmlFor="secondCheckbox">Second checkbox</label>
      </li>
      <li className="list-group-item">
        <input className="form-check-input me-1" type="checkbox" id="thirdCheckbox" />
        <label className="form-check-label" htmlFor="thirdCheckbox">Third checkbox</label>
      </li>
    </ul>
  );
};

export default DropdownList;
