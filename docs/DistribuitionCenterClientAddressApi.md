# TepsalesserviceApi.DistribuitionCenterClientAddressApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getByIdDistribuitionCenterClientAddress**](DistribuitionCenterClientAddressApi.md#getByIdDistribuitionCenterClientAddress) | **GET** /tepsales/v1/distribuitionCenterClientAddress/{id} | Get DistribuitionCenterClientAddress by id
[**tepsalesV1DistribuitionCenterClientAddressAllGet**](DistribuitionCenterClientAddressApi.md#tepsalesV1DistribuitionCenterClientAddressAllGet) | **GET** /tepsales/v1/distribuitionCenterClientAddress/all | Get All DistribuitionCenterClientAddress by filter
[**tepsalesV1DistribuitionCenterClientAddressIdDelete**](DistribuitionCenterClientAddressApi.md#tepsalesV1DistribuitionCenterClientAddressIdDelete) | **DELETE** /tepsales/v1/distribuitionCenterClientAddress/{id} | Delete DistribuitionCenterClientAddress by Id
[**tepsalesV1DistribuitionCenterClientAddressIdPatch**](DistribuitionCenterClientAddressApi.md#tepsalesV1DistribuitionCenterClientAddressIdPatch) | **PATCH** /tepsales/v1/distribuitionCenterClientAddress/{id} | Update part of DistribuitionCenterClientAddress
[**tepsalesV1DistribuitionCenterClientAddressIdPut**](DistribuitionCenterClientAddressApi.md#tepsalesV1DistribuitionCenterClientAddressIdPut) | **PUT** /tepsales/v1/distribuitionCenterClientAddress/{id} | Update DistribuitionCenterClientAddress
[**tepsalesV1DistribuitionCenterClientAddressPagedGet**](DistribuitionCenterClientAddressApi.md#tepsalesV1DistribuitionCenterClientAddressPagedGet) | **GET** /tepsales/v1/distribuitionCenterClientAddress/paged | Get All DistribuitionCenterClientAddress by filter with pagination
[**tepsalesV1DistribuitionCenterClientAddressPost**](DistribuitionCenterClientAddressApi.md#tepsalesV1DistribuitionCenterClientAddressPost) | **POST** /tepsales/v1/distribuitionCenterClientAddress | Create DistribuitionCenterClientAddress

<a name="getByIdDistribuitionCenterClientAddress"></a>
# **getByIdDistribuitionCenterClientAddress**
> GetAllDistribuitionCenterClientAddressResponse getByIdDistribuitionCenterClientAddress(id, opts)

Get DistribuitionCenterClientAddress by id

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.DistribuitionCenterClientAddressApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | DistribuitionCenterClientAddress id
let opts = { 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "b88f06d5-3f72-479f-aa79-154f451fddcd" // String | CSRF Protection
};
apiInstance.getByIdDistribuitionCenterClientAddress(id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| DistribuitionCenterClientAddress id | 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to b88f06d5-3f72-479f-aa79-154f451fddcd]

### Return type

[**GetAllDistribuitionCenterClientAddressResponse**](GetAllDistribuitionCenterClientAddressResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="tepsalesV1DistribuitionCenterClientAddressAllGet"></a>
# **tepsalesV1DistribuitionCenterClientAddressAllGet**
> [GetAllDistribuitionCenterClientAddressResponse] tepsalesV1DistribuitionCenterClientAddressAllGet(opts)

Get All DistribuitionCenterClientAddress by filter

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.DistribuitionCenterClientAddressApi();
let opts = { 
  'distribuitionCenterId': "38400000-8cf0-11bd-b23e-10b96e4ef00d", // String | 
  'addressId': "38400000-8cf0-11bd-b23e-10b96e4ef00d", // String | 
  'externalCode': "externalCode_example", // String | 
  'status': new TepsalesserviceApi.DistribuitionCenterClientAddressStatus(), // DistribuitionCenterClientAddressStatus | 
  'limit': 100, // Number | limit
  'sort': "Id.desc", // String | Sorting atributes, sample: id.desc,name.asc
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "ad6ce138-809f-499e-9cf9-40dc5effa745" // String | CSRF Protection
};
apiInstance.tepsalesV1DistribuitionCenterClientAddressAllGet(opts, (error, data, response) => {
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
 **distribuitionCenterId** | [**String**](.md)|  | [optional] 
 **addressId** | [**String**](.md)|  | [optional] 
 **externalCode** | **String**|  | [optional] 
 **status** | [**DistribuitionCenterClientAddressStatus**](.md)|  | [optional] 
 **limit** | **Number**| limit | [optional] [default to 100]
 **sort** | **String**| Sorting atributes, sample: id.desc,name.asc | [optional] [default to Id.desc]
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to ad6ce138-809f-499e-9cf9-40dc5effa745]

### Return type

[**[GetAllDistribuitionCenterClientAddressResponse]**](GetAllDistribuitionCenterClientAddressResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="tepsalesV1DistribuitionCenterClientAddressIdDelete"></a>
# **tepsalesV1DistribuitionCenterClientAddressIdDelete**
> tepsalesV1DistribuitionCenterClientAddressIdDelete(id, opts)

Delete DistribuitionCenterClientAddress by Id

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.DistribuitionCenterClientAddressApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | DistribuitionCenterClientAddress id
let opts = { 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "ee7229bf-9b5e-4caa-ac83-4ab9694163e3" // String | CSRF Protection
};
apiInstance.tepsalesV1DistribuitionCenterClientAddressIdDelete(id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| DistribuitionCenterClientAddress id | 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to ee7229bf-9b5e-4caa-ac83-4ab9694163e3]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="tepsalesV1DistribuitionCenterClientAddressIdPatch"></a>
# **tepsalesV1DistribuitionCenterClientAddressIdPatch**
> tepsalesV1DistribuitionCenterClientAddressIdPatch(body, id, opts)

Update part of DistribuitionCenterClientAddress

Sample request:                    PATCH /tepsales/v1/DistribuitionCenterClientAddress/{id}      [          {              \&quot;op\&quot;: \&quot;replace\&quot;,              \&quot;path\&quot;: \&quot;/atribute_name\&quot;,              \&quot;value\&quot;: \&quot;new value\&quot;          }      ]

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.DistribuitionCenterClientAddressApi();
let body = [new TepsalesserviceApi.Operation()]; // [Operation] | Atributes values
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | DistribuitionCenterClientAddress id
let opts = { 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "5c8ec997-c449-4a97-a7f5-003ad3838ab9" // String | CSRF Protection
};
apiInstance.tepsalesV1DistribuitionCenterClientAddressIdPatch(body, id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| DistribuitionCenterClientAddress id | 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 5c8ec997-c449-4a97-a7f5-003ad3838ab9]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="tepsalesV1DistribuitionCenterClientAddressIdPut"></a>
# **tepsalesV1DistribuitionCenterClientAddressIdPut**
> tepsalesV1DistribuitionCenterClientAddressIdPut(id, opts)

Update DistribuitionCenterClientAddress

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.DistribuitionCenterClientAddressApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | DistribuitionCenterClientAddress Id
let opts = { 
  'body': new TepsalesserviceApi.PutDistribuitionCenterClientAddressRequest(), // PutDistribuitionCenterClientAddressRequest | DistribuitionCenterClientAddress to update
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "df0e41ff-de7e-44be-9413-e8605f6ddda2" // String | CSRF Protection
};
apiInstance.tepsalesV1DistribuitionCenterClientAddressIdPut(id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| DistribuitionCenterClientAddress Id | 
 **body** | [**PutDistribuitionCenterClientAddressRequest**](PutDistribuitionCenterClientAddressRequest.md)| DistribuitionCenterClientAddress to update | [optional] 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to df0e41ff-de7e-44be-9413-e8605f6ddda2]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="tepsalesV1DistribuitionCenterClientAddressPagedGet"></a>
# **tepsalesV1DistribuitionCenterClientAddressPagedGet**
> GetAllPagedDistribuitionCenterClientAddressResponse tepsalesV1DistribuitionCenterClientAddressPagedGet(opts)

Get All DistribuitionCenterClientAddress by filter with pagination

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.DistribuitionCenterClientAddressApi();
let opts = { 
  'distribuitionCenterId': "38400000-8cf0-11bd-b23e-10b96e4ef00d", // String | 
  'addressId': "38400000-8cf0-11bd-b23e-10b96e4ef00d", // String | 
  'externalCode': "externalCode_example", // String | 
  'status': new TepsalesserviceApi.DistribuitionCenterClientAddressStatus(), // DistribuitionCenterClientAddressStatus | 
  'page': 56, // Number | 
  'pageSize': 56, // Number | 
  'sort': "Id.desc", // String | Sorting atributes, sample: id.desc,name.asc
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "b9362388-395b-4cee-964d-41a4d363c3ed" // String | CSRF Protection
};
apiInstance.tepsalesV1DistribuitionCenterClientAddressPagedGet(opts, (error, data, response) => {
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
 **distribuitionCenterId** | [**String**](.md)|  | [optional] 
 **addressId** | [**String**](.md)|  | [optional] 
 **externalCode** | **String**|  | [optional] 
 **status** | [**DistribuitionCenterClientAddressStatus**](.md)|  | [optional] 
 **page** | **Number**|  | [optional] 
 **pageSize** | **Number**|  | [optional] 
 **sort** | **String**| Sorting atributes, sample: id.desc,name.asc | [optional] [default to Id.desc]
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to b9362388-395b-4cee-964d-41a4d363c3ed]

### Return type

[**GetAllPagedDistribuitionCenterClientAddressResponse**](GetAllPagedDistribuitionCenterClientAddressResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="tepsalesV1DistribuitionCenterClientAddressPost"></a>
# **tepsalesV1DistribuitionCenterClientAddressPost**
> PostDistribuitionCenterClientAddressResponse tepsalesV1DistribuitionCenterClientAddressPost(opts)

Create DistribuitionCenterClientAddress

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.DistribuitionCenterClientAddressApi();
let opts = { 
  'body': new TepsalesserviceApi.PostDistribuitionCenterClientAddressRequest(), // PostDistribuitionCenterClientAddressRequest | DistribuitionCenterClientAddress to create
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "acb9b6af-a062-433d-852e-bf64adb15272" // String | CSRF Protection
};
apiInstance.tepsalesV1DistribuitionCenterClientAddressPost(opts, (error, data, response) => {
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
 **body** | [**PostDistribuitionCenterClientAddressRequest**](PostDistribuitionCenterClientAddressRequest.md)| DistribuitionCenterClientAddress to create | [optional] 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to acb9b6af-a062-433d-852e-bf64adb15272]

### Return type

[**PostDistribuitionCenterClientAddressResponse**](PostDistribuitionCenterClientAddressResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

