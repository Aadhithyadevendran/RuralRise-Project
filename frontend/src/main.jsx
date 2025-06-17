import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom'
import { TemplateProvider } from './pages/ResumeBuilderPage/context/TemplateContext'; // ✅


const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
      <TemplateProvider> {/* ✅ Must be wrapped here */}
          <App />
        </TemplateProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>,
)
