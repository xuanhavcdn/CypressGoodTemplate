import { defineConfig } from 'cypress'
import * as dotenv from 'dotenv'
import * as path from 'path'
import * as fs from 'fs'

const environment = process.env.CYPRESS_ENV || 'staging'
const envFilePath = path.resolve(__dirname, `./.env.${environment}`)

const result = dotenv.config({ path: envFilePath })
const env = result.error ? {} : result.parsed

export default defineConfig({
  projectId: "erg8ch",
  reporter: 'cypress-mochawesome-reporter',
  video: true,
  trashAssetsBeforeRuns: true,
  e2e: {
    setupNodeEvents(on, config) {
      config.env = env
      require('cypress-mochawesome-reporter/plugin')(on)
      return config
    },
    retries: {
      runMode: 2,
      openMode: 0
    },
    screenshotsFolder: "cypress/reports/screenshots",
    videosFolder: "cypress/reports/videos",
    baseUrl: env.BASE_URL,
    defaultCommandTimeout: parseInt(env.DEFAULT_COMMAND_TIMEOUT),
    requestTimeout: parseInt(env.DEFAULT_REQUEST_TIMEOUT),
    experimentalMemoryManagement: true,
    numTestsKeptInMemory: 0,
  },
  viewportWidth: 1440,
  viewportHeight: 900,
})
