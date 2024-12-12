import React, { useMemo } from "react";
import PropTypes from "prop-types";
import DocViewer, { DocViewerRenderers } from "react-doc-viewer";
import PDFViewer from "./pdfViewer";

const DocumentComponent = ({ documentUrl }) => {
  // Determinar si el documento es un PDF
  const isPDF = useMemo(() => {
    if (!documentUrl) return false;
    return documentUrl.toLowerCase().endsWith(".pdf");
  }, [documentUrl]);

  // Generar documentos dinámicamente para react-doc-viewer
  const docs = useMemo(() => {
    if (!documentUrl || isPDF) return [];
    return [{ uri: documentUrl }];
  }, [documentUrl, isPDF]);

  if (!documentUrl) {
    return (
      <div
        style={{
          textAlign: "center",
          padding: "20px",
          backgroundColor: "#f9f9f9",
          border: "1px solid #ddd",
          borderRadius: "8px",
        }}
      >
        <p style={{ color: "#999" }}>
          No se proporcionó una URL para el documento.
        </p>
      </div>
    );
  }

  return (
    <div className="h-full">
      {/* Botón de descarga */}
      {/* <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          padding: "10px",
          backgroundColor: "#f5f5f5",
          borderBottom: "1px solid #ddd",
        }}
      >
        <a
          href={documentUrl}
          download
          style={{
            textDecoration: "none",
            color: "#007bff",
            fontWeight: "bold",
            padding: "5px 10px",
            border: "1px solid #007bff",
            borderRadius: "4px",
            backgroundColor: "#fff",
          }}
        >
          Descargar
        </a>
      </div> */}

      {/* Mostrar documento */}
      {isPDF ? (
        <PDFViewer pdfUrl={documentUrl} />
      ) : (
        <DocViewer
          documents={docs}
          config={{
            header: {
              disableHeader: false,
              disableFileName: false,
              retainURLParams: false,
            },
          }}
          pluginRenderers={DocViewerRenderers}
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      )}
    </div>
  );
};

// Definición de PropTypes para validación
DocumentComponent.propTypes = {
  documentUrl: PropTypes.string, // La URL debe ser una cadena
};

export default DocumentComponent;
