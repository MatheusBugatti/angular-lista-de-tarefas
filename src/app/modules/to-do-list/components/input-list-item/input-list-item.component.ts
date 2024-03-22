import { Component, EventEmitter, Input, Output, output } from '@angular/core';

//interface
import { IlistItems } from '../../interface/IListItems.interface';

@Component({
  selector: 'app-input-list-item',
  standalone: true,
  imports: [],
  templateUrl: './input-list-item.component.html',
  styleUrl: './input-list-item.component.scss'
})
export class InputListItemComponent {
  @Input({required : true}) public inputListItems: IlistItems[] = [];


  //mudar de pendencia pra concluido
  @Output() public outputUpdateItemCheckbox = new EventEmitter<{
    id: string;
    checked: boolean;
  }>();

  public updateItemCheckbox(id: string, checked: boolean){
    return this.outputUpdateItemCheckbox.emit({id, checked});
  }

  
  @Output() public outputUpdateItemText = new EventEmitter<{
    id: string;
    value: string;
  }>();
  
  public updateItemText(id: string, value: string) {
    return this.outputUpdateItemText.emit({ id, value });
  }

  @Output() public outputDeletItem = new EventEmitter<string>();
  public deleteItem(id: string) {
    return this.outputDeletItem.emit(id);
  }
}
