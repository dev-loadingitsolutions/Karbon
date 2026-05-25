import { useLocation } from 'react-router-dom'
import BottomNav from '../components/BottomNav'
import Header from '../components/Header'


export default function MainLayout({ children }) {
  const { pathname } = useLocation()
  const hidePaths = ['/filter', '/gymDetails', '/classDetails']
  const hideChrome = hidePaths.includes(pathname)

  return (
    <div className="max-w-md mx-auto min-h-screen flex flex-col bg-gray-50">
      {!hideChrome && <Header location="Amman, Jordan" />}
      <main className={`flex-1 overflow-y-auto ${hideChrome ? 'pb-0' : 'pb-20'}`}>
        {children}
      </main>
      {!hideChrome && <BottomNav />}

    </div>
  )
}