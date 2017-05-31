import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
    selector: 'app-login',
    moduleId: module.id,
    templateUrl: 'login.component.html',
    styleUrls: [ 'login.component.css' ],
})

export class LoginComponent {

    constructor(public afAuth: AngularFireAuth, private router: Router) {}

    login() {
        this.afAuth.auth.signInAnonymously();
        this.router.navigate([ '/dashboard' ]);
    }
    
    logout() {
        this.afAuth.auth.signOut();
        this.router.navigate([ '/login' ]);
    }
}
