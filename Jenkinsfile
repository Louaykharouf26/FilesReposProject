pipeline{
    agent any
    stages{
        stage("getting code") {
            steps {
                git url: 'https://github.com/Louaykharouf26/FilesReposProject.git', branch: 'master',
                credentialsId: 'github-credentials' //jenkins-github-creds
                sh "ls -ltr"
            }
        }

       stage("Setting up infra") {
            steps {                
                script {
                    echo "======== executing ========"
                        sh "pwd"
                        sh "ls"
                        echo "terraform init"
                        sh "terraform init"
                        sh "terraform apply --auto-approve --var-fime"     
                       }            
                        }
                    } 
        /*stage("Ansible configruation") {
            steps {                
                script {
                    echo "======== executing ========"
                        dir ("ansible"){
                        sh "pwd"
                        sh "ls"
                        echo "update hosts"
                        sh "ansible-playbook update-hosts.yml"
                        echo "install dependencies "
                        sh "ansible-playbook -i hosts config-playbook.yml"
                        echo "configure the environement for the web app "
                        sh "ansible-playbook -i hosts web-app-config.yml"     
                       }    }        
                        }
                    }              
                }*/
            post{
                success{
                    echo "======== Storage account created Successfully ========"
                }
                failure{
                    echo "======== Storage account creation failed ========"
                }
            }
             
        }   }     
   /* 
    post{
        success{
            echo "========pipeline executed successfully ========"
        }
        failure{
            echo "========pipeline execution failed========"
        }
    }*/