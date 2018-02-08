import { Component, OnInit, HostListener, Inject, ViewChild } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { BaseResponseOptions } from '@angular/http/src/base_response_options';
import { DOCUMENT } from '@angular/platform-browser';
import { WINDOW } from '../../services/window.service';
import { RouteConfigLoadStart } from '@angular/router/src/events';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  navBarCount= 0;
  navItems = [];

  @ViewChild('barOne') barOne;
  @ViewChild('barTwo') barTwo;
  @ViewChild('barThree') barThree;
  @ViewChild('navBar') navBar;


  constructor(
              @Inject(WINDOW) private window: Window,
              @Inject(DOCUMENT) private document: Document,
              private userService: UserService,
              private router: Router,
  ) { }



  ngOnInit() {
    this.pushNavItems();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const hamMenu = [this.barOne, this.barTwo, this.barThree];
    // home page scroll
   if (this.window.location.href === 'http://localhost:4200/') {

     if (this.window.innerWidth >= 771) {

      if (this.window.scrollY < 722) {
        this.barOne.nativeElement.style.backgroundColor = '#fff';
        this.barTwo.nativeElement.style.backgroundColor = '#fff';
        this.barThree.nativeElement.style.backgroundColor = '#fff';

       } else if (this.window.scrollY >= 722 && this.window.scrollY < 2235) {
        this.barOne.nativeElement.style.backgroundColor = 'rgba(0, 0, 0, .7)';
        this.barTwo.nativeElement.style.backgroundColor = 'rgba(0, 0, 0, .7)';
        this.barThree.nativeElement.style.backgroundColor = 'rgba(0, 0, 0, .7)';

       } else if (this.window.scrollY >= 2235) {
        this.barOne.nativeElement.style.backgroundColor = '#fff';
        this.barTwo.nativeElement.style.backgroundColor = '#fff';
        this.barThree.nativeElement.style.backgroundColor = '#fff';

       }

     }

     if (this.window.innerWidth <= 771) {

      if (this.window.scrollY < 828) {
        this.barOne.nativeElement.style.backgroundColor = '#fff';
        this.barTwo.nativeElement.style.backgroundColor = '#fff';
        this.barThree.nativeElement.style.backgroundColor = '#fff';

       } else if (this.window.scrollY >= 828 && this.window.scrollY < 2350) {
        this.barOne.nativeElement.style.backgroundColor = 'rgba(0, 0, 0, .7)';
        this.barTwo.nativeElement.style.backgroundColor = 'rgba(0, 0, 0, .7)';
        this.barThree.nativeElement.style.backgroundColor = 'rgba(0, 0, 0, .7)';

       } else if (this.window.scrollY >= 2350) {
        this.barOne.nativeElement.style.backgroundColor = '#fff';
        this.barTwo.nativeElement.style.backgroundColor = '#fff';
        this.barThree.nativeElement.style.backgroundColor = '#fff';

       }

     }

     if (this.window.innerWidth <= 400) {

      if (this.window.scrollY < 848) {
        this.barOne.nativeElement.style.backgroundColor = '#fff';
        this.barTwo.nativeElement.style.backgroundColor = '#fff';
        this.barThree.nativeElement.style.backgroundColor = '#fff';

       } else if (this.window.scrollY >= 848 && this.window.scrollY < 2170) {
        this.barOne.nativeElement.style.backgroundColor = 'rgba(0, 0, 0, .7)';
        this.barTwo.nativeElement.style.backgroundColor = 'rgba(0, 0, 0, .7)';
        this.barThree.nativeElement.style.backgroundColor = 'rgba(0, 0, 0, .7)';

       } else if (this.window.scrollY >= 2170) {
        this.barOne.nativeElement.style.backgroundColor = '#fff';
        this.barTwo.nativeElement.style.backgroundColor = '#fff';
        this.barThree.nativeElement.style.backgroundColor = '#fff';

       }
     }

   }

  //  blog page scroll
  if (this.window.location.href === 'http://localhost:4200/blog') {
     if (this.window.scrollY < 485) {
      this.barOne.nativeElement.style.backgroundColor = '#fff';
      this.barTwo.nativeElement.style.backgroundColor = '#fff';
      this.barThree.nativeElement.style.backgroundColor = '#fff';

     } else if (this.window.scrollY >= 485) {
      this.barOne.nativeElement.style.backgroundColor = 'rgba(0, 0, 0, .7)';
      this.barTwo.nativeElement.style.backgroundColor = 'rgba(0, 0, 0, .7)';
      this.barThree.nativeElement.style.backgroundColor = 'rgba(0, 0, 0, .7)';
     }
   }

  }

  onMenuClick() {
    if (this.navBarCount === 0 ) {
      this.navItems.forEach((item) => {
        item.nativeElement.classList.add('animate');
      });
      this.barOne.nativeElement.classList.add('white');
      this.barTwo.nativeElement.classList.add('white');
      this.barThree.nativeElement.classList.add('white');
      this.navBarCount++;
    } else if (this.navBarCount % 2 === 1) {
      this.navItems.forEach((item) => {
        item.nativeElement.classList.remove('animate');
        item.nativeElement.classList.add('animate-reverse');
      });
      this.barOne.nativeElement.classList.remove('white');
      this.barTwo.nativeElement.classList.remove('white');
      this.barThree.nativeElement.classList.remove('white');
      this.navBarCount++;
    } else {
      this.navItems.forEach((item) => {
        item.nativeElement.classList.add('animate');
        item.nativeElement.classList.remove('animate-reverse');
      });
      this.barOne.nativeElement.classList.add('white');
      this.barTwo.nativeElement.classList.add('white');
      this.barThree.nativeElement.classList.add('white');
      this.navBarCount--;
    }
  }

  onListItemClick() {
    this.navItems.forEach((item) => {
      item.nativeElement.classList.remove('animate');
      item.nativeElement.classList.add('animate-reverse');
    });
    this.navBarCount++;
  }

  pushNavItems() {
    this.navItems.push(this.barOne);
    this.navItems.push(this.barTwo);
    this.navItems.push(this.barThree);
    this.navItems.push(this.navBar);
  }

  onLogoutClick() {
    this.onListItemClick();
    this.userService.logout();
    return false;
  }

}
