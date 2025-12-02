
import { AppProvider } from "./Context/AppProvider"
// import { UserProvider } from "./Context/UserContext"
import { AppRoutes } from "./routes/AppRoutes"


function App() {



  return (
    <>
      <AppProvider>
        <AppRoutes />
      </AppProvider>
    </>
  )
}

export default App
