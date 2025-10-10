module.exports = {
    default: {
        paths: ['features/**/*.feature'],
        require: ['features/step_definitions/**/*.js', 'features/support/**/*.js'],
        format: ['@cucumber/pretty-formatter'],
        parallel: 2,
        publishQuiet: true,
        formatOptions: {
            snippetInterface: 'async-await'
        },
        timeout: 30000  // Aumentando el timeout a 30 segundos
    }
}