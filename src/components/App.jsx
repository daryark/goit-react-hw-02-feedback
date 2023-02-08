import { Component } from 'react';
import { Button } from './common/Button/Button.styled';
import { Container } from './common/Container/Container.styled';
import { Title } from './common/Title/Title.styled';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    return (
      <Container>
        <Title>Please leave feedback</Title>
        <Button>Good</Button>
        <Button>Neutral</Button>
        <Button>Bad</Button>
        <Title>Statistics</Title>
        <p>No feedback given.</p>
        <ul>
          <li>
            Good:
            {/* <span> {}</span> */}
          </li>
          <li>
            Neutral:
            {/* <span> {}</span> */}
          </li>
          <li>
            Bad:
            {/* <span> {}</span> */}
          </li>
          <li>
            Total:
            {/* <span> {}</span> */}
          </li>
          <li>
            Positive feedback:
            {/* <span> {}</span>%  */}
          </li>
        </ul>
      </Container>
    );
  }
}
