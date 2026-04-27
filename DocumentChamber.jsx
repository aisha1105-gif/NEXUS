import React, { useState, useRef } from "react";
import SignatureCanvas from "react-signature-canvas";

const DocumentChamber = () => {
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState("Draft");
  const sigCanvas = useRef();

  const handleUpload = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]));
  };

  const clearSignature = () => {
    sigCanvas.current.clear();
  };

  return (
    <div className="p-4">
      <h2>Document Chamber</h2>

      <input type="file" onChange={handleUpload} />

      {file && (
        <iframe src={file} width="100%" height="300px" title="preview" />
      )}

      <h3>Signature</h3>
      <SignatureCanvas
        ref={sigCanvas}
        penColor="black"
        canvasProps={{ width: 300, height: 150, className: "sigCanvas" }}
      />

      <button onClick={clearSignature}>Clear</button>

      <h3>Status: {status}</h3>
      <select onChange={(e) => setStatus(e.target.value)}>
        <option>Draft</option>
        <option>In Review</option>
        <option>Signed</option>
      </select>
    </div>
  );
};

export default DocumentChamber;
