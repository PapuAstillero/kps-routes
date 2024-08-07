import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { AlumnosProvider } from './context/AlumnoContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<AlumnosProvider>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</AlumnosProvider>
	</React.StrictMode>
);
