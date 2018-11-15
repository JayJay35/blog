import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PostsService } from '../services/posts.service';
import { Router } from '@angular/router';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  newPost: FormGroup;

  constructor(private formBuilder: FormBuilder, private postsService: PostsService, private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.newPost = this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required]
    })
  }


  onSavePost() {
    const title = this.newPost.get('title').value;
    const content = this.newPost.get('content').value;
    const newPost = new Post(title);
    newPost.content = content;
    console.log(newPost);
    this.postsService.createNewPost(newPost);
    this.router.navigate(['posts']);
  }

}
