import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }
  signup(){
    this.route.navigate(['/signup']);
  }
}
