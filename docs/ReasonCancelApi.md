# TepsalesserviceApi.ReasonCancelApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getByIdReasonCancel**](ReasonCancelApi.md#getByIdReasonCancel) | **GET** /tepsales/v1/reasonscancels/{id} | Get ReasonCancel by id
[**tepsalesV1ReasonscancelsAllGet**](ReasonCancelApi.md#tepsalesV1ReasonscancelsAllGet) | **GET** /tepsales/v1/reasonscancels/all | Get All ReasonCancel by filter
[**tepsalesV1ReasonscancelsIdDelete**](ReasonCancelApi.md#tepsalesV1ReasonscancelsIdDelete) | **DELETE** /tepsales/v1/reasonscancels/{id} | Delete ReasonCancel by Id
[**tepsalesV1ReasonscancelsIdPatch**](ReasonCancelApi.md#tepsalesV1ReasonscancelsIdPatch) | **PATCH** /tepsales/v1/reasonscancels/{id} | Update part of ReasonCancel
[**tepsalesV1ReasonscancelsIdPut**](ReasonCancelApi.md#tepsalesV1ReasonscancelsIdPut) | **PUT** /tepsales/v1/reasonscancels/{id} | Update ReasonCancel
[**tepsalesV1ReasonscancelsPagedGet**](ReasonCancelApi.md#tepsalesV1ReasonscancelsPagedGet) | **GET** /tepsales/v1/reasonscancels/paged | Get All ReasonCancel by filter with pagination
[**tepsalesV1ReasonscancelsPost**](ReasonCancelApi.md#tepsalesV1ReasonscancelsPost) | **POST** /tepsales/v1/reasonscancels | Create ReasonCancel

<a name="getByIdReasonCancel"></a>
# **getByIdReasonCancel**
> GetAllReasonCancelResponse getByIdReasonCancel(id, opts)

Get ReasonCancel by id

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.ReasonCancelApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | ReasonCancel id
let opts = { 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "12962e7a-2da5-424a-8c77-212585e52995" // String | CSRF Protection
};
apiInstance.getByIdReasonCancel(id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| ReasonCancel id | 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 12962e7a-2da5-424a-8c77-212585e52995]

### Return type

[**GetAllReasonCancelResponse**](GetAllReasonCancelResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="tepsalesV1ReasonscancelsAllGet"></a>
# **tepsalesV1ReasonscancelsAllGet**
> [GetAllReasonCancelResponse] tepsalesV1ReasonscancelsAllGet(opts)

Get All ReasonCancel by filter

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.ReasonCancelApi();
let opts = { 
  'name': "name_example", // String | 
  'description': "description_example", // String | 
  'externalCode': "externalCode_example", // String | 
  'status': new TepsalesserviceApi.ReasonCancelStatus(), // ReasonCancelStatus | 
  'limit': 100, // Number | limit
  'sort': "Id.desc", // String | Sorting atributes, sample: id.desc,name.asc
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "e6b9aa6f-cdd1-4ddc-9b2b-18cf1781aac5" // String | CSRF Protection
};
apiInstance.tepsalesV1ReasonscancelsAllGet(opts, (error, data, response) => {
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
 **description** | **String**|  | [optional] 
 **externalCode** | **String**|  | [optional] 
 **status** | [**ReasonCancelStatus**](.md)|  | [optional] 
 **limit** | **Number**| limit | [optional] [default to 100]
 **sort** | **String**| Sorting atributes, sample: id.desc,name.asc | [optional] [default to Id.desc]
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to e6b9aa6f-cdd1-4ddc-9b2b-18cf1781aac5]

### Return type

[**[GetAllReasonCancelResponse]**](GetAllReasonCancelResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="tepsalesV1ReasonscancelsIdDelete"></a>
# **tepsalesV1ReasonscancelsIdDelete**
> tepsalesV1ReasonscancelsIdDelete(id, opts)

Delete ReasonCancel by Id

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.ReasonCancelApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | ReasonCancel id
let opts = { 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "e2dac97d-6f2c-4f06-a48b-2bf9a36c9bf0" // String | CSRF Protection
};
apiInstance.tepsalesV1ReasonscancelsIdDelete(id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| ReasonCancel id | 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to e2dac97d-6f2c-4f06-a48b-2bf9a36c9bf0]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="tepsalesV1ReasonscancelsIdPatch"></a>
# **tepsalesV1ReasonscancelsIdPatch**
> tepsalesV1ReasonscancelsIdPatch(body, id, opts)

Update part of ReasonCancel

Sample request:                    PATCH /tepsales/v1/ReasonCancel/{id}      [          {              \&quot;op\&quot;: \&quot;replace\&quot;,              \&quot;path\&quot;: \&quot;/atribute_name\&quot;,              \&quot;value\&quot;: \&quot;new value\&quot;          }      ]

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.ReasonCancelApi();
let body = [new TepsalesserviceApi.Operation()]; // [Operation] | Atributes values
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | ReasonCancel id
let opts = { 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "fb4747ab-1a0b-4071-a9dc-c34d75e1d03f" // String | CSRF Protection
};
apiInstance.tepsalesV1ReasonscancelsIdPatch(body, id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| ReasonCancel id | 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to fb4747ab-1a0b-4071-a9dc-c34d75e1d03f]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="tepsalesV1ReasonscancelsIdPut"></a>
# **tepsalesV1ReasonscancelsIdPut**
> tepsalesV1ReasonscancelsIdPut(id, opts)

Update ReasonCancel

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.ReasonCancelApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | ReasonCancel Id
let opts = { 
  'body': new TepsalesserviceApi.PutReasonCancelRequest(), // PutReasonCancelRequest | ReasonCancel to update
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "5afe6eab-d465-4f98-9f91-166457907d5f" // String | CSRF Protection
};
apiInstance.tepsalesV1ReasonscancelsIdPut(id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| ReasonCancel Id | 
 **body** | [**PutReasonCancelRequest**](PutReasonCancelRequest.md)| ReasonCancel to update | [optional] 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 5afe6eab-d465-4f98-9f91-166457907d5f]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="tepsalesV1ReasonscancelsPagedGet"></a>
# **tepsalesV1ReasonscancelsPagedGet**
> GetAllPagedReasonCancelResponse tepsalesV1ReasonscancelsPagedGet(opts)

Get All ReasonCancel by filter with pagination

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.ReasonCancelApi();
let opts = { 
  'name': "name_example", // String | 
  'description': "description_example", // String | 
  'externalCode': "externalCode_example", // String | 
  'status': new TepsalesserviceApi.ReasonCancelStatus(), // ReasonCancelStatus | 
  'page': 56, // Number | 
  'pageSize': 56, // Number | 
  'sort': "Id.desc", // String | Sorting atributes, sample: id.desc,name.asc
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "4e394dd4-e2d5-4a29-8d5e-a488f0a208f6" // String | CSRF Protection
};
apiInstance.tepsalesV1ReasonscancelsPagedGet(opts, (error, data, response) => {
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
 **description** | **String**|  | [optional] 
 **externalCode** | **String**|  | [optional] 
 **status** | [**ReasonCancelStatus**](.md)|  | [optional] 
 **page** | **Number**|  | [optional] 
 **pageSize** | **Number**|  | [optional] 
 **sort** | **String**| Sorting atributes, sample: id.desc,name.asc | [optional] [default to Id.desc]
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 4e394dd4-e2d5-4a29-8d5e-a488f0a208f6]

### Return type

[**GetAllPagedReasonCancelResponse**](GetAllPagedReasonCancelResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="tepsalesV1ReasonscancelsPost"></a>
# **tepsalesV1ReasonscancelsPost**
> PostReasonCancelResponse tepsalesV1ReasonscancelsPost(opts)

Create ReasonCancel

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.ReasonCancelApi();
let opts = { 
  'body': new TepsalesserviceApi.PostReasonCancelRequest(), // PostReasonCancelRequest | ReasonCancel to create
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "2728299c-6f9b-4211-bc0f-f8982069a7ba" // String | CSRF Protection
};
apiInstance.tepsalesV1ReasonscancelsPost(opts, (error, data, response) => {
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
 **body** | [**PostReasonCancelRequest**](PostReasonCancelRequest.md)| ReasonCancel to create | [optional] 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 2728299c-6f9b-4211-bc0f-f8982069a7ba]

### Return type

[**PostReasonCancelResponse**](PostReasonCancelResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

