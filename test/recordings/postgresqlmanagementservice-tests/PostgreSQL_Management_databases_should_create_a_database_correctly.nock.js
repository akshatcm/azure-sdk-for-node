// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'westus';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'd466671a-79ad-4ca5-878f-599df8bcd17e';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/d466671a-79ad-4ca5-878f-599df8bcd17e/resourceGroups/nodeTestGroup5834/providers/Microsoft.DBforPostgreSQL/servers/testserver3266/databases/testdb4417?api-version=2017-04-30-preview', '*')
  .reply(202, "{\"operation\":\"UpsertElasticServerDatabase\",\"startTime\":\"2017-05-25T00:08:00.613Z\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '82',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/d466671a-79ad-4ca5-878f-599df8bcd17e/providers/Microsoft.DBforPostgreSQL/locations/westus/operationResults/941ffd02-b315-48fc-9461-23f2e2f304f3?api-version=2017-04-30-preview',
  'retry-after': '15',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/d466671a-79ad-4ca5-878f-599df8bcd17e/providers/Microsoft.DBforPostgreSQL/locations/westus/azureAsyncOperation/941ffd02-b315-48fc-9461-23f2e2f304f3?api-version=2017-04-30-preview',
  'x-ms-request-id': '941ffd02-b315-48fc-9461-23f2e2f304f3',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': '326e1ff5-f587-49e5-833f-c068c3a8206e',
  'x-ms-routing-request-id': 'EASTUS:20170525T000759Z:326e1ff5-f587-49e5-833f-c068c3a8206e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 25 May 2017 00:07:58 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/d466671a-79ad-4ca5-878f-599df8bcd17e/resourceGroups/nodeTestGroup5834/providers/Microsoft.DBforPostgreSQL/servers/testserver3266/databases/testdb4417?api-version=2017-04-30-preview', '*')
  .reply(202, "{\"operation\":\"UpsertElasticServerDatabase\",\"startTime\":\"2017-05-25T00:08:00.613Z\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '82',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/d466671a-79ad-4ca5-878f-599df8bcd17e/providers/Microsoft.DBforPostgreSQL/locations/westus/operationResults/941ffd02-b315-48fc-9461-23f2e2f304f3?api-version=2017-04-30-preview',
  'retry-after': '15',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/d466671a-79ad-4ca5-878f-599df8bcd17e/providers/Microsoft.DBforPostgreSQL/locations/westus/azureAsyncOperation/941ffd02-b315-48fc-9461-23f2e2f304f3?api-version=2017-04-30-preview',
  'x-ms-request-id': '941ffd02-b315-48fc-9461-23f2e2f304f3',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': '326e1ff5-f587-49e5-833f-c068c3a8206e',
  'x-ms-routing-request-id': 'EASTUS:20170525T000759Z:326e1ff5-f587-49e5-833f-c068c3a8206e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 25 May 2017 00:07:58 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/d466671a-79ad-4ca5-878f-599df8bcd17e/providers/Microsoft.DBforPostgreSQL/locations/westus/azureAsyncOperation/941ffd02-b315-48fc-9461-23f2e2f304f3?api-version=2017-04-30-preview')
  .reply(200, "{\"name\":\"941ffd02-b315-48fc-9461-23f2e2f304f3\",\"status\":\"Succeeded\",\"startTime\":\"2017-05-25T00:08:00.613Z\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '107',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '1f9587ef-8cb9-417e-97b2-4613625711eb',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': '0b043301-474b-499d-982e-61a0a040365b',
  'x-ms-routing-request-id': 'EASTUS:20170525T000829Z:0b043301-474b-499d-982e-61a0a040365b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 25 May 2017 00:08:29 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/d466671a-79ad-4ca5-878f-599df8bcd17e/providers/Microsoft.DBforPostgreSQL/locations/westus/azureAsyncOperation/941ffd02-b315-48fc-9461-23f2e2f304f3?api-version=2017-04-30-preview')
  .reply(200, "{\"name\":\"941ffd02-b315-48fc-9461-23f2e2f304f3\",\"status\":\"Succeeded\",\"startTime\":\"2017-05-25T00:08:00.613Z\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '107',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '1f9587ef-8cb9-417e-97b2-4613625711eb',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': '0b043301-474b-499d-982e-61a0a040365b',
  'x-ms-routing-request-id': 'EASTUS:20170525T000829Z:0b043301-474b-499d-982e-61a0a040365b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 25 May 2017 00:08:29 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/d466671a-79ad-4ca5-878f-599df8bcd17e/resourceGroups/nodeTestGroup5834/providers/Microsoft.DBforPostgreSQL/servers/testserver3266/databases/testdb4417?api-version=2017-04-30-preview')
  .reply(200, "{\"id\":\"/subscriptions/d466671a-79ad-4ca5-878f-599df8bcd17e/resourceGroups/nodeTestGroup5834/providers/Microsoft.DBforPostgreSQL/servers/testserver3266/databases/testdb4417\",\"name\":\"testdb4417\",\"type\":\"Microsoft.DBforPostgreSQL/servers/databases\",\"properties\":{\"charset\":\"UTF8\",\"collation\":\"English_United States.1252\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '319',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '9a9d35a8-0b3a-48e7-b74f-7a6ae8d0b9c8',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': 'd17d006f-9573-4235-bdc3-bb4207f19d27',
  'x-ms-routing-request-id': 'EASTUS:20170525T000830Z:d17d006f-9573-4235-bdc3-bb4207f19d27',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 25 May 2017 00:08:29 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/d466671a-79ad-4ca5-878f-599df8bcd17e/resourceGroups/nodeTestGroup5834/providers/Microsoft.DBforPostgreSQL/servers/testserver3266/databases/testdb4417?api-version=2017-04-30-preview')
  .reply(200, "{\"id\":\"/subscriptions/d466671a-79ad-4ca5-878f-599df8bcd17e/resourceGroups/nodeTestGroup5834/providers/Microsoft.DBforPostgreSQL/servers/testserver3266/databases/testdb4417\",\"name\":\"testdb4417\",\"type\":\"Microsoft.DBforPostgreSQL/servers/databases\",\"properties\":{\"charset\":\"UTF8\",\"collation\":\"English_United States.1252\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '319',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '9a9d35a8-0b3a-48e7-b74f-7a6ae8d0b9c8',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': 'd17d006f-9573-4235-bdc3-bb4207f19d27',
  'x-ms-routing-request-id': 'EASTUS:20170525T000830Z:d17d006f-9573-4235-bdc3-bb4207f19d27',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 25 May 2017 00:08:29 GMT',
  connection: 'close' });
 return result; }]];