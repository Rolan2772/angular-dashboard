import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsDashboardRoutingModule } from './projects-dashboard-routing.module';
import { ProjectsDashboardComponent } from './projects-dashboard.component';
import { MaterialModule } from '@angular-dashboard/material';

@NgModule({
  declarations: [ProjectsDashboardComponent],
  imports: [CommonModule, ProjectsDashboardRoutingModule, MaterialModule],
  exports: [ProjectsDashboardComponent]
})
export class ProjectsDashboardModule {}
