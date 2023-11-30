import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Collection } from 'src/app/Classes/collection';
import { Image } from '../Classes/image';

@Injectable({
  providedIn: 'root'
})
export class CollectionService {
  Url = "https://localhost:7041/api/Collection/";

  constructor(private myHttp: HttpClient) { }

  getCollection(collectionSymbolization:string): Observable<Collection> {
    var collection = this.myHttp.get<Collection>(this.Url + "GetCollection/"+collectionSymbolization);
    return collection;
}

  saveImages(images:Array<Image>):Observable<Array<Image>>{
    var imagesList=this.myHttp.post<Array<Image>>(this.Url+"SaveImeges",images);
    return imagesList;
  }
}
