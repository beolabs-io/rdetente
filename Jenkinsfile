pipeline {
  agent {
    docker {
      image 'node:alpine'
    }

  }
  stages {
    stage('Build') {
      steps {
        echo 'Starting Stage Build'
        sh '''npm install
npm run build'''
      }
    }
  }
}