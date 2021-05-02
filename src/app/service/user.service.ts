import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../model/user.model';

var gUser = null

@Injectable({
    providedIn: 'root'
})

export class UserService {

    public loadUsers(): Observable<User> {
        return of({ ...gUser })
    }

    public signUp(name) {
        gUser = {
            name,
            coins: 100,
            moves: []
        }
        return gUser;
    }

    public withdrawUser(move) {
        if (gUser.coins <= 0 || gUser.coins < move.amount) return false
        else {
            gUser.moves.push(move)
            gUser.coins -= move.amount
            return true
        }
    }
}