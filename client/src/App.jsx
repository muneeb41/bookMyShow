import Home from "./pages/Home"
import './App.css';
import { MyProvider } from "./context/MyContext"




function App() {
   

  /**
 * App Component
 * 
 * This component sets up the main application structure. It wraps the 
 * `Home` component with the `MyProvider` context provider to ensure that
 * context values are accessible throughout the component tree.
 */

  return (
      <MyProvider>
                     <Home/>     {/* this website contain only single page */}
      </MyProvider>
  )
}

export default App
