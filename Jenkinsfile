pipeline {
    agent any
    tools {nodejs "nodejs"}
    stages {
        stage('React Jenkinsfile') {
            steps {
                sh 'cd react'
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh 'npm run test'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
    }
}