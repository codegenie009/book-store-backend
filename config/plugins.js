module.exports = ({ env }) => ({
    scheduler: {
        enabled: true,
        config: {
            model: "scheduler",
        },
    },
    'fluentc': {
        enabled: true,
        resolve: './src/plugins/fluentc'
    },
});