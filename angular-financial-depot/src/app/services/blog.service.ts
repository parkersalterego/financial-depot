import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

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
    return this.http.get('http://localhost:3000/posts')
    .map(res => res.json());
  }

  getPostById(id) {
    return this.http.get('http://localhost:3000/posts/' + id)
    .map(res => res.json());

  }

  addPost(post) {
    return this.http.post('http://localhost:3000/posts/', post)
      .map(res => res.json());
  }

  updatePost(post) {
    return this.http.put(`http://localhost:3000/posts/${post._id}`, post)
      .map(res => res.json);
  }

  deletePost(id) {
    return this.http.delete('http://localhost:3000/posts/' + id)
      .map(res => res.json());
  }


}
