import PropTypes from 'prop-types';
import { getRandomHexColor } from '../helpers/getRandomHexColor';

import { StatisticsSection, StatisticsList } from './Statistics.styled.js';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsSection>
      {title && <h2>Upload stats</h2>}
      <StatisticsList>
        {stats.map(stat => {
          let collor = getRandomHexColor();

          return (
            <li key={stat.id} style={{ backgroundColor: `${collor}` }}>
              <span>{stat.label}</span>
              <span>{stat.percentage}</span>
            </li>
          );
        })}
      </StatisticsList>
    </StatisticsSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ),
};
