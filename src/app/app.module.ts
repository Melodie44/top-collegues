import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { UnCollegueComponent } from './un-collegue/un-collegue.component';
import { CollegueService } from './shared/service/collegue.service';
import { LeScoreComponent } from './le-score/le-score.component';
import { UnCollegueTableauComponent } from './un-collegue-tableau/un-collegue-tableau.component';
import { UnCollegueCarrouselComponent } from './un-collegue-carrousel/un-collegue-carrousel.component';
import { UnCollegueDetailComponent } from './un-collegue-detail/un-collegue-detail.component';
import { ScorePipe } from './shared/pipe/score.pipe'

const appRoutes: Routes = [
  { path: 'classique', component: UnCollegueComponent},
  //{ path: 'classique/:i', component: UnCollegueComponent},
  { path: 'tableau', component: UnCollegueTableauComponent },
  { path: 'carrousel', component: UnCollegueCarrouselComponent },
  { path: 'detail/:nom', component: UnCollegueDetailComponent },
  { path: '**', redirectTo: 'classique'} // redirige vers la route classique par défaut
  ];

@NgModule({
  declarations: [
    AppComponent,
    UnCollegueComponent,
    LeScoreComponent,
    UnCollegueTableauComponent,
    UnCollegueCarrouselComponent,
    UnCollegueDetailComponent,
    ScorePipe
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CollegueService],
  bootstrap: [AppComponent]
})
export class AppModule { }
