# TepsalesserviceApi.IntegrationConfigApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getByIdIntegrationConfig**](IntegrationConfigApi.md#getByIdIntegrationConfig) | **GET** /tepsales/v1/integration/config/{id} | Get IntegrationConfig by id
[**tepsalesV1IntegrationConfigAllGet**](IntegrationConfigApi.md#tepsalesV1IntegrationConfigAllGet) | **GET** /tepsales/v1/integration/config/all | Get All IntegrationConfig by filter
[**tepsalesV1IntegrationConfigIdDelete**](IntegrationConfigApi.md#tepsalesV1IntegrationConfigIdDelete) | **DELETE** /tepsales/v1/integration/config/{id} | Delete IntegrationConfig by Id
[**tepsalesV1IntegrationConfigIdPatch**](IntegrationConfigApi.md#tepsalesV1IntegrationConfigIdPatch) | **PATCH** /tepsales/v1/integration/config/{id} | Update part of IntegrationConfig
[**tepsalesV1IntegrationConfigIdPut**](IntegrationConfigApi.md#tepsalesV1IntegrationConfigIdPut) | **PUT** /tepsales/v1/integration/config/{id} | Update IntegrationConfig
[**tepsalesV1IntegrationConfigPagedGet**](IntegrationConfigApi.md#tepsalesV1IntegrationConfigPagedGet) | **GET** /tepsales/v1/integration/config/paged | Get All IntegrationConfig by filter with pagination
[**tepsalesV1IntegrationConfigPost**](IntegrationConfigApi.md#tepsalesV1IntegrationConfigPost) | **POST** /tepsales/v1/integration/config | Create IntegrationConfig

<a name="getByIdIntegrationConfig"></a>
# **getByIdIntegrationConfig**
> GetAllIntegrationConfigResponse getByIdIntegrationConfig(id, opts)

Get IntegrationConfig by id

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.IntegrationConfigApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | IntegrationConfig id
let opts = { 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "65e7a5c4-4cb2-4d5b-ad2c-ff233b97377a" // String | CSRF Protection
};
apiInstance.getByIdIntegrationConfig(id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| IntegrationConfig id | 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 65e7a5c4-4cb2-4d5b-ad2c-ff233b97377a]

### Return type

[**GetAllIntegrationConfigResponse**](GetAllIntegrationConfigResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="tepsalesV1IntegrationConfigAllGet"></a>
# **tepsalesV1IntegrationConfigAllGet**
> [GetAllIntegrationConfigResponse] tepsalesV1IntegrationConfigAllGet(opts)

Get All IntegrationConfig by filter

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.IntegrationConfigApi();
let opts = { 
  'model': new TepsalesserviceApi.GetAllIntegrationConfigRequest(), // GetAllIntegrationConfigRequest | filter
  'limit': 100, // Number | limit
  'sort': "Id.desc", // String | Sorting atributes, sample: id.desc,name.asc
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "c723765e-575c-453b-b5c8-3adb434d168c" // String | CSRF Protection
};
apiInstance.tepsalesV1IntegrationConfigAllGet(opts, (error, data, response) => {
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
 **model** | [**GetAllIntegrationConfigRequest**](.md)| filter | [optional] 
 **limit** | **Number**| limit | [optional] [default to 100]
 **sort** | **String**| Sorting atributes, sample: id.desc,name.asc | [optional] [default to Id.desc]
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to c723765e-575c-453b-b5c8-3adb434d168c]

### Return type

[**[GetAllIntegrationConfigResponse]**](GetAllIntegrationConfigResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="tepsalesV1IntegrationConfigIdDelete"></a>
# **tepsalesV1IntegrationConfigIdDelete**
> tepsalesV1IntegrationConfigIdDelete(id, opts)

Delete IntegrationConfig by Id

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.IntegrationConfigApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | IntegrationConfig id
let opts = { 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "fc657697-6e39-43a4-a91b-1558181cf3f2" // String | CSRF Protection
};
apiInstance.tepsalesV1IntegrationConfigIdDelete(id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| IntegrationConfig id | 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to fc657697-6e39-43a4-a91b-1558181cf3f2]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="tepsalesV1IntegrationConfigIdPatch"></a>
# **tepsalesV1IntegrationConfigIdPatch**
> tepsalesV1IntegrationConfigIdPatch(body, id, opts)

Update part of IntegrationConfig

Sample request:                    PATCH /tepsales/v1/IntegrationConfig/{id}      [          {              \&quot;op\&quot;: \&quot;replace\&quot;,              \&quot;path\&quot;: \&quot;/atribute_name\&quot;,              \&quot;value\&quot;: \&quot;new value\&quot;          }      ]

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.IntegrationConfigApi();
let body = [new TepsalesserviceApi.Operation()]; // [Operation] | Atributes values
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | IntegrationConfig id
let opts = { 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "38af23ae-ed5a-498c-be9f-243744d6bb96" // String | CSRF Protection
};
apiInstance.tepsalesV1IntegrationConfigIdPatch(body, id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| IntegrationConfig id | 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 38af23ae-ed5a-498c-be9f-243744d6bb96]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="tepsalesV1IntegrationConfigIdPut"></a>
# **tepsalesV1IntegrationConfigIdPut**
> tepsalesV1IntegrationConfigIdPut(id, opts)

Update IntegrationConfig

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.IntegrationConfigApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | IntegrationConfig Id
let opts = { 
  'body': new TepsalesserviceApi.PutIntegrationConfigRequest(), // PutIntegrationConfigRequest | IntegrationConfig to update
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "150a792e-f418-4f0a-993a-65a86e0c4033" // String | CSRF Protection
};
apiInstance.tepsalesV1IntegrationConfigIdPut(id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| IntegrationConfig Id | 
 **body** | [**PutIntegrationConfigRequest**](PutIntegrationConfigRequest.md)| IntegrationConfig to update | [optional] 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 150a792e-f418-4f0a-993a-65a86e0c4033]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="tepsalesV1IntegrationConfigPagedGet"></a>
# **tepsalesV1IntegrationConfigPagedGet**
> GetAllPagedIntegrationConfigResponse tepsalesV1IntegrationConfigPagedGet(opts)

Get All IntegrationConfig by filter with pagination

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.IntegrationConfigApi();
let opts = { 
  'page': 56, // Number | 
  'pageSize': 56, // Number | 
  'sort': "Id.desc", // String | Sorting atributes, sample: id.desc,name.asc
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "123dca57-296f-4360-97b2-88cb6483c9ec" // String | CSRF Protection
};
apiInstance.tepsalesV1IntegrationConfigPagedGet(opts, (error, data, response) => {
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
 **page** | **Number**|  | [optional] 
 **pageSize** | **Number**|  | [optional] 
 **sort** | **String**| Sorting atributes, sample: id.desc,name.asc | [optional] [default to Id.desc]
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 123dca57-296f-4360-97b2-88cb6483c9ec]

### Return type

[**GetAllPagedIntegrationConfigResponse**](GetAllPagedIntegrationConfigResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="tepsalesV1IntegrationConfigPost"></a>
# **tepsalesV1IntegrationConfigPost**
> PostIntegrationConfigResponse tepsalesV1IntegrationConfigPost(opts)

Create IntegrationConfig

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.IntegrationConfigApi();
let opts = { 
  'body': new TepsalesserviceApi.PostIntegrationConfigRequest(), // PostIntegrationConfigRequest | IntegrationConfig to create
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "0078ca9b-0451-4bc4-a9de-9d5610f6bcdd" // String | CSRF Protection
};
apiInstance.tepsalesV1IntegrationConfigPost(opts, (error, data, response) => {
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
 **body** | [**PostIntegrationConfigRequest**](PostIntegrationConfigRequest.md)| IntegrationConfig to create | [optional] 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 0078ca9b-0451-4bc4-a9de-9d5610f6bcdd]

### Return type

[**PostIntegrationConfigResponse**](PostIntegrationConfigResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

