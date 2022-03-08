import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AuthComponent } from "./containers/auth/auth.component";
import { LoginComponent } from "./containers/login/login.component";

const routes: Routes = [
    { 
        path: '', 
        component: AuthComponent, 
        children: [
            { path: '', redirectTo: '/auth/login', pathMatch: 'full'},
            { path: 'login', component: LoginComponent },
        ] 
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule {}