import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {


  blogTitle = "Just A Blog";
  baseUrl = "http://localhost:4200/"
constructor() { }

}
