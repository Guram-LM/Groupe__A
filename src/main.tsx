
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './My-App/store/store.ts'
import { ThemeProvider } from '@emotion/react'
import { theme } from './My-App/components/AppThema/AppThema.tsx'


createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <BrowserRouter>
         <App />
    </BrowserRouter>
  </Provider>
  
)
