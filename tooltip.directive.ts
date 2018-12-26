import {Directive, ElementRef, HostListener, Input, OnDestroy} from "@angular/core";
import {TooltipService} from "../services/tooltip.service";

@Directive({ selector: '[appTooltip]' })
export class TooltipDirective implements OnDestroy {

  @Input() tooltipTitle: string = '';
  private id: string;

  constructor(private tooltipService: TooltipService, private element: ElementRef) { }

  @HostListener('mouseenter')
  onMouseEnter(): void {
    this.id = Math.floor(Math.random() * 90000) + 10000 + '';
    this.tooltipService.components.push({
      id: this.id,
      ref: this.element,
      title: this.tooltipTitle
    });
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.destroy();
  }

  ngOnDestroy(): void {
    this.destroy();
  }

  destroy(): void {
    const idx = this.tooltipService.components.findIndex((tooltip) => {
      return tooltip.id === this.id;
    });

    this.tooltipService.components.splice(idx, 1);
  }

}
