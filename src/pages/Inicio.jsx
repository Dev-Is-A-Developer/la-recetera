/**
 * Inicio
 *
 * Descripcion:
 * Este componente representa la página principal de la aplicación con una introducción, una galería de imágenes,
 * y una sección con las últimas recetas disponibles en el sistema.
 *
 * Estructura:
 * - Importaciones
 * - Estado y efectos
 * - Secciones principales:
 *   - Introducción: Información sobre la plataforma y enlace para explorar recetas.
 *   - Galería de imágenes: Una colección de imágenes destacadas.
 *   - Últimas recetas: Muestra las recetas recientes obtenidas desde la API.
 */

import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Inicio.css";
import imagenIntro from "../assets/inicio-intro.webp";
import gallery1 from "../assets/horizontal-1.webp";
import gallery2 from "../assets/horizontal-2.webp";
import gallery3 from "../assets/horizontal-3.webp";
import gallery4 from "../assets/horizontal-4.webp";
import gallery5 from "../assets/horizontal-5.webp";
import gallery6 from "../assets/horizontal-6.webp";
import gallery7 from "../assets/horizontal-7.webp";
import gallery8 from "../assets/horizontal-8.webp";
import gallery9 from "../assets/horizontal-9.webp";
import gallery10 from "../assets/horizontal-10.webp";
import gallery11 from "../assets/horizontal-11.webp";
import gallery12 from "../assets/horizontal-12.webp";
import gallery13 from "../assets/horizontal-13.webp";
import gallery14 from "../assets/horizontal-14.webp";
import gallery15 from "../assets/horizontal-15.webp";
import gallery16 from "../assets/horizontal-16.webp";
import gallery17 from "../assets/horizontal-17.webp";
import gallery18 from "../assets/horizontal-18.webp";
import gallery19 from "../assets/horizontal-19.webp";
import gallery20 from "../assets/horizontal-20.webp";
import gallery21 from "../assets/horizontal-21.webp";
import gallery22 from "../assets/horizontal-22.webp";
import gallery23 from "../assets/horizontal-23.webp";
import gallery24 from "../assets/horizontal-24.webp";

function Inicio() {
	// Estado para manejar las últimas recetas
	const [nuevasRecetas, setNuevasRecetas] = useState([]);

	// URL base de la API importada desde las variables de entorno
	let { VITE_URL_RECETAS } = import.meta.env;

	// Hook useEffect para cargar las ultimas recetas
	useEffect(() => {
		axios
			.get(VITE_URL_RECETAS)
			.then((response) => {
				setNuevasRecetas(response.data || []); // Guardar recetas o un array vacío si no hay datos
			})
			.catch((err) => {
				console.error("Error en la consulta:", err);
			});
	}, []);

	// Manejo de estado inicial mientras se cargan las recetas
	if (nuevasRecetas == []) {
		return <p>Cargando...</p>;
	}

	// Lista de imágenes para la galería
	const imagenesGaleria = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7, gallery8, gallery9, gallery10, gallery11, gallery12, gallery13, gallery14, gallery15, gallery16, gallery17, gallery18, gallery19, gallery20, gallery21, gallery22, gallery23, gallery24];

	return (
		<div className="inicio">
			{/* Sección de introducción */}
			<section className="inicio__intro">
				<div className="intro__contenedor">
					<div className="intro__sobre">
						<h1 className="intro__title">La Recetera te invita a la mesa para probar lo mejor de vuestras cocinas.</h1>

						<h2 className="intro__descripcion">Somos el hogar digital de tus recetas favoritas. Descubre recetas únicas, sube las tuyas y vuelve a tus favoritas. Además, cada receta se hace en 1 hora o menos! La Recetera es tu espacio para conectar con el mundo a través de la comida.</h2>

						<Link
							to={"/categorias"}
							className="intro__linkCategorias"
							title="Categorias"
							onClick={() => {
								window.scroll(0, 0);
							}}
						>
							Explorar Recetas
						</Link>
					</div>

					<img src={imagenIntro} alt="Imagen comida" className="intro__imagen" />
				</div>
			</section>

			{/* Sección de galería */}
			<div className="inicio__galeria">
				<div className="galeria__contenedor">
					{imagenesGaleria.map((imagen, index) => (
						<div className="galeria__elemento" key={index}>
							<img src={imagen} alt={`Gallery ${index + 1}`} className="galeria__imagen" />
						</div>
					))}
				</div>
			</div>

			{/* Sección de últimas recetas */}
			<section className="inicio__ultimasRecetas">
				<h2>¿Tienes hambre? Disfrúta de una de nuestras últimas recetas:</h2>

				{/* Cards de las últimas recetas */}
				<div className="ultimasRecetas__cards">
					{nuevasRecetas.map((receta) => (
						<div key={receta.id_receta} className="ultimasRecetas__card">
							<h2 className="ultimasRecetas__titulo">{receta.titulo}</h2>
							<h3 className="ultimasRecetas__tipo">{receta.tipo}</h3>
							<h3 className="ultimasRecetas__entrada">Tiempo de preparación: </h3>
							<p className="ultimasRecetas__ingredientes">{receta.tiempo} minutos</p>
							<h3 className="ultimasRecetas__entrada">Descripción: </h3>
							<p className="ultimasRecetas__descripcion">{receta.descripcion}</p>
							<h3 className="ultimasRecetas__entrada">Ingredientes: </h3>
							<p className="ultimasRecetas__ingredientes">{receta.ingredientes}</p>
							<h3 className="ultimasRecetas__entrada">Instrucciones: </h3>
							<p className="ultimasRecetas__instrucciones">{receta.instrucciones}</p>
							<h4 className="ultimasRecetas__entrada">
								Escrito por: <span className="ultimasRecetas__escritor">{receta.escritor}</span>
							</h4>
						</div>
					))}
				</div>
			</section>
		</div>
	);
}

export default Inicio;
