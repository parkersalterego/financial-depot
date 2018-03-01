import { Component, OnInit, ViewChild, Inject, HostListener } from '@angular/core';
import { ResourceService } from '../../services/resource.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { TinyComponent } from '../tiny/tiny.component';

import { DOCUMENT } from '@angular/platform-browser';
import { WINDOW } from '../../services/window.service';

@Component({
  selector: 'app-new-resource',
  templateUrl: './new-resource.component.html',
  styleUrls: ['./new-resource.component.css']
})
export class NewResourceComponent implements OnInit {
  resource;
  title: String = '';
  image: String = '';
  url: String = '';

  @ViewChild('contentContainer') contentContainer;
  @ViewChild('resourceTitle') resourceTitle;
  @ViewChild('resourceImage') resourceImage;
  @ViewChild('resourceUrl') resourceUrl;
  @ViewChild('viewTitle') viewTitle;
  @ViewChild('viewImage') viewImage;
  @ViewChild('viewUrl') viewUrl;
  @ViewChild('viewContent') viewContent;
  @ViewChild('logo') logo;
  @ViewChild(TinyComponent)
  private tinyComponent: TinyComponent;

  constructor(
              @Inject(WINDOW) private window: Window,
              @Inject(DOCUMENT) private document: Document,
              private resourceService: ResourceService,
              private router: Router
  ) { }

  ngOnInit() {
    this.editCheck();
    this.contentContainer.nativeElement.style.minHeight = `${this.window.screen.availHeight - 500}px`;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {

    if (this.window.scrollY < 500 && this.window.innerWidth >= 1110) {
      this.logo.nativeElement.style.transform = `translate(-50%, ${-50 + (this.window.scrollY / 2)}%`;
    } else {
      this.logo.nativeElement.style.transform = `translate(-50%, ${-50 + (this.window.scrollY / 3)}%`;
    }
  }

  onEditorKeyup(event) {
    if (this.resourceService.editResource === true) {
      this.resource = {
        _id: this.resource._id,
        title: this.title,
        image: this.image,
        date: this.resource.date,
        url: this.url,
        body: event
      };
    } else {
      this.resource = {
        title: this.title,
        image: this.image,
        date: `${new Date().getDate()}, ${this.getMonth()}, ${new Date().getFullYear()}`,
        url: this.url,
        body: event
      };
    }
    this.viewContent.nativeElement.innerHTML = event;
    this.viewImage.nativeElement.style.backgroundImage = `url(${this.resourceImage.nativeElement.value})`;
    this.viewTitle.nativeElement.innerHTML = `<h1>${this.resource.title}</h1>`;

  }

  editCheck() {
    if (this.resourceService.editResource === true) {
      this.resourceService.getResourceById(this.resourceService.editableResourceId).subscribe(resource => {
        this.resource = resource;
        this.title = this.resource.title;
        this.image = this.resource.image;
        this.url = this.resource.url;

        this.viewContent.nativeElement.innerHTML = this.resource.body;
        this.viewImage.nativeElement.innerHTML = `<img class="preview-img" src='${this.resource.image}'>`;
        this.viewTitle.nativeElement.innerHTML = `<h1>${this.resource.title}</h1>`;
      });
    }
  }

  titleUpdate(event) {
    this.viewTitle.nativeElement.innerHTML = `<h1>${this.resourceTitle.nativeElement.value}</h1>`;
  }

  imageUpdate(event) {
    this.viewImage.nativeElement.style.backgroundImage = `url(${this.resourceImage.nativeElement.value})`;
  }

  urlUpdate(event) {
    this.viewUrl.nativeElement.innerHTML = `<a href="${this.resourceUrl.nativeElement.value}" target="_blank"><input type="submit" class="btn btn-custom submit" value="View Resource"></a>`;
  }

  onSubmit() {
    if (this.resourceService.editResource === true && this.title !== '' && this.image !== '' && this.url !== '') {
      this.resource.title = this.title;
      this.resource.image = this.image;
      this.resource.url = this.url;

      this.resourceService.updateResource(this.resource).subscribe(resource => {

        if (confirm('Resource saved! Would you like to draft another post?')) {
          this.title = '';
          this.image = '';
          this.url = '';
          this.tinyComponent.editor.setContent('');
        } else {
          this.router.navigate(['/']);
        }
      });
    } else if (this.resourceService.editResource === false && this.title !== '' && this.image !== '' && this.url !== '') {
      this.resource.title = this.title;
      this.resource.image = this.image;
      this.resource.url = this.url;

      this.resourceService.addResource(this.resource).subscribe(resource => {

        if (confirm('Resource saved! Would you like to draft another post?')) {
          this.title = '';
          this.image = '';
          this.url = '';
          this.tinyComponent.editor.setContent('');
        } else {
          this.router.navigate(['/']);
        }
      });
    } else if (this.resource === undefined || this.resource.title === undefined || this.resource.image === undefined || this.resource.url === undefined) {
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
