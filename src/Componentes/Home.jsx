import React from 'react'

function Home({ data }) {
    return (<>
        <div>Home</div>
        <form>
            <input type='number' id='id' placeholder='ID' />
            <br />
            <input id='Nombre' placeholder='Nombre' />
            <br />
            <input id='Apellido' placeholder='Apellido' />
            <br />
            <input type='number' id='edad' placeholder='Edad' />
            <br />
            <input type='mail' id='gmail' placeholder='alumno@gmail.com' />

        </form>
        <div>
            <ul>
                {data?.map((alumno) => {
                    return <>
                        <li>{alumno.name}</li>
                    </>
                })
                }
            </ul>
        </div>

    </>)
}

export default Home