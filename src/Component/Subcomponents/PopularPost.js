import React from "react";

function PopularPost() {
  return (
    <div>
      <div className="d-flex justify-content-between">
        <div className="display-3 fw-bold text-black-50">01</div>
        <div className="d-flex flex-column">
          <h4 className=""><strong>Self Discovery</strong></h4>
          <p className="mb-0">Adrienne Frances</p>
          <div className="d-flex justify-content-between">
            <p>February 2, 2022 </p>
            <p>-</p>
            <p>5 min. Read</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopularPost;
