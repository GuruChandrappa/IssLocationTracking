import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.css']
})
export class ShellComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

export const ApiUrl : string = 'https://localhost:5001/api';