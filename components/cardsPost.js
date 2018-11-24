import Link from 'next/link';
import {withRouter} from 'next/router'
import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import {Typography} from '@material-ui/core/';

import cardsPostStyleStyle from '../styles/cardsPostStyle'

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

class CardsPost extends React.Component{
  constructor(props){
    super(props);
    this.classes = props.classes;
  }

  componentDidMount(){
    //todo after all component loaded.
  }

  render(){
    return(
      <React.Fragment>
        <div className={classNames(classes.layout, classes.cardGrid)}>
          <Grid item key={card} sm={6} md={4} lg={3}>
          </Grid>
        </div>
      </React.Fragment>
    )
  }
}
export default withStyles(cardsPostStyleStyle)(CardsPost)
