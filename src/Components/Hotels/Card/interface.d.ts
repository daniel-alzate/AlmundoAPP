export interface HotelCardProps {
  id: string,
  name: string,
  stars: number,
  image: string,
  price: number,
  amenities: Array<string>
  city: any
  onSelectHotel: Function
}
