pipeline {
    agent any
    tools {nodejs "nodejs"}
    stages {
        stage('Install react Dependencies') {
            steps {
                dir ('react') {
                    sh 'npm install'
                }
            }
        }
        stage('Test react') {
            steps {
                dir ('react') {
                    sh 'npm run test'
                }
            }
        }
        stage('Install vanillaJs Dependencies') {
            steps {
                dir ('vanillaJs') {
                    sh 'npm install'
                }
            }
        }
        stage('Test vanillaJs') {
            steps {
                dir ('vanillaJs') {
                    sh 'npm run test'
                }
            }
        }
    }
}