pipeline {
    agent any

    stages {
        stage ('Compilando SPA'){
            steps {
                script {
                    sh 'pwd'
                    sh 'npm i'
                    sh 'ng build --base-href .'
                }
            }
        }
    }
}