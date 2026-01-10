import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import CardList from './CardList.jsx';
import 'tachyons'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CardList />
  </StrictMode>,
)
