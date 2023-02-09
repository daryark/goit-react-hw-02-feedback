import PropTypes from 'prop-types';
import { Button } from 'components/common/Button/Button.styled';

export function FeedbackOptions({ options, handler }) {
  return (
    <>
      {options.map(option => (
        <Button onClick={() => handler(option)} key={option}>
          {option}
        </Button>
      ))}
    </>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  handler: PropTypes.func.isRequired,
};
