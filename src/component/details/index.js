import Box from '../box'
import Heading from '../heading'
import ListItem from '../list-item'

import './index.css'

import bed from './bed.svg'
import bedroom from './bedroom.svg'
import bathroom from './bathroom.svg'
import guests from './guests.svg'

export default function Details({ data }) {
  return (
    <Box list className="details" shadow>
      <Heading border>Деталі властивості:</Heading>
      {data.guests && (
        <ListItem imageSrc={guests}>{data.guests} гостя</ListItem>
      )}

      {data.bedrooms && (
        <ListItem imageSrc={bedroom}>{data.bedrooms} спальня</ListItem>
      )}

      {data.beds && <ListItem imageSrc={bed}>{data.beds} ліжко</ListItem>}

      {data.baths && (
        <ListItem imageSrc={bathroom}>{data.baths} ванна кімната</ListItem>
      )}
    </Box>
  )
}
