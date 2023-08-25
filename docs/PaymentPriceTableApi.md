# TepsalesserviceApi.PaymentPriceTableApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getByIdPaymentPriceTable**](PaymentPriceTableApi.md#getByIdPaymentPriceTable) | **GET** /tepsales/v1/paymentPriceTables/{id} | Get PaymentPriceTable by id
[**tepsalesV1PaymentPriceTablesAllGet**](PaymentPriceTableApi.md#tepsalesV1PaymentPriceTablesAllGet) | **GET** /tepsales/v1/paymentPriceTables/all | Get All PaymentPriceTable by filter
[**tepsalesV1PaymentPriceTablesIdDelete**](PaymentPriceTableApi.md#tepsalesV1PaymentPriceTablesIdDelete) | **DELETE** /tepsales/v1/paymentPriceTables/{id} | Delete PaymentPriceTable by Id
[**tepsalesV1PaymentPriceTablesIdPatch**](PaymentPriceTableApi.md#tepsalesV1PaymentPriceTablesIdPatch) | **PATCH** /tepsales/v1/paymentPriceTables/{id} | Update part of PaymentPriceTable
[**tepsalesV1PaymentPriceTablesIdPut**](PaymentPriceTableApi.md#tepsalesV1PaymentPriceTablesIdPut) | **PUT** /tepsales/v1/paymentPriceTables/{id} | Update PaymentPriceTable
[**tepsalesV1PaymentPriceTablesPagedGet**](PaymentPriceTableApi.md#tepsalesV1PaymentPriceTablesPagedGet) | **GET** /tepsales/v1/paymentPriceTables/paged | Get All PaymentPriceTable by filter with pagination
[**tepsalesV1PaymentPriceTablesPost**](PaymentPriceTableApi.md#tepsalesV1PaymentPriceTablesPost) | **POST** /tepsales/v1/paymentPriceTables | Create PaymentPriceTable

<a name="getByIdPaymentPriceTable"></a>
# **getByIdPaymentPriceTable**
> GetAllPaymentPriceTableResponse getByIdPaymentPriceTable(id, opts)

Get PaymentPriceTable by id

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.PaymentPriceTableApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | PaymentPriceTable id
let opts = { 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "8ad32fb1-42c7-4308-ae8f-e8a627a068ee" // String | CSRF Protection
};
apiInstance.getByIdPaymentPriceTable(id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| PaymentPriceTable id | 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 8ad32fb1-42c7-4308-ae8f-e8a627a068ee]

### Return type

[**GetAllPaymentPriceTableResponse**](GetAllPaymentPriceTableResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="tepsalesV1PaymentPriceTablesAllGet"></a>
# **tepsalesV1PaymentPriceTablesAllGet**
> [GetAllPaymentPriceTableResponse] tepsalesV1PaymentPriceTablesAllGet(opts)

Get All PaymentPriceTable by filter

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.PaymentPriceTableApi();
let opts = { 
  'paymentConditionId': "38400000-8cf0-11bd-b23e-10b96e4ef00d", // String | 
  'priceTableId': "38400000-8cf0-11bd-b23e-10b96e4ef00d", // String | 
  'externalCode': "externalCode_example", // String | 
  'status': new TepsalesserviceApi.PaymentPriceTableStatus(), // PaymentPriceTableStatus | 
  'limit': 100, // Number | limit
  'sort': "Id.desc", // String | Sorting atributes, sample: id.desc,name.asc
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "4ab4fbd1-2f42-4c15-956a-c5cdbf58c4b4" // String | CSRF Protection
};
apiInstance.tepsalesV1PaymentPriceTablesAllGet(opts, (error, data, response) => {
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
 **paymentConditionId** | [**String**](.md)|  | [optional] 
 **priceTableId** | [**String**](.md)|  | [optional] 
 **externalCode** | **String**|  | [optional] 
 **status** | [**PaymentPriceTableStatus**](.md)|  | [optional] 
 **limit** | **Number**| limit | [optional] [default to 100]
 **sort** | **String**| Sorting atributes, sample: id.desc,name.asc | [optional] [default to Id.desc]
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 4ab4fbd1-2f42-4c15-956a-c5cdbf58c4b4]

### Return type

[**[GetAllPaymentPriceTableResponse]**](GetAllPaymentPriceTableResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="tepsalesV1PaymentPriceTablesIdDelete"></a>
# **tepsalesV1PaymentPriceTablesIdDelete**
> tepsalesV1PaymentPriceTablesIdDelete(id, opts)

Delete PaymentPriceTable by Id

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.PaymentPriceTableApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | PaymentPriceTable id
let opts = { 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "45e878d2-82f6-49e7-a9c1-65e96b1fcf7a" // String | CSRF Protection
};
apiInstance.tepsalesV1PaymentPriceTablesIdDelete(id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| PaymentPriceTable id | 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 45e878d2-82f6-49e7-a9c1-65e96b1fcf7a]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="tepsalesV1PaymentPriceTablesIdPatch"></a>
# **tepsalesV1PaymentPriceTablesIdPatch**
> tepsalesV1PaymentPriceTablesIdPatch(body, id, opts)

Update part of PaymentPriceTable

Sample request:                    PATCH /tepsales/v1/PaymentPriceTable/{id}      [          {              \&quot;op\&quot;: \&quot;replace\&quot;,              \&quot;path\&quot;: \&quot;/atribute_name\&quot;,              \&quot;value\&quot;: \&quot;new value\&quot;          }      ]

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.PaymentPriceTableApi();
let body = [new TepsalesserviceApi.Operation()]; // [Operation] | Atributes values
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | PaymentPriceTable id
let opts = { 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "3f484221-d074-4be4-b209-a3c02b7c334c" // String | CSRF Protection
};
apiInstance.tepsalesV1PaymentPriceTablesIdPatch(body, id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| PaymentPriceTable id | 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 3f484221-d074-4be4-b209-a3c02b7c334c]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="tepsalesV1PaymentPriceTablesIdPut"></a>
# **tepsalesV1PaymentPriceTablesIdPut**
> tepsalesV1PaymentPriceTablesIdPut(id, opts)

Update PaymentPriceTable

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.PaymentPriceTableApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | PaymentPriceTable Id
let opts = { 
  'body': new TepsalesserviceApi.PutPaymentPriceTableRequest(), // PutPaymentPriceTableRequest | PaymentPriceTable to update
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "2d3fd3d2-57b0-4ce8-83e1-5ae35df9f976" // String | CSRF Protection
};
apiInstance.tepsalesV1PaymentPriceTablesIdPut(id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| PaymentPriceTable Id | 
 **body** | [**PutPaymentPriceTableRequest**](PutPaymentPriceTableRequest.md)| PaymentPriceTable to update | [optional] 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 2d3fd3d2-57b0-4ce8-83e1-5ae35df9f976]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="tepsalesV1PaymentPriceTablesPagedGet"></a>
# **tepsalesV1PaymentPriceTablesPagedGet**
> GetAllPagedPaymentPriceTableResponse tepsalesV1PaymentPriceTablesPagedGet(opts)

Get All PaymentPriceTable by filter with pagination

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.PaymentPriceTableApi();
let opts = { 
  'paymentConditionId': "38400000-8cf0-11bd-b23e-10b96e4ef00d", // String | 
  'priceTableId': "38400000-8cf0-11bd-b23e-10b96e4ef00d", // String | 
  'externalCode': "externalCode_example", // String | 
  'status': new TepsalesserviceApi.PaymentPriceTableStatus(), // PaymentPriceTableStatus | 
  'page': 56, // Number | 
  'pageSize': 56, // Number | 
  'sort': "Id.desc", // String | Sorting atributes, sample: id.desc,name.asc
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "2c55c45e-c159-44ff-83e4-114ee636fc33" // String | CSRF Protection
};
apiInstance.tepsalesV1PaymentPriceTablesPagedGet(opts, (error, data, response) => {
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
 **paymentConditionId** | [**String**](.md)|  | [optional] 
 **priceTableId** | [**String**](.md)|  | [optional] 
 **externalCode** | **String**|  | [optional] 
 **status** | [**PaymentPriceTableStatus**](.md)|  | [optional] 
 **page** | **Number**|  | [optional] 
 **pageSize** | **Number**|  | [optional] 
 **sort** | **String**| Sorting atributes, sample: id.desc,name.asc | [optional] [default to Id.desc]
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 2c55c45e-c159-44ff-83e4-114ee636fc33]

### Return type

[**GetAllPagedPaymentPriceTableResponse**](GetAllPagedPaymentPriceTableResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="tepsalesV1PaymentPriceTablesPost"></a>
# **tepsalesV1PaymentPriceTablesPost**
> PostPaymentPriceTableResponse tepsalesV1PaymentPriceTablesPost(opts)

Create PaymentPriceTable

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.PaymentPriceTableApi();
let opts = { 
  'body': new TepsalesserviceApi.PostPaymentPriceTableRequest(), // PostPaymentPriceTableRequest | PaymentPriceTable to create
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "0d664821-ccef-4ed8-9742-a36a33cc8c48" // String | CSRF Protection
};
apiInstance.tepsalesV1PaymentPriceTablesPost(opts, (error, data, response) => {
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
 **body** | [**PostPaymentPriceTableRequest**](PostPaymentPriceTableRequest.md)| PaymentPriceTable to create | [optional] 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 0d664821-ccef-4ed8-9742-a36a33cc8c48]

### Return type

[**PostPaymentPriceTableResponse**](PostPaymentPriceTableResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

