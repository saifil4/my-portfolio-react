import React from "react";
import { AiOutlineDownload } from "react-icons/ai";

const DownloadButton = () => {
  return (
    <button className="py-2 px-5 border-white border text-white rounded inline-flex items-center">
      Download Resume
      <AiOutlineDownload
        style={{ fontSize: "20px" }}
        className="inline-block ml-2"
      />
    </button>
  );
};

export default DownloadButton;
