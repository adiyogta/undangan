import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  standalone: true,
  template: '<div style="text-align: center; padding: 20px;">Loading...</div>'
})
export class LoadingComponent implements OnInit {
  ngOnInit() {
    console.log('LoadingComponent initialized');
  }
}