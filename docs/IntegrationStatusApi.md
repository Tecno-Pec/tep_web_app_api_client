# TepsalesserviceApi.IntegrationStatusApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getByIdIntegrationStatus**](IntegrationStatusApi.md#getByIdIntegrationStatus) | **GET** /tepsales/v1/integration/status/{id} | Get IntegrationStatus by id
[**tepsalesV1IntegrationStatusAllGet**](IntegrationStatusApi.md#tepsalesV1IntegrationStatusAllGet) | **GET** /tepsales/v1/integration/status/all | Get All IntegrationStatus by filter
[**tepsalesV1IntegrationStatusIdDelete**](IntegrationStatusApi.md#tepsalesV1IntegrationStatusIdDelete) | **DELETE** /tepsales/v1/integration/status/{id} | Delete IntegrationStatus by Id
[**tepsalesV1IntegrationStatusIdPatch**](IntegrationStatusApi.md#tepsalesV1IntegrationStatusIdPatch) | **PATCH** /tepsales/v1/integration/status/{id} | Update part of IntegrationStatus
[**tepsalesV1IntegrationStatusIdPut**](IntegrationStatusApi.md#tepsalesV1IntegrationStatusIdPut) | **PUT** /tepsales/v1/integration/status/{id} | Update IntegrationStatus
[**tepsalesV1IntegrationStatusPagedGet**](IntegrationStatusApi.md#tepsalesV1IntegrationStatusPagedGet) | **GET** /tepsales/v1/integration/status/paged | Get All IntegrationStatus by filter with pagination
[**tepsalesV1IntegrationStatusPost**](IntegrationStatusApi.md#tepsalesV1IntegrationStatusPost) | **POST** /tepsales/v1/integration/status | Create IntegrationStatus

<a name="getByIdIntegrationStatus"></a>
# **getByIdIntegrationStatus**
> GetAllIntegrationStatusResponse getByIdIntegrationStatus(id, opts)

Get IntegrationStatus by id

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.IntegrationStatusApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | IntegrationStatus id
let opts = { 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "c28fefcb-f792-4955-8451-cb7e8fdf1832" // String | CSRF Protection
};
apiInstance.getByIdIntegrationStatus(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)| IntegrationStatus id | 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to c28fefcb-f792-4955-8451-cb7e8fdf1832]

### Return type

[**GetAllIntegrationStatusResponse**](GetAllIntegrationStatusResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="tepsalesV1IntegrationStatusAllGet"></a>
# **tepsalesV1IntegrationStatusAllGet**
> [GetAllIntegrationStatusResponse] tepsalesV1IntegrationStatusAllGet(opts)

Get All IntegrationStatus by filter

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.IntegrationStatusApi();
let opts = { 
  'context': "context_example", // String | 
  'action': new TepsalesserviceApi.IntegrationStatusActions(), // IntegrationStatusActions | 
  'status': "status_example", // String | 
  'summary': "summary_example", // String | 
  'dateRange': 789, // Number | 
  'limit': 100, // Number | limit
  'sort': "Id.desc", // String | Sorting atributes, sample: id.desc,name.asc
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "f114cc86-e83a-4511-be20-8e543ef881bd" // String | CSRF Protection
};
apiInstance.tepsalesV1IntegrationStatusAllGet(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **context** | **String**|  | [optional] 
 **action** | [**IntegrationStatusActions**](.md)|  | [optional] 
 **status** | **String**|  | [optional] 
 **summary** | **String**|  | [optional] 
 **dateRange** | **Number**|  | [optional] 
 **limit** | **Number**| limit | [optional] [default to 100]
 **sort** | **String**| Sorting atributes, sample: id.desc,name.asc | [optional] [default to Id.desc]
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to f114cc86-e83a-4511-be20-8e543ef881bd]

### Return type

[**[GetAllIntegrationStatusResponse]**](GetAllIntegrationStatusResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="tepsalesV1IntegrationStatusIdDelete"></a>
# **tepsalesV1IntegrationStatusIdDelete**
> tepsalesV1IntegrationStatusIdDelete(id, opts)

Delete IntegrationStatus by Id

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.IntegrationStatusApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | IntegrationStatus id
let opts = { 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "3ad06509-25fe-4aa9-9827-93d4511cbba4" // String | CSRF Protection
};
apiInstance.tepsalesV1IntegrationStatusIdDelete(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)| IntegrationStatus id | 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 3ad06509-25fe-4aa9-9827-93d4511cbba4]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="tepsalesV1IntegrationStatusIdPatch"></a>
# **tepsalesV1IntegrationStatusIdPatch**
> tepsalesV1IntegrationStatusIdPatch(body, id, opts)

Update part of IntegrationStatus

Sample request:                    PATCH /tepsales/v1/IntegrationStatus/{id}      [          {              \&quot;op\&quot;: \&quot;replace\&quot;,              \&quot;path\&quot;: \&quot;/atribute_name\&quot;,              \&quot;value\&quot;: \&quot;new value\&quot;          }      ]

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.IntegrationStatusApi();
let body = [new TepsalesserviceApi.Operation()]; // [Operation] | Atributes values
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | IntegrationStatus id
let opts = { 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "143fc4b1-7aa9-470e-a722-6ae615687412" // String | CSRF Protection
};
apiInstance.tepsalesV1IntegrationStatusIdPatch(body, id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**[Operation]**](Operation.md)| Atributes values | 
 **id** | [**String**](.md)| IntegrationStatus id | 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 143fc4b1-7aa9-470e-a722-6ae615687412]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="tepsalesV1IntegrationStatusIdPut"></a>
# **tepsalesV1IntegrationStatusIdPut**
> tepsalesV1IntegrationStatusIdPut(id, opts)

Update IntegrationStatus

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.IntegrationStatusApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | IntegrationStatus Id
let opts = { 
  'body': new TepsalesserviceApi.PutIntegrationStatusRequest(), // PutIntegrationStatusRequest | IntegrationStatus to update
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "113b4c10-7ad5-4d73-9f4a-ec1e86e8d2b5" // String | CSRF Protection
};
apiInstance.tepsalesV1IntegrationStatusIdPut(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)| IntegrationStatus Id | 
 **body** | [**PutIntegrationStatusRequest**](PutIntegrationStatusRequest.md)| IntegrationStatus to update | [optional] 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 113b4c10-7ad5-4d73-9f4a-ec1e86e8d2b5]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="tepsalesV1IntegrationStatusPagedGet"></a>
# **tepsalesV1IntegrationStatusPagedGet**
> GetAllPagedIntegrationStatusResponse tepsalesV1IntegrationStatusPagedGet(opts)

Get All IntegrationStatus by filter with pagination

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.IntegrationStatusApi();
let opts = { 
  'context': "context_example", // String | 
  'action': new TepsalesserviceApi.IntegrationStatusActions(), // IntegrationStatusActions | 
  'status': "status_example", // String | 
  'summary': "summary_example", // String | 
  'dateRange': 789, // Number | 
  'page': 56, // Number | 
  'pageSize': 56, // Number | 
  'sort': "Id.desc", // String | Sorting atributes, sample: id.desc,name.asc
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "025614dc-c6e2-4ba4-9dfc-7d976a08c142" // String | CSRF Protection
};
apiInstance.tepsalesV1IntegrationStatusPagedGet(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **context** | **String**|  | [optional] 
 **action** | [**IntegrationStatusActions**](.md)|  | [optional] 
 **status** | **String**|  | [optional] 
 **summary** | **String**|  | [optional] 
 **dateRange** | **Number**|  | [optional] 
 **page** | **Number**|  | [optional] 
 **pageSize** | **Number**|  | [optional] 
 **sort** | **String**| Sorting atributes, sample: id.desc,name.asc | [optional] [default to Id.desc]
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 025614dc-c6e2-4ba4-9dfc-7d976a08c142]

### Return type

[**GetAllPagedIntegrationStatusResponse**](GetAllPagedIntegrationStatusResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="tepsalesV1IntegrationStatusPost"></a>
# **tepsalesV1IntegrationStatusPost**
> PostIntegrationStatusResponse tepsalesV1IntegrationStatusPost(opts)

Create IntegrationStatus

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.IntegrationStatusApi();
let opts = { 
  'body': new TepsalesserviceApi.PostIntegrationStatusRequest(), // PostIntegrationStatusRequest | IntegrationStatus to create
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "143fedb3-75bf-4a66-9dbd-feb74c530043" // String | CSRF Protection
};
apiInstance.tepsalesV1IntegrationStatusPost(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PostIntegrationStatusRequest**](PostIntegrationStatusRequest.md)| IntegrationStatus to create | [optional] 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 143fedb3-75bf-4a66-9dbd-feb74c530043]

### Return type

[**PostIntegrationStatusResponse**](PostIntegrationStatusResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

