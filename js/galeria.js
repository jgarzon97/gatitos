const gatitos = [
    { nombre: 'Milo', descripcion: 'Milo es un gatito juguetón de 6 meses que ama las siestas y los ovillos de lana.', imagen: '/img/milo.jpg' },
    { nombre: 'Luna', descripcion: 'Luna es una gatita amorosa de 4 meses, siempre buscando una nueva aventura.', imagen: '/img/luna.jpg' },
    { nombre: 'Chunchun', descripcion: 'Chunchun es un gato curioso de 1 año que le encanta explorar cada rincón.', imagen: '/img/chunchun.jpg' }
];

const galeria = document.getElementById('galeria-gatitos');

gatitos.forEach(gato => {
    const tarjeta = document.createElement('div');
    tarjeta.classList.add('bg-white', 'rounded-lg', 'shadow-lg', 'overflow-hidden');
    tarjeta.innerHTML = `
        <img src="${gato.imagen}" alt="${gato.nombre}" class="w-full h-56 object-cover">
        <div class="p-6">
            <h3 class="text-xl font-semibold text-gray-800">${gato.nombre}</h3>
            <p class="text-gray-600 mt-2">${gato.descripcion}</p>
            <a href="/components/adopcion.html" class="mt-4 inline-block text-indigo-600 hover:text-indigo-800">Más información &rarr;</a>
        </div>
    `;
    galeria.appendChild(tarjeta);
});
