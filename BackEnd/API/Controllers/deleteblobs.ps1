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
$blobName=$params.blobName
$path=Join-Path $Blob1FilePath $filename

$storageAccount = Get-AzStorageAccount -ResourceGroupName $resource_group_name -Name $storage_account_name
$storageAccountKey = (Get-AzStorageAccountKey -ResourceGroupName $resource_group_name -Name $storage_account_name).Value[0]
$context = New-AzStorageContext -StorageAccountName $storage_account_name -StorageAccountKey $storageAccountKey
Remove-AzStorageBlob -Container $container_name -Blob $blobName -Context $context
