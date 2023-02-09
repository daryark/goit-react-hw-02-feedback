import { Component } from 'react';
import { Container } from './common/Container/Container.styled';
import { Section } from './common/Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { StatList } from './StatList/StatList';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleBtnClick = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { bad, good, neutral } = this.state;
    return bad + good + neutral;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return Math.round((good / this.countTotalFeedback()) * 100);
  };

  render() {
    const { bad, good, neutral } = this.state;
    const total = this.countTotalFeedback();

    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            handler={this.handleBtnClick}
          />
        </Section>

        <Section title="Statistics">
          {bad === 0 && neutral === 0 && good === 0 ? (
            <p>No feedback given.</p>
          ) : (
            <StatList
              good={good}
              bad={bad}
              neutral={neutral}
              total={total}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </Container>
    );
  }
}
