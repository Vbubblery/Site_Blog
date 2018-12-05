import Layout from '../../components/MyLayout.js';
import Link from 'next/link';
import {Button} from '@material-ui/core/';

const About =() => (
  <Layout>
    <p>This is the about page</p>
    <Link href="/about/cv"><Button>curriculum vitae</Button></Link>
  </Layout>
)

export default About
