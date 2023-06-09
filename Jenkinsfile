pipeline {
    agent any
    environment {
        DOCKERHUB_CREDENTIALS = credentials('docker-hub')
    }
    stages {
       
        stage('clone'){
            steps  {
              checkout scm
            }
        }

       
        stage('Build docker image'){
            steps{
                sh 'docker build -t jwt_node . '
                
            }
        }

        // stage('Docker login'){
        //     steps{
        //         sh ' echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
                
        //     }
        // }

        // stage('Docker push'){
        //      steps {
        //         withDockerRegistry([credentialsId: "docker-hub", url: "https://index.docker.io/v1/"]) {
        //             sh 'docker tag node_test hathanhhai/node_test:v1'
        //             sh "docker push hathanhhai/node_test:v1"
        //         }
        //     }
        // }




        stage('Deploy to remote docker host') {
            steps {
                
                script {
                    // sh 'docker pull hathanhhai/node_test:v1'
                    sh 'docker stop jwt_node || true'
                    sh 'docker rm jwt_node || true'
                    sh 'docker rmi -f hathanhhai/jwt_node:v1'
                    sh 'docker run -d -p 3030:3030 --name jwt_node jwt_node  '
                }
            }
        }

        
    }
  
}