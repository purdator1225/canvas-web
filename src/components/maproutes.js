import Image from "next/image";
import React from "react";

function MapRoutes({ p, width, height, id, path }) {
  return (
    <div className={`map-routes absolute w-full h-full`}>
      <svg
        className={`${width} ${height} absolute z-20`}
        viewBox="0 0 600 720"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <mask id="mask-0">
            <path
              id="wm-us-path"
              d="M 19.264 60 C 52.615 396.698 420.492 648.393 580.862 695.226"
            />
          </mask>
        </defs>
        <path
          className="mask-path-class"
          d="M 19.019 60 C 52.37 396.698 420.247 648.393 580.617 695.226"
        />
      </svg>
    </div>
  );
}

export default MapRoutes;
