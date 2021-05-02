import { Component, Input, OnInit } from '@angular/core';
import { Contact } from 'src/app/model/contact.model';

@Component({
  selector: 'BitcoinList',
  templateUrl: './bitcoin-list.component.html',
  styleUrls: ['./bitcoin-list.component.scss']
})
export class BitcoinList implements OnInit {

  constructor() {
  }

  trackByFn(idx, contact: Contact) {
    return contact._id
  }

  @Input() contacts: Contact

  ngOnInit(): void {
  }
}
