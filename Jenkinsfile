pipeline {
    agent any
    environment {
        HOME = '/var/lib/jenkins'
        PM2_HOME = '/var/lib/jenkins/.pm2'
        APP_NAME = 'nogiz-home'
        WORKSPACE_DIR = '/var/lib/jenkins/workspace/gurpyar'
    }
    stages {
        stage('Build and Deploy') {
            steps {
                dir("${env.WORKSPACE_DIR}") {
                }
            }
        }
    }
}
