import { HiArrowLeft } from 'react-icons/hi';
import PropTypes from 'prop-types';
import { LinkBtn } from './BackLink.styled';

export const BackLink = ({ to, children }) => {
  return (
    <LinkBtn to={to}>
      <HiArrowLeft size="20" />
      {children}
    </LinkBtn>
  );
};

BackLink.propTypes = {
  to: PropTypes.any,
  children: PropTypes.string.isRequired,
};
