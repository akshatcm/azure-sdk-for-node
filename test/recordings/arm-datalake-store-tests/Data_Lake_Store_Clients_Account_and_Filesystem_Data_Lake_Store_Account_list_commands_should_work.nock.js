// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'East US 2';
  process.env['AZURE_TEST_RESOURCE_GROUP'] = 'xplattestadlarg05';
  process.env['AZURE_SUBSCRIPTION_ID'] = '53d9063d-87ae-4ea8-be90-3686c3b8669f';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/providers/Microsoft.DataLakeStore/accounts?api-version=2015-10-01-preview')
  .reply(200, "{\"value\":[{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"javaadlsacct2163.azuredatalakestore.net\",\"creationTime\":\"2016-03-11T03:22:26.2833263Z\",\"lastModifiedTime\":\"2016-03-11T03:22:26.2833263Z\"},\"location\":\"eastus2\",\"tags\":null,\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/javaadlarg610/providers/Microsoft.DataLakeStore/accounts/javaadlsacct2163\",\"name\":\"javaadlsacct2163\",\"type\":\"Microsoft.DataLakeStore/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"javaadlsacct4.azuredatalakestore.net\",\"creationTime\":\"2016-03-11T03:21:41.617856Z\",\"lastModifiedTime\":\"2016-03-11T03:21:41.617856Z\"},\"location\":\"eastus2\",\"tags\":null,\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/javaadlarg610/providers/Microsoft.DataLakeStore/accounts/javaadlsacct4\",\"name\":\"javaadlsacct4\",\"type\":\"Microsoft.DataLakeStore/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"javaadlsacct2183.azuredatalakestore.net\",\"creationTime\":\"2016-03-11T19:02:42.2281794Z\",\"lastModifiedTime\":\"2016-03-11T19:02:42.2281794Z\"},\"location\":\"eastus2\",\"tags\":null,\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/javaadlarg80/providers/Microsoft.DataLakeStore/accounts/javaadlsacct2183\",\"name\":\"javaadlsacct2183\",\"type\":\"Microsoft.DataLakeStore/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"javaadlsacct235.azuredatalakestore.net\",\"creationTime\":\"2016-03-11T19:01:57.6286994Z\",\"lastModifiedTime\":\"2016-03-11T19:01:57.6286994Z\"},\"location\":\"eastus2\",\"tags\":null,\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/javaadlarg80/providers/Microsoft.DataLakeStore/accounts/javaadlsacct235\",\"name\":\"javaadlsacct235\",\"type\":\"Microsoft.DataLakeStore/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"javaadlsacct58.azuredatalakestore.net\",\"creationTime\":\"2016-03-11T03:11:36.5208159Z\",\"lastModifiedTime\":\"2016-03-11T03:11:36.5208159Z\"},\"location\":\"eastus2\",\"tags\":null,\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/javaadlarg986/providers/Microsoft.DataLakeStore/accounts/javaadlsacct58\",\"name\":\"javaadlsacct58\",\"type\":\"Microsoft.DataLakeStore/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadls4897.azuredatalakestore.net\",\"creationTime\":\"2016-03-16T21:43:58.6675286Z\",\"lastModifiedTime\":\"2016-03-16T21:43:58.6675286Z\"},\"location\":\"eastus2\",\"tags\":null,\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeStore/accounts/xplattestadls4897\",\"name\":\"xplattestadls4897\",\"type\":\"Microsoft.DataLakeStore/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadls8810.azuredatalakestore.net\",\"creationTime\":\"2016-03-16T21:44:33.0259769Z\",\"lastModifiedTime\":\"2016-03-16T21:44:33.0259769Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeStore/accounts/xplattestadls8810\",\"name\":\"xplattestadls8810\",\"type\":\"Microsoft.DataLakeStore/accounts\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '3296',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'c261727c-b8c6-49b9-b55c-cf08d54b0c4e',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': '0ad931df-6a15-40a4-9621-6f49a5bf80af',
  'x-ms-routing-request-id': 'WESTUS:20160316T214506Z:0ad931df-6a15-40a4-9621-6f49a5bf80af',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 16 Mar 2016 21:45:06 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/providers/Microsoft.DataLakeStore/accounts?api-version=2015-10-01-preview')
  .reply(200, "{\"value\":[{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"javaadlsacct2163.azuredatalakestore.net\",\"creationTime\":\"2016-03-11T03:22:26.2833263Z\",\"lastModifiedTime\":\"2016-03-11T03:22:26.2833263Z\"},\"location\":\"eastus2\",\"tags\":null,\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/javaadlarg610/providers/Microsoft.DataLakeStore/accounts/javaadlsacct2163\",\"name\":\"javaadlsacct2163\",\"type\":\"Microsoft.DataLakeStore/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"javaadlsacct4.azuredatalakestore.net\",\"creationTime\":\"2016-03-11T03:21:41.617856Z\",\"lastModifiedTime\":\"2016-03-11T03:21:41.617856Z\"},\"location\":\"eastus2\",\"tags\":null,\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/javaadlarg610/providers/Microsoft.DataLakeStore/accounts/javaadlsacct4\",\"name\":\"javaadlsacct4\",\"type\":\"Microsoft.DataLakeStore/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"javaadlsacct2183.azuredatalakestore.net\",\"creationTime\":\"2016-03-11T19:02:42.2281794Z\",\"lastModifiedTime\":\"2016-03-11T19:02:42.2281794Z\"},\"location\":\"eastus2\",\"tags\":null,\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/javaadlarg80/providers/Microsoft.DataLakeStore/accounts/javaadlsacct2183\",\"name\":\"javaadlsacct2183\",\"type\":\"Microsoft.DataLakeStore/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"javaadlsacct235.azuredatalakestore.net\",\"creationTime\":\"2016-03-11T19:01:57.6286994Z\",\"lastModifiedTime\":\"2016-03-11T19:01:57.6286994Z\"},\"location\":\"eastus2\",\"tags\":null,\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/javaadlarg80/providers/Microsoft.DataLakeStore/accounts/javaadlsacct235\",\"name\":\"javaadlsacct235\",\"type\":\"Microsoft.DataLakeStore/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"javaadlsacct58.azuredatalakestore.net\",\"creationTime\":\"2016-03-11T03:11:36.5208159Z\",\"lastModifiedTime\":\"2016-03-11T03:11:36.5208159Z\"},\"location\":\"eastus2\",\"tags\":null,\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/javaadlarg986/providers/Microsoft.DataLakeStore/accounts/javaadlsacct58\",\"name\":\"javaadlsacct58\",\"type\":\"Microsoft.DataLakeStore/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadls4897.azuredatalakestore.net\",\"creationTime\":\"2016-03-16T21:43:58.6675286Z\",\"lastModifiedTime\":\"2016-03-16T21:43:58.6675286Z\"},\"location\":\"eastus2\",\"tags\":null,\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeStore/accounts/xplattestadls4897\",\"name\":\"xplattestadls4897\",\"type\":\"Microsoft.DataLakeStore/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadls8810.azuredatalakestore.net\",\"creationTime\":\"2016-03-16T21:44:33.0259769Z\",\"lastModifiedTime\":\"2016-03-16T21:44:33.0259769Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeStore/accounts/xplattestadls8810\",\"name\":\"xplattestadls8810\",\"type\":\"Microsoft.DataLakeStore/accounts\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '3296',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'c261727c-b8c6-49b9-b55c-cf08d54b0c4e',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': '0ad931df-6a15-40a4-9621-6f49a5bf80af',
  'x-ms-routing-request-id': 'WESTUS:20160316T214506Z:0ad931df-6a15-40a4-9621-6f49a5bf80af',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 16 Mar 2016 21:45:06 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeStore/accounts?api-version=2015-10-01-preview')
  .reply(200, "{\"value\":[{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadls4897.azuredatalakestore.net\",\"creationTime\":\"2016-03-16T21:43:58.6675286Z\",\"lastModifiedTime\":\"2016-03-16T21:43:58.6675286Z\"},\"location\":\"eastus2\",\"tags\":null,\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeStore/accounts/xplattestadls4897\",\"name\":\"xplattestadls4897\",\"type\":\"Microsoft.DataLakeStore/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadls8810.azuredatalakestore.net\",\"creationTime\":\"2016-03-16T21:44:33.0259769Z\",\"lastModifiedTime\":\"2016-03-16T21:44:33.0259769Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeStore/accounts/xplattestadls8810\",\"name\":\"xplattestadls8810\",\"type\":\"Microsoft.DataLakeStore/accounts\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '998',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '9744a7d8-22d3-4d74-a670-be635b536ec2',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': 'c2718916-17dc-4198-a23c-f4313b44369c',
  'x-ms-routing-request-id': 'WESTUS:20160316T214507Z:c2718916-17dc-4198-a23c-f4313b44369c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 16 Mar 2016 21:45:07 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeStore/accounts?api-version=2015-10-01-preview')
  .reply(200, "{\"value\":[{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadls4897.azuredatalakestore.net\",\"creationTime\":\"2016-03-16T21:43:58.6675286Z\",\"lastModifiedTime\":\"2016-03-16T21:43:58.6675286Z\"},\"location\":\"eastus2\",\"tags\":null,\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeStore/accounts/xplattestadls4897\",\"name\":\"xplattestadls4897\",\"type\":\"Microsoft.DataLakeStore/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadls8810.azuredatalakestore.net\",\"creationTime\":\"2016-03-16T21:44:33.0259769Z\",\"lastModifiedTime\":\"2016-03-16T21:44:33.0259769Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeStore/accounts/xplattestadls8810\",\"name\":\"xplattestadls8810\",\"type\":\"Microsoft.DataLakeStore/accounts\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '998',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '9744a7d8-22d3-4d74-a670-be635b536ec2',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': 'c2718916-17dc-4198-a23c-f4313b44369c',
  'x-ms-routing-request-id': 'WESTUS:20160316T214507Z:c2718916-17dc-4198-a23c-f4313b44369c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 16 Mar 2016 21:45:07 GMT',
  connection: 'close' });
 return result; }]];