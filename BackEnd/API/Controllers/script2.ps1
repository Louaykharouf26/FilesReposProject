# Read parameters from the JSON file

$paramsFilePath = "./Terraform/terraform.tfvars.json"  # Replace with the actual path of your JSON file
$params = Get-Content -Raw -Path $paramsFilePath | ConvertFrom-Json

$resource_group_location = $params.resource_group_location
$resource_group_name = $params.resource_group_name + "-resource-group"
$storage_account_name = $params.storage_account_name
$container_name = $params.container_name
$Blob1Name = $params.Blob1Name
$Blob1FilePath = $params.Blob1FilePath
$filename=$params.filename
$path=Join-Path $Blob1FilePath $filename

$storageAccount = Get-AzStorageAccount -ResourceGroupName $resource_group_name -Name $storage_account_name
$storageAccountKey = (Get-AzStorageAccountKey -ResourceGroupName $resource_group_name -Name $storage_account_name).Value[0]
$context = New-AzStorageContext -StorageAccountName $storage_account_name -StorageAccountKey $storageAccountKey

# Upload the first file to the default account (inferred) access tier
$Blob1HT = @{
    File             = $path
    Container        = $container_name
    Blob             = $Blob1Name
    Context          = $Context
    StandardBlobTier = 'Hot'
}
Set-AzStorageBlobContent @Blob1HT

# Upload the second file to the Cool access tier
#$Blob2HT = @{
 #   File             = $Blob2FilePath
 #   Container        = $ContainerName
  #  Blob             = $Blob2Name
   # Context          = $Context
    #StandardBlobTier = 'Cool'
#}
#Set-AzStorageBlobContent @Blob2HT

# Upload the third file to a folder in the Archive access tier
#$Blob3HT = @{
  #  File             = $Blob3FilePath
   # Container        = $ContainerName
    #Blob             = $Blob3Name
    #Context          = $Context
     #StandardBlobTier = 'Archive'
#}
#Set-AzStorageBlobContent @Blob3HT
