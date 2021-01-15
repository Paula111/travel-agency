import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';

const OrderOptionText = ({ currentValue, setOptionValue }) => (
  <div className={styles.text}>
    <input
      type='text'
      onChange={event => setOptionValue(event.currentTarget.value)}
      value={currentValue}
    >
    </input>
  </div>
);

OrderOptionText.propTypes = {
  currentValue: PropTypes.node,
  setOptionValue: PropTypes.func,
};

export default OrderOptionText;