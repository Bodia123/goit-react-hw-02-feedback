import React from 'react';
import { Container, Tittle, Item, List, ListItem } from './Statistic.styled';

export const Statistic = ({ good, bad, neutral, total }) => {
  return (
    <Container>
      <Tittle>Statistics</Tittle>
      <List>
        <ListItem>
          <Item>Good:{good}</Item>
        </ListItem>
        <ListItem>
          <Item>Neutral:{neutral}</Item>
        </ListItem>
        <ListItem>
          <Item>Bad:{bad}</Item>
        </ListItem>
      </List>
      <Item>Total:{total}</Item>
      <Item>Positive feedback:{Math.round((good / total) * 100)}%</Item>
    </Container>
  );
};
