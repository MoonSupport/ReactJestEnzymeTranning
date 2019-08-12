import Header from "../components/header"
import Headline from "../components/headline"

const App = ({ Component }) => {
  const dummy = [
    { fName: "김", lName: "첨지", age: 24, onlineStatus: true },
    { fName: "지", lName: "점토", age: 28, onlineStatus: false }
  ]

  return (
    <div>
      <div>
        <Header />
        <section className="main">
          <Headline user={dummy} header="Header" description="Click the button to render posts" />
        </section>
      </div>
      <div>
        <Component />
      </div>
    </div>
  )
}

export default App
