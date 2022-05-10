pipeline {
    agent any

    stages {
        stage('Pull Code') {
            steps {
                cleanWs()
                git branch: 'main', url: 'https://github.com/IVizzReview/Final-SVDT-Ketsaraporn'
            }
        }
        stage('Docker build & deploy with docker-compose'){
            steps{
                bat "docker-compose up --build"
            }
        }
    }
}