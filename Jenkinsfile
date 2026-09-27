pipeline {
  agent any

  tools {
    nodejs 'node'
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

    stage('Run pull request tests without credentials') {
      when {
        changeRequest()
      }
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

    stage('Run branch tests with credentials') {
      when {
        not {
          changeRequest()
        }
      }
      steps {
        withCredentials([
          usernamePassword(
            credentialsId: 'eventhub-e2e',
            usernameVariable: 'E2E_EMAIL',
            passwordVariable: 'E2E_PASSWORD'
          )
        ]) {
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
  }

  post {
    always {
      junit testResults: 'test-results/junit.xml', allowEmptyResults: true
      archiveArtifacts artifacts: 'reports/playwright/**, test-results/**', allowEmptyArchive: true
    }
  }
}