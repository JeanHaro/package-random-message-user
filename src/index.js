// Arreglo de Strings
const messages = [
    'Jean',
    'Katita',
    'Carlos',
    'Paulo',
    'Ana',
    'Nicolay',
    'Diego',
    'Pablo'
];

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
}

module.exports = { randomMsg };