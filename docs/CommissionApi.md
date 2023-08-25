# TepsalesserviceApi.CommissionApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getByIdCommission**](CommissionApi.md#getByIdCommission) | **GET** /tepsales/v1/commissions/{id} | Get Commission by id
[**tepsalesV1CommissionsAllGet**](CommissionApi.md#tepsalesV1CommissionsAllGet) | **GET** /tepsales/v1/commissions/all | Get All Commission by filter
[**tepsalesV1CommissionsIdDelete**](CommissionApi.md#tepsalesV1CommissionsIdDelete) | **DELETE** /tepsales/v1/commissions/{id} | Delete Commission by Id
[**tepsalesV1CommissionsIdPatch**](CommissionApi.md#tepsalesV1CommissionsIdPatch) | **PATCH** /tepsales/v1/commissions/{id} | Update part of Commission
[**tepsalesV1CommissionsIdPut**](CommissionApi.md#tepsalesV1CommissionsIdPut) | **PUT** /tepsales/v1/commissions/{id} | Update Commission
[**tepsalesV1CommissionsPagedGet**](CommissionApi.md#tepsalesV1CommissionsPagedGet) | **GET** /tepsales/v1/commissions/paged | Get All Commission by filter with pagination
[**tepsalesV1CommissionsPost**](CommissionApi.md#tepsalesV1CommissionsPost) | **POST** /tepsales/v1/commissions | Create Commission

<a name="getByIdCommission"></a>
# **getByIdCommission**
> GetAllCommissionResponse getByIdCommission(id, opts)

Get Commission by id

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.CommissionApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | Commission id
let opts = { 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "8f01a44a-3b8a-4ddc-a6a9-e12f2c7e5f1d" // String | CSRF Protection
};
apiInstance.getByIdCommission(id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| Commission id | 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 8f01a44a-3b8a-4ddc-a6a9-e12f2c7e5f1d]

### Return type

[**GetAllCommissionResponse**](GetAllCommissionResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="tepsalesV1CommissionsAllGet"></a>
# **tepsalesV1CommissionsAllGet**
> [GetAllCommissionResponse] tepsalesV1CommissionsAllGet(opts)

Get All Commission by filter

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.CommissionApi();
let opts = { 
  'userId': "38400000-8cf0-11bd-b23e-10b96e4ef00d", // String | 
  'productId': "38400000-8cf0-11bd-b23e-10b96e4ef00d", // String | 
  'externalCode': "externalCode_example", // String | 
  'status': new TepsalesserviceApi.CommissionStatus(), // CommissionStatus | 
  'limit': 100, // Number | limit
  'sort': "Id.desc", // String | Sorting atributes, sample: id.desc,name.asc
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "75f37a70-0bfc-4a5b-97ad-b03c0ae6e534" // String | CSRF Protection
};
apiInstance.tepsalesV1CommissionsAllGet(opts, (error, data, response) => {
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
 **userId** | [**String**](.md)|  | [optional] 
 **productId** | [**String**](.md)|  | [optional] 
 **externalCode** | **String**|  | [optional] 
 **status** | [**CommissionStatus**](.md)|  | [optional] 
 **limit** | **Number**| limit | [optional] [default to 100]
 **sort** | **String**| Sorting atributes, sample: id.desc,name.asc | [optional] [default to Id.desc]
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 75f37a70-0bfc-4a5b-97ad-b03c0ae6e534]

### Return type

[**[GetAllCommissionResponse]**](GetAllCommissionResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="tepsalesV1CommissionsIdDelete"></a>
# **tepsalesV1CommissionsIdDelete**
> tepsalesV1CommissionsIdDelete(id, opts)

Delete Commission by Id

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.CommissionApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | Commission id
let opts = { 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "d5acb2c0-2b42-4efa-a5f4-9dce53b911fb" // String | CSRF Protection
};
apiInstance.tepsalesV1CommissionsIdDelete(id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| Commission id | 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to d5acb2c0-2b42-4efa-a5f4-9dce53b911fb]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="tepsalesV1CommissionsIdPatch"></a>
# **tepsalesV1CommissionsIdPatch**
> tepsalesV1CommissionsIdPatch(body, id, opts)

Update part of Commission

Sample request:                    PATCH /tepsales/v1/Commission/{id}      [          {              \&quot;op\&quot;: \&quot;replace\&quot;,              \&quot;path\&quot;: \&quot;/atribute_name\&quot;,              \&quot;value\&quot;: \&quot;new value\&quot;          }      ]

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.CommissionApi();
let body = [new TepsalesserviceApi.Operation()]; // [Operation] | Atributes values
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | Commission id
let opts = { 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "8a3656f7-c3df-47ab-9bc8-b5c6f3575bb2" // String | CSRF Protection
};
apiInstance.tepsalesV1CommissionsIdPatch(body, id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| Commission id | 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 8a3656f7-c3df-47ab-9bc8-b5c6f3575bb2]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="tepsalesV1CommissionsIdPut"></a>
# **tepsalesV1CommissionsIdPut**
> tepsalesV1CommissionsIdPut(id, opts)

Update Commission

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.CommissionApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | Commission Id
let opts = { 
  'body': new TepsalesserviceApi.PutCommissionRequest(), // PutCommissionRequest | Commission to update
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "587cac26-d707-45c3-a34a-e151b770ee87" // String | CSRF Protection
};
apiInstance.tepsalesV1CommissionsIdPut(id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| Commission Id | 
 **body** | [**PutCommissionRequest**](PutCommissionRequest.md)| Commission to update | [optional] 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 587cac26-d707-45c3-a34a-e151b770ee87]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="tepsalesV1CommissionsPagedGet"></a>
# **tepsalesV1CommissionsPagedGet**
> GetAllPagedCommissionResponse tepsalesV1CommissionsPagedGet(opts)

Get All Commission by filter with pagination

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.CommissionApi();
let opts = { 
  'userId': "38400000-8cf0-11bd-b23e-10b96e4ef00d", // String | 
  'productId': "38400000-8cf0-11bd-b23e-10b96e4ef00d", // String | 
  'externalCode': "externalCode_example", // String | 
  'status': new TepsalesserviceApi.CommissionStatus(), // CommissionStatus | 
  'page': 56, // Number | 
  'pageSize': 56, // Number | 
  'sort': "Id.desc", // String | Sorting atributes, sample: id.desc,name.asc
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "75c4dab8-9b7e-40bc-9d4d-102b1b22be42" // String | CSRF Protection
};
apiInstance.tepsalesV1CommissionsPagedGet(opts, (error, data, response) => {
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
 **userId** | [**String**](.md)|  | [optional] 
 **productId** | [**String**](.md)|  | [optional] 
 **externalCode** | **String**|  | [optional] 
 **status** | [**CommissionStatus**](.md)|  | [optional] 
 **page** | **Number**|  | [optional] 
 **pageSize** | **Number**|  | [optional] 
 **sort** | **String**| Sorting atributes, sample: id.desc,name.asc | [optional] [default to Id.desc]
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 75c4dab8-9b7e-40bc-9d4d-102b1b22be42]

### Return type

[**GetAllPagedCommissionResponse**](GetAllPagedCommissionResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="tepsalesV1CommissionsPost"></a>
# **tepsalesV1CommissionsPost**
> PostCommissionResponse tepsalesV1CommissionsPost(opts)

Create Commission

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.CommissionApi();
let opts = { 
  'body': new TepsalesserviceApi.PostCommissionRequest(), // PostCommissionRequest | Commission to create
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "4561ca81-6946-4b59-94ab-1a368f4cb722" // String | CSRF Protection
};
apiInstance.tepsalesV1CommissionsPost(opts, (error, data, response) => {
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
 **body** | [**PostCommissionRequest**](PostCommissionRequest.md)| Commission to create | [optional] 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 4561ca81-6946-4b59-94ab-1a368f4cb722]

### Return type

[**PostCommissionResponse**](PostCommissionResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

