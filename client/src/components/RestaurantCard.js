import { Card } from 'flowbite-react'
import peopleOutline from '../assets/images/people-outline.svg'
import locationOutline from '../assets/images/location-outline.svg'
import { Link } from 'react-router-dom'

export default function RestaurantCard({id}) {
  return (
    <Link to={`/restaurant/${id}`}>
        <Card
      className="max-w-sm"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc="https://b.zmtcdn.com/data/collections/2e5c28a5fbcb2b35d84c0a498b0e1ba2_1674825837.jpg?fit=around|562.5:360&crop=562.5:360;*,*">
      <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
        Noteworthy technology acquisitions
      </h5>
      <p className='flex gap-2'> <img className='w-5' src={peopleOutline} alt="restaurant icon" />Available seats 30</p>
      <p className='flex gap-2'> <img className='w-5' src={locationOutline} alt="restaurant icon" />4740 Baum Blvd, Pittsburgh</p>
    </Card>
    </Link>
  )
}
