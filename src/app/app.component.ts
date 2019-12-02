import { Component } from '@angular/core';
import { AuthService } from "./services/auth.service";
import { FireStoreService } from './services/firestore.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'anonymous-badger';

  constructor(public authService: AuthService, public fs: FireStoreService) { }

  handleSignOut() {
    console.log('Signing Out...')
    this.authService.SignOut()
  }

  handleSignIn() {
    console.log('Signing In...')
    this.authService.GoogleAuth();
  }
}
