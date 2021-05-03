import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { FetchEmployeeBenfitsCostComponent } from './fetch-employeebenfits-cost/fetch-employeebenfits-cost.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EmployeeBenfitsService } from './Services/EmployeeBenfits.Service';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    EmployeeDetailsComponent,
    FetchEmployeeBenfitsCostComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: '**', redirectTo: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'employee-details', component: EmployeeDetailsComponent },
      { path: 'fetch-employeebenfits-cost', component: FetchEmployeeBenfitsCostComponent },
    ]),
    NoopAnimationsModule
  ],
  providers: [EmployeeBenfitsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
