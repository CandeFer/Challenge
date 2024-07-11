import ReactDOM from 'react-dom/client'
import App from './componentes/App'
import { InfoProvider } from './componentes/contexto/info'



ReactDOM.createRoot(document.getElementById('root')).render(
  <InfoProvider>
    <App />
  </InfoProvider>,
)
