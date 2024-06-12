/* eslint-disable @typescript-eslint/no-var-requires */
const sonarqubeScannerShared = require('sonarqube-scanner').default

sonarqubeScannerShared(
    {
        serverUrl: '#{sonarQubeServerUrl}#',
        token: '#{sonarQubeToken}#',
        options: {
            'sonar.projectName': '#{sonarQubeProjectName}#',
            'sonar.projectKey': '#{sonarQubeProjectKey}#',
            'sonar.projectVersion': '#{sonarQubeProjectVersion}#',
            'sonar.sources': './src',
            'sonar.exclusions': '**/*.test.*,**/__snapshots__/**,**/sonar.ts',
            // "sonar.tests": "./src",
            // "sonar.test.inclusions": "./src/**/*.test.tsx",
            // "sonar.typescript.lcov.reportPaths": "coverage/lcov.info",
            // "sonar.testExecutionReportPaths": "reports/test-report.xml",
        },
    },
    () => process.exit(),
)
