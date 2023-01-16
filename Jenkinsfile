pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
               echo 'Build..'
                sh "sudo npm run build"
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
