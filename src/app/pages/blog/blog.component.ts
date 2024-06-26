import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/services/data.service';
import { Blog } from '../../shared/interfaces/blog';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  public blogPageBlogs: Blog[] = [];

  constructor(private dataService: DataService) {}
  ngOnInit(): void {
    this.getBlogs();
  }

  getBlogs(): void {
    this.dataService.getAll().subscribe((data) => {
      this.blogPageBlogs = data;
    });
  }
}
