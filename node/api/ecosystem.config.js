module.exports = {
  apps: [
    {
      name: 'api-riograndense',
      script: './build/index.js',
      env: { 
        NODE_ENV: 'production',
      },
    },
  ],
};