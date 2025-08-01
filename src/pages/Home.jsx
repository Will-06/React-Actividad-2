import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
<section className="dark:bg-gray-100 dark:text-gray-800">
	<div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
		<h1 className="text-4xl font-bold leading-none sm:text-5xl">Bienvenido a la Tienda</h1>
		<p className="px-8 mt-8 mb-12 text-lg">Visita la sección de productos para ver lo que ofrecemos.</p>
		<div className="flex flex-wrap justify-center">
			<button className="px-8 py-3 m-2 text-lg border rounded dark:text-gray-900 dark:border-gray-300"><Link to="/productos" style={{ color: 'gray' }}>Productos</Link></button>
			
		</div>
	</div>
</section>
  )
}

export default Home