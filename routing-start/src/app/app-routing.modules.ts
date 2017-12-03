import {NgModule} from "@angular/core";
import {HomeComponent} from "./home/home.component";
import {UsersComponent} from "./users/users.component";
import {ServersComponent} from "./servers/servers.component";
import {UserComponent} from "./users/user/user.component";
import {ServerComponent} from "./servers/server/server.component";
import {EditServerComponent} from "./servers/edit-server/edit-server.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {Routes, RouterModule, CanDeactivate} from "@angular/router";
import {AuthGuardService} from "./auth-guard.service";
import {CanDeactivateGuardService} from "./servers/edit-server/can-deactivate-guard.service";
import {ErrorPageComponent} from "./error-page/error-page.component";
import {ServerResolverService} from "./servers/server/server.resolver.service";

// creating the application routes
const appRoutes: Routes = [
  {path: '', component: HomeComponent}, // http://localhost:4200/users // without the ' / '!
  {
    path: 'users', component: UsersComponent, children: [
    {path: ':id/:name', component: UserComponent}, // http://localhost:4200/users // without the ' / '!
  ]
  }, // http://localhost:4200/users // without the ' / '!
  {
    path: 'servers',
    // canActivate: [AuthGuardService],
    canActivateChild: [AuthGuardService],
    component: ServersComponent,
    children: [
      {path: ':id', component: ServerComponent, resolve: {server: ServerResolverService}}, // http://localhost:4200/users // without the ' / '!
      {path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuardService]} // http://localhost:4200/users // without the ' / '!
    ]
  },
  // {path: 'not-found', component: NotFoundComponent},
  {path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found!'}},
  {path: '**', redirectTo: '/not-found', pathMatch: 'full'}
];

@NgModule({
  imports: [
    // RouterModule.forRoot(appRoutes, {useHash: true})
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]

})
export class AppRoutingModule {

}
