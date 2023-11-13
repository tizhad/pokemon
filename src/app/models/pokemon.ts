export class Pokemon {
  constructor(
    public id: number,
    public name: string,
    public imageUrl: string
  ) {}

  getImage() {
    console.log('Fire');
    // get the image from the API
  }
}
