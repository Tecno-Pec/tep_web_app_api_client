# TepsalesserviceApi.PaymentConditionApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getByIdPaymentCondition**](PaymentConditionApi.md#getByIdPaymentCondition) | **GET** /tepsales/v1/paymentConditions/{id} | Get PaymentCondition by id
[**tepsalesV1PaymentConditionsAllGet**](PaymentConditionApi.md#tepsalesV1PaymentConditionsAllGet) | **GET** /tepsales/v1/paymentConditions/all | Get All PaymentCondition by filter
[**tepsalesV1PaymentConditionsIdDelete**](PaymentConditionApi.md#tepsalesV1PaymentConditionsIdDelete) | **DELETE** /tepsales/v1/paymentConditions/{id} | Delete PaymentCondition by Id
[**tepsalesV1PaymentConditionsIdPatch**](PaymentConditionApi.md#tepsalesV1PaymentConditionsIdPatch) | **PATCH** /tepsales/v1/paymentConditions/{id} | Update part of PaymentCondition
[**tepsalesV1PaymentConditionsIdPut**](PaymentConditionApi.md#tepsalesV1PaymentConditionsIdPut) | **PUT** /tepsales/v1/paymentConditions/{id} | Update PaymentCondition
[**tepsalesV1PaymentConditionsPagedGet**](PaymentConditionApi.md#tepsalesV1PaymentConditionsPagedGet) | **GET** /tepsales/v1/paymentConditions/paged | Get All PaymentCondition by filter with pagination
[**tepsalesV1PaymentConditionsPost**](PaymentConditionApi.md#tepsalesV1PaymentConditionsPost) | **POST** /tepsales/v1/paymentConditions | Create PaymentCondition

<a name="getByIdPaymentCondition"></a>
# **getByIdPaymentCondition**
> GetAllPaymentConditionResponse getByIdPaymentCondition(id, opts)

Get PaymentCondition by id

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.PaymentConditionApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | PaymentCondition id
let opts = { 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "ba0ed0e0-a35e-4169-a9ad-44b61bd67b75" // String | CSRF Protection
};
apiInstance.getByIdPaymentCondition(id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| PaymentCondition id | 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to ba0ed0e0-a35e-4169-a9ad-44b61bd67b75]

### Return type

[**GetAllPaymentConditionResponse**](GetAllPaymentConditionResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="tepsalesV1PaymentConditionsAllGet"></a>
# **tepsalesV1PaymentConditionsAllGet**
> [GetAllPaymentConditionResponse] tepsalesV1PaymentConditionsAllGet(opts)

Get All PaymentCondition by filter

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.PaymentConditionApi();
let opts = { 
  'name': "name_example", // String | 
  'externalCode': "externalCode_example", // String | 
  'sequence': 56, // Number | 
  'status': new TepsalesserviceApi.PaymentConditionStatus(), // PaymentConditionStatus | 
  'limit': 100, // Number | limit
  'sort': "Id.desc", // String | Sorting atributes, sample: id.desc,name.asc
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "3bee69d0-3a97-41fa-b00f-71ea62ab9d9f" // String | CSRF Protection
};
apiInstance.tepsalesV1PaymentConditionsAllGet(opts, (error, data, response) => {
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
 **sequence** | **Number**|  | [optional] 
 **status** | [**PaymentConditionStatus**](.md)|  | [optional] 
 **limit** | **Number**| limit | [optional] [default to 100]
 **sort** | **String**| Sorting atributes, sample: id.desc,name.asc | [optional] [default to Id.desc]
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 3bee69d0-3a97-41fa-b00f-71ea62ab9d9f]

### Return type

[**[GetAllPaymentConditionResponse]**](GetAllPaymentConditionResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="tepsalesV1PaymentConditionsIdDelete"></a>
# **tepsalesV1PaymentConditionsIdDelete**
> tepsalesV1PaymentConditionsIdDelete(id, opts)

Delete PaymentCondition by Id

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.PaymentConditionApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | PaymentCondition id
let opts = { 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "2de3620e-66c8-4e94-be74-ae30c49e491f" // String | CSRF Protection
};
apiInstance.tepsalesV1PaymentConditionsIdDelete(id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| PaymentCondition id | 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 2de3620e-66c8-4e94-be74-ae30c49e491f]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="tepsalesV1PaymentConditionsIdPatch"></a>
# **tepsalesV1PaymentConditionsIdPatch**
> tepsalesV1PaymentConditionsIdPatch(body, id, opts)

Update part of PaymentCondition

Sample request:                    PATCH /tepsales/v1/PaymentCondition/{id}      [          {              \&quot;op\&quot;: \&quot;replace\&quot;,              \&quot;path\&quot;: \&quot;/atribute_name\&quot;,              \&quot;value\&quot;: \&quot;new value\&quot;          }      ]

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.PaymentConditionApi();
let body = [new TepsalesserviceApi.Operation()]; // [Operation] | Atributes values
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | PaymentCondition id
let opts = { 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "c9f80aed-a056-437e-9b1f-d70010404c12" // String | CSRF Protection
};
apiInstance.tepsalesV1PaymentConditionsIdPatch(body, id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| PaymentCondition id | 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to c9f80aed-a056-437e-9b1f-d70010404c12]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="tepsalesV1PaymentConditionsIdPut"></a>
# **tepsalesV1PaymentConditionsIdPut**
> tepsalesV1PaymentConditionsIdPut(id, opts)

Update PaymentCondition

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.PaymentConditionApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | PaymentCondition Id
let opts = { 
  'body': new TepsalesserviceApi.PutPaymentConditionRequest(), // PutPaymentConditionRequest | PaymentCondition to update
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "bf7cb51c-84d1-415e-bf55-dce3e541fcbc" // String | CSRF Protection
};
apiInstance.tepsalesV1PaymentConditionsIdPut(id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| PaymentCondition Id | 
 **body** | [**PutPaymentConditionRequest**](PutPaymentConditionRequest.md)| PaymentCondition to update | [optional] 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to bf7cb51c-84d1-415e-bf55-dce3e541fcbc]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="tepsalesV1PaymentConditionsPagedGet"></a>
# **tepsalesV1PaymentConditionsPagedGet**
> GetAllPagedPaymentConditionResponse tepsalesV1PaymentConditionsPagedGet(opts)

Get All PaymentCondition by filter with pagination

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.PaymentConditionApi();
let opts = { 
  'name': "name_example", // String | 
  'externalCode': "externalCode_example", // String | 
  'sequence': 56, // Number | 
  'status': new TepsalesserviceApi.PaymentConditionStatus(), // PaymentConditionStatus | 
  'page': 56, // Number | 
  'pageSize': 56, // Number | 
  'sort': "Id.desc", // String | Sorting atributes, sample: id.desc,name.asc
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "91b6416b-4796-414e-ba8a-824ebb762b8c" // String | CSRF Protection
};
apiInstance.tepsalesV1PaymentConditionsPagedGet(opts, (error, data, response) => {
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
 **sequence** | **Number**|  | [optional] 
 **status** | [**PaymentConditionStatus**](.md)|  | [optional] 
 **page** | **Number**|  | [optional] 
 **pageSize** | **Number**|  | [optional] 
 **sort** | **String**| Sorting atributes, sample: id.desc,name.asc | [optional] [default to Id.desc]
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 91b6416b-4796-414e-ba8a-824ebb762b8c]

### Return type

[**GetAllPagedPaymentConditionResponse**](GetAllPagedPaymentConditionResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="tepsalesV1PaymentConditionsPost"></a>
# **tepsalesV1PaymentConditionsPost**
> PostPaymentConditionResponse tepsalesV1PaymentConditionsPost(opts)

Create PaymentCondition

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.PaymentConditionApi();
let opts = { 
  'body': new TepsalesserviceApi.PostPaymentConditionRequest(), // PostPaymentConditionRequest | PaymentCondition to create
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "89aa5ab1-af5e-47da-bdb4-ea70aeb3cd54" // String | CSRF Protection
};
apiInstance.tepsalesV1PaymentConditionsPost(opts, (error, data, response) => {
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
 **body** | [**PostPaymentConditionRequest**](PostPaymentConditionRequest.md)| PaymentCondition to create | [optional] 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 89aa5ab1-af5e-47da-bdb4-ea70aeb3cd54]

### Return type

[**PostPaymentConditionResponse**](PostPaymentConditionResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

