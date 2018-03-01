import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';

@Injectable()
export class BlogService {
  blogPosts;
  selectedPost;
  evenPosts;
  oddPosts;
  editablePostId;
  editPost: Boolean;

  constructor(private http: Http) { }


  selectPost(post) {
    this.selectedPost = post;
  }

  getPosts() {
    return this.http.get(`${environment.api}posts`)
    .map(res => res.json());
  }

  getPostById(id) {
    return this.http.get(`${environment.api}posts/` + id)
    .map(res => res.json());

  }

  addPost(post) {
    return this.http.post(`${environment.api}posts/`, post)
      .map(res => res.json());
  }

  updatePost(post) {
    return this.http.put(`${environment.api}posts/${post._id}`, post)
      .map(res => res.json);
  }

  deletePost(id) {
    return this.http.delete(`${environment.api}posts/` + id)
      .map(res => res.json());
  }


}
