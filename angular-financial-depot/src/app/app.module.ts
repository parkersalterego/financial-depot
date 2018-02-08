import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { BlogService } from './services/blog.service';
import { UserService } from './services/user.service';
import { ResourceService } from './services/resource.service';
import { WINDOW_PROVIDERS } from './services/window.service';

import { RouteGuard } from './guards/route.guard';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { BlogComponent } from './components/blog/blog.component';
import { NewPostComponent } from './components/new-post/new-post.component';
import { TinyComponent } from './components/tiny/tiny.component';
import { BlogPostComponent } from './components/blog-post/blog-post.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { AdminComponent } from './components/admin/admin.component';
import { ResourcesComponent } from './components/resources/resources.component';
import { FooterComponent } from './components/footer/footer.component';
import { NewResourceComponent } from './components/new-resource/new-resource.component';
import { ReversePipe } from './pipes/reverse.pipe';

const appRoutes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'new-post',
    component: NewPostComponent,
    canActivate: [RouteGuard]
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'resources',
    component: ResourcesComponent
  },
  {
    path: 'new-resource',
    component: NewResourceComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    BlogComponent,
    NewPostComponent,
    TinyComponent,
    BlogPostComponent,
    AboutComponent,
    ContactComponent,
    AdminComponent,
    ResourcesComponent,
    FooterComponent,
    NewResourceComponent,
    ReversePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    BlogService,
    UserService,
    ResourceService,
    WINDOW_PROVIDERS,
    RouteGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
