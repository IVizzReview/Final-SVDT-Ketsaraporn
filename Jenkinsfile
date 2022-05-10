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
                bat "docker run -d -p 50000:50000"
                bat "docker-compose up -d"
            }
        }
    }
}