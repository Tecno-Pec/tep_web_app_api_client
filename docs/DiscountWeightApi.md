# TepsalesserviceApi.DiscountWeightApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getByIdDiscountWeight**](DiscountWeightApi.md#getByIdDiscountWeight) | **GET** /tepsales/v1/discountWeights/{id} | Get DiscountWeight by id
[**tepsalesV1DiscountWeightsAllGet**](DiscountWeightApi.md#tepsalesV1DiscountWeightsAllGet) | **GET** /tepsales/v1/discountWeights/all | Get All DiscountWeight by filter
[**tepsalesV1DiscountWeightsIdDelete**](DiscountWeightApi.md#tepsalesV1DiscountWeightsIdDelete) | **DELETE** /tepsales/v1/discountWeights/{id} | Delete DiscountWeight by Id
[**tepsalesV1DiscountWeightsIdPatch**](DiscountWeightApi.md#tepsalesV1DiscountWeightsIdPatch) | **PATCH** /tepsales/v1/discountWeights/{id} | Update part of DiscountWeight
[**tepsalesV1DiscountWeightsIdPut**](DiscountWeightApi.md#tepsalesV1DiscountWeightsIdPut) | **PUT** /tepsales/v1/discountWeights/{id} | Update DiscountWeight
[**tepsalesV1DiscountWeightsPagedGet**](DiscountWeightApi.md#tepsalesV1DiscountWeightsPagedGet) | **GET** /tepsales/v1/discountWeights/paged | Get All DiscountWeight by filter with pagination
[**tepsalesV1DiscountWeightsPost**](DiscountWeightApi.md#tepsalesV1DiscountWeightsPost) | **POST** /tepsales/v1/discountWeights | Create DiscountWeight

<a name="getByIdDiscountWeight"></a>
# **getByIdDiscountWeight**
> GetAllDiscountWeightResponse getByIdDiscountWeight(id, opts)

Get DiscountWeight by id

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.DiscountWeightApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | DiscountWeight id
let opts = { 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "2b8dc51c-87b2-4a23-a80a-c498de80493c" // String | CSRF Protection
};
apiInstance.getByIdDiscountWeight(id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| DiscountWeight id | 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 2b8dc51c-87b2-4a23-a80a-c498de80493c]

### Return type

[**GetAllDiscountWeightResponse**](GetAllDiscountWeightResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="tepsalesV1DiscountWeightsAllGet"></a>
# **tepsalesV1DiscountWeightsAllGet**
> [GetAllDiscountWeightResponse] tepsalesV1DiscountWeightsAllGet(opts)

Get All DiscountWeight by filter

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.DiscountWeightApi();
let opts = { 
  'quantity': 1.2, // Number | 
  'percent': 1.2, // Number | 
  'limit': 100, // Number | limit
  'sort': "Id.desc", // String | Sorting atributes, sample: id.desc,name.asc
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "60447f9d-73f5-4d87-afce-3f6d0940e532" // String | CSRF Protection
};
apiInstance.tepsalesV1DiscountWeightsAllGet(opts, (error, data, response) => {
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
 **quantity** | **Number**|  | [optional] 
 **percent** | **Number**|  | [optional] 
 **limit** | **Number**| limit | [optional] [default to 100]
 **sort** | **String**| Sorting atributes, sample: id.desc,name.asc | [optional] [default to Id.desc]
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 60447f9d-73f5-4d87-afce-3f6d0940e532]

### Return type

[**[GetAllDiscountWeightResponse]**](GetAllDiscountWeightResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="tepsalesV1DiscountWeightsIdDelete"></a>
# **tepsalesV1DiscountWeightsIdDelete**
> tepsalesV1DiscountWeightsIdDelete(id, opts)

Delete DiscountWeight by Id

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.DiscountWeightApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | DiscountWeight id
let opts = { 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "d8ceffeb-0adc-45a2-8d5b-477d6f0eb086" // String | CSRF Protection
};
apiInstance.tepsalesV1DiscountWeightsIdDelete(id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| DiscountWeight id | 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to d8ceffeb-0adc-45a2-8d5b-477d6f0eb086]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="tepsalesV1DiscountWeightsIdPatch"></a>
# **tepsalesV1DiscountWeightsIdPatch**
> tepsalesV1DiscountWeightsIdPatch(body, id, opts)

Update part of DiscountWeight

Sample request:                    PATCH /tepsales/v1/DiscountWeight/{id}      [          {              \&quot;op\&quot;: \&quot;replace\&quot;,              \&quot;path\&quot;: \&quot;/atribute_name\&quot;,              \&quot;value\&quot;: \&quot;new value\&quot;          }      ]

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.DiscountWeightApi();
let body = [new TepsalesserviceApi.Operation()]; // [Operation] | Atributes values
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | DiscountWeight id
let opts = { 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "bc7aadd7-6a35-4b2d-8971-55c8024cbfb9" // String | CSRF Protection
};
apiInstance.tepsalesV1DiscountWeightsIdPatch(body, id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| DiscountWeight id | 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to bc7aadd7-6a35-4b2d-8971-55c8024cbfb9]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="tepsalesV1DiscountWeightsIdPut"></a>
# **tepsalesV1DiscountWeightsIdPut**
> tepsalesV1DiscountWeightsIdPut(id, opts)

Update DiscountWeight

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.DiscountWeightApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | DiscountWeight Id
let opts = { 
  'body': new TepsalesserviceApi.PutDiscountWeightRequest(), // PutDiscountWeightRequest | DiscountWeight to update
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "00cbdd97-823c-4ee9-a3c3-c8f95e1904ed" // String | CSRF Protection
};
apiInstance.tepsalesV1DiscountWeightsIdPut(id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| DiscountWeight Id | 
 **body** | [**PutDiscountWeightRequest**](PutDiscountWeightRequest.md)| DiscountWeight to update | [optional] 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 00cbdd97-823c-4ee9-a3c3-c8f95e1904ed]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="tepsalesV1DiscountWeightsPagedGet"></a>
# **tepsalesV1DiscountWeightsPagedGet**
> GetAllPagedDiscountWeightResponse tepsalesV1DiscountWeightsPagedGet(opts)

Get All DiscountWeight by filter with pagination

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.DiscountWeightApi();
let opts = { 
  'quantity': 1.2, // Number | 
  'percent': 1.2, // Number | 
  'page': 56, // Number | 
  'pageSize': 56, // Number | 
  'sort': "Id.desc", // String | Sorting atributes, sample: id.desc,name.asc
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "e28d7fba-f45e-4acd-9d21-2ff48a8baf38" // String | CSRF Protection
};
apiInstance.tepsalesV1DiscountWeightsPagedGet(opts, (error, data, response) => {
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
 **quantity** | **Number**|  | [optional] 
 **percent** | **Number**|  | [optional] 
 **page** | **Number**|  | [optional] 
 **pageSize** | **Number**|  | [optional] 
 **sort** | **String**| Sorting atributes, sample: id.desc,name.asc | [optional] [default to Id.desc]
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to e28d7fba-f45e-4acd-9d21-2ff48a8baf38]

### Return type

[**GetAllPagedDiscountWeightResponse**](GetAllPagedDiscountWeightResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="tepsalesV1DiscountWeightsPost"></a>
# **tepsalesV1DiscountWeightsPost**
> PostDiscountWeightResponse tepsalesV1DiscountWeightsPost(opts)

Create DiscountWeight

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.DiscountWeightApi();
let opts = { 
  'body': new TepsalesserviceApi.PostDiscountWeightRequest(), // PostDiscountWeightRequest | DiscountWeight to create
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "25519871-d564-4439-b700-c6658f3da13b" // String | CSRF Protection
};
apiInstance.tepsalesV1DiscountWeightsPost(opts, (error, data, response) => {
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
 **body** | [**PostDiscountWeightRequest**](PostDiscountWeightRequest.md)| DiscountWeight to create | [optional] 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 25519871-d564-4439-b700-c6658f3da13b]

### Return type

[**PostDiscountWeightResponse**](PostDiscountWeightResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

