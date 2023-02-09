import PropTypes from 'prop-types';
import { Title } from '../Title/Title.styled';

export function Section({ title, children }) {
  return (
    <>
      <Title>{title}</Title>
      {children}
    </>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
