import { Directive , ElementRef , Input , OnInit } from "@angular/core";
@Directive({
    selector : '[myColor]'
})
export class CustomColorDirective implements OnInit{
    @Input() myColor! : string;
    constructor(private e1 : ElementRef){}
    ngOnInit(): void {
        this.e1.nativeElement.style.backgroundColor = this.myColor;
    }
}