pipeline {
    agent any

    stages {
        stage('Build') {
            steps {     
                                          
                bat "npm install"
                bat "npm run build"
                bat "node -v"
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}
