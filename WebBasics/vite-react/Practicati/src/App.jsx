import Header from "./components/Header"
import HelloWorldComp from "./compositions/HelloWorldComp"
import Form from "./components/Form"
import SignInForm from "./components/SignInForm"

function App() {

  return (
    <>
      <Header />
      <HelloWorldComp />
      {/* <Form></Form> */}
      <SignInForm></SignInForm>
    </>
  )
}

export default App
