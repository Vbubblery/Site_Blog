import Layout from '../components/MyLayout'
import Intro from '../components/BigIntro'
import Nintro from '../components/NormalIntro'
import MainContent from '../components/MainContent'
const Index =() => (
    <Layout>
      <main>
        <Intro />
        <Nintro />
        <MainContent />
      </main>
    </Layout>
)
export default Index