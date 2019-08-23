import React from "react";
import { Card, Icon } from 'semantic-ui-react';

const LocationCard = (props) => (
  <Card>
    <Card.Content header={props.name} />
    <Card.Content description={`${props.type} - ${props.dimension}`} />
    <Card.Content extra>
      <Icon name='user' />{props.residents} Residents
    </Card.Content>
  </Card>
)

export default LocationCard