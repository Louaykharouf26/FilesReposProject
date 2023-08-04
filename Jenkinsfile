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
        dir('BackEnd/API/Terraform') {
            sh "terraform init"
            sh "terraform apply --auto-approve --var-file=/var/jenkins_home/workspace/FilesRepoPipeline/BackEnd/API/Terraform/terraform.tfvars.json"
       // sh "terraform import azurerm_storage_container.scriptscontainer /subscriptions/\$(terraform output subscription_id)/resourceGroups/\$(terraform output resource_group_name)/providers/Microsoft.Storage/storageAccounts/\$(terraform output storage_account_name)/blobServices/default/containers/\$(terraform output container_name)"

        //sh "terraform apply --auto-approve --var-file=/var/jenkins_home/workspace/FilesRepoPipeline/BackEnd/Terraform/Container/terraform.tfvars.json "
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
