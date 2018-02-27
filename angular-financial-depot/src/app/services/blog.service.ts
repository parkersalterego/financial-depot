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
    return this.http.get('posts')
    .map(res => res.json());
  }

  getPostById(id) {
    return this.http.get('posts/' + id)
    .map(res => res.json());

  }

  addPost(post) {
    return this.http.post('posts/', post)
      .map(res => res.json());
  }

  updatePost(post) {
    return this.http.put(`posts/${post._id}`, post)
      .map(res => res.json);
  }

  deletePost(id) {
    return this.http.delete('posts/' + id)
      .map(res => res.json());
  }


}
