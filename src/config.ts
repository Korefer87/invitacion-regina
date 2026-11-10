// Datos de la invitación. Edita este archivo para cambiar la información.

export const EVENTO = {
  nombreCorto: 'Gloria',
  nombreCompleto: 'Gloria Regina Ramos Fernández',
  padres: ['Daisy Fernández Reyes', 'Fabricio Ramos Ponce'],

  // Fecha y hora de inicio (hora del centro de México)
  fechaISO: '2027-05-22T18:00:00-06:00',
  fechaTexto: 'Sábado 22 de mayo de 2027',

  misa: {
    hora: '18:00',
    lugar: 'Templo',
    direccion: 'Calle Hidalgo 177, Col. Centro, Tepatitlán de Morelos, Jal.',
    mapa: 'https://www.google.com/maps/search/?api=1&query=Calle+Hidalgo+177%2C+Centro%2C+47600+Tepatitl%C3%A1n+de+Morelos%2C+Jalisco%2C+M%C3%A9xico',
  },

  fiesta: {
    hora: '20:00',
    lugar: 'Casa Amada',
    direccion: 'Carretera Tepatitlán – Yahualica Km 1.9',
    mapa: 'https://www.google.com/maps/search/?api=1&query=Casa+Amada+Carretera+Tepatitl%C3%A1n+Yahualica+Km+1.9',
  },

  vestimenta: [
    { nombre: 'Gris', color: '#9AA3AD', texto: '#0A1626' },
    { nombre: 'Azul marino', color: '#1F2F4F', texto: '#FFFFFF' },
    { nombre: 'Rosa bajito', color: '#F2CFD6', texto: '#0A1626' },
  ],

  // Número de WhatsApp que recibe las confirmaciones, con lada de país y sin espacios.
  // Ejemplo: '5213312345678'. Si se deja vacío, WhatsApp pedirá elegir el contacto.
  whatsapp: '',

  // Imagen que aparece al compartir el enlace (WhatsApp, redes)
  imagenCompartir: '/hero.webp',
};
