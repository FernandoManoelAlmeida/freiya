import { CanActivate, Router } from '@angular/router';
import { Injectable } from "@angular/core";
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(public afAuth: AngularFireAuth, private router: Router) {}

    canActivate(): any {
        var self = this;
        // this.afAuth.auth.signOut();

        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                console.info(user.uid);
                self.router.navigate([ '/dashboard' ]);
            } else {
                self.router.navigate([ '/login' ]);
            }
        });
    }
}