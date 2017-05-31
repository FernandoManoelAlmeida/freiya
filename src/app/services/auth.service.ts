import { CanActivate, Router } from '@angular/router';
import { Injectable } from "@angular/core";
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(public afAuth: AngularFireAuth, private router: Router) {}

    canActivate(): any {
        var self = this;

        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                if (self.router.url == '/login') {
                    self.router.navigate([ '/dashboard' ]);
                }
            } else {
                if (self.router.url !== '/login') {
                    self.router.navigate([ '/login' ]);
                }
            }
        });
    }
}