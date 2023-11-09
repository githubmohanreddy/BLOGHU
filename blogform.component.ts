import { Component } from '@angular/core';
import { BlogService } from '../service/blog.service';

@Component({
  selector: 'blogform',
  templateUrl: './blogform.component.html',
  styleUrls: ['./blogform.component.css']
})
export class BlogformComponent {

  categories = ['technical','personal','nature'];
  constructor(private service:BlogService){}

insert(blog: any){
  // alert(blog.title);
  console.log('inserting...')
  this.service.addBlog(blog);
}

}
