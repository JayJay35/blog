import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../models/post.model';
import { PostsService } from '../services/posts.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() post: Post;

  constructor(private postsService: PostsService, private router: Router) { }

  ngOnInit() {
  }

  onDeletePost(post: Post) {
    this.postsService.removePost(post);
  }

  onLike(){
    this.post.like++;
    this.postsService.savePost();
  }

  onUnlike(){
    this.post.like--;
    this.postsService.savePost();
  }
}
