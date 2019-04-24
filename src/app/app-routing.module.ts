import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
import { PayAgentComponent } from './pay-agent/pay-agent.component';
import { SingleAgentDetailsComponent } from './single-agent-details/single-agent-details.component';
import { SelectAgentComponent } from './select-agent/select-agent.component';
import { SelectedAgentDetailsComponent } from './selected-agent-details/selected-agent-details.component';
import { UpdateAgentDetailsComponent } from './update-agent-details/update-agent-details.component';
import { UpdatePaymentComponent } from './update-payment/update-payment.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';

const routes: Routes = [
  {
    path:'',
    component:LoginComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'home',
    component:HomeComponent,
    children:[
      {
        path:'',
        component:DashboardComponent
      },
      {
        path:'dashboard',
        component:DashboardComponent
      },
      {
        path:'agents',
        component:AgentsComponent,
        children:[
          {
            path:'',
            component:AgentsListComponent
          },
          
          {
          path:'agentselected',
					component:SelectAgentComponent,
					children:[
						{
							path:'',
							component:SelectedAgentDetailsComponent
						},
						{
							path:'view',
							component:SingleAgentDetailsComponent
						},
						{
							path:'update',
							component:UpdateAgentDetailsComponent
						}
					]
          },

          {
            path:'viewagent',
            component:ViewAgentComponent,
            children:[
              {
                path:'',
                component:SingleAgentDetailsComponent
              },
               {
                 path:'update',
                 component:UpdateAgentDetailsComponent
               }
            ]
          }
        ]
      },
      {
        path:'payagent',
        component:PayAgentComponent,
        children:[
          {
            path:'',
            component:UpdatePaymentComponent
          },
          {
            path:'detail',
            component:PaymentDetailsComponent
          }
        ]
      },
      {
          path:'applicants',
          component:ApplicantsComponent,
          children:[
            {
              path:'',
              component:ApplicantsListComponent,
            },
            {
              path:'applicantslist',
              component:ApplicantsListComponent,
            },
            {
              path:'status',
              component:StatusComponent,
              children:[
                {
                  path:'',
                  component:PersonalDetailsComponent
                },
                {
                  path:'personaldetails',
                  component:PersonalDetailsComponent
                },
                {
                  path:'pre-med-details',
                  component:PreMedDetailsComponent
                },
                {
                  path:'passport-details',
                  component:PassportDetailsComponent
                },
                {
                  path:'expense-details',
                  component:ExpenseDetailsComponent
                }
              ]
            }
          ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
