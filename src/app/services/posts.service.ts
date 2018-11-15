import { Injectable } from "@angular/core";
import { Post } from "../models/post.model";
import { Subject } from "rxjs";
import * as firebase from 'firebase';
import DataSnapshot = firebase.database.DataSnapshot;

@Injectable()
export class PostsService {
    posts: Post[];
    postsSubject = new Subject<Post[]>();

    constructor() {
        this.getPosts();
    }

    getPosts() {
        firebase.database().ref('/posts').on('value',
        (data: DataSnapshot) => {
          this.posts = data.val() ? data.val() : [];
          this.emitPosts();
        }
      );
    }

    emitPosts() {
        this.postsSubject.next(this.posts);
    }

    savePost() {
        firebase.database().ref('/posts').set(this.posts);
    }

    removePost(post: Post) {
        const index = this.posts.findIndex(
            (postE1) => {
                if (postE1 === post) {
                    return true;
                }
            }
        );
        this.posts.splice(index, 1);
        this.savePost();
        this.emitPosts();
    }

    createNewPost(newPost: Post) {
        console.log(newPost);
        this.posts.push(newPost);
        this.savePost();
        this.emitPosts();
      }
    
}