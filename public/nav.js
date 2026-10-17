const enlaces = [
  { texto: 'Inicio', ruta: '/' },
  { texto: 'Mi niñes', ruta: '/niñes' },
  { texto: 'Mi juventud', ruta: '/juventud' },
  { texto: 'Mi actualidad', ruta: '/actualidad' },
  { texto: 'Mi futuro', ruta: '/futuro' }
];

const nav = document.createElement('nav');
nav.className = 'navbar';

enlaces.forEach(({ texto, ruta }) => {
  const a = document.createElement('a');
  a.href = ruta;
  a.textContent = texto;
  if (location.pathname === ruta) a.classList.add('activo');
  nav.appendChild(a);
});

document.body.prepend(nav); 