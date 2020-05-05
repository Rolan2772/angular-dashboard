import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProjectsReponse } from './projectsResponose';
import { Observable, of } from 'rxjs';
import { map, flatMap, share } from 'rxjs/operators';

const BASE_URL =
  'https://api.github.com/search/repositories?q=topic:angular+topic:angularjs&sort=stars&order=desc';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  constructor(private httpClient: HttpClient) {}

  all() {
    return this.httpClient
      .get<ProjectsReponse>(BASE_URL)
      .pipe(flatMap(response => of(response.items)));
  }
}
