import { useEffect, useContext } from 'react';
import './App.css';
import Home from './Componentes/Home';
import Alumnos from './Componentes/InfoAlumnos';
import Error from './Componentes/Error';
import { Routes, Route } from 'react-router-dom';
import { AlumnoCtx } from './context/AlumnoContext';

function App() {
	const { fetchData, alumnos } = useContext(AlumnoCtx);
	useEffect(() => {
		fetchData();
	}, []);

	return (
		<>
			<Routes>
				<Route path='/' element={<Home data={alumnos} />} />
				<Route path='/infoalumnos' element={<Alumnos data={alumnos} />} />
				<Route path='/Error' element={<Error />} />
			</Routes>
		</>
	);
}

export default App;
