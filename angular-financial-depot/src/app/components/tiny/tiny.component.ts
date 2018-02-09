import { Component, OnInit, OnDestroy, AfterViewInit, EventEmitter, Input, Output } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { ResourceService } from '../../services/resource.service';

@Component({
  selector: 'app-tiny',
  templateUrl: './tiny.component.html',
  styleUrls: ['./tiny.component.css']
})
export class TinyComponent implements AfterViewInit, OnDestroy, OnInit {
  @Input() elementId: String;
  @Input() defaultValue: any;
  @Output() onEditorKeyup = new EventEmitter<any>();

  editor;

  constructor(
    private resourceService: ResourceService,
    private blogService: BlogService) { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    tinymce.init({
      height: '500px',
      selector: '#' + this.elementId,
      plugins: ['link', 'paste', 'table'],
      skin_url: 'assets/skins/custom',
      setup: editor => {
        this.editor = editor;
        editor.on('keyup', () => {
          const content = editor.getContent();
          this.onEditorKeyup.emit(content);
        });
      },
    });

    this.checkIfEditingPost();
  }

  ngOnDestroy() {
    tinymce.remove(this.editor);
  }

  checkIfEditingPost() {
    if (this.blogService.editPost === true) {
      this.blogService.getPostById(this.blogService.editablePostId).subscribe(post => {
        this.editor.setContent(post.body);
      });
    } else if (this.resourceService.editResource === true) {
      this.resourceService.getResourceById(this.resourceService.editableResourceId).subscribe(resource => {
        this.editor.setContent(resource.body);
      });
    }
  }

}
