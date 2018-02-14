import { Component, OnInit, HostListener, Inject, ViewChild } from '@angular/core';
import { WINDOW } from '../../services/window.service';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  @ViewChild('logo') logo;

  constructor(
              @Inject(WINDOW) private window: Window,
              @Inject(DOCUMENT) private document: Document
  ) { }

  ngOnInit() {
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {

    if (this.window.scrollY < 500 && this.window.innerWidth >= 868) {
      this.logo.nativeElement.style.transform = `translate(-50%, ${-50 + (this.window.scrollY / 2)}%`;
    } else {
      this.logo.nativeElement.style.transform = `translate(-50%, ${-50 + (this.window.scrollY / 3)}%`;
    }
  }


  getHeaderBg() {
    return "url('/assets/img/contact-md.jpeg')";
  }

}
