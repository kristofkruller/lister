import { Component } from "@angular/core";
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';

@Component({
    selector: "app-header",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.css"],
    animations: [
        trigger(
            'iconTransition', [
            state('menu', style({ opacity: 1 })),
            state('close', style({ opacity: 1 })),
            transition('menu <=> close', animate('700ms', keyframes([
              style({ opacity: 0, offset: 0 }),
              style({ opacity: 1, offset: 1 })
            ])))
        ]),
        trigger(
            'dropDownTransition', [
            state('up', style({ transform: "rotate(0deg)" })),
            state('down', style({ transform: "rotate(540deg)" })),
            transition('up <=> down', animate("500ms ease-in-out"))  
        ]),
        trigger(
            'manageTransition', [
            state('down', style({ opacity: 1, transform: "translateX(0)"})),
            state('up', style({ opacity: 0, transform: "translateY(-20px)" })),
            transition('up <=> down', animate("600ms ease-in-out"))  
        ]),
    ],
})

export class HeaderComponent {
    showMenu = false;
    showDropDown = false;
    toggleNavbar(){
        this.showMenu = !this.showMenu;
    }
    toggleDropDown(){
        this.showDropDown = !this.showDropDown;
    }
}