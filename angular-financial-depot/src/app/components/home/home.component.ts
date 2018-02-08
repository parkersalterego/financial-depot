import { Component, OnInit, HostListener, Inject, ViewChild } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { UserService } from '../../services/user.service';
import { ResourceService } from '../../services/resource.service';
import { DOCUMENT } from '@angular/platform-browser';

import { WINDOW } from '../../services/window.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts;
  bgImage = './assets/img/topography.svg';

  @ViewChild('logo') logo;
  @ViewChild('clear') clear;

  constructor(
              @Inject(WINDOW) private window: Window,
              @Inject(DOCUMENT) private document: Document,
              private resourceService: ResourceService,
              private blogService: BlogService,
                private userService: UserService
              ) {

   }

  ngOnInit() {
    this.posts = this.blogService.blogPosts;
    this.userService.loadToken();
    this.userService.loggedIn();
    this.blogService.editPost = false;
    this.blogService.editablePostId = undefined;
    this.resourceService.editResource = false;
    this.resourceService.editableResourceId = undefined;

  }
  @HostListener('window:scroll', [])
  onWindowScroll() {

    if (this.window.scrollY < 500 && this.window.innerWidth >=  1260) {
      this.logo.nativeElement.style.transform = `translate(-50%, ${-50 + (this.window.scrollY / 2)}%`;
    } else {
      this.logo.nativeElement.style.transform = `translate(-50%, ${-50 + (this.window.scrollY / 3)}%`;
    }

    if (this.window.scrollY > 500) {
      this.clear.nativeElement.classList.add('animate');
    }
  }

  getHeaderBg() {
    return "url('./assets/img/home-lg.jpeg')";
  }

  getBodyBg() {
    return "url('./assets/img/topography.svg')";
  }

  getProfileImage() {
    return "url('http://www.planystech.com/wp-content/uploads/2017/03/profile-placeholder.jpg')";
  }

  getUpdatesImage() {
    return './assets/img/blog-md.jpeg';
  }

  getResourcesImage() {
    return './assets/img/resources-md.jpeg';
  }

  getSomethingImage() {
    return "url('https://images.pexels.com/photos/630839/pexels-photo-630839.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb')";
  }

  getContactImage() {
    return "url('/assets/img/contact-md.jpeg')"
  }

}
