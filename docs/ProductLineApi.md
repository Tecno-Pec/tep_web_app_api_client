# TepsalesserviceApi.ProductLineApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getByIdProductLine**](ProductLineApi.md#getByIdProductLine) | **GET** /tepsales/v1/productLines/{id} | Get ProductLine by id
[**tepsalesV1ProductLinesAllGet**](ProductLineApi.md#tepsalesV1ProductLinesAllGet) | **GET** /tepsales/v1/productLines/all | Get All ProductLine by filter
[**tepsalesV1ProductLinesIdDelete**](ProductLineApi.md#tepsalesV1ProductLinesIdDelete) | **DELETE** /tepsales/v1/productLines/{id} | Delete ProductLine by Id
[**tepsalesV1ProductLinesIdPatch**](ProductLineApi.md#tepsalesV1ProductLinesIdPatch) | **PATCH** /tepsales/v1/productLines/{id} | Update part of ProductLine
[**tepsalesV1ProductLinesIdPut**](ProductLineApi.md#tepsalesV1ProductLinesIdPut) | **PUT** /tepsales/v1/productLines/{id} | Update ProductLine
[**tepsalesV1ProductLinesPagedGet**](ProductLineApi.md#tepsalesV1ProductLinesPagedGet) | **GET** /tepsales/v1/productLines/paged | Get All ProductLine by filter with pagination
[**tepsalesV1ProductLinesPost**](ProductLineApi.md#tepsalesV1ProductLinesPost) | **POST** /tepsales/v1/productLines | Create ProductLine

<a name="getByIdProductLine"></a>
# **getByIdProductLine**
> GetAllProductLineResponse getByIdProductLine(id, opts)

Get ProductLine by id

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.ProductLineApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | ProductLine id
let opts = { 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "16d83546-9268-4965-916b-e24517e520c7" // String | CSRF Protection
};
apiInstance.getByIdProductLine(id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| ProductLine id | 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 16d83546-9268-4965-916b-e24517e520c7]

### Return type

[**GetAllProductLineResponse**](GetAllProductLineResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="tepsalesV1ProductLinesAllGet"></a>
# **tepsalesV1ProductLinesAllGet**
> [GetAllProductLineResponse] tepsalesV1ProductLinesAllGet(opts)

Get All ProductLine by filter

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.ProductLineApi();
let opts = { 
  'name': "name_example", // String | 
  'externalCode': "externalCode_example", // String | 
  'status': new TepsalesserviceApi.ProductLineStatus(), // ProductLineStatus | 
  'limit': 100, // Number | limit
  'sort': "Id.desc", // String | Sorting atributes, sample: id.desc,name.asc
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "094bcb74-a02e-4fd4-9825-511936eb9fba" // String | CSRF Protection
};
apiInstance.tepsalesV1ProductLinesAllGet(opts, (error, data, response) => {
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
 **status** | [**ProductLineStatus**](.md)|  | [optional] 
 **limit** | **Number**| limit | [optional] [default to 100]
 **sort** | **String**| Sorting atributes, sample: id.desc,name.asc | [optional] [default to Id.desc]
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 094bcb74-a02e-4fd4-9825-511936eb9fba]

### Return type

[**[GetAllProductLineResponse]**](GetAllProductLineResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="tepsalesV1ProductLinesIdDelete"></a>
# **tepsalesV1ProductLinesIdDelete**
> tepsalesV1ProductLinesIdDelete(id, opts)

Delete ProductLine by Id

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.ProductLineApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | ProductLine id
let opts = { 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "fe7ba107-b08c-468b-9e86-a528d08a1283" // String | CSRF Protection
};
apiInstance.tepsalesV1ProductLinesIdDelete(id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| ProductLine id | 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to fe7ba107-b08c-468b-9e86-a528d08a1283]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="tepsalesV1ProductLinesIdPatch"></a>
# **tepsalesV1ProductLinesIdPatch**
> tepsalesV1ProductLinesIdPatch(body, id, opts)

Update part of ProductLine

Sample request:                    PATCH /tepsales/v1/ProductLine/{id}      [          {              \&quot;op\&quot;: \&quot;replace\&quot;,              \&quot;path\&quot;: \&quot;/atribute_name\&quot;,              \&quot;value\&quot;: \&quot;new value\&quot;          }      ]

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.ProductLineApi();
let body = [new TepsalesserviceApi.Operation()]; // [Operation] | Atributes values
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | ProductLine id
let opts = { 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "dd1f5118-4588-40fb-9455-731d236b563b" // String | CSRF Protection
};
apiInstance.tepsalesV1ProductLinesIdPatch(body, id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| ProductLine id | 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to dd1f5118-4588-40fb-9455-731d236b563b]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="tepsalesV1ProductLinesIdPut"></a>
# **tepsalesV1ProductLinesIdPut**
> tepsalesV1ProductLinesIdPut(id, opts)

Update ProductLine

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.ProductLineApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | ProductLine Id
let opts = { 
  'body': new TepsalesserviceApi.PutProductLineRequest(), // PutProductLineRequest | ProductLine to update
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "88e915ea-6037-4114-ad7a-c41160d12d7c" // String | CSRF Protection
};
apiInstance.tepsalesV1ProductLinesIdPut(id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| ProductLine Id | 
 **body** | [**PutProductLineRequest**](PutProductLineRequest.md)| ProductLine to update | [optional] 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 88e915ea-6037-4114-ad7a-c41160d12d7c]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="tepsalesV1ProductLinesPagedGet"></a>
# **tepsalesV1ProductLinesPagedGet**
> GetAllPagedProductLineResponse tepsalesV1ProductLinesPagedGet(opts)

Get All ProductLine by filter with pagination

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.ProductLineApi();
let opts = { 
  'name': "name_example", // String | 
  'externalCode': "externalCode_example", // String | 
  'status': new TepsalesserviceApi.ProductLineStatus(), // ProductLineStatus | 
  'page': 56, // Number | 
  'pageSize': 56, // Number | 
  'sort': "Id.desc", // String | Sorting atributes, sample: id.desc,name.asc
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "9e10895a-5090-496f-85a1-18bc4f433e21" // String | CSRF Protection
};
apiInstance.tepsalesV1ProductLinesPagedGet(opts, (error, data, response) => {
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
 **status** | [**ProductLineStatus**](.md)|  | [optional] 
 **page** | **Number**|  | [optional] 
 **pageSize** | **Number**|  | [optional] 
 **sort** | **String**| Sorting atributes, sample: id.desc,name.asc | [optional] [default to Id.desc]
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 9e10895a-5090-496f-85a1-18bc4f433e21]

### Return type

[**GetAllPagedProductLineResponse**](GetAllPagedProductLineResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="tepsalesV1ProductLinesPost"></a>
# **tepsalesV1ProductLinesPost**
> PostProductLineResponse tepsalesV1ProductLinesPost(opts)

Create ProductLine

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.ProductLineApi();
let opts = { 
  'body': new TepsalesserviceApi.PostProductLineRequest(), // PostProductLineRequest | ProductLine to create
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "3f45063d-f2f8-4810-9c3a-c8d13e93f95a" // String | CSRF Protection
};
apiInstance.tepsalesV1ProductLinesPost(opts, (error, data, response) => {
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
 **body** | [**PostProductLineRequest**](PostProductLineRequest.md)| ProductLine to create | [optional] 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 3f45063d-f2f8-4810-9c3a-c8d13e93f95a]

### Return type

[**PostProductLineResponse**](PostProductLineResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

