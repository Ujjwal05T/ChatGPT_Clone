import './App.css'
import Home from './components/Home'
import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from '@/components/mode-toggle';

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className='text-end pr-4'>
      <ModeToggle />
      </div>
      
       <Home/>
    </ThemeProvider>
  )
}

export default App

