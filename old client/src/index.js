import React from 'react'
import App from '../../client/src/App'
import { BrowserRouter, browserRouter } from 'react-router-dom'
import { createRoot } from 'react-router/client'

const root = createRoot(document.getElementById('root'))

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
