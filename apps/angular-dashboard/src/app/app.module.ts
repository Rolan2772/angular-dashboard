import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from '@angular-dashboard/material';
import { ProjectsDashboardModule } from './projects-dashboard/projects-dashboard.module';
import { ProjectsDashboardComponent } from './projects-dashboard/projects-dashboard.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      [{ path: '', component: ProjectsDashboardComponent },
      { path: '**', redirectTo: '', pathMatch: 'full' }],
      { initialNavigation: 'enabled' }
    ),
    HttpClientModule,
    MaterialModule,
    ProjectsDashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
