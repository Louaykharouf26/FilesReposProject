pipeline {
    agent any

    stages {
        stage("Getting code") {
            steps {
                git(
                    url: 'https://github.com/Louaykharouf26/FilesReposProject.git',
                    branch: 'master',
                    credentialsId: 'github-credentials'
                )
                sh "ls -ltr"
            }
        }
      /*stage("azure") {
    steps {
        echo "======== Executing ========"
        sh "pwd"
        sh "ls"
        sh "az login"
    }
}*/
       stage("Setting up infra") {
    steps {
        echo "======== Executing ========"
        sh "pwd"
        sh "ls"
        dir('BackEnd/Terraform') {
            sh "terraform init"
            //sh "terraform apply --auto-approve --var-file=/var/jenkins_home/workspace/FilesRepoPipeline/BackEnd/Terraform/terraform.tfvars.json"
        sh "terraform apply --auto-approve --var-file=/var/jenkins_home/workspace/FilesRepoPipeline/BackEnd/Terraform/terraform.tfvars.json terraform-container.tf"
        }
    }
}


        /*
        stage("Ansible configuration") {
            steps {
                echo "======== Executing ========"
                dir("ansible") {
                    sh "pwd"
                    sh "ls"
                    sh "ansible-playbook update-hosts.yml"
                    sh "ansible-playbook -i hosts config-playbook.yml"
                    sh "ansible-playbook -i hosts web-app-config.yml"
                }
            }
        }
        */

       
    }
     post {
            success {
                echo "======== Storage account created successfully ========"
            }
            failure {
                echo "======== Storage account creation failed ========"
            }
        }
    /*
    post {
        success {
            echo "======== Pipeline executed successfully ========"
        }
        failure {
            echo "======== Pipeline execution failed ========"
        }
    }
    */
}
