export interface HotelCardProps {
  id: string,
  name: string,
  stars: number,
  image: string,
  price: number,
  amenities: Array<string>
  onSelectHotel: Function
}
