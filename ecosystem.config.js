module.exports = {
  apps: [
    {
      name: 'Prospero',
      script: './dist/src/main.js',
      autorestart: true, // Se configura para que se reinicie automáticamente en caso de error o cierre
      time: true,
      env: {
        NODE_ENV: 'development',
      },
    },
  ],
};
