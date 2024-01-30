module.exports = {
    apps: [
        {
            name: 'bivab_yashila',
            script: 'npm',
            args: 'start',
            instances: 1,
            autorestart: true,
            watch: false,
            max_memory_restart: '1G',
            env: {
                NODE_ENV: 'development',
                PORT: 2004,
            },
            env_production: {
                NODE_ENV: 'production',
                PORT: 2004,
            },
        },
    ],
};




