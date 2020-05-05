import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsDashboardComponent } from './projects-dashboard.component';
import { ProjectsDashboardRoutingModule } from './projects-dashboard-routing.module';

import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

import { MaterialModule } from '@angular-dashboard/material';

describe('ProjectsDashboardComponent', () => {
  let component: ProjectsDashboardComponent;
  let fixture: ComponentFixture<ProjectsDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule,
        HttpClientTestingModule,
        ProjectsDashboardRoutingModule
      ],
      declarations: [ProjectsDashboardComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
