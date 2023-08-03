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
resource "azurerm_resource_group" "resource-group" {
  name     = "${var.resource_group_name}-resource-group"
  location = var.resource_group_location
}
resource "azurerm_storage_account" "storage" {
  name                     = "${var.storage_account_name}"
  resource_group_name      = azurerm_resource_group.resource-group.name
  location                 = var.resource_group_location
  account_tier             = "Standard"
  account_replication_type = "LRS"
}

/*resource "azurerm_storage_container" "scriptscontainer" {
  name                  = "files"
  storage_account_name  = azurerm_storage_account.storage.name
  container_access_type = "blob"
}*/