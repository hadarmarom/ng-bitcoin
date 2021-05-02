import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Contact } from 'src/app/model/contact.model';
import { ContactService } from 'src/app/service/contact.service';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.scss']
})
export class ContactEditComponent implements OnInit {
  contact: Contact
  subscription: Subscription
  constructor(private contactService: ContactService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      if (!Object.keys(data).length) {
        this.contact = this.contactService.getEmptyContact()
      } else {
        this.contact = data.contact
      }
    })
  }

  saveContact() {
    this.contact.phone = this.contact.phone.toString()
    console.log('this.contact:', this.contact)
    this.contactService.saveContact(this.contact)
    this.router.navigateByUrl('/')
  }
}
