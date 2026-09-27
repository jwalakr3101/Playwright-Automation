pipeline {
  agent any

  tools {
    nodejs 'Node20'
  }

  options {
    timestamps()
    timeout(time: 30, unit: 'MINUTES')
  }

  environment {
    CI = 'true'
    TEST_ENV = 'qa'
  }

  stages {
    stage('Install dependencies') {
      steps {
        script {
          if (isUnix()) {
            sh 'npm ci'
            sh 'npx playwright install chromium'
          } else {
            bat 'npm ci'
            bat 'npx playwright install chromium'
          }
        }
      }
    }

    stage('Run Playwright tests') {
      steps {
        script {
          if (isUnix()) {
            sh 'npm test'
          } else {
            bat 'npm test'
          }
        }
      }
    }
  }

  post {
    always {
      junit testResults: 'test-results/junit.xml', allowEmptyResults: true
      archiveArtifacts artifacts: 'reports/playwright/**, test-results/**', allowEmptyArchive: true
    }
  }
}