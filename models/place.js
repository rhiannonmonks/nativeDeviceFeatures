class Place {
  constructor(title, imageUri, address, location) {
    this.title = title;
    this.imageUri = imageUri;
    this.address = address;
    this.location = location; // {lat: 0.142442, lng: 126.122}
    this.id = new Date().toString() + Math.random().toString();
  }
}
