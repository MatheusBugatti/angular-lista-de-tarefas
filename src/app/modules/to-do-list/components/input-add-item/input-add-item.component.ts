import { ChangeDetectorRef, Component, ElementRef, EventEmitter, Output, ViewChild, inject, output } from '@angular/core';
import { IlistItems } from '../../interface/IListItems.interface';

@Component({
  selector: 'app-input-add-item',
  standalone: true,
  imports: [],
  templateUrl: './input-add-item.component.html',
  styleUrl: './input-add-item.component.scss'
})
export class InputAddItemComponent {
  #cdr = inject(ChangeDetectorRef);

  @ViewChild("inputText") public inputText!: ElementRef;

  @Output() public outputListItems = new EventEmitter<IlistItems>()
  public focusAndAddItem(value : string){
    if(value){
      //assim que detecta alteração faz alguma coisa
      this.#cdr.detectChanges();
      this.inputText.nativeElement.value = '';

      const dataAtual= new Date();
      const timestamp = dataAtual.getTime();
      const id = `ID ${timestamp}`

      this.outputListItems.emit({
        id,
        checked: false,
        value
      });


      return this.inputText.nativeElement.focus();
    }
  }
}
