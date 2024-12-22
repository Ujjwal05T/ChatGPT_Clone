import './App.css'
import Home from './components/Home'
import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from '@/components/mode-toggle';

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className='text-end p-0 lg:fixed lg:top-0 lg:right-0 lg:p-6'>
      <ModeToggle />
      </div>
      
       <Home/>
    </ThemeProvider>
  )
}

export default App

