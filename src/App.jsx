import { useEffect, useState } from 'react';
import './App.css';
import Home from './Componentes/Home';
import Alumnos from './Componentes/InfoAlumnos';
import Error from './Componentes/Error';
import { Routes, Route } from 'react-router-dom';

function App() {
	const [alumnos, setAlumnos] = useState();
	const [nuevoAlumno, setNuevoAlumnno] = useState({
		id: 0,
		name: '',
		lastName: '',
		age: 0,
		email: '',
	});

	const handleSubmit = () => {
		fetch('http://localhost:3000/students', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(nuevoAlumno),
		});
	};

	const fetchData = () => {
		fetch('http://localhost:3000/students')
			.then((res) => res.json())
			.then((data) => setAlumnos(data));
	};

	const helpers = { nuevoAlumno, setNuevoAlumnno, handleSubmit, fetchData };

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<>
			<Routes>
				<Route path='/' element={<Home data={alumnos} helpers={helpers} />} />
				<Route path='/infoalumnos' element={<Alumnos data={alumnos} />} />
				<Route path='/Error' element={<Error />} />
			</Routes>
		</>
	);
}

export default App;
