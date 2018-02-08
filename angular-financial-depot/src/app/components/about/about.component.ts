import { Component, OnInit, HostListener, Inject, ViewChild } from '@angular/core';
import { WINDOW } from '../../services/window.service';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  @ViewChild('logo')logo;

  constructor(
              @Inject(WINDOW) private window: Window,
              @Inject(DOCUMENT) private document: Document
  ) { }

  ngOnInit() {
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {

    if (this.window.scrollY < 500) {
      this.logo.nativeElement.style.transform = `translate(-50%, ${this.window.scrollY / 2}%`;
    }
  }

  getHeaderBg() {
    return "url('/assets/img/about-md.jpeg')";
  }

  getBodyBg() {
    return "url('/assets/img/topography.png')";
  }

}
