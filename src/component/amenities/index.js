import Box from '../box'
import Heading from '../heading'
import ListItem from '../list-item'

import './index.css'

import airport from './airport.svg'
import breakfast from './breakfast.svg'
import child from './child.svg'
import concierge from './concierge.svg'
import gym from './gym.svg'
import parking from './parking.svg'
import pets from './pets.svg'
import pool from './pool.svg'
import service from './service.svg'
import wifi from './wifi.svg'

export default function Amenities({ data }) {
  return (
    <Box list className="amenities" shadow>
      <Heading border>Зручності</Heading>
      {data.hasPool && <ListItem imageSrc={pool}>Басейн</ListItem>}

      {data.hasGym && <ListItem imageSrc={gym}>Спортивний зал</ListItem>}

      {data.hasFreeBreakfast && (
        <ListItem imageSrc={breakfast}>Безкоштовний сніданок</ListItem>
      )}
      {data.hasFreeWiFi && (
        <ListItem imageSrc={wifi}>Безкоштовний Wi-Fi</ListItem>
      )}
      {data.hasParking && (
        <ListItem imageSrc={parking}>Безкоштовний вуличний паркінг</ListItem>
      )}
      {data.hasPetsAllowed && (
        <ListItem imageSrc={pets}>
          Дозволено розміщення з домашніми тваринами
        </ListItem>
      )}
      {data.hasAirportShuttle && (
        <ListItem imageSrc={airport}>Трансфер до/з аеропорту</ListItem>
      )}
      {data.hasConciergeService && (
        <ListItem imageSrc={concierge}>Консьєрж-сервіс</ListItem>
      )}
      {data.hasRoomService && (
        <ListItem imageSrc={service}>Обслуговування номерів</ListItem>
      )}
      {data.hasChildFriendly && (
        <ListItem imageSrc={child}>Підходить для дітей</ListItem>
      )}
    </Box>
  )
}
