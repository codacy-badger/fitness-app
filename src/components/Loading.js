import React from "react";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import LinearProgress from '@material-ui/core/LinearProgress';

const Loading = () => (
  <div>
    <Card>
      <CardHeader title="Loading" />
      <CardContent>
        <p>Loading data.</p>
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>
    <LinearProgress />
  </div>
);

export default Loading;