
import { UserProvider } from "./Context/UserContext"
import { AppRoutes } from "./routes/AppRoutes"


function App() {



  return (
    <>
      <UserProvider>
        <AppRoutes />
      </UserProvider>
    </>
  )
}

export default App
