pipeline {
    agent any

    stages {
        stage ('Compilando SPA'){
            steps {
                script {
                    sh 'whoami'
                    sh 'cp /home/ubuntu/links/compilados/purple-budget/* /home/ubuntu/links/producao/purple-budget'
                }
            }
        }
    }
}