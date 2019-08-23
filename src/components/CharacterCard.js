import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const CharacterCard = (props) => (
  <Card>
    <Image src={props.image} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{props.name}</Card.Header>
      <Card.Meta>
        <span className='date'>{props.species} {props.status}</span>
      </Card.Meta>
      <Card.Description>
        {props.location}
        {props.origin}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <Icon name='tv' />
      {props.episodes} Episodes
    </Card.Content>
  </Card>
)

export default CharacterCard