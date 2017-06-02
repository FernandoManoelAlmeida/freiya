import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../services/auth.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'Angular 4 & Firebase.';
    user: Observable<firebase.User>;

    constructor(public auth: AuthService) {
        this.user = auth.currentUserObservable;
    }

    logout() {
        return this.auth.signOut();
    }
}
