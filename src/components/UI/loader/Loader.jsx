import React from "react";

function Loader() {
  return (
    <div className="loader">
      <p className="loader__text">Идет загрузка...</p>
      <div className="loader__animation"></div>
    </div>
  )
}

export default Loader;