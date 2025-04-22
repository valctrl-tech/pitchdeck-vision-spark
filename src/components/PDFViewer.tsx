import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

// Set the worker source for pdf.js
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export function PDFViewer() {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [error, setError] = useState<string | null>(null);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
    setError(null);
  }

  function onDocumentLoadError(err: Error) {
    console.error('PDF Load Error:', err);
    setError('Failed to load PDF. Please try again.');
  }

  return (
    <div className="flex flex-col items-center w-full max-w-5xl mx-auto p-4 mt-20">
      {error ? (
        <div className="text-red-500 bg-red-100 p-4 rounded-lg">
          {error}
        </div>
      ) : (
        <>
          <Document
            file="/samplepitch.pdf"
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={onDocumentLoadError}
            loading={<div className="text-white">Loading PDF...</div>}
            className="border rounded-lg shadow-lg bg-white"
          >
            <Page 
              pageNumber={pageNumber} 
              renderTextLayer={true}
              renderAnnotationLayer={true}
              className="max-w-full"
              width={1000}
              loading={<div className="text-white">Loading page...</div>}
            />
          </Document>
          <div className="flex items-center gap-4 mt-4">
            <button
              onClick={() => setPageNumber(page => Math.max(1, page - 1))}
              disabled={pageNumber <= 1}
              className="px-4 py-2 bg-[#9b87f5] text-white rounded-md disabled:bg-gray-300 hover:bg-[#7E69AB] transition-colors"
            >
              Previous
            </button>
            <p className="text-center text-white">
              Page {pageNumber} of {numPages}
            </p>
            <button
              onClick={() => setPageNumber(page => Math.min(numPages, page + 1))}
              disabled={pageNumber >= numPages}
              className="px-4 py-2 bg-[#9b87f5] text-white rounded-md disabled:bg-gray-300 hover:bg-[#7E69AB] transition-colors"
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
} 