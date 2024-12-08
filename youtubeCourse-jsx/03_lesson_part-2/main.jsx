import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { store } from './app/store'
import { Provider } from 'react-redux'

import { fetchUsers } from './features/users/usersSlice';

import './index.css'
import App from './App.jsx'

store.dispatch(fetchUsers());

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
