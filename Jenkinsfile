pipeline {
    agent any

    stages {
        stage ('Preparando compilação'){
            steps {
                script {
                    sh 'sudo npm i'
                }
            }
        }
        stage ('Compilando SPA'){
            steps {
                script {
                    sh 'sudo ng build --base-href .'
                }
            }
        }
        stage ('Publicando projeto'){
            steps {
                script {
                    sh 'cp /home/ubuntu/links/compilados/purple-budget/* /home/ubuntu/links/producao/purple-budget'
                }
            }
        }
    }
}