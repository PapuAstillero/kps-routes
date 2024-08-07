import { useState, createContext } from 'react';
import { STUDENTS_URL } from '../utils/constants';
export const AlumnoCtx = createContext();

export const AlumnosProvider = ({ children }) => {
	const [alumnos, setAlumnos] = useState();
	const [nuevoAlumno, setNuevoAlumnno] = useState({
		id: 0,
		name: '',
		lastName: '',
		age: 0,
		email: '',
	});

	const handleSubmit = () => {
		fetch(STUDENTS_URL, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(nuevoAlumno),
		});
	};

	const fetchData = () => {
		fetch(STUDENTS_URL)
			.then((res) => res.json())
			.then((data) => setAlumnos(data));
	};

	const handleClick = async (alumnoId) => {
		await fetch(`${STUDENTS_URL}/${alumnoId}`, {
			method: 'DELETE',
		});
		fetchData();
	};

	const data = {
		nuevoAlumno,
		setNuevoAlumnno,
		handleSubmit,
		fetchData,
		alumnos,
		handleClick,
	};
	console.log('Contexto', data);

	return <AlumnoCtx.Provider value={data}>{children}</AlumnoCtx.Provider>;
};
