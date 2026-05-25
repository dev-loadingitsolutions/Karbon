
import { BrowserRouter } from 'react-router-dom'
import MainLayout from './layouts/MainLayouts'
import AppRoutes from './routes/index'

function App() {
  

  return (
    <>
      <BrowserRouter>
      <MainLayout>
        <AppRoutes />
      </MainLayout>
    </BrowserRouter>

     

    

     
    </>
  )
}

export default App
