import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = '( ͡° ͜ʖ ͡°)';
    user: Observable<firebase.User>;

    constructor(public afAuth: AngularFireAuth, private router: Router) {
        this.user = afAuth.authState;
    }

    logout() {
        this.afAuth.auth.signOut();
        this.router.navigate([ 'login' ]);
        return;
    }
}
