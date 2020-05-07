import { Component, OnInit } from '@angular/core';
import {
  ProjectsService,
  Project,
  ProjectsReponse
} from '@angular-dashboard/data';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-projects-dashboard',
  templateUrl: './projects-dashboard.component.html',
  styleUrls: ['./projects-dashboard.component.css']
})
export class ProjectsDashboardComponent implements OnInit {
  projects$: Observable<Project[]>;
  count = 0;

  constructor(private projectService: ProjectsService) {}

  ngOnInit(): void {
    this.projects$ = this.projectService.all();
    this.projects$.subscribe(projects => (this.count = projects.length));
  }
}
