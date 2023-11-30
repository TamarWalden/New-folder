import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Collection } from 'src/app/Classes/collection';
import { CollectionService } from 'src/app/Services/Collection.service';
import { ImageCardComponent } from '../image-card/image-card.component';
import { Image } from 'src/app/Classes/image';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent {
  collectionNumberControl: FormControl = new FormControl('', Validators.required);
  collectionNumber: string ="";
  collection: Collection=new Collection("","","",[] );
  isGetCollection:boolean=false;
  constructor(private collectionService: CollectionService) { }

  getCollection(collectionSymbolization: string) {

    this.collectionService.getCollection(collectionSymbolization).subscribe(
      data => {
        this.collection=data;
        this.isGetCollection=true;
      },
      err => { console.log("failed to get collection") }
    );
  }

  addImageCard() {
    var newImage=new Image(this.collection?.collectionSymbolization,this.collection?.images.length+1,false);
    //check if marked the checkbox
    this.collection.images.push(newImage);
  }

  saveImages(){
    this.collectionService.saveImages(this.collection.images).subscribe(
      data=>{
        this.collection.images=data;
      },
      err=>{console.log("failes to save images")}
    )
  }

  deleteLastImage(){
    this.collection.images.pop();
  }
 
}
