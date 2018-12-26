import {
  AfterViewInit, Component, ElementRef, HostListener, Input, OnDestroy, OnInit, Renderer2,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-tooltip-content',
  templateUrl: './tooltip-content.html',
  styleUrls: ['./tooltip-content.scss'],
})
export class TooltipContentComponent implements AfterViewInit, OnDestroy {

  @Input() title: string;
  @Input() ref: any;
  @ViewChild('tooltipContent') tooltip: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    this.setTooltipPosition();
  }

  @HostListener('window:resize')
  onWindowResize(): void {
    this.setTooltipPosition();
  }

  setTooltipPosition() {
    const refPosition = this.ref.nativeElement.getBoundingClientRect();
    const tooltipElement = this.tooltip.nativeElement;
    const tooltipPositionY = refPosition.y - 30;
    const tooltipPositionX = refPosition.x - (tooltipElement.offsetWidth / 2) + (refPosition.width / 2);
    this.renderer.setStyle(tooltipElement, 'top', tooltipPositionY + 'px');
    this.renderer.setStyle(tooltipElement, 'left', tooltipPositionX + 'px');
  }

  ngOnDestroy() {
    this.renderer.setStyle(this.tooltip.nativeElement, 'opacity', 0);
  }

}
