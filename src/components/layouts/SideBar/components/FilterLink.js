import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import setVisibilityFilter from '../../../../redux/action/setVisibilityFilter';

function FilterLink({ filter, text, setFilter }) {
  const onClick = () => {
    return setFilter(filter);
  };
  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    <li
      onKeyPress={onClick}
      onClick={onClick}
    >
      {text}
    </li>
  );
}

const mapDispatchToProps = (dispatch, props) => ({
  setFilter: () => dispatch(setVisibilityFilter(props.filter))
});

FilterLink.propTypes = {
  filter: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired
};

export default connect(null, mapDispatchToProps)(FilterLink);
