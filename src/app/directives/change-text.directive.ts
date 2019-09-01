import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appChangeText]'
})
export class ChangeTextDirective {

  constructor(el: ElementRef) {
    el.nativeElement.innerHTML= el.nativeElement.innerHTML + 'Shazam!';
    el.nativeElement.style.color = '#11ffdd'
    el.nativeElement.style.backgroundColor = '#111'
  }

}
