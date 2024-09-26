import './index.css'
import { TooltipProvider } from '@/components/ui/tooltip'
import { ErrorBoundary } from 'react-error-boundary'
import AppRouter from './routes'
import AppErrorPage from '@/components/errors/AppErrorPage'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <ErrorBoundary FallbackComponent={AppErrorPage}>
      <TooltipProvider>
        <Toaster />
        <AppRouter />
      </TooltipProvider>
    </ErrorBoundary>
  )
}

export default App
