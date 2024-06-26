import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/services/data.service';
import { Blog } from '../../shared/interfaces/blog';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  public adminBlogs!: Blog[];
  public title!: string;
  public author!: string;
  public text!: string;
  public editStatus = false;
  public currentEditIndex!: number;
  public currentEditBlog!: Blog;
  public blogs!: Array<Blog>;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.getBlogs();
  }
  getBlogs(): void {
    this.dataService.getAll().subscribe((data) => {
      this.adminBlogs = data;
    });
  }

  addBlog(): void {
    if (this.text && this.author && this.text) {
      let newBlog: Blog = {
        id: ++this.dataService.countId,
        title: this.title,
        author: this.author,
        text: this.text,
      };
      this.dataService.addBlog(newBlog).subscribe(() => {
        this.getBlogs();
        this.resetForm();
      });
    } else {
      alert('Заповніть поля');
    }
  }
  // editBlog(blog: Blog, index: number): void {
  //   this.editStatus = true;
  //   this.title = blog.title;
  //   this.author = blog.author;
  //   this.text = blog.text;
  //   this.currentEditIndex = index;
  //   this.currentEditBlog = blog;
  // }
  editBlog(blog: Blog, index: number): void {
    this.editStatus = true;
    this.title = blog.title;
    this.author = blog.author;
    this.text = blog.text;
    this.currentEditIndex = index;
    this.currentEditBlog = blog;
  }
  saveBlog(): void {
   this.currentEditBlog.author = this.author;
    this.currentEditBlog.title = this.title;
    this.currentEditBlog.text = this.text;
    this.dataService.editBlog(this.currentEditBlog, this.currentEditIndex);
    this.resetForm();
    this.editStatus = false;
  }

  deleteBlog(blog: Blog): void {
    this.dataService.deleteBlog(blog.id).subscribe(() => {
      this.getBlogs();
    });
  }

  resetForm(): void {
    this.title = '';
    this.author = '';
    this.text = '';
  }
}
