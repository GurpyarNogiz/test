pipeline {

    
    agent any
    environment {
        HOME = '/var/lib/jenkins'
        PM2_HOME = '/var/lib/jenkins/.pm2'
        APP_NAME = 'nogiz-home'
        CUSTOM_WORKSPACE = "/var/lib/jenkins/workspace/gurpyar/${env.BRANCH_NAME}"
    }
    options {
        skipDefaultCheckout() // Skips default checkout to control workspace directory
    }
    stages {
        stage('Checkout') {
            steps {
                // Ensure code is checked out into the custom workspace directory
                dir("${env.CUSTOM_WORKSPACE}") {
                    checkout scm
                }
            }
        }
        stage('Build and Deploy') {
            steps {
                dir("${env.CUSTOM_WORKSPACE}") {
                }
            }
        }
    }
}
