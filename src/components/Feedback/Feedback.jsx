import React from 'react';
import { FeedBackWrapper } from './Wrapper/FeedBackWrapper';
import { Statistic } from './Statistics/Statistic';
import { Notification } from './Feedback.styled';

export class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
  };
  handleGood = () => {
    this.setState(prev => {
      return {
        good: prev.good + 1,
        total: prev.total + 1,
      };
    });
  };
  handleBad = () => {
    this.setState(prev => {
      return {
        total: prev.total + 1,
        bad: prev.bad + 1,
      };
    });
  };
  handleNeutral = () => {
    this.setState(prev => {
      return {
        neutral: prev.neutral + 1,
        total: prev.total + 1,
      };
    });
  };

  handleTotal = () => {
    this.setState(({ total, bad, good, neutral }) => {
      return {
        total: bad + good + neutral,
      };
    });
  };

  render() {
    return (
      <div>
        <FeedBackWrapper
          goodIncrement={this.handleGood}
          badIncrement={this.handleBad}
          neutralIncrement={this.handleNeutral}
        ></FeedBackWrapper>
        {this.state.total === 0 ? (
          <Notification>There is no feedback</Notification>
        ) : (
          <Statistic
            good={this.state.good}
            bad={this.state.bad}
            neutral={this.state.neutral}
            total={this.state.total}
          ></Statistic>
        )}
      </div>
    );
  }
}
