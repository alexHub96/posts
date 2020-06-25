import {Component, HostListener, OnInit} from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})

export class PostComponent implements OnInit {
  postArray: object[] = [];
  loadData = true;
  currentPage = 0;
  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.getPosts(this.currentPage + 1);
  }
  getPosts(nextPage: number): void{
    this.loadData = false;
    this.postService.getPosts(nextPage).subscribe(
      data => {
          this.postArray.push(...data.result);
          this.currentPage = nextPage;
          this.loadData = true;
        },
      error => {
        console.log(error);
        this.loadData = true;
      }
    );
  }
  @HostListener('window:scroll', [])
  onScroll(): void {
    if (window.scrollY >= document.body.scrollHeight - (document.body.scrollHeight / 5)) {
      // tslint:disable-next-line:no-unused-expression
      this.loadData && this.getPosts(this.currentPage + 1);
    }
  }
}
