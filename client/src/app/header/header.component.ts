import { Component } from "@angular/core";

@Component({
    selector: "app-header",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.css"]
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