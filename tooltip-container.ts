import {Component} from "@angular/core";
import {TooltipService} from "../../../services/tooltip.service";

@Component({
  selector: 'app-tooltip-container',
  templateUrl: './tooltip-container.html',
})
export class TooltipContainerComponent {

  constructor(public tooltipService: TooltipService) { }

}
