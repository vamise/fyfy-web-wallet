import { AfterViewInit, Component, OnInit } from '@angular/core';
import {
  Renderer2,
  Inject
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.scss']
})
export class ConnectComponent implements OnInit, AfterViewInit {

  constructor(private renderer2: Renderer2, private router: Router) { 
  }

  ngOnInit(): void {
    
  }

  ngAfterViewInit() {
  }

  goToInitialize() {
    this.router.navigate(['initialize']);
  }

}
