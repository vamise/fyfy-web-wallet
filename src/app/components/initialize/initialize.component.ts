import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-initialize',
  templateUrl: './initialize.component.html',
  styleUrls: ['./initialize.component.scss']
})
export class InitializeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToStart() {
    this.router.navigate(['start']);
  }

}
