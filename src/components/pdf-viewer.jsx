import React from "react";
import { Document, Page, pdfjs } from "react-pdf";
import samplePDF from "../Marcos_Casor_UPDATED.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = "cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js";
class PdfViewer extends React.Component {
  constructor() {
    super();
    pdfjs.GlobalWorkerOptions.workerSrc =
      "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/" + pdfjs.version + "/pdf.worker.js";

    this.onDocumentLoadSuccess = ({ numPages }) => {
      
    };
  }

  render() {
    return (
      <section className=" sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="title-box text-center">
                  <h3 className="title-a"> Work Experience</h3>
                </div>
                <div className="row" style={{ width: "auto", height: "1%", overflow: "hidden" }}>
                  <Document file={samplePDF} onLoadSuccess={this.onDocumentLoadSuccess}>
                    <Page className='nose' height={900} width={1200} pageNumber={1}>
                        
                    </Page>
                  </Document>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
      </section>
    );
  }
}

export default PdfViewer;
