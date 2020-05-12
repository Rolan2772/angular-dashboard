import { Component, OnInit } from '@angular/core';
import {
  ProjectsService,
  Project  
} from '@angular-dashboard/data';
import { Observable } from 'rxjs';
import { map, delay } from 'rxjs/operators';

@Component({
  selector: 'app-projects-dashboard',
  templateUrl: './projects-dashboard.component.html',
  styleUrls: ['./projects-dashboard.component.css']
})
export class ProjectsDashboardComponent implements OnInit {
  projects: Project[];
  count = 0;
  loaded = false;

  constructor(private projectService: ProjectsService) {}

  ngOnInit(): void {    
    const projects$ = this.projectService.all();

    projects$.subscribe(projects => {
      this.loaded = true;
      this.projects = projects;
      this.count = projects.length;
    });
  }
}
