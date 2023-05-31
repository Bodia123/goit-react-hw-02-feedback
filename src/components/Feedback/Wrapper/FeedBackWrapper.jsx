import React from 'react';
import {
  Wrapper,
  Tittle,
  Button,
  ListButton,
  Item,
} from './FeedBackWrapper.styled';

export const FeedBackWrapper = ({
  goodIncrement,
  badIncrement,
  neutralIncrement,
}) => {
  return (
    <Wrapper>
      <Tittle>Please leave feedback</Tittle>
      <ListButton>
        <Item>
          <Button onClick={goodIncrement}>Good</Button>
        </Item>
        <Item>
          <Button onClick={neutralIncrement}>Neutral</Button>
        </Item>
        <Item>
          <Button onClick={badIncrement}>Bad</Button>
        </Item>
      </ListButton>
    </Wrapper>
  );
};
