export interface HotelCardProps {
  _id: string,
  name: string,
  stars: number,
  image: string,
  price: number,
  amenities: Array<string>
  city: any
  onSelectHotel: Function
}
