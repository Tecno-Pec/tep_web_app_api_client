# TepsalesserviceApi.DistribuitionCenterApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getByIdDistribuitionCenter**](DistribuitionCenterApi.md#getByIdDistribuitionCenter) | **GET** /tepsales/v1/distribuitionsCenters/{id} | Get DistribuitionCenter by id
[**tepsalesV1DistribuitionsCentersAllGet**](DistribuitionCenterApi.md#tepsalesV1DistribuitionsCentersAllGet) | **GET** /tepsales/v1/distribuitionsCenters/all | Get All DistribuitionCenter by filter
[**tepsalesV1DistribuitionsCentersIdDelete**](DistribuitionCenterApi.md#tepsalesV1DistribuitionsCentersIdDelete) | **DELETE** /tepsales/v1/distribuitionsCenters/{id} | Delete DistribuitionCenter by Id
[**tepsalesV1DistribuitionsCentersIdPatch**](DistribuitionCenterApi.md#tepsalesV1DistribuitionsCentersIdPatch) | **PATCH** /tepsales/v1/distribuitionsCenters/{id} | Update part of DistribuitionCenter
[**tepsalesV1DistribuitionsCentersIdPut**](DistribuitionCenterApi.md#tepsalesV1DistribuitionsCentersIdPut) | **PUT** /tepsales/v1/distribuitionsCenters/{id} | Update DistribuitionCenter
[**tepsalesV1DistribuitionsCentersPagedGet**](DistribuitionCenterApi.md#tepsalesV1DistribuitionsCentersPagedGet) | **GET** /tepsales/v1/distribuitionsCenters/paged | Get All DistribuitionCenter by filter with pagination
[**tepsalesV1DistribuitionsCentersPost**](DistribuitionCenterApi.md#tepsalesV1DistribuitionsCentersPost) | **POST** /tepsales/v1/distribuitionsCenters | Create DistribuitionCenter

<a name="getByIdDistribuitionCenter"></a>
# **getByIdDistribuitionCenter**
> GetAllDistribuitionCenterResponse getByIdDistribuitionCenter(id, opts)

Get DistribuitionCenter by id

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.DistribuitionCenterApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | DistribuitionCenter id
let opts = { 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "65256734-9c73-4a2c-9d5b-a0095a76eb4b" // String | CSRF Protection
};
apiInstance.getByIdDistribuitionCenter(id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| DistribuitionCenter id | 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 65256734-9c73-4a2c-9d5b-a0095a76eb4b]

### Return type

[**GetAllDistribuitionCenterResponse**](GetAllDistribuitionCenterResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="tepsalesV1DistribuitionsCentersAllGet"></a>
# **tepsalesV1DistribuitionsCentersAllGet**
> [GetAllDistribuitionCenterResponse] tepsalesV1DistribuitionsCentersAllGet(opts)

Get All DistribuitionCenter by filter

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.DistribuitionCenterApi();
let opts = { 
  'name': "name_example", // String | 
  'document': "document_example", // String | 
  'externalCode': "externalCode_example", // String | 
  'limit': 100, // Number | limit
  'sort': "Id.desc", // String | Sorting atributes, sample: id.desc,name.asc
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "f1921609-4bbe-4b78-a27a-63b64670c26f" // String | CSRF Protection
};
apiInstance.tepsalesV1DistribuitionsCentersAllGet(opts, (error, data, response) => {
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
 **name** | **String**|  | [optional] 
 **document** | **String**|  | [optional] 
 **externalCode** | **String**|  | [optional] 
 **limit** | **Number**| limit | [optional] [default to 100]
 **sort** | **String**| Sorting atributes, sample: id.desc,name.asc | [optional] [default to Id.desc]
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to f1921609-4bbe-4b78-a27a-63b64670c26f]

### Return type

[**[GetAllDistribuitionCenterResponse]**](GetAllDistribuitionCenterResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="tepsalesV1DistribuitionsCentersIdDelete"></a>
# **tepsalesV1DistribuitionsCentersIdDelete**
> tepsalesV1DistribuitionsCentersIdDelete(id, opts)

Delete DistribuitionCenter by Id

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.DistribuitionCenterApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | DistribuitionCenter id
let opts = { 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "317e1015-2666-46d5-8a3b-0e8b5df31b01" // String | CSRF Protection
};
apiInstance.tepsalesV1DistribuitionsCentersIdDelete(id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| DistribuitionCenter id | 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 317e1015-2666-46d5-8a3b-0e8b5df31b01]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="tepsalesV1DistribuitionsCentersIdPatch"></a>
# **tepsalesV1DistribuitionsCentersIdPatch**
> tepsalesV1DistribuitionsCentersIdPatch(body, id, opts)

Update part of DistribuitionCenter

Sample request:                    PATCH /tepsales/v1/DistribuitionCenter/{id}      [          {              \&quot;op\&quot;: \&quot;replace\&quot;,              \&quot;path\&quot;: \&quot;/atribute_name\&quot;,              \&quot;value\&quot;: \&quot;new value\&quot;          }      ]

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.DistribuitionCenterApi();
let body = [new TepsalesserviceApi.Operation()]; // [Operation] | Atributes values
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | DistribuitionCenter id
let opts = { 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "8aebd82f-6482-44cb-887d-54b907431322" // String | CSRF Protection
};
apiInstance.tepsalesV1DistribuitionsCentersIdPatch(body, id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| DistribuitionCenter id | 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 8aebd82f-6482-44cb-887d-54b907431322]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="tepsalesV1DistribuitionsCentersIdPut"></a>
# **tepsalesV1DistribuitionsCentersIdPut**
> tepsalesV1DistribuitionsCentersIdPut(id, opts)

Update DistribuitionCenter

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.DistribuitionCenterApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | DistribuitionCenter Id
let opts = { 
  'body': new TepsalesserviceApi.PutDistribuitionCenterRequest(), // PutDistribuitionCenterRequest | DistribuitionCenter to update
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "328abfde-029d-4023-9298-f289d25b5b5b" // String | CSRF Protection
};
apiInstance.tepsalesV1DistribuitionsCentersIdPut(id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| DistribuitionCenter Id | 
 **body** | [**PutDistribuitionCenterRequest**](PutDistribuitionCenterRequest.md)| DistribuitionCenter to update | [optional] 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 328abfde-029d-4023-9298-f289d25b5b5b]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="tepsalesV1DistribuitionsCentersPagedGet"></a>
# **tepsalesV1DistribuitionsCentersPagedGet**
> GetAllPagedDistribuitionCenterResponse tepsalesV1DistribuitionsCentersPagedGet(opts)

Get All DistribuitionCenter by filter with pagination

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.DistribuitionCenterApi();
let opts = { 
  'name': "name_example", // String | 
  'document': "document_example", // String | 
  'externalCode': "externalCode_example", // String | 
  'page': 56, // Number | 
  'pageSize': 56, // Number | 
  'sort': "Id.desc", // String | Sorting atributes, sample: id.desc,name.asc
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "ea8f673c-3e9f-4259-90dc-05b8f232e6a4" // String | CSRF Protection
};
apiInstance.tepsalesV1DistribuitionsCentersPagedGet(opts, (error, data, response) => {
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
 **name** | **String**|  | [optional] 
 **document** | **String**|  | [optional] 
 **externalCode** | **String**|  | [optional] 
 **page** | **Number**|  | [optional] 
 **pageSize** | **Number**|  | [optional] 
 **sort** | **String**| Sorting atributes, sample: id.desc,name.asc | [optional] [default to Id.desc]
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to ea8f673c-3e9f-4259-90dc-05b8f232e6a4]

### Return type

[**GetAllPagedDistribuitionCenterResponse**](GetAllPagedDistribuitionCenterResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="tepsalesV1DistribuitionsCentersPost"></a>
# **tepsalesV1DistribuitionsCentersPost**
> PostDistribuitionCenterResponse tepsalesV1DistribuitionsCentersPost(opts)

Create DistribuitionCenter

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.DistribuitionCenterApi();
let opts = { 
  'body': new TepsalesserviceApi.PostDistribuitionCenterRequest(), // PostDistribuitionCenterRequest | DistribuitionCenter to create
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "c408e904-3b1c-4a2e-ae9e-315acf2281fc" // String | CSRF Protection
};
apiInstance.tepsalesV1DistribuitionsCentersPost(opts, (error, data, response) => {
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
 **body** | [**PostDistribuitionCenterRequest**](PostDistribuitionCenterRequest.md)| DistribuitionCenter to create | [optional] 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to c408e904-3b1c-4a2e-ae9e-315acf2281fc]

### Return type

[**PostDistribuitionCenterResponse**](PostDistribuitionCenterResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

