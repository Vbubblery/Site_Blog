import Link from 'next/link';
import {withRouter} from 'next/router'
import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import {Typography} from '@material-ui/core/';

import cardsPostStyleStyle from '../styles/cardsPostStyle'

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
        //todo
      </React.Fragment>
    )
  }
}
export default withStyles(cardsPostStyleStyle)(CardsPost)
