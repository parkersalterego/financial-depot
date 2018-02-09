import { Component, OnInit, ViewChild, HostListener, Inject } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { isNullOrUndefined } from 'util';
import { TinyComponent } from '../tiny/tiny.component';

import { DOCUMENT } from '@angular/platform-browser';
import { WINDOW } from '../../services/window.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {
  post;
  title: String = '';
  image: String = '';

  @ViewChild('viewImage') viewImage;
  @ViewChild('viewTitle') viewTitle;
  @ViewChild('postImage') postImage;
  @ViewChild('postTitle') postTitle;
  @ViewChild('contentContainer') contentContainer;
  @ViewChild('logo') logo;
  @ViewChild('viewContent') viewContent;
  @ViewChild(TinyComponent)
  private tinyComponent: TinyComponent;

  constructor(
    @Inject(WINDOW) private window: Window,
    @Inject(DOCUMENT) private document: Document,
    private blogService: BlogService, private router: Router) { }

  ngOnInit() {
    if (this.blogService.editPost === true) {
      this.blogService.getPostById(this.blogService.editablePostId).subscribe(post => {
        this.title = post.title;
        this.image = post.image;
        this.post = post;
        this.viewContent.nativeElement.innerHTML = this.post.body;
        this.viewImage.nativeElement.innerHTML = `<img class="preview-img" src='${this.post.image}'>`;
        this.viewTitle.nativeElement.innerHTML = `<h1>${this.post.title}</h1>`;
      });
    }
    this.contentContainer.nativeElement.style.minHeight = `${this.window.screen.availHeight - 500}px`;

  }

  @HostListener('window:scroll', [])
  onWindowScroll() {

    if (this.window.scrollY < 500 && this.window.innerWidth >= 724) {
      this.logo.nativeElement.style.transform = `translate(-50%, ${-50 + (this.window.scrollY / 2)}%`;
    } else {
      this.logo.nativeElement.style.transform = `translate(-50%, ${-50 + (this.window.scrollY / 3)}%`;
    }
  }

  titleUpdate(event) {
    this.viewTitle.nativeElement.innerHTML = `<h1>${this.postTitle.nativeElement.value}</h1>`;
  }

  imageUpdate(event) {
    this.viewImage.nativeElement.style.backgroundImage = `url(${this.postImage.nativeElement.value})`;
  }

  onEditorKeyup(event) {
    if (this.blogService.editPost === true) {
      this.post = {
        _id: this.blogService.editablePostId,
        title: this.title,
        image: this.image,
        date: this.post.date,
        body: event
      };
    } else {
      this.post = {
        title: this.title,
        image: this.image,
        date: `${new Date().getDate()}, ${this.getMonth()}, ${new Date().getFullYear()}`,
        body: event
      };
    }
    this.viewContent.nativeElement.innerHTML = event;
    this.viewImage.nativeElement.style.backgroundImage = `url(${this.postImage.nativeElement.value})`;
    this.viewTitle.nativeElement.innerHTML = `<h1>${this.postTitle.nativeElement.value}</h1>`;
  }

  onSubmit() {



    if (this.blogService.editPost === true && this.title !== '' && this.image !== '') {
      this.post.title = this.title;
      this.post.image = this.image;

      this.blogService.updatePost(this.post).subscribe(post => {
        alert('Post Saved!');
        this.router.navigate(['/']);
      });
    } else if (this.blogService.editPost === false && this.title !== '' && this.image !== '') {
      this.post.title = this.title;
      this.post.image = this.image;
      this.blogService.addPost(this.post).subscribe(post => {

        if (confirm('Post Saved! Would you like to draft another post?')) {
          this.title = '';
          this.image = '';
          this.post = undefined;
          this.tinyComponent.editor.setContent('');
        } else {
          this.router.navigate(['/']);
        }
      });
    } else if (this.post === undefined || this.post.title === undefined || this.post.image === undefined) {
      alert('Please be sure to fill in all of the fields below');
    }

  }

  getMonth() {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const x = new Date().getMonth();
    return months[x];
  }

  getHeaderBg() {
    return "url('/assets/img/keyboard-md.jpeg')";
  }

}
