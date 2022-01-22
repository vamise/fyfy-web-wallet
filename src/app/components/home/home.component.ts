import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// 1. import dependencies
import {
  Renderer2,
  Inject
} from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  constructor(private router: Router,
    private renderer2: Renderer2, @Inject(DOCUMENT) private _document: Document) { 
      
  }

  ngAfterViewInit() {

  }

  ngOnInit(): void {
  }
  
  goToConnect() {
     this.router.navigate(['connect']);
   }

}
