export interface Rooms {
  available: number;
  total: number;
  booked: number;
}

export interface Room {
  image: string;
  roomNo: number;
  roomType: string;
  amenities: string;
  price: number;
  checkInTime?: Date;
  checkOutTime?: Date;
  available: boolean;
  rating: number;
}
