import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Resource } from '../interfaces/resource';
import { Observable } from 'rxjs/observable';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};


@Injectable()
export class ResourceService {
  resourcesUrl = 'http://localhost:3000/resources';
  resources: Resource[];
  editResource: Boolean;
  editableResourceId: String;

  constructor(private http: HttpClient) { }


  getResources(): Observable<Resource[]> {
    return this.http.get<Resource[]>(this.resourcesUrl);
  }

  getResourceById(id): Observable<Resource> {
    return this.http.get<Resource>(`${this.resourcesUrl}/${id}`);

  }

  addResource(resource: Resource): Observable<Resource> {
    return this.http.post<Resource>(this.resourcesUrl, resource, httpOptions);

  }

  updateResource(resource: Resource) {
    return this.http.put<Resource>(`${this.resourcesUrl}/${resource._id}`, resource, httpOptions);
  }

  deleteResource(id) {
    return this.http.delete<Resource>(`${this.resourcesUrl}/${id}`);
  }
}
