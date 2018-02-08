import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { BlogService } from '../../services/blog.service';
import { ResourceService } from '../../services/resource.service';

import { WINDOW } from '../../services/window.service';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {
  post;
  posts;
  resources;
  evenPosts = [];
  oddPosts = [];

  constructor(
              @Inject(WINDOW) private window: Window,
              @Inject(DOCUMENT) private document: Document,
              private blogService: BlogService,
              private resourceService: ResourceService) { }

  ngOnInit() {
    this.post = this.blogService.selectedPost;
    this.blogService.getPosts().subscribe(posts => {
      this.posts = posts;
      this.posts = this.posts.reverse();

    });

    this.resourceService.getResources().subscribe(resource => {
      this.resources = resource;
      this.resources = this.resources.reverse();

    });

  }

  selectResource(resource) {

  }

  selectPost(post) {
    this.blogService.selectedPost = post;
    this.post = post;
    this.window.scrollTo(0, 0);
  }

  determineImageSize() {
    return this.post.image;
  }
}
