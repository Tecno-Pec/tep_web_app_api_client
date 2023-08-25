# TepsalesserviceApi.ProductGroupApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getByExternalCodeProductGroupController**](ProductGroupApi.md#getByExternalCodeProductGroupController) | **GET** /tepsales/v1/productGroups/integration/{externalCode} | Get ProductGroup by external Code
[**getByIdProductGroup**](ProductGroupApi.md#getByIdProductGroup) | **GET** /tepsales/v1/productGroups/{id} | Get ProductGroup by id
[**tepsalesV1ProductGroupsAllGet**](ProductGroupApi.md#tepsalesV1ProductGroupsAllGet) | **GET** /tepsales/v1/productGroups/all | Get All ProductGroup by filter
[**tepsalesV1ProductGroupsIdDelete**](ProductGroupApi.md#tepsalesV1ProductGroupsIdDelete) | **DELETE** /tepsales/v1/productGroups/{id} | Delete ProductGroup by Id
[**tepsalesV1ProductGroupsIdPatch**](ProductGroupApi.md#tepsalesV1ProductGroupsIdPatch) | **PATCH** /tepsales/v1/productGroups/{id} | Update part of ProductGroup
[**tepsalesV1ProductGroupsIdPut**](ProductGroupApi.md#tepsalesV1ProductGroupsIdPut) | **PUT** /tepsales/v1/productGroups/{id} | Update ProductGroup
[**tepsalesV1ProductGroupsPagedGet**](ProductGroupApi.md#tepsalesV1ProductGroupsPagedGet) | **GET** /tepsales/v1/productGroups/paged | Get All ProductGroup by filter with pagination
[**tepsalesV1ProductGroupsPost**](ProductGroupApi.md#tepsalesV1ProductGroupsPost) | **POST** /tepsales/v1/productGroups | Create ProductGroup

<a name="getByExternalCodeProductGroupController"></a>
# **getByExternalCodeProductGroupController**
> GetAllProductGroupResponse getByExternalCodeProductGroupController(externalCode, opts)

Get ProductGroup by external Code

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.ProductGroupApi();
let externalCode = "externalCode_example"; // String | ProductGroup external code
let opts = { 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "91dd9d21-cebd-48a5-a8c3-c4034c09edba" // String | CSRF Protection
};
apiInstance.getByExternalCodeProductGroupController(externalCode, opts, (error, data, response) => {
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
 **externalCode** | **String**| ProductGroup external code | 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 91dd9d21-cebd-48a5-a8c3-c4034c09edba]

### Return type

[**GetAllProductGroupResponse**](GetAllProductGroupResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getByIdProductGroup"></a>
# **getByIdProductGroup**
> GetAllProductGroupResponse getByIdProductGroup(id, opts)

Get ProductGroup by id

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.ProductGroupApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | ProductGroup id
let opts = { 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "f72d0448-a30e-4dcf-9f23-5c2600262f41" // String | CSRF Protection
};
apiInstance.getByIdProductGroup(id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| ProductGroup id | 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to f72d0448-a30e-4dcf-9f23-5c2600262f41]

### Return type

[**GetAllProductGroupResponse**](GetAllProductGroupResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="tepsalesV1ProductGroupsAllGet"></a>
# **tepsalesV1ProductGroupsAllGet**
> [GetAllProductGroupResponse] tepsalesV1ProductGroupsAllGet(opts)

Get All ProductGroup by filter

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.ProductGroupApi();
let opts = { 
  'name': "name_example", // String | 
  'externalCode': "externalCode_example", // String | 
  'status': new TepsalesserviceApi.ProductGroupStatus(), // ProductGroupStatus | 
  'limit': 100, // Number | limit
  'sort': "Id.desc", // String | Sorting atributes, sample: id.desc,name.asc
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "ad66bfbc-60ca-4b7b-8c2b-6f8bd676bd07" // String | CSRF Protection
};
apiInstance.tepsalesV1ProductGroupsAllGet(opts, (error, data, response) => {
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
 **externalCode** | **String**|  | [optional] 
 **status** | [**ProductGroupStatus**](.md)|  | [optional] 
 **limit** | **Number**| limit | [optional] [default to 100]
 **sort** | **String**| Sorting atributes, sample: id.desc,name.asc | [optional] [default to Id.desc]
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to ad66bfbc-60ca-4b7b-8c2b-6f8bd676bd07]

### Return type

[**[GetAllProductGroupResponse]**](GetAllProductGroupResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="tepsalesV1ProductGroupsIdDelete"></a>
# **tepsalesV1ProductGroupsIdDelete**
> tepsalesV1ProductGroupsIdDelete(id, opts)

Delete ProductGroup by Id

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.ProductGroupApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | ProductGroup id
let opts = { 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "8d21ad76-70fd-4068-ac1e-b886f30be7d2" // String | CSRF Protection
};
apiInstance.tepsalesV1ProductGroupsIdDelete(id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| ProductGroup id | 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 8d21ad76-70fd-4068-ac1e-b886f30be7d2]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="tepsalesV1ProductGroupsIdPatch"></a>
# **tepsalesV1ProductGroupsIdPatch**
> tepsalesV1ProductGroupsIdPatch(body, id, opts)

Update part of ProductGroup

Sample request:                    PATCH /tepsales/v1/ProductGroup/{id}      [          {              \&quot;op\&quot;: \&quot;replace\&quot;,              \&quot;path\&quot;: \&quot;/atribute_name\&quot;,              \&quot;value\&quot;: \&quot;new value\&quot;          }      ]

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.ProductGroupApi();
let body = [new TepsalesserviceApi.Operation()]; // [Operation] | Atributes values
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | ProductGroup id
let opts = { 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "1080a9b5-74eb-4ec4-a1a0-a8a21167f325" // String | CSRF Protection
};
apiInstance.tepsalesV1ProductGroupsIdPatch(body, id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| ProductGroup id | 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 1080a9b5-74eb-4ec4-a1a0-a8a21167f325]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="tepsalesV1ProductGroupsIdPut"></a>
# **tepsalesV1ProductGroupsIdPut**
> tepsalesV1ProductGroupsIdPut(id, opts)

Update ProductGroup

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.ProductGroupApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | ProductGroup Id
let opts = { 
  'body': new TepsalesserviceApi.PutProductGroupRequest(), // PutProductGroupRequest | ProductGroup to update
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "9b4dbd5d-199d-4c06-be3f-a3798a2cfc8a" // String | CSRF Protection
};
apiInstance.tepsalesV1ProductGroupsIdPut(id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| ProductGroup Id | 
 **body** | [**PutProductGroupRequest**](PutProductGroupRequest.md)| ProductGroup to update | [optional] 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 9b4dbd5d-199d-4c06-be3f-a3798a2cfc8a]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="tepsalesV1ProductGroupsPagedGet"></a>
# **tepsalesV1ProductGroupsPagedGet**
> GetAllPagedProductGroupResponse tepsalesV1ProductGroupsPagedGet(opts)

Get All ProductGroup by filter with pagination

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.ProductGroupApi();
let opts = { 
  'name': "name_example", // String | 
  'externalCode': "externalCode_example", // String | 
  'status': new TepsalesserviceApi.ProductGroupStatus(), // ProductGroupStatus | 
  'page': 56, // Number | 
  'pageSize': 56, // Number | 
  'sort': "Id.desc", // String | Sorting atributes, sample: id.desc,name.asc
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "18117c5d-c2f2-4854-bbf1-ccab8dbc5e3c" // String | CSRF Protection
};
apiInstance.tepsalesV1ProductGroupsPagedGet(opts, (error, data, response) => {
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
 **externalCode** | **String**|  | [optional] 
 **status** | [**ProductGroupStatus**](.md)|  | [optional] 
 **page** | **Number**|  | [optional] 
 **pageSize** | **Number**|  | [optional] 
 **sort** | **String**| Sorting atributes, sample: id.desc,name.asc | [optional] [default to Id.desc]
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 18117c5d-c2f2-4854-bbf1-ccab8dbc5e3c]

### Return type

[**GetAllPagedProductGroupResponse**](GetAllPagedProductGroupResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="tepsalesV1ProductGroupsPost"></a>
# **tepsalesV1ProductGroupsPost**
> PostProductGroupResponse tepsalesV1ProductGroupsPost(opts)

Create ProductGroup

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.ProductGroupApi();
let opts = { 
  'body': new TepsalesserviceApi.PostProductGroupRequest(), // PostProductGroupRequest | ProductGroup to create
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "320cd485-ffd3-4eef-b1c6-683e1dd00341" // String | CSRF Protection
};
apiInstance.tepsalesV1ProductGroupsPost(opts, (error, data, response) => {
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
 **body** | [**PostProductGroupRequest**](PostProductGroupRequest.md)| ProductGroup to create | [optional] 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 320cd485-ffd3-4eef-b1c6-683e1dd00341]

### Return type

[**PostProductGroupResponse**](PostProductGroupResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

