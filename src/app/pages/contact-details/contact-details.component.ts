import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { Contact } from 'src/app/model/contact.model';
import { User } from 'src/app/model/user.model';
import { ContactService } from 'src/app/service/contact.service';
import { UserService } from 'src/app/service/user.service';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'ContactDetailsComponent',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {
  contact: Contact
  subscription: Subscription
  amount: number
  user: User
  private readonly notifier: NotifierService;
  constructor(private userService: UserService, private contactService: ContactService, private router: Router, private route: ActivatedRoute, notifierService: NotifierService) {
    this.notifier = notifierService;
  }

  ngOnInit(): void {
    // with resolver:
    this.subscription = this.route.data.subscribe(data => {
      this.contact = data.contact
    })
    this.userService.loadUsers().subscribe(res => {
      if (!Object.keys(res).length) this.user = null
      else this.user = res
    })
    console.log(this.user);

    // this.subscription = this.route.params.pipe(
    //   mergeMap(params => this.contactService.getContactById(params.id))
    // ).subscribe(contact => {
    //   this.contact = contact
    // })
  }

  onDeleteContact(id) {
    this.contactService.deleteContact(id)
    this.router.navigateByUrl('/')
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

  onTransferCoins(id) {
    const move = {
      id,
      to: this.contact.name,
      at: Date.now(),
      amount: this.amount
    }
    const confirm: any = this.withdrawFromUser(move)
    confirm ? this.contactService.transferCoins(id, this.amount) : console.log('cannot transfer MF');
    // this.router.navigateByUrl('/')
    this.notifier.notify('success', 'You are awesome! I mean it!');
  }

  withdrawFromUser(move) {
    const bool = this.userService.withdrawUser(move)
    return bool;
  }

}
