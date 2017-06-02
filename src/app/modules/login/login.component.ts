import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'app-login',
    moduleId: module.id,
    templateUrl: 'login.component.html',
    styleUrls: [ 'login.component.css' ],
})

export class LoginComponent {

    user: Observable<firebase.User>;

    constructor(public auth: AuthService, private router: Router) {
        this.user = auth.currentUserObservable;
        if (auth.authenticated) router.navigate(['/dashboard']);
    }

    anonymousLogin() {
        var self = this;
        
        this.auth.anonymousLogin().then(function () {
            self.router.navigate(['/dashboard']);
        });
    }

    googleLogin() {
        var self = this;
        
        this.auth.googleLogin().then(function () {
            self.router.navigate(['/dashboard']);
        });
    }
    
    logout() {
        return this.auth.signOut();
    }
}
