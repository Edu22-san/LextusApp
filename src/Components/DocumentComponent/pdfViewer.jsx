import React from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css"; // Estilos básicos

const PDFViewer = ({ pdfUrl }) => {
  if (!pdfUrl) {
    return (
      <div style={{ padding: "20px", textAlign: "center" }}>
        <p style={{ color: "#999" }}>
          No se proporcionó una URL para el documento.
        </p>
      </div>
    );
  }

  return (
    <div>
      {/* Configurar el worker para cargar PDFs */}
      <Worker
        workerUrl={`https://unpkg.com/pdfjs-dist@2.16.105/build/pdf.worker.min.js`}
      >
        <Viewer fileUrl={pdfUrl} />
      </Worker>
    </div>
  );
};

export default PDFViewer;
