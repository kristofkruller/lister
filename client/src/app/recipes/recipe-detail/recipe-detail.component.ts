import { Component } from '@angular/core';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
  animations: [
    trigger(
      'detailsDrop', [
        state('open', style({ opacity: 1, transform: "translateX(0)" })),
        state('close', style({ opacity: 0, transform: "translateX(-20px)" })),
        transition('open <=> close', animate('500ms linear'))
      ]
    ),
  ]
})
export class RecipeDetailComponent {
  showDetail = false;
  hid = true;
  toggleDetails() {
    this.showDetail = !this.showDetail;
    this.hid ? this.hid = false : 
    setTimeout(() => {
      this.hid = true;
    }, 500);
  }
}