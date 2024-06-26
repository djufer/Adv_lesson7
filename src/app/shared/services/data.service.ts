import { Injectable } from '@angular/core';
import { Blog } from '../interfaces/blog';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private currentLenth: number = 2;
  // public blogs: Blog[] = [
  //   {
  //     id: 1,
  //     title: 'Title1',
  //     author: 'author1',
  //     text: 'some text 1',
  //   },
  //   {
  //     id: 2,
  //     title: 'Title2',
  //     author: 'author2',
  //     text: 'some text 2',
  //   },
  // ];
  // ------------------------------------------------------------------
  public countId: number = 0;
  private url = environment.BACKEND_URL;
  private api = { blogs: `${this.url}/blogs` };

  // ------------------------------------------------------------------
  constructor(private http: HttpClient) {}

  addBlog(blog: Blog): Observable<Blog> {
    return this.http.post<Blog>(this.api.blogs, blog); 
  }

  editBlog(newBlog: Blog, index: number): Observable<Blog[]> {
    return this.http.patch<Blog[]>(`${this.api.blogs}/${index}`, newBlog)
    // this.blogs[index] = newBlog;
  }

  deleteBlog(id: number): Observable<void> {
    return this.http.delete<void>(`${this.api.blogs}/${id}`);
  }
  // ==========================================================================

  getAll(): Observable<Blog[]> {
    return this.http.get<Blog[]>(this.api.blogs);
  }
}
