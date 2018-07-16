import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import CardHeader from '@material-ui/core/CardHeader';
import utils from '../utils/utils';
import Results from './Results';

const Finish = ({
  title, buttonLabel, sex, age, height, weight, level, goal, type, results,
}) => (
  <Card>
    <CardHeader title={title} />
    <CardContent>
      {utils.getText({
        sex,
        age,
        height,
        weight,
        level,
        goal,
        type,
        results,
      })}
      <Results {...{
        sex,
        age,
        height,
        weight,
        level,
        goal,
        type,
        results,
      }}
      />
    </CardContent>
    <CardActions>
      <a href={utils.getLink({
        sex,
        age,
        height,
        weight,
        level,
        goal,
        type,
        results,
      })}
      >
        <Button variant="contained" color="primary">
          {buttonLabel}
        </Button>
      </a>
    </CardActions>
  </Card>
);

Finish.propTypes = {
  title: PropTypes.string.isRequired,
  buttonLabel: PropTypes.string.isRequired,
  sex: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  weight: PropTypes.number.isRequired,
  level: PropTypes.number.isRequired,
  goal: PropTypes.number.isRequired,
  type: PropTypes.number.isRequired,
  results: PropTypes.arrayOf(PropTypes.array.isRequired).isRequired,
};

export default Finish;
