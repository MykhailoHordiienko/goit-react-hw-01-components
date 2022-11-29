import PropTypes from 'prop-types';

import {
  TrasactionTableTr,
  TrasactionTable,
} from './TransactionHistory.styled.js';

export const TransactionHistory = ({ item }) => {
  return (
    <TrasactionTable>
      <thead>
        <TrasactionTableTr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </TrasactionTableTr>
      </thead>

      <tbody>
        {item.map(({ id, type, amount, currency }) => {
          return (
            <TrasactionTableTr key={id}>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </TrasactionTableTr>
          );
        })}
      </tbody>
    </TrasactionTable>
  );
};

TransactionHistory.propTypes = {
  item: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ),
};
