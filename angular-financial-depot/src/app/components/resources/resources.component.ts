import { Component, OnInit, HostListener, Inject, ViewChild } from '@angular/core';
import { WINDOW } from '../../services/window.service';
import { DOCUMENT } from '@angular/platform-browser';

import { Resource } from '../../interfaces/resource';

import { ResourceService } from '../../services/resource.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {
@ViewChild('logo') logo;
resources: Resource[];


  constructor(
    private userService: UserService,
    private resourceService: ResourceService,
    @Inject(WINDOW) private window: Window,
    @Inject(DOCUMENT) private document: Document
  ) {
   }

  ngOnInit() {
    this.getResources();
    this.userService.loadToken();
    }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (this.window.scrollY < 500) {
      this.logo.nativeElement.style.transform = `translate(-50%, ${-50 + (this.window.scrollY / 2)}%`;
    }
  }

  getResources() {
    this.resourceService.getResources().subscribe(resources => {
      this.resources = resources;
    });
  }

  editResource(i) {
    console.log(i);
    this.resourceService.editableResourceId = this.resources[i]._id;
    this.resourceService.editResource = true;
  }

  deleteResource(i) {
    confirm('Are you sure you would like to delete this post');
      this.resourceService.deleteResource(this.resources[i]._id).subscribe();
  }

  getHeaderBg() {
    return "url('./assets/img/resources-md.jpeg')";
  }

  determineImageSize(i) {
    return this.resources[i].image;
  }

}
