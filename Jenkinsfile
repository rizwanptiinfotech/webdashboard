//Your site's directory defined in IIS on the target machine
String iisApplicationPath = "C:\\inetpub\\wwwroot\\webdashboard"
pipeline {
    agent any

    stages {
        stage('Build') {
            steps {     
                                          
                bat "npm install"
                bat "npm run build"
               
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                bat("xcopy $WORKSPACE\\build ${iisApplicationPath} /O /X /E /H /K /Y")
            }
        }
    }
}
