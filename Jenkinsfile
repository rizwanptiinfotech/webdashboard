pipeline {
    agent any

    stages {
        stage('Build') {
            steps {                               
                
                bat "npm run build"
            }
        }
        stage('Test') {
            steps {
                echo 'Testing...'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}
