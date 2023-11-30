import { Image } from "./image";

export class Collection {
    constructor(
        public collectionSymbolization: string,
        public title: string,
        public itemId: string,
        public images: Array<Image>
    ){}
}
