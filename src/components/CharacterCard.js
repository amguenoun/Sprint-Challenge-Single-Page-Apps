import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const CharacterCard = (props) => (
  <Card>
    <Image src={props.character.image} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{props.character.name}</Card.Header>
      <Card.Meta>
        <span className='date'>{props.character.species} {props.character.status}</span>
      </Card.Meta>
      <Card.Description>
        {props.character.location.name}
        {props.character.origin.name}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <Icon name='user' />
      {props.character.episode.length} Episodes
    </Card.Content>
  </Card>
)

export default CharacterCard