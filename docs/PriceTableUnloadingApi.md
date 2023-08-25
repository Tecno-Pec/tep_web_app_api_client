# TepsalesserviceApi.PriceTableUnloadingApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getByIdPriceTableUnloading**](PriceTableUnloadingApi.md#getByIdPriceTableUnloading) | **GET** /tepsales/v1/pricetableunloading/{id} | Get PriceTableUnloading by id
[**tepsalesV1PricetableunloadingAllGet**](PriceTableUnloadingApi.md#tepsalesV1PricetableunloadingAllGet) | **GET** /tepsales/v1/pricetableunloading/all | Get All PriceTableUnloading by filter
[**tepsalesV1PricetableunloadingIdDelete**](PriceTableUnloadingApi.md#tepsalesV1PricetableunloadingIdDelete) | **DELETE** /tepsales/v1/pricetableunloading/{id} | Delete PriceTableUnloading by Id
[**tepsalesV1PricetableunloadingIdPatch**](PriceTableUnloadingApi.md#tepsalesV1PricetableunloadingIdPatch) | **PATCH** /tepsales/v1/pricetableunloading/{id} | Update part of PriceTableUnloading
[**tepsalesV1PricetableunloadingIdPut**](PriceTableUnloadingApi.md#tepsalesV1PricetableunloadingIdPut) | **PUT** /tepsales/v1/pricetableunloading/{id} | Update PriceTableUnloading
[**tepsalesV1PricetableunloadingPagedGet**](PriceTableUnloadingApi.md#tepsalesV1PricetableunloadingPagedGet) | **GET** /tepsales/v1/pricetableunloading/paged | Get All PriceTableUnloading by filter with pagination
[**tepsalesV1PricetableunloadingPost**](PriceTableUnloadingApi.md#tepsalesV1PricetableunloadingPost) | **POST** /tepsales/v1/pricetableunloading | Create PriceTableUnloading

<a name="getByIdPriceTableUnloading"></a>
# **getByIdPriceTableUnloading**
> GetAllPriceTableUnloadingResponse getByIdPriceTableUnloading(id, opts)

Get PriceTableUnloading by id

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.PriceTableUnloadingApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | PriceTableUnloading id
let opts = { 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "af775b66-3974-411e-9c83-d9b2385bc8fe" // String | CSRF Protection
};
apiInstance.getByIdPriceTableUnloading(id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| PriceTableUnloading id | 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to af775b66-3974-411e-9c83-d9b2385bc8fe]

### Return type

[**GetAllPriceTableUnloadingResponse**](GetAllPriceTableUnloadingResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="tepsalesV1PricetableunloadingAllGet"></a>
# **tepsalesV1PricetableunloadingAllGet**
> [GetAllPriceTableUnloadingResponse] tepsalesV1PricetableunloadingAllGet(opts)

Get All PriceTableUnloading by filter

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.PriceTableUnloadingApi();
let opts = { 
  'productGroupId': "38400000-8cf0-11bd-b23e-10b96e4ef00d", // String | 
  'paymentConditionId': "38400000-8cf0-11bd-b23e-10b96e4ef00d", // String | 
  'status': new TepsalesserviceApi.PriceTableUnloadingStatus(), // PriceTableUnloadingStatus | 
  'externalCode': "externalCode_example", // String | 
  'limit': 100, // Number | limit
  'sort': "Id.desc", // String | Sorting atributes, sample: id.desc,name.asc
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "09680a52-fabb-4fe0-8e37-1a7feb10c160" // String | CSRF Protection
};
apiInstance.tepsalesV1PricetableunloadingAllGet(opts, (error, data, response) => {
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
 **productGroupId** | [**String**](.md)|  | [optional] 
 **paymentConditionId** | [**String**](.md)|  | [optional] 
 **status** | [**PriceTableUnloadingStatus**](.md)|  | [optional] 
 **externalCode** | **String**|  | [optional] 
 **limit** | **Number**| limit | [optional] [default to 100]
 **sort** | **String**| Sorting atributes, sample: id.desc,name.asc | [optional] [default to Id.desc]
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 09680a52-fabb-4fe0-8e37-1a7feb10c160]

### Return type

[**[GetAllPriceTableUnloadingResponse]**](GetAllPriceTableUnloadingResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="tepsalesV1PricetableunloadingIdDelete"></a>
# **tepsalesV1PricetableunloadingIdDelete**
> tepsalesV1PricetableunloadingIdDelete(id, opts)

Delete PriceTableUnloading by Id

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.PriceTableUnloadingApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | PriceTableUnloading id
let opts = { 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "12566d8b-fb9b-4e19-ab92-79af4620325d" // String | CSRF Protection
};
apiInstance.tepsalesV1PricetableunloadingIdDelete(id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| PriceTableUnloading id | 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 12566d8b-fb9b-4e19-ab92-79af4620325d]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="tepsalesV1PricetableunloadingIdPatch"></a>
# **tepsalesV1PricetableunloadingIdPatch**
> tepsalesV1PricetableunloadingIdPatch(body, id, opts)

Update part of PriceTableUnloading

Sample request:                    PATCH /tepsales/v1/PriceTableUnloading/{id}      [          {              \&quot;op\&quot;: \&quot;replace\&quot;,              \&quot;path\&quot;: \&quot;/atribute_name\&quot;,              \&quot;value\&quot;: \&quot;new value\&quot;          }      ]

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.PriceTableUnloadingApi();
let body = [new TepsalesserviceApi.Operation()]; // [Operation] | Atributes values
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | PriceTableUnloading id
let opts = { 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "962cb8a4-d189-4d8a-8d12-1fa210e0a17d" // String | CSRF Protection
};
apiInstance.tepsalesV1PricetableunloadingIdPatch(body, id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| PriceTableUnloading id | 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 962cb8a4-d189-4d8a-8d12-1fa210e0a17d]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="tepsalesV1PricetableunloadingIdPut"></a>
# **tepsalesV1PricetableunloadingIdPut**
> tepsalesV1PricetableunloadingIdPut(id, opts)

Update PriceTableUnloading

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.PriceTableUnloadingApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | PriceTableUnloading Id
let opts = { 
  'body': new TepsalesserviceApi.PutPriceTableUnloadingRequest(), // PutPriceTableUnloadingRequest | PriceTableUnloading to update
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "bb7db05b-ee70-478f-a836-21105db10506" // String | CSRF Protection
};
apiInstance.tepsalesV1PricetableunloadingIdPut(id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| PriceTableUnloading Id | 
 **body** | [**PutPriceTableUnloadingRequest**](PutPriceTableUnloadingRequest.md)| PriceTableUnloading to update | [optional] 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to bb7db05b-ee70-478f-a836-21105db10506]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="tepsalesV1PricetableunloadingPagedGet"></a>
# **tepsalesV1PricetableunloadingPagedGet**
> GetAllPagedPriceTableUnloadingResponse tepsalesV1PricetableunloadingPagedGet(opts)

Get All PriceTableUnloading by filter with pagination

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.PriceTableUnloadingApi();
let opts = { 
  'productGroupId': "38400000-8cf0-11bd-b23e-10b96e4ef00d", // String | 
  'paymentConditionId': "38400000-8cf0-11bd-b23e-10b96e4ef00d", // String | 
  'status': new TepsalesserviceApi.PriceTableUnloadingStatus(), // PriceTableUnloadingStatus | 
  'externalCode': "externalCode_example", // String | 
  'page': 56, // Number | 
  'pageSize': 56, // Number | 
  'sort': "Id.desc", // String | Sorting atributes, sample: id.desc,name.asc
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "869520b7-77ab-436a-851d-cc3a89c52fb2" // String | CSRF Protection
};
apiInstance.tepsalesV1PricetableunloadingPagedGet(opts, (error, data, response) => {
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
 **productGroupId** | [**String**](.md)|  | [optional] 
 **paymentConditionId** | [**String**](.md)|  | [optional] 
 **status** | [**PriceTableUnloadingStatus**](.md)|  | [optional] 
 **externalCode** | **String**|  | [optional] 
 **page** | **Number**|  | [optional] 
 **pageSize** | **Number**|  | [optional] 
 **sort** | **String**| Sorting atributes, sample: id.desc,name.asc | [optional] [default to Id.desc]
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 869520b7-77ab-436a-851d-cc3a89c52fb2]

### Return type

[**GetAllPagedPriceTableUnloadingResponse**](GetAllPagedPriceTableUnloadingResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="tepsalesV1PricetableunloadingPost"></a>
# **tepsalesV1PricetableunloadingPost**
> PostPriceTableUnloadingResponse tepsalesV1PricetableunloadingPost(opts)

Create PriceTableUnloading

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.PriceTableUnloadingApi();
let opts = { 
  'body': new TepsalesserviceApi.PostPriceTableUnloadingRequest(), // PostPriceTableUnloadingRequest | PriceTableUnloading to create
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "b949b6f1-3415-43dc-bfa3-eb4f7d572061" // String | CSRF Protection
};
apiInstance.tepsalesV1PricetableunloadingPost(opts, (error, data, response) => {
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
 **body** | [**PostPriceTableUnloadingRequest**](PostPriceTableUnloadingRequest.md)| PriceTableUnloading to create | [optional] 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to b949b6f1-3415-43dc-bfa3-eb4f7d572061]

### Return type

[**PostPriceTableUnloadingResponse**](PostPriceTableUnloadingResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

