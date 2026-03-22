import { Component, OnInit, ElementRef } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

 constructor(private el: ElementRef) {}

  ngOnInit(): void {
  setTimeout(() => {
    const homeElement = this.el.nativeElement.querySelector('.home');
    if (homeElement) {
      homeElement.classList.add('loaded');
    }
  }, 100);

  }
}
