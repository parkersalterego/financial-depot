import { Component, OnInit, HostListener, Inject, ViewChild } from '@angular/core';
import { WINDOW } from '../../services/window.service';
import { DOCUMENT } from '@angular/platform-browser';
import { BlogService } from '../../services/blog.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})

export class BlogComponent implements OnInit {
  postSelected: Boolean = false;
  posts: any;
  imageSize: String;

  @ViewChild('logo') logo;

  constructor(
    @Inject(WINDOW) private window: Window,
    @Inject(DOCUMENT) private document: Document,
    private blogService: BlogService,
    private userService: UserService
  ) {
    this.getPosts();
  }

  ngOnInit() {
    this.blogService.editPost = false;
    this.blogService.editablePostId = undefined;

    this.getPosts();

    this.userService.loadToken();

  }

  @HostListener('window:scroll', [])
  onWindowScroll() {

    if (this.window.scrollY < 500 && this.window.innerWidth >= 1362) {
      this.logo.nativeElement.style.transform = `translate(-50%, ${-50 + (this.window.scrollY / 2)}%`;
    } else {
      this.logo.nativeElement.style.transform = `translate(-50%, ${-50 + (this.window.scrollY / 3)}%`;
    }
  }

  getPosts() {
    this.blogService.getPosts().subscribe(posts => {
      this.posts = posts;
      this.posts = this.posts.reverse();
      this.blogService.blogPosts = this.posts;

      for (let i = 0; i < this.posts.length; i++) {
        this.posts[i].body = this.posts[i].body.replace(/<\/?[^>]+(>|$)/g, '').replace('&nbsp;', '');
      }
    });
  }

  deletePost() {
    confirm('Are you sure you would like to delete this post');
    this.blogService.deletePost(this.blogService.editablePostId).subscribe();
  }

  showPost(i) {
    console.log(this.posts[0]);
    console.log(i);
    this.blogService.selectPost(this.posts[i]);
    this.blogService.editablePostId = this.posts[i]._id;
    this.window.scrollTo(0, 0);

  }

  getHeaderBg() {
    return "url('/assets/img/blog-md.jpeg')";
  }

  determineImageSize(i) {
    return this.posts[i].image;
  }

  getCardBg() {
    return "url('/assets/img/mochaGrunge.png')";
  }

}
