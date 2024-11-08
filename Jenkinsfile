pipeline {
    agent any
    
    environment {
        ORGANISATION_NAME = 'gurpyar'  // Replace with your organization name
        REPO_NAME = 'repo1'                          // Replace with your repository name
        BRANCH_NAME = 'main_dev_branch'               // Replace with your desired branch name
    }

    stages {
        stage('Set Workspace') {
            steps {
                script {
                    // Set the workspace path based on the organisation, repository, and branch
                    def workspacePath = "workspace/${env.ORGANISATION_NAME}/${env.REPO_NAME}/${env.BRANCH_NAME}"
                    echo "Setting workspace to: ${workspacePath}"
                    // Override the workspace directory
                    currentBuild.workspace = workspacePath
                }
            }
        }

        stage('Hello') {
            steps {
                echo 'Hello, World!'
            }
        }
    }
}
