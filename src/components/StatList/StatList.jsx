import PropTypes from 'prop-types';
import { Num } from './StatList.styled';

export function StatList({ good, bad, neutral, total, positivePercentage }) {
  return (
    <ul>
      <li>
        Good:<Num>{good}</Num>
      </li>
      <li>
        Neutral:<Num> {neutral}</Num>
      </li>
      <li>
        Bad:<Num> {bad}</Num>
      </li>
      <li>
        Total:<Num> {total}</Num>
      </li>

      <li>
        Positive feedback:
        <Num> {positivePercentage}%</Num>
      </li>
    </ul>
  );
}

StatList.propTypes = {
  good: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
