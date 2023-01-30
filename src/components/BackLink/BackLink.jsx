import { HiArrowLeft } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export const BackLink = ({ to, children }) => {
  return (
    <Link to={to}>
      <HiArrowLeft size="24" />
      {children}
    </Link>
  );
};

BackLink.propTypes = {
  to: PropTypes.any,
  children: PropTypes.string.isRequired,
};
