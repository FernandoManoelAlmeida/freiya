import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
    selector: 'app-login',
    moduleId: module.id,
    templateUrl: 'login.component.html',
    styleUrls: [ 'login.component.css' ],
})

export class LoginComponent {

    user: Observable<firebase.User>;

    constructor(public afAuth: AngularFireAuth, private router: Router) {
        this.user = afAuth.authState;
    }

    login() {
        this.afAuth.auth.signInAnonymously();
        if (this.router.url == '/login') {
            this.router.navigate([ '/dashboard' ]);
        }

        return;
    }
    
    logout() {
        this.afAuth.auth.signOut();
        this.router.navigate([ 'login' ]);
        return;
    }
}
