import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button-component',
  templateUrl: './button-component.component.html',
  styleUrls: ['./button-component.component.scss']
})
export class ButtonComponentComponent {
  public buttonText = "";

  @Input()
  set text(name: string){
    this.buttonText = name.toUpperCase();
  }
  get name(): string{
    return this.buttonText;
  }

  @Input() color: string = '0068B4';
	@Input() type: string = 'button';
	@Output() btnClick = new EventEmitter<string>();
	@Input() isDisabled = false;

  constructor() {}

	onClick() {
		this.btnClick.emit("helllo man");
	}
}
