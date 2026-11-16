const express = require('express');
const app = express();
const PORT = 5000;

// Datos en memoria (o puedes usar tu propia base de datos)
const estudiantes = [
  { id: 1, nombre: 'Ana Gómez', carrera: 'Ingeniería de Software' },
  { id: 2, nombre: 'Carlos Pérez', carrera: 'Redes y Telecomunicaciones' },
  { id: 3, nombre: 'Lucía Fernández', carrera: 'Seguridad Informática' }
];

app.get('/estudiantes', (req, res) => {
  res.json(estudiantes);
});

app.listen(PORT, () => {
  console.log(`Microservicio estudiantes corriendo en el puerto ${PORT}`);
});