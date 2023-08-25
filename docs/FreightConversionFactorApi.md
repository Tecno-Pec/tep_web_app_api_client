# TepsalesserviceApi.FreightConversionFactorApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getByIdFreightConversionFactor**](FreightConversionFactorApi.md#getByIdFreightConversionFactor) | **GET** /tepsales/v1/freightConversionFactors/{id} | Get FreightConversionFactor by id
[**tepsalesV1FreightConversionFactorsAllGet**](FreightConversionFactorApi.md#tepsalesV1FreightConversionFactorsAllGet) | **GET** /tepsales/v1/freightConversionFactors/all | Get All FreightConversionFactor by filter
[**tepsalesV1FreightConversionFactorsIdDelete**](FreightConversionFactorApi.md#tepsalesV1FreightConversionFactorsIdDelete) | **DELETE** /tepsales/v1/freightConversionFactors/{id} | Delete FreightConversionFactor by Id
[**tepsalesV1FreightConversionFactorsIdPatch**](FreightConversionFactorApi.md#tepsalesV1FreightConversionFactorsIdPatch) | **PATCH** /tepsales/v1/freightConversionFactors/{id} | Update part of FreightConversionFactor
[**tepsalesV1FreightConversionFactorsIdPut**](FreightConversionFactorApi.md#tepsalesV1FreightConversionFactorsIdPut) | **PUT** /tepsales/v1/freightConversionFactors/{id} | Update FreightConversionFactor
[**tepsalesV1FreightConversionFactorsPagedGet**](FreightConversionFactorApi.md#tepsalesV1FreightConversionFactorsPagedGet) | **GET** /tepsales/v1/freightConversionFactors/paged | Get All FreightConversionFactor by filter with pagination
[**tepsalesV1FreightConversionFactorsPost**](FreightConversionFactorApi.md#tepsalesV1FreightConversionFactorsPost) | **POST** /tepsales/v1/freightConversionFactors | Create FreightConversionFactor

<a name="getByIdFreightConversionFactor"></a>
# **getByIdFreightConversionFactor**
> GetAllFreightConversionFactorResponse getByIdFreightConversionFactor(id, opts)

Get FreightConversionFactor by id

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.FreightConversionFactorApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | FreightConversionFactor id
let opts = { 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "d5df5289-3fc5-49b1-b69e-f082a7c85643" // String | CSRF Protection
};
apiInstance.getByIdFreightConversionFactor(id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| FreightConversionFactor id | 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to d5df5289-3fc5-49b1-b69e-f082a7c85643]

### Return type

[**GetAllFreightConversionFactorResponse**](GetAllFreightConversionFactorResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="tepsalesV1FreightConversionFactorsAllGet"></a>
# **tepsalesV1FreightConversionFactorsAllGet**
> [GetAllFreightConversionFactorResponse] tepsalesV1FreightConversionFactorsAllGet(opts)

Get All FreightConversionFactor by filter

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.FreightConversionFactorApi();
let opts = { 
  'productId': "38400000-8cf0-11bd-b23e-10b96e4ef00d", // String | 
  'vehicleTypeId': "38400000-8cf0-11bd-b23e-10b96e4ef00d", // String | 
  'externalCode': "externalCode_example", // String | 
  'status': new TepsalesserviceApi.FreightConversionFactorStatus(), // FreightConversionFactorStatus | 
  'limit': 100, // Number | limit
  'sort': "Id.desc", // String | Sorting atributes, sample: id.desc,name.asc
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "c24475cb-31b7-44a0-87c7-a189887e3e47" // String | CSRF Protection
};
apiInstance.tepsalesV1FreightConversionFactorsAllGet(opts, (error, data, response) => {
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
 **productId** | [**String**](.md)|  | [optional] 
 **vehicleTypeId** | [**String**](.md)|  | [optional] 
 **externalCode** | **String**|  | [optional] 
 **status** | [**FreightConversionFactorStatus**](.md)|  | [optional] 
 **limit** | **Number**| limit | [optional] [default to 100]
 **sort** | **String**| Sorting atributes, sample: id.desc,name.asc | [optional] [default to Id.desc]
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to c24475cb-31b7-44a0-87c7-a189887e3e47]

### Return type

[**[GetAllFreightConversionFactorResponse]**](GetAllFreightConversionFactorResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="tepsalesV1FreightConversionFactorsIdDelete"></a>
# **tepsalesV1FreightConversionFactorsIdDelete**
> tepsalesV1FreightConversionFactorsIdDelete(id, opts)

Delete FreightConversionFactor by Id

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.FreightConversionFactorApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | FreightConversionFactor id
let opts = { 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "a5f4eb30-bc7d-41c1-965f-dd652a076336" // String | CSRF Protection
};
apiInstance.tepsalesV1FreightConversionFactorsIdDelete(id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| FreightConversionFactor id | 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to a5f4eb30-bc7d-41c1-965f-dd652a076336]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="tepsalesV1FreightConversionFactorsIdPatch"></a>
# **tepsalesV1FreightConversionFactorsIdPatch**
> tepsalesV1FreightConversionFactorsIdPatch(body, id, opts)

Update part of FreightConversionFactor

Sample request:                    PATCH /tepsales/v1/FreightConversionFactor/{id}      [          {              \&quot;op\&quot;: \&quot;replace\&quot;,              \&quot;path\&quot;: \&quot;/atribute_name\&quot;,              \&quot;value\&quot;: \&quot;new value\&quot;          }      ]

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.FreightConversionFactorApi();
let body = [new TepsalesserviceApi.Operation()]; // [Operation] | Atributes values
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | FreightConversionFactor id
let opts = { 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "1872d702-2904-4131-ab99-18329f9e4f08" // String | CSRF Protection
};
apiInstance.tepsalesV1FreightConversionFactorsIdPatch(body, id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| FreightConversionFactor id | 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 1872d702-2904-4131-ab99-18329f9e4f08]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="tepsalesV1FreightConversionFactorsIdPut"></a>
# **tepsalesV1FreightConversionFactorsIdPut**
> tepsalesV1FreightConversionFactorsIdPut(id, opts)

Update FreightConversionFactor

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.FreightConversionFactorApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | FreightConversionFactor Id
let opts = { 
  'body': new TepsalesserviceApi.PutFreightConversionFactorRequest(), // PutFreightConversionFactorRequest | FreightConversionFactor to update
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "a35e26ba-4929-4154-b4cf-fb9c0d18768a" // String | CSRF Protection
};
apiInstance.tepsalesV1FreightConversionFactorsIdPut(id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| FreightConversionFactor Id | 
 **body** | [**PutFreightConversionFactorRequest**](PutFreightConversionFactorRequest.md)| FreightConversionFactor to update | [optional] 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to a35e26ba-4929-4154-b4cf-fb9c0d18768a]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="tepsalesV1FreightConversionFactorsPagedGet"></a>
# **tepsalesV1FreightConversionFactorsPagedGet**
> GetAllPagedFreightConversionFactorResponse tepsalesV1FreightConversionFactorsPagedGet(opts)

Get All FreightConversionFactor by filter with pagination

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.FreightConversionFactorApi();
let opts = { 
  'productId': "38400000-8cf0-11bd-b23e-10b96e4ef00d", // String | 
  'vehicleTypeId': "38400000-8cf0-11bd-b23e-10b96e4ef00d", // String | 
  'externalCode': "externalCode_example", // String | 
  'status': new TepsalesserviceApi.FreightConversionFactorStatus(), // FreightConversionFactorStatus | 
  'page': 56, // Number | 
  'pageSize': 56, // Number | 
  'sort': "Id.desc", // String | Sorting atributes, sample: id.desc,name.asc
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "8e2e48e6-f734-4409-9a78-3594bb245bbd" // String | CSRF Protection
};
apiInstance.tepsalesV1FreightConversionFactorsPagedGet(opts, (error, data, response) => {
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
 **productId** | [**String**](.md)|  | [optional] 
 **vehicleTypeId** | [**String**](.md)|  | [optional] 
 **externalCode** | **String**|  | [optional] 
 **status** | [**FreightConversionFactorStatus**](.md)|  | [optional] 
 **page** | **Number**|  | [optional] 
 **pageSize** | **Number**|  | [optional] 
 **sort** | **String**| Sorting atributes, sample: id.desc,name.asc | [optional] [default to Id.desc]
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 8e2e48e6-f734-4409-9a78-3594bb245bbd]

### Return type

[**GetAllPagedFreightConversionFactorResponse**](GetAllPagedFreightConversionFactorResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="tepsalesV1FreightConversionFactorsPost"></a>
# **tepsalesV1FreightConversionFactorsPost**
> PostFreightConversionFactorResponse tepsalesV1FreightConversionFactorsPost(opts)

Create FreightConversionFactor

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.FreightConversionFactorApi();
let opts = { 
  'body': new TepsalesserviceApi.PostFreightConversionFactorRequest(), // PostFreightConversionFactorRequest | FreightConversionFactor to create
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "28bc3c12-2643-4d5e-b0a6-9f08573f0849" // String | CSRF Protection
};
apiInstance.tepsalesV1FreightConversionFactorsPost(opts, (error, data, response) => {
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
 **body** | [**PostFreightConversionFactorRequest**](PostFreightConversionFactorRequest.md)| FreightConversionFactor to create | [optional] 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 28bc3c12-2643-4d5e-b0a6-9f08573f0849]

### Return type

[**PostFreightConversionFactorResponse**](PostFreightConversionFactorResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

