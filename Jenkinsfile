pipeline {
  agent {
    docker {
      image 'node:alpine'
      args '-p 8020:80'
    }

  }
  stages {
    stage('Build') {
      steps {
        echo 'Starting stage build ...'
        sh 'npm config set unsafe-perm=true'
        sh 'npm install -g @angular/cli@latest'
        sh 'npm install'
        sh 'ng build --prod --base-href /recipes-ng/'
        echo 'Fin du build.'
      }
    }
    stage('Test') {
      steps {
        echo 'No tests for now.'
      }
    }
    stage('Deploy') {
      steps {
        echo 'No deployment for now.'
      }
    }
  }
}