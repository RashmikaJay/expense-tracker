import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { DashboardContextComponent } from './components/dashboard-context/dashboard-context.component';
import { DefaultComponent } from './components/default/default.component';
import { DashboardHeaderComponent } from './components/dashboard-header/dashboard-header.component';
import { SalaryContextComponent } from './components/salary-context/salary-context.component';
import { ExpensesContextComponent } from './components/expenses-context/expenses-context.component';
import { LoanContextComponent } from './components/loan-context/loan-context.component';


@NgModule({
  declarations: [
    DashboardComponent,
    DashboardContextComponent,
    DefaultComponent,
    DashboardHeaderComponent,
    SalaryContextComponent,
    ExpensesContextComponent,
    LoanContextComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
