import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BitcoinAppComponent } from './pages/bitcoin-app/bitcoin-app.component';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { ContactEditComponent } from './pages/contact-edit/contact-edit.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { ContactResolverService } from './service/contact-resolver.service';

const routes: Routes = [
  { path: '', component: BitcoinAppComponent },
  { path: 'contact/:id', component: ContactDetailsComponent, resolve: { contact: ContactResolverService } },
  { path: 'edit/:id', component: ContactEditComponent, resolve: { contact: ContactResolverService } },
  { path: 'signin', component: UserProfileComponent },
  { path: 'edit', component: ContactEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true }) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
