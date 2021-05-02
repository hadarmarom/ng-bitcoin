import { Component, Input, OnInit } from '@angular/core';
import { Contact } from 'src/app/model/contact.model';

@Component({
  selector: 'BitcoinPreviewComponent',
  templateUrl: './bitcoin-preview.component.html',
  styleUrls: ['./bitcoin-preview.component.scss']
})
export class BitcoinPreviewComponent implements OnInit {

  constructor() { }

  @Input() contact: Contact

  ngOnInit(): void {
    
  }

}
