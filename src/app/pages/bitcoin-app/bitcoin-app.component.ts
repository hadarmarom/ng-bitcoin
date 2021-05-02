import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from 'src/app/model/contact.model';
import { ContactService } from 'src/app/service/contact.service';

@Component({
  selector: 'BitcoinAppComponent',
  templateUrl: './bitcoin-app.component.html',
  styleUrls: ['./bitcoin-app.component.scss']
})
export class BitcoinAppComponent implements OnInit {

  constructor(private contactService: ContactService) { }
  filterBy = {
    name: ''
  }
  contacts$: Observable<Contact[]>

  ngOnInit(): void {
    this.contactService.loadContacts()
    this.contacts$ = this.contactService.contacts$
  }
  
  onFilter() {
    this.contactService.loadContacts(this.filterBy)
  }

}
