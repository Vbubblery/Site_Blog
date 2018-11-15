import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import mainContentStyle from '../styles/mainSideBarStyle';

import { withStyles } from '@material-ui/core/styles';
import {Grid,Typography,Divider,Paper} from '@material-ui/core/';

const archives = [
  'December 2018',
  'November 2018',
];

const social = [
{name:'GitHub',src:'https://github.com/Vbubblery'},
{name:'Twitter',src:'https://twitter.com/juncheng_zhou'},
{name:'Facebook',src:'https://www.facebook.com/profile.php?id=100011224512736'},
{name:'LinkedIn',src:'https://www.linkedin.com/in/juncheng-zhou-620657149/'}

]

class MainContent extends React.Component{
  constructor(props){
    super(props);
    this.classes = props.classes;
  }
  
  render(){
    return(
      <React.Fragment>
        <Grid item xs={12} md={4}>
          <Paper elevation={0} className={this.classes.sidebarAboutBox}>
            <Typography variant="h6" gutterBottom>About</Typography>
            <Typography>I graduated from <Link href="https://www.telecom-paristech.fr/"><a>Telecom ParisTech</a></Link>. I focus on the Iot data mining, Machine Learning, BI etc.. I'm good at programming and analyze. During my education, I also learned Node.js and React.js when I was free.</Typography>
          </Paper>
          <Typography variant="h6" gutterBottom className={this.classes.sidebarSection}>Archives</Typography>
          {archives.map(archive => (
            <Typography key={archive}>{archive}</Typography>
          ))}
          <Typography variant="h6" gutterBottom className={this.classes.sidebarSection}>Social</Typography>
          {social.map(network => (
            <Typography key={network.name}><Link href={network.src}><a>{network.name}</a></Link></Typography>
          ))}
        </Grid>
    </React.Fragment>
    )
    
  }
}
export default withStyles(mainContentStyle)(MainContent)