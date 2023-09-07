import Box from '../box'
import Heading from '../heading'
import ListItem from '../list-item'
import './index.css'

export default function Properties({
  rules,
  policy,
  transportation,
  languages,
  offers,
  instructions,
}) {
  const lang = languages.join(', ')
  return (
    <Box shadow className="properties">
      <Heading border>Додаткові властивості</Heading>

      <ul className="properties__list">
        {rules && <ListItem title="Правила дому">{rules}</ListItem>}

        {policy && <ListItem title="Політика скасування">{policy}</ListItem>}

        {transportation && (
          <ListItem title="Місцевий транспорт">{transportation}</ListItem>
        )}

        {languages && <ListItem title="Мови хоста">{lang}</ListItem>}

        {offers && <ListItem title="Спеціальні пропозиції">{offers}</ListItem>}

        {instructions && (
          <ListItem title="Правила дому">{instructions}</ListItem>
        )}
      </ul>
    </Box>
  )
}
