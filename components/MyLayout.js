import Header from './Header';
import Footer from './Footer';
import mainStyle from '../styles/mainStyle';
import { withStyles } from '@material-ui/core/styles';

const Layout = (props) => (
  <React.Fragment>
    <Header />
    <div className={props.classes.layout}>
      {props.children}
    </div>
    <Footer copyright={'Bubble'} />
  </React.Fragment>
)

export default withStyles(mainStyle)(Layout)
