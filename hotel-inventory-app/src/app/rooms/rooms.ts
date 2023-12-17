export interface Rooms {
  available: number;
  total: number;
  booked: number;
}

export interface Room {
  image: string;
  roomNumber: string;
  roomType: string;
  amenities: string;
  price: number;
  checkinTime?: Date;
  checkoutTime?: Date;
  rating: number;
}
