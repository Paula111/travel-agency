import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';
import Icon from '../../common/Icon/Icon';
import { formatPrice } from '../../../utils/formatPrice';

const OrderOptionIcons = ({ values, currentValue, setOptionValue }) => (
  <div className={styles.icon}>
    {values.map(value => (
      <div
        onClick={() => setOptionValue(value.id)}
        key={value.id}
        value={currentValue}
        className={(value.id == currentValue) ? styles.iconActive : styles.icon}
      >
        <Icon name={value.icon} />
        {formatPrice(value.price)}
      </div>
    ))}
  </div>
);

OrderOptionIcons.propTypes = {
  values: PropTypes.array,
  currentValue: PropTypes.node,
  setOptionValue: PropTypes.func,
};

export default OrderOptionIcons;