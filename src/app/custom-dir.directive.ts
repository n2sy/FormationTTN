import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustomDir]'
})
export class CustomDirDirective {
  @HostBinding('style.backgroundColor') bordercl : string = "red";
  @HostBinding('style.color') txtColor : string = "blue";

  constructor() { }

  @HostListener('mouseenter') mouseenter() {
    this.bordercl = "blue";
    this.txtColor = "red";

  }

  @HostListener('mouseleave') mouseleave() {
    this.bordercl = "red";
    this.txtColor = "blue";

  }

}
