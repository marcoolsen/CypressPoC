import { defineConfig } from 'cypress'
import { beforeRunHook, afterRunHook } from 'cypress-mochawesome-reporter/lib'
import dotenv from 'dotenv'

dotenv.config()

export default defineConfig({
    video: false,
    screenshotOnRunFailure: true,
    reporter: 'cypress-mochawesome-reporter',
    viewportWidth: 1440,
    viewportHeight: 1024,
    chromeWebSecurity: false,
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
        baseUrl: 'https://www.saucedemo.com/',
        env: {
            urlAPI: 'https://demoqa.com/',
        },
        setupNodeEvents(on, config) {
            // implement node event listeners here
            require('cypress-mochawesome-reporter/plugin')(on)
            config.env.TEST_USER = process.env.TEST_USER
            config.env.TEST_PASS = process.env.TEST_PASS
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
