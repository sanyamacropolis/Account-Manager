import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AgentsComponent } from './agents/agents.component';
import { AgentsListComponent } from './agents-list/agents-list.component';
import { ViewAgentComponent } from './view-agent/view-agent.component';
import { ApplicantsComponent } from './applicants/applicants.component';
import { ApplicantsListComponent } from './applicants-list/applicants-list.component';
import { StatusComponent } from './status/status.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { PreMedDetailsComponent } from './pre-med-details/pre-med-details.component';
import { PassportDetailsComponent } from './passport-details/passport-details.component';
import { ExpenseDetailsComponent } from './expense-details/expense-details.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PayAgentComponent } from './pay-agent/pay-agent.component';
import { SingleAgentDetailsComponent } from './single-agent-details/single-agent-details.component';
import { SelectAgentComponent } from './select-agent/select-agent.component';
import { SelectedAgentDetailsComponent } from './selected-agent-details/selected-agent-details.component';
import { UpdateAgentDetailsComponent } from './update-agent-details/update-agent-details.component';
import { UpdatePaymentComponent } from './update-payment/update-payment.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    AgentsComponent,
    AgentsListComponent,
    ViewAgentComponent,
    ApplicantsComponent,
    ApplicantsListComponent,
    StatusComponent,
    PersonalDetailsComponent,
    PreMedDetailsComponent,
    PassportDetailsComponent,
    ExpenseDetailsComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    PayAgentComponent,
    SingleAgentDetailsComponent,
    SelectAgentComponent,
    SelectedAgentDetailsComponent,
    UpdateAgentDetailsComponent,
    UpdatePaymentComponent,
    PaymentDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
