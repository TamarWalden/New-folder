export class Image {
    public path: string;
    public path_xx: string;
  
    constructor(
      public collectionSymbolization: string,
      public id: number,
      public isSaved: boolean
    ) {
      this.path = collectionSymbolization + "\\" + id.toString()+"jpg";
      this.path_xx = collectionSymbolization + "\\" + id.toString() + "_xx.jpg";
    }
  }
