terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "3.54.0"
    }
  }
  required_version = ">= 0.14.9"
}

provider "azurerm" {
  features {}
  subscription_id = var.subscription_id
}
resource "azurerm_storage_container" "scriptscontainer" {
  name                  = "files"
  storage_account_name  = var.storage_account_name
  container_access_type = "blob"
}