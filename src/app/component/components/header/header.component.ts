import { Component, OnInit } from '@angular/core';
declare var require: any
const FileSaver = require('file-saver');

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  downloadPdf() {
    // const pdfUrl = './src/assets/resume_david_diaz_sierra.pdf';
    const pdfUrl = '../../../../assets/resume_david_diaz_sierra.pdf';
    const pdfName = 'resume_David_Diaz_Sierra.pdf';
    FileSaver.saveAs(pdfUrl, pdfName);
  }

}
