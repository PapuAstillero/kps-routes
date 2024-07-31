import React from 'react';

function Home({ data, helpers }) {
	const { nuevoAlumno, setNuevoAlumnno, handleSubmit, fetchData } = helpers;

	const handleClick = async (alumnoId) => {
		await fetch(`http://localhost:3000/students/${alumnoId}`, {
			method: 'DELETE',
		});
		fetchData();
	};

	return (
		<>
			<div>Home</div>
			<form onSubmit={handleSubmit}>
				<input
					onChange={(e) =>
						setNuevoAlumnno({ ...nuevoAlumno, id: e.target.value })
					}
					type='string'
					id='id'
					placeholder='ID'
				/>
				<br />
				<input
					onChange={(e) =>
						setNuevoAlumnno({ ...nuevoAlumno, name: e.target.value })
					}
					id='Nombre'
					placeholder='Nombre'
				/>
				<br />
				<input
					onChange={(e) =>
						setNuevoAlumnno({ ...nuevoAlumno, lastname: e.target.value })
					}
					id='Apellido'
					placeholder='Apellido'
				/>
				<br />
				<input
					onChange={(e) =>
						setNuevoAlumnno({ ...nuevoAlumno, age: e.target.value })
					}
					type='string'
					id='edad'
					placeholder='Edad'
				/>
				<br />
				<input
					onChange={(e) =>
						setNuevoAlumnno({ ...nuevoAlumno, email: e.target.value })
					}
					type='mail'
					id='gmail'
					placeholder='alumno@gmail.com'
				/>
				<button type='submit'>Agregar usuario</button>
			</form>
			<div>
				<ul>
					{data?.map((alumno) => {
						return (
							<div style={{ display: 'flex' }}>
								<li>{alumno.name}</li>
								<button onClick={() => handleClick(alumno.id)}>Borrar</button>
							</div>
						);
					})}
				</ul>
			</div>
		</>
	);
}

export default Home;
