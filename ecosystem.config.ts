module.exports = {
  apps: [
    {
      name: 'Prospero',
      script: './dist/main.js',
      autorestart: true, // Se configura para que se reinicie automáticamente en caso de error o cierre
      time: true, // Se configura para que muestre la hora en la que se reinicia
      env: {
        NODE_ENV: 'development',
      },
    },
  ],
};
