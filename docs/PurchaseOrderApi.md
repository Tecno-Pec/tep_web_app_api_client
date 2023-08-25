# TepsalesserviceApi.PurchaseOrderApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getByIdPurchaseOrder**](PurchaseOrderApi.md#getByIdPurchaseOrder) | **GET** /tepsales/v1/purchaseorders/{id} | Get PurchaseOrder by id
[**tepsalesV1PurchaseordersAllGet**](PurchaseOrderApi.md#tepsalesV1PurchaseordersAllGet) | **GET** /tepsales/v1/purchaseorders/all | Get All PurchaseOrder by filter
[**tepsalesV1PurchaseordersIdApprovePost**](PurchaseOrderApi.md#tepsalesV1PurchaseordersIdApprovePost) | **POST** /tepsales/v1/purchaseorders/{id}/approve | Approve PurchaseOrder
[**tepsalesV1PurchaseordersIdCancelPost**](PurchaseOrderApi.md#tepsalesV1PurchaseordersIdCancelPost) | **POST** /tepsales/v1/purchaseorders/{id}/cancel | Cancel PurchaseOrder
[**tepsalesV1PurchaseordersIdDelete**](PurchaseOrderApi.md#tepsalesV1PurchaseordersIdDelete) | **DELETE** /tepsales/v1/purchaseorders/{id} | Delete PurchaseOrder by Id
[**tepsalesV1PurchaseordersIdPatch**](PurchaseOrderApi.md#tepsalesV1PurchaseordersIdPatch) | **PATCH** /tepsales/v1/purchaseorders/{id} | Update part of PurchaseOrder
[**tepsalesV1PurchaseordersIdPut**](PurchaseOrderApi.md#tepsalesV1PurchaseordersIdPut) | **PUT** /tepsales/v1/purchaseorders/{id} | Update PurchaseOrder
[**tepsalesV1PurchaseordersIdRefusedPost**](PurchaseOrderApi.md#tepsalesV1PurchaseordersIdRefusedPost) | **POST** /tepsales/v1/purchaseorders/{id}/refused | Refused PurchaseOrder
[**tepsalesV1PurchaseordersIdSendtoapprovePost**](PurchaseOrderApi.md#tepsalesV1PurchaseordersIdSendtoapprovePost) | **POST** /tepsales/v1/purchaseorders/{id}/sendtoapprove | SendToApprove PurchaseOrder
[**tepsalesV1PurchaseordersPagedGet**](PurchaseOrderApi.md#tepsalesV1PurchaseordersPagedGet) | **GET** /tepsales/v1/purchaseorders/paged | Get All PurchaseOrder by filter with pagination
[**tepsalesV1PurchaseordersPost**](PurchaseOrderApi.md#tepsalesV1PurchaseordersPost) | **POST** /tepsales/v1/purchaseorders | Create PurchaseOrder

<a name="getByIdPurchaseOrder"></a>
# **getByIdPurchaseOrder**
> GetAllPurchaseOrderResponse getByIdPurchaseOrder(id, opts)

Get PurchaseOrder by id

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.PurchaseOrderApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | PurchaseOrder id
let opts = { 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "ef87c7d1-1c2b-4b81-a8a1-e76500203076" // String | CSRF Protection
};
apiInstance.getByIdPurchaseOrder(id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| PurchaseOrder id | 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to ef87c7d1-1c2b-4b81-a8a1-e76500203076]

### Return type

[**GetAllPurchaseOrderResponse**](GetAllPurchaseOrderResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="tepsalesV1PurchaseordersAllGet"></a>
# **tepsalesV1PurchaseordersAllGet**
> [GetAllPurchaseOrderResponse] tepsalesV1PurchaseordersAllGet(opts)

Get All PurchaseOrder by filter

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.PurchaseOrderApi();
let opts = { 
  'status': new TepsalesserviceApi.PurchaseOrderStatus(), // PurchaseOrderStatus | 
  'clientName': "clientName_example", // String | 
  'clientDocument': "clientDocument_example", // String | 
  'clientId': "38400000-8cf0-11bd-b23e-10b96e4ef00d", // String | 
  'dateRange': 789, // Number | 
  'userCreatedId': "38400000-8cf0-11bd-b23e-10b96e4ef00d", // String | 
  'limit': 100, // Number | limit
  'sort': "Id.desc", // String | Sorting atributes, sample: id.desc,name.asc
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "dd213bb1-970f-4b43-85ae-960ed1a6a0b7" // String | CSRF Protection
};
apiInstance.tepsalesV1PurchaseordersAllGet(opts, (error, data, response) => {
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
 **status** | [**PurchaseOrderStatus**](.md)|  | [optional] 
 **clientName** | **String**|  | [optional] 
 **clientDocument** | **String**|  | [optional] 
 **clientId** | [**String**](.md)|  | [optional] 
 **dateRange** | **Number**|  | [optional] 
 **userCreatedId** | [**String**](.md)|  | [optional] 
 **limit** | **Number**| limit | [optional] [default to 100]
 **sort** | **String**| Sorting atributes, sample: id.desc,name.asc | [optional] [default to Id.desc]
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to dd213bb1-970f-4b43-85ae-960ed1a6a0b7]

### Return type

[**[GetAllPurchaseOrderResponse]**](GetAllPurchaseOrderResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="tepsalesV1PurchaseordersIdApprovePost"></a>
# **tepsalesV1PurchaseordersIdApprovePost**
> tepsalesV1PurchaseordersIdApprovePost(id, opts)

Approve PurchaseOrder

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.PurchaseOrderApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | PurchaseOrder Id
let opts = { 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "ea417f63-d3ce-4d70-a3f6-20bea4af2e03" // String | CSRF Protection
};
apiInstance.tepsalesV1PurchaseordersIdApprovePost(id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| PurchaseOrder Id | 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to ea417f63-d3ce-4d70-a3f6-20bea4af2e03]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="tepsalesV1PurchaseordersIdCancelPost"></a>
# **tepsalesV1PurchaseordersIdCancelPost**
> tepsalesV1PurchaseordersIdCancelPost(id, opts)

Cancel PurchaseOrder

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.PurchaseOrderApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | PurchaseOrder Id
let opts = { 
  'body': new TepsalesserviceApi.PostCancelPurchaseOrderRequest(), // PostCancelPurchaseOrderRequest | PostCancelPurchaseOrderRequest
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "1f41d047-f4e6-4246-8c74-261e66a8c908" // String | CSRF Protection
};
apiInstance.tepsalesV1PurchaseordersIdCancelPost(id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| PurchaseOrder Id | 
 **body** | [**PostCancelPurchaseOrderRequest**](PostCancelPurchaseOrderRequest.md)| PostCancelPurchaseOrderRequest | [optional] 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 1f41d047-f4e6-4246-8c74-261e66a8c908]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="tepsalesV1PurchaseordersIdDelete"></a>
# **tepsalesV1PurchaseordersIdDelete**
> tepsalesV1PurchaseordersIdDelete(id, opts)

Delete PurchaseOrder by Id

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.PurchaseOrderApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | PurchaseOrder id
let opts = { 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "f2e52c34-c947-42bd-b960-04fcde71a970" // String | CSRF Protection
};
apiInstance.tepsalesV1PurchaseordersIdDelete(id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| PurchaseOrder id | 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to f2e52c34-c947-42bd-b960-04fcde71a970]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="tepsalesV1PurchaseordersIdPatch"></a>
# **tepsalesV1PurchaseordersIdPatch**
> tepsalesV1PurchaseordersIdPatch(body, id, opts)

Update part of PurchaseOrder

Sample request:                    PATCH /tepsales/v1/PurchaseOrder/{id}      [          {              \&quot;op\&quot;: \&quot;replace\&quot;,              \&quot;path\&quot;: \&quot;/atribute_name\&quot;,              \&quot;value\&quot;: \&quot;new value\&quot;          }      ]

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.PurchaseOrderApi();
let body = [new TepsalesserviceApi.Operation()]; // [Operation] | Atributes values
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | PurchaseOrder id
let opts = { 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "aa040292-cc46-47f1-9c25-54e6444ad4ad" // String | CSRF Protection
};
apiInstance.tepsalesV1PurchaseordersIdPatch(body, id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| PurchaseOrder id | 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to aa040292-cc46-47f1-9c25-54e6444ad4ad]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="tepsalesV1PurchaseordersIdPut"></a>
# **tepsalesV1PurchaseordersIdPut**
> tepsalesV1PurchaseordersIdPut(id, opts)

Update PurchaseOrder

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.PurchaseOrderApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | PurchaseOrder Id
let opts = { 
  'body': new TepsalesserviceApi.PutPurchaseOrderRequest(), // PutPurchaseOrderRequest | PurchaseOrder to update
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "b8a31b04-7bf5-4d58-9124-870387a49754" // String | CSRF Protection
};
apiInstance.tepsalesV1PurchaseordersIdPut(id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| PurchaseOrder Id | 
 **body** | [**PutPurchaseOrderRequest**](PutPurchaseOrderRequest.md)| PurchaseOrder to update | [optional] 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to b8a31b04-7bf5-4d58-9124-870387a49754]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="tepsalesV1PurchaseordersIdRefusedPost"></a>
# **tepsalesV1PurchaseordersIdRefusedPost**
> tepsalesV1PurchaseordersIdRefusedPost(id, opts)

Refused PurchaseOrder

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.PurchaseOrderApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | PurchaseOrder Id
let opts = { 
  'body': new TepsalesserviceApi.PostRefusedPurchaseOrderRequest(), // PostRefusedPurchaseOrderRequest | Post Refused PurchaseOrderRequest
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "afdd59e2-a196-4979-aa16-4c4370536ef7" // String | CSRF Protection
};
apiInstance.tepsalesV1PurchaseordersIdRefusedPost(id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| PurchaseOrder Id | 
 **body** | [**PostRefusedPurchaseOrderRequest**](PostRefusedPurchaseOrderRequest.md)| Post Refused PurchaseOrderRequest | [optional] 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to afdd59e2-a196-4979-aa16-4c4370536ef7]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="tepsalesV1PurchaseordersIdSendtoapprovePost"></a>
# **tepsalesV1PurchaseordersIdSendtoapprovePost**
> tepsalesV1PurchaseordersIdSendtoapprovePost(id, opts)

SendToApprove PurchaseOrder

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.PurchaseOrderApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | PurchaseOrder Id
let opts = { 
  'areaManagerCode': "areaManagerCode_example", // String | Area Manager Code
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "d75426af-4a4b-4e04-bd3a-70eac8899911" // String | CSRF Protection
};
apiInstance.tepsalesV1PurchaseordersIdSendtoapprovePost(id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| PurchaseOrder Id | 
 **areaManagerCode** | **String**| Area Manager Code | [optional] 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to d75426af-4a4b-4e04-bd3a-70eac8899911]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="tepsalesV1PurchaseordersPagedGet"></a>
# **tepsalesV1PurchaseordersPagedGet**
> GetAllPagedPurchaseOrderResponse tepsalesV1PurchaseordersPagedGet(opts)

Get All PurchaseOrder by filter with pagination

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.PurchaseOrderApi();
let opts = { 
  'status': new TepsalesserviceApi.PurchaseOrderStatus(), // PurchaseOrderStatus | 
  'clientName': "clientName_example", // String | 
  'clientDocument': "clientDocument_example", // String | 
  'clientId': "38400000-8cf0-11bd-b23e-10b96e4ef00d", // String | 
  'dateRange': 789, // Number | 
  'userCreatedId': "38400000-8cf0-11bd-b23e-10b96e4ef00d", // String | 
  'page': 56, // Number | 
  'pageSize': 56, // Number | 
  'sort': "Id.desc", // String | Sorting atributes, sample: id.desc,name.asc
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "813c5216-c27c-4c35-a646-4a66472f93e0" // String | CSRF Protection
};
apiInstance.tepsalesV1PurchaseordersPagedGet(opts, (error, data, response) => {
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
 **status** | [**PurchaseOrderStatus**](.md)|  | [optional] 
 **clientName** | **String**|  | [optional] 
 **clientDocument** | **String**|  | [optional] 
 **clientId** | [**String**](.md)|  | [optional] 
 **dateRange** | **Number**|  | [optional] 
 **userCreatedId** | [**String**](.md)|  | [optional] 
 **page** | **Number**|  | [optional] 
 **pageSize** | **Number**|  | [optional] 
 **sort** | **String**| Sorting atributes, sample: id.desc,name.asc | [optional] [default to Id.desc]
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 813c5216-c27c-4c35-a646-4a66472f93e0]

### Return type

[**GetAllPagedPurchaseOrderResponse**](GetAllPagedPurchaseOrderResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="tepsalesV1PurchaseordersPost"></a>
# **tepsalesV1PurchaseordersPost**
> PostPurchaseOrderResponse tepsalesV1PurchaseordersPost(opts)

Create PurchaseOrder

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.PurchaseOrderApi();
let opts = { 
  'body': new TepsalesserviceApi.PostPurchaseOrderRequest(), // PostPurchaseOrderRequest | PurchaseOrder to create
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "3e9e1cd3-3c41-4b4d-8ac7-470ae7af1253" // String | CSRF Protection
};
apiInstance.tepsalesV1PurchaseordersPost(opts, (error, data, response) => {
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
 **body** | [**PostPurchaseOrderRequest**](PostPurchaseOrderRequest.md)| PurchaseOrder to create | [optional] 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 3e9e1cd3-3c41-4b4d-8ac7-470ae7af1253]

### Return type

[**PostPurchaseOrderResponse**](PostPurchaseOrderResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

