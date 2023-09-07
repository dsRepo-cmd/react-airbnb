import { Fragment } from 'react'
import Heading from '../heading'
import './index.css'
import Box from '../box'
import ListItem from '../list-item'

export default function Attractions({ list }) {
  return (
    <Box list shadow className="attractions">
      <Heading>Пам'ятки поблизу</Heading>

      {list.map(({ id, link, name }) => (
        <Fragment key={id}>
          <ListItem>
            <a className="attractions__link" href={link}>
              {name}
            </a>
          </ListItem>
        </Fragment>
      ))}
    </Box>
  )
}
