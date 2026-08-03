pipeline {
    agent any

    tools {
        nodejs 'NodeJS'
    }

    environment {
        NETLIFY_AUTH_TOKEN = credentials('NETLIFY_AUTH_TOKEN')
        NETLIFY_SITE_ID = credentials('PORTFOLIO_WEBSITE')
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Build') {
            steps {
                bat 'npm run build'
            }
        }

        stage('Deploy to Netlify') {
            steps {
                bat '''
                npx netlify deploy ^
                --dir=dist ^
                --prod ^
                --site=%NETLIFY_SITE_ID% ^
                --auth=%NETLIFY_AUTH_TOKEN%
                '''
            }
        }
    }

    post {
        success {
            echo 'Build and Deployment Successful!'
        }

        failure {
            echo 'Build or Deployment Failed!'
        }

        always {
            cleanWs()
        }
    }
}
