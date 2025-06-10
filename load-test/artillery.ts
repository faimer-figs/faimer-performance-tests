import {runDemoPatientsTest} from "./validate-demo-patients";
import {runSamplePatientsTest} from "./validate-sample-patients";
import {runSamplePatientsResultViewerTest} from "./validate-result-viewer";
import {runSamplePatientsVisitNoteTest} from "./validate-visit-notes";
import {O3_URL} from "../utils/configs/globalSetup";

export const config = {
    target: `${O3_URL}`,
    phases: [
        {
            duration: 300,
            arrivalCount: 30,
        }
    ],
    engines: {
        playwright: {
            launchOptions: {
                headless: true,
                viewport: {
                    width: 1920,
                    height: 1080
                },
                args: ['--start-fullscreen', '--start-maximized']
            },
            aggregateByName: true,
            extendedMetrics: true
        }
    },
};

export const scenarios = [
    {
        engine: 'playwright',
        name: 'Login OpenMRS and validate if Demo Patients are present',
        testFunction: runDemoPatientsTest,
    },
    {
        engine: 'playwright',
        name: 'Login OpenMRS and validate if all 5 Sample Patients are present',
        testFunction: runSamplePatientsTest,
    },
    {
        engine: 'playwright',
        name: 'Validate if Sample Patients contain results',
        testFunction: runSamplePatientsResultViewerTest,
    },
    {
        engine: 'playwright',
        name: 'Validate if Sample Patient Daniel Acosta has Visit Notes',
        testFunction: runSamplePatientsVisitNoteTest,
    }
];

