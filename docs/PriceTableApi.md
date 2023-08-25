# TepsalesserviceApi.PriceTableApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getByIdPriceTable**](PriceTableApi.md#getByIdPriceTable) | **GET** /tepsales/v1/priceTables/{id} | Get PriceTable by id
[**tepsalesV1PriceTablesAllGet**](PriceTableApi.md#tepsalesV1PriceTablesAllGet) | **GET** /tepsales/v1/priceTables/all | Get All PriceTable by filter
[**tepsalesV1PriceTablesIdDelete**](PriceTableApi.md#tepsalesV1PriceTablesIdDelete) | **DELETE** /tepsales/v1/priceTables/{id} | Delete PriceTable by Id
[**tepsalesV1PriceTablesIdPatch**](PriceTableApi.md#tepsalesV1PriceTablesIdPatch) | **PATCH** /tepsales/v1/priceTables/{id} | Update part of PriceTable
[**tepsalesV1PriceTablesIdPut**](PriceTableApi.md#tepsalesV1PriceTablesIdPut) | **PUT** /tepsales/v1/priceTables/{id} | Update PriceTable
[**tepsalesV1PriceTablesPagedGet**](PriceTableApi.md#tepsalesV1PriceTablesPagedGet) | **GET** /tepsales/v1/priceTables/paged | Get All PriceTable by filter with pagination
[**tepsalesV1PriceTablesPost**](PriceTableApi.md#tepsalesV1PriceTablesPost) | **POST** /tepsales/v1/priceTables | Create PriceTable

<a name="getByIdPriceTable"></a>
# **getByIdPriceTable**
> GetAllPriceTableResponse getByIdPriceTable(id, opts)

Get PriceTable by id

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.PriceTableApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | PriceTable id
let opts = { 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "331cf283-6f48-44a6-a04b-bd3fa7b28049" // String | CSRF Protection
};
apiInstance.getByIdPriceTable(id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| PriceTable id | 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 331cf283-6f48-44a6-a04b-bd3fa7b28049]

### Return type

[**GetAllPriceTableResponse**](GetAllPriceTableResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="tepsalesV1PriceTablesAllGet"></a>
# **tepsalesV1PriceTablesAllGet**
> [GetAllPriceTableResponse] tepsalesV1PriceTablesAllGet(opts)

Get All PriceTable by filter

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.PriceTableApi();
let opts = { 
  'name': "name_example", // String | 
  'id': "38400000-8cf0-11bd-b23e-10b96e4ef00d", // String | 
  'paymentConditionId': "38400000-8cf0-11bd-b23e-10b96e4ef00d", // String | 
  'operationType': new TepsalesserviceApi.TablePriceOperationTypeEnum(), // TablePriceOperationTypeEnum | 
  'externalCode': "externalCode_example", // String | 
  'status': new TepsalesserviceApi.PriceTableStatus(), // PriceTableStatus | 
  'limit': 100, // Number | limit
  'sort': "Id.desc", // String | Sorting atributes, sample: id.desc,name.asc
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "ddf3f119-c11f-484c-9132-f9c6b43968ad" // String | CSRF Protection
};
apiInstance.tepsalesV1PriceTablesAllGet(opts, (error, data, response) => {
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
 **id** | [**String**](.md)|  | [optional] 
 **paymentConditionId** | [**String**](.md)|  | [optional] 
 **operationType** | [**TablePriceOperationTypeEnum**](.md)|  | [optional] 
 **externalCode** | **String**|  | [optional] 
 **status** | [**PriceTableStatus**](.md)|  | [optional] 
 **limit** | **Number**| limit | [optional] [default to 100]
 **sort** | **String**| Sorting atributes, sample: id.desc,name.asc | [optional] [default to Id.desc]
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to ddf3f119-c11f-484c-9132-f9c6b43968ad]

### Return type

[**[GetAllPriceTableResponse]**](GetAllPriceTableResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="tepsalesV1PriceTablesIdDelete"></a>
# **tepsalesV1PriceTablesIdDelete**
> tepsalesV1PriceTablesIdDelete(id, opts)

Delete PriceTable by Id

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.PriceTableApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | PriceTable id
let opts = { 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "cca37f01-312d-46f0-89fe-c860ef6af9b4" // String | CSRF Protection
};
apiInstance.tepsalesV1PriceTablesIdDelete(id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| PriceTable id | 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to cca37f01-312d-46f0-89fe-c860ef6af9b4]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="tepsalesV1PriceTablesIdPatch"></a>
# **tepsalesV1PriceTablesIdPatch**
> tepsalesV1PriceTablesIdPatch(body, id, opts)

Update part of PriceTable

Sample request:                    PATCH /tepsales/v1/PriceTable/{id}      [          {              \&quot;op\&quot;: \&quot;replace\&quot;,              \&quot;path\&quot;: \&quot;/atribute_name\&quot;,              \&quot;value\&quot;: \&quot;new value\&quot;          }      ]

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.PriceTableApi();
let body = [new TepsalesserviceApi.Operation()]; // [Operation] | Atributes values
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | PriceTable id
let opts = { 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "4e78951e-859b-4ae6-a483-6a293b0edb1e" // String | CSRF Protection
};
apiInstance.tepsalesV1PriceTablesIdPatch(body, id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| PriceTable id | 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 4e78951e-859b-4ae6-a483-6a293b0edb1e]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="tepsalesV1PriceTablesIdPut"></a>
# **tepsalesV1PriceTablesIdPut**
> tepsalesV1PriceTablesIdPut(id, opts)

Update PriceTable

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.PriceTableApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | PriceTable Id
let opts = { 
  'body': new TepsalesserviceApi.PutPriceTableRequest(), // PutPriceTableRequest | PriceTable to update
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "d332b6b5-cc9a-4c28-a2a6-fa54eac26d98" // String | CSRF Protection
};
apiInstance.tepsalesV1PriceTablesIdPut(id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| PriceTable Id | 
 **body** | [**PutPriceTableRequest**](PutPriceTableRequest.md)| PriceTable to update | [optional] 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to d332b6b5-cc9a-4c28-a2a6-fa54eac26d98]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="tepsalesV1PriceTablesPagedGet"></a>
# **tepsalesV1PriceTablesPagedGet**
> GetAllPagedPriceTableResponse tepsalesV1PriceTablesPagedGet(opts)

Get All PriceTable by filter with pagination

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.PriceTableApi();
let opts = { 
  'name': "name_example", // String | 
  'id': "38400000-8cf0-11bd-b23e-10b96e4ef00d", // String | 
  'paymentConditionId': "38400000-8cf0-11bd-b23e-10b96e4ef00d", // String | 
  'operationType': new TepsalesserviceApi.TablePriceOperationTypeEnum(), // TablePriceOperationTypeEnum | 
  'externalCode': "externalCode_example", // String | 
  'status': new TepsalesserviceApi.PriceTableStatus(), // PriceTableStatus | 
  'page': 56, // Number | 
  'pageSize': 56, // Number | 
  'sort': "Id.desc", // String | Sorting atributes, sample: id.desc,name.asc
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "1a9aa428-a05a-4660-923d-95d07b16ebe7" // String | CSRF Protection
};
apiInstance.tepsalesV1PriceTablesPagedGet(opts, (error, data, response) => {
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
 **id** | [**String**](.md)|  | [optional] 
 **paymentConditionId** | [**String**](.md)|  | [optional] 
 **operationType** | [**TablePriceOperationTypeEnum**](.md)|  | [optional] 
 **externalCode** | **String**|  | [optional] 
 **status** | [**PriceTableStatus**](.md)|  | [optional] 
 **page** | **Number**|  | [optional] 
 **pageSize** | **Number**|  | [optional] 
 **sort** | **String**| Sorting atributes, sample: id.desc,name.asc | [optional] [default to Id.desc]
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 1a9aa428-a05a-4660-923d-95d07b16ebe7]

### Return type

[**GetAllPagedPriceTableResponse**](GetAllPagedPriceTableResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="tepsalesV1PriceTablesPost"></a>
# **tepsalesV1PriceTablesPost**
> PostPriceTableResponse tepsalesV1PriceTablesPost(opts)

Create PriceTable

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.PriceTableApi();
let opts = { 
  'body': new TepsalesserviceApi.PostPriceTableRequest(), // PostPriceTableRequest | PriceTable to create
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "ce5c5c9a-5574-4d74-b34e-d00be24a6fda" // String | CSRF Protection
};
apiInstance.tepsalesV1PriceTablesPost(opts, (error, data, response) => {
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
 **body** | [**PostPriceTableRequest**](PostPriceTableRequest.md)| PriceTable to create | [optional] 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to ce5c5c9a-5574-4d74-b34e-d00be24a6fda]

### Return type

[**PostPriceTableResponse**](PostPriceTableResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

