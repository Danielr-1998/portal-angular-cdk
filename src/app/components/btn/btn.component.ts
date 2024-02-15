import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-btn',
  standalone: true,
  imports: [],
  templateUrl: './btn.component.html'
})

export class BtnComponent implements OnInit {
  @Input() typeBtn: 'button' | 'submit'  = 'button';
  constructor() { }

  ngOnInit(): void {
  }
}
