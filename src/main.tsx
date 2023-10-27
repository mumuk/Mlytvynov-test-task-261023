import ReactDOM from 'react-dom/client'
import App from './App'

const root = document.getElementById('root')
if (root == null) throw new Error('root element not found')
const appRoot = ReactDOM.createRoot(root)

appRoot.render(<App/>)
