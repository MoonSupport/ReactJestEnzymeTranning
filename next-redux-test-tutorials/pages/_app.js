import Header from "../components/header"
import Headline from "../components/headline"

const App = ({ Component }) => {
  return (
    <div>
      <div>
        <Header />
        <section className="main">
          <Headline header="Post" description="Click the button to render posts" />
        </section>
      </div>
      <div>
        <Component />
      </div>
    </div>
  )
}

export default App
