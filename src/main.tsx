import ReactDOM from 'react-dom/client'
import App from './App'

const root = document.getElementById('root')! as HTMLElement;
const appRoot = ReactDOM.createRoot(root);

appRoot.render(<App />);
