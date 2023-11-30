import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Image } from 'src/app/Classes/image';

@Component({
  selector: 'app-image-card',
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.css']
})
export class ImageCardComponent{
  @Input() image: Image | undefined;
  @Input() lastImage: boolean=false;
  @Output() deleteLastImage = new EventEmitter<void>();

  isChecked: boolean = false;
  onCheckboxChange(event: any) {
    this.isChecked = event.checked;
  }

  deleteImage(){
    this.deleteLastImage.emit();
  }
}
