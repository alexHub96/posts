import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(private http: HttpClient) {}
  requestURL = 'https://gorest.co.in/public-api/posts?page=';
  getPosts(pageId: number){
    const headers = { Authorization: 'Bearer ycx9jLWtEosmcX4afJCDXFcYd2INa8ayayeI'};
    return this.http.get<any>(this.requestURL + pageId, { headers }).pipe(map(data => data));
  }
}
