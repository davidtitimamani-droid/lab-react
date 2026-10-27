import Cards from './Cards.jsx';
import { useState } from "react";

const Listas = () => {
    const musicas = [
        {id: 1, nombre: "NEFFEX - Chance", imagen: 'neffex.png'},
        {id: 2, nombre: "Reik - Qué Gano Olvidandote", imagen: 'reik.png'},
        {id: 3, nombre: "Robleis - Como un Fugitivo", imagen: 'robleis.png'},
    ];

    const [total, setTotal] = useState(0);
    const [busqueda, setBusqueda] = useState("");
    const musicasFiltradas = musicas.filter((musica) => 
        musica.nombre.toLowerCase().includes(busqueda.toLowerCase()),
    );
    return (
        <div style = {{
            padding: '10px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            <h1>Total de likes de musicas: {total}</h1>

            <input 
                style={{
                    padding: '10px', 
                    marginBottom: '10px', 
                    width: '300px', 
                    border: '1px solid #ccc', 
                    borderRadius: '5px'
                }} 
                type="text" 
                placeholder = "Ingrese nombre de una musica"
                value = {busqueda}
                onChange = {(e)=>{
                    setBusqueda(e.target.value)
                }}
            />

            <div style = {{display: 'flex', gap: '10px'}}>

                {musicasFiltradas.length === 0 && (
                    <p style = {{color: "#ccc", fontSize: "20px"}}>
                        No se encontraron musicas con el nombre "{busqueda}"
                    </p>
                )}

                {musicasFiltradas.map((musica) => {
                    return (
                        <Cards 
                            key = {musica.id} 
                            nombre = {musica.nombre} 
                            img = {musica.imagen}
                            onLike = {() => {
                                console.log('like en el padre')
                                setTotal(total+1);
                            }}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Listas
