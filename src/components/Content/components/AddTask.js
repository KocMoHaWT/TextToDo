import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import addToDo from '../../../redux/action/addToDo';

function AddTask({ task }) {
  const [showMain, setShowMain] = useState({ shouldShowMain: false });
  const text = React.createRef();
  const onClick = () => {
    setShowMain({ shouldShowMain: !showMain.shouldShowMain });
  };

  const handleAddToDo = () => {
    setShowMain({ shouldShowMain: !showMain.shouldShowMain });
    return task(text.current.value);
  };

  return (
    <div className="add-task">
      <div
        role="button"
        tabIndex="0"
        className="add-task__shallow"
        onClick={onClick}
        onKeyPress={onClick}
      >
        <span className="add-task__plus">+</span>
        <span className="add-task__text">Add Task</span>
      </div>

      {showMain.shouldShowMain
      && (
        <div className="add-task__main">
          <input
            className="add-task__content"
            data-testid="add-task-content"
            type="text"
            ref={text}

          />
          <button
            type="button"
            className="add-task__submit"
            onClick={handleAddToDo}
          >
            AddTask
          </button>
          <span
            className="add-task__cancel"
            role="button"
            tabIndex="0"
            onClick={() => {
              setShowMain({ shouldShowMain: false });
            }}
            onKeyPress={() => {
              setShowMain({ shouldShowMain: false });
            }}
          >
            Cancel
          </span>
        </div>
      ) }
    </div>

  );
}

const mapDispatchToProps = (dispatch) => ({
  text: (text) => dispatch(addToDo(text))
});

AddTask.propTypes = {
  task: PropTypes.string.isRequired
};


export default connect(null, mapDispatchToProps)(AddTask);
