import Header from "./components/Header"
import HelloWorldComp from "./compositions/HelloWorldComp"
import Form from "./components/Form"
import SignInForm from "./components/SignInForm"
import ToDoList from "./components/ToDoList"

function App() {

  return (
    <>
      <Header />
      <HelloWorldComp />
      {/* <Form></Form> */}
      {/* <SignInForm></SignInForm> */}
      <ToDoList></ToDoList>
    </>
  )
}

export default App
