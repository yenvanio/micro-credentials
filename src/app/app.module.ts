import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { PdfViewerModule } from 'ng2-pdf-viewer';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';

import { CoreModule } from './core/core.module';
import { SecureInnerPagesGuard } from './guards/secure-inner-pages.guard';
import { AuthGuard } from './guards/auth.guard';
import { LocationStrategy, HashLocationStrategy} from '@angular/common';

import { LoginComponent } from './pages/login/login.component';
import { HomeComponent, BadgeModal } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { BadgesComponent } from './pages/badges/badges.component';

import { AuthService } from './services/auth.service';
import { FireStoreService } from './services/firestore.service';
import { BadgerService } from './services/badger.service';
import { SnackbarService } from './services/snackbar.service';

export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, canActivate: [SecureInnerPagesGuard] },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'profile/:id', component: ProfileComponent },
  { path: 'badges', component: BadgesComponent, canActivate: [AuthGuard] }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ProfileComponent,
    BadgesComponent,
    BadgeModal
  ],
  imports: [
    RouterModule.forRoot(
      rootRouterConfig
    ),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    HttpModule,
    HttpClientModule,
    PdfViewerModule
  ],
  providers: [ AuthService, FireStoreService, BadgerService, SnackbarService, 
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [ AppComponent ],
  entryComponents: [
    BadgeModal
  ]
})
export class AppModule { }
