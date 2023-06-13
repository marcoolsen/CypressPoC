import { defineConfig } from 'cypress'
import { beforeRunHook, afterRunHook } from 'cypress-mochawesome-reporter/lib'

export default defineConfig({
    video: false,
    screenshotOnRunFailure: true,
    reporter: 'cypress-mochawesome-reporter',
    viewportWidth: 1440,
    viewportHeight: 1024,
    reporterOptions: {
        charts: true,
        overwrite: true,
        reportPageTitle: 'Cypress Tests Reporter',
        embeddedScreenshots: true,
        inlineAssets: true, //Adds the asserts inline
        reportDir: 'cypress/report',
        json: true,
        html: true,
        code: false,
        showSkipped: false,
        showPending: false,
    },
    e2e: {
        env: {
            urlAPI: 'https://demoqa.com/',
            urlWeb: 'https://www.latlong.net/',
            user: 'marcoolsen10@gmail.com',
            pass: 'MarcoTest',
        },
        setupNodeEvents(on, config) {
            // implement node event listeners here
            require('cypress-mochawesome-reporter/plugin')(on)
            on('before:run', async (details) => {
                console.log('override before:run')
                await beforeRunHook(details)
            })

            on('after:run', async () => {
                console.log('override after:run')
                await afterRunHook()
            })
            return config
        },
    },
})
