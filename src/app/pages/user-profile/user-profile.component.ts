import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user.model';
import { BitcoinService } from 'src/app/service/bitcoin.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'UserProfileComponent',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  constructor(private userService: UserService, private bitcoinService: BitcoinService) { }

  user: User
  rate: number
  username: String

  ngOnInit(): void {
    this.userService.loadUsers().subscribe(user => {
      if (!Object.keys(user).length) user = null
      else {
        this.user = user
        this.getRate()
      }
    })
  }
  
  signUp() {
    this.user = this.userService.signUp(this.username)
    this.getRate()
  }

  getRate() {
    this.bitcoinService.getRate(this.user.coins).subscribe(rate => {
      this.rate = rate
    })
  }
}