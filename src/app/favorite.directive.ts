import { Directive,HostBinding,HostListener,Input } from "@angular/core";  

@Directive({
        selector:"[myfavorite]"
})
export class FavrioteDirective
{
    @HostBinding('class.is-favorite') isFavorite=true;
    @HostBinding('class.is-favorite-hovering') isHovering=false;
    @HostListener('mouseenter') OnMouseEnter()
    {
        this.isHovering=true;
    }
    @HostListener('mouseleave') OnMouseLeave()
    {
        this.isHovering=false;
    }
    
    @Input() set myfavorite(value:boolean)
    {
        this.isFavorite=value;

    }
    get myfavorite(): boolean {
        return this.isFavorite;
      }



}