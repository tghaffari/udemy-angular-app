export class Recipe {
    public name: string;
    public description: string;
    public imagePath: string; //will hold the url

    constructor(name: string, desc: string, imagePath: string) {
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
    }
}