import { getDocument, GlobalWorkerOptions } from "pdfjs-dist/build/pdf";
import PdfjsWorker from "pdfjs-dist/build/pdf.worker.js";

// Specify the path to the worker script
//GlobalWorkerOptions.workerSrc = 'node_modules/pdfjs-dist/build/pdf.worker.js'; // Make sure to set the correct path


GlobalWorkerOptions.workerSrc = "pdfjs-dist/build/pdf.worker.js";

const pdfViewer = document.getElementById('pdf-viewer');
const currentURL = window.location.href;
//const url = new URL("file:///Users/mateorodriguez/Desktop/Georgia_Tech/HackGT/bibliowiz/JCEMS-Volume-1-Issue-1-Research-and-Scholarship-in-Collegiate-EMS-Friedman-et-al.pdf");
//console.log(url);

async function getContent(src) {
  const allPages = []
  const response = await getDocument(src).promise;
  console.log(response);
  for(let i = 1; i < response.numPages; i++) {
    const page = await response.getPage(i)
    console.log(page);
    allPages.push(page);
  }

  for(let i = 1; i < allPages.length; i++) {
    const textContent = await allPages[i].getTextContent();
    console.log(textContent.items[0].transform);
  }

  return allPages;
}


const content = getContent('./JCEMS-Volume-1-Issue-1-Research-and-Scholarship-in-Collegiate-EMS-Friedman-et-al.pdf')
console.log(content);


// Initialize the PDF.js viewer
/*
getDocument(currentURL)
  .promise
  .then((pdfDocument) => {
    for (let pageNumber = 1; pageNumber <= pdfDocument.numPages; pageNumber++) {
      pdfDocument.getPage(pageNumber)
        .then((page) => {
          const canvas = document.createElement('canvas');
          pdfViewer.appendChild(canvas);

          const context = canvas.getContext('2d');
          const viewport = page.getViewport({ scale: 1.5 });

          canvas.height = viewport.height;
          canvas.width = viewport.width;

          page.render({
            canvasContext: context,
            viewport: viewport,
          });
        })
        .catch((error) => {
          console.error('Error rendering page:', error);
        });
    }
  })
  .catch((error) => {
    console.error('Error loading PDF document:', error);
  });
*/


//const getQueryInformation = require('./googleScholar.js');
//getQueryInformation('Intelligent Agent Deception and the Influence on Human Trust and Interaction')


