# TepsalesserviceApi.FreightTableApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getByIdFreightTable**](FreightTableApi.md#getByIdFreightTable) | **GET** /tepsales/v1/freightTables/{id} | Get FreightTable by id
[**tepsalesV1FreightTablesAllGet**](FreightTableApi.md#tepsalesV1FreightTablesAllGet) | **GET** /tepsales/v1/freightTables/all | Get All FreightTable by filter
[**tepsalesV1FreightTablesIdDelete**](FreightTableApi.md#tepsalesV1FreightTablesIdDelete) | **DELETE** /tepsales/v1/freightTables/{id} | Delete FreightTable by Id
[**tepsalesV1FreightTablesIdPatch**](FreightTableApi.md#tepsalesV1FreightTablesIdPatch) | **PATCH** /tepsales/v1/freightTables/{id} | Update part of FreightTable
[**tepsalesV1FreightTablesIdPut**](FreightTableApi.md#tepsalesV1FreightTablesIdPut) | **PUT** /tepsales/v1/freightTables/{id} | Update FreightTable
[**tepsalesV1FreightTablesPagedGet**](FreightTableApi.md#tepsalesV1FreightTablesPagedGet) | **GET** /tepsales/v1/freightTables/paged | Get All FreightTable by filter with pagination
[**tepsalesV1FreightTablesPost**](FreightTableApi.md#tepsalesV1FreightTablesPost) | **POST** /tepsales/v1/freightTables | Create FreightTable

<a name="getByIdFreightTable"></a>
# **getByIdFreightTable**
> GetAllFreightTableResponse getByIdFreightTable(id, opts)

Get FreightTable by id

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.FreightTableApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | FreightTable id
let opts = { 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "78d295f0-9ebb-408e-a40d-7fb82d5835f0" // String | CSRF Protection
};
apiInstance.getByIdFreightTable(id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| FreightTable id | 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 78d295f0-9ebb-408e-a40d-7fb82d5835f0]

### Return type

[**GetAllFreightTableResponse**](GetAllFreightTableResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="tepsalesV1FreightTablesAllGet"></a>
# **tepsalesV1FreightTablesAllGet**
> [GetAllFreightTableResponse] tepsalesV1FreightTablesAllGet(opts)

Get All FreightTable by filter

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.FreightTableApi();
let opts = { 
  'externalCode': "externalCode_example", // String | 
  'paymentConditionId': "38400000-8cf0-11bd-b23e-10b96e4ef00d", // String | 
  'vehicleTypeId': "38400000-8cf0-11bd-b23e-10b96e4ef00d", // String | 
  'kilometers': 1.2, // Number | 
  'isFractional': true, // Boolean | 
  'operationType': new TepsalesserviceApi.TablePriceOperationTypeEnum(), // TablePriceOperationTypeEnum | 
  'status': new TepsalesserviceApi.FreightTableStatus(), // FreightTableStatus | 
  'limit': 100, // Number | limit
  'sort': "Id.desc", // String | Sorting atributes, sample: id.desc,name.asc
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "ccb99514-1740-4d70-b1e1-260666778ab4" // String | CSRF Protection
};
apiInstance.tepsalesV1FreightTablesAllGet(opts, (error, data, response) => {
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
 **externalCode** | **String**|  | [optional] 
 **paymentConditionId** | [**String**](.md)|  | [optional] 
 **vehicleTypeId** | [**String**](.md)|  | [optional] 
 **kilometers** | **Number**|  | [optional] 
 **isFractional** | **Boolean**|  | [optional] 
 **operationType** | [**TablePriceOperationTypeEnum**](.md)|  | [optional] 
 **status** | [**FreightTableStatus**](.md)|  | [optional] 
 **limit** | **Number**| limit | [optional] [default to 100]
 **sort** | **String**| Sorting atributes, sample: id.desc,name.asc | [optional] [default to Id.desc]
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to ccb99514-1740-4d70-b1e1-260666778ab4]

### Return type

[**[GetAllFreightTableResponse]**](GetAllFreightTableResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="tepsalesV1FreightTablesIdDelete"></a>
# **tepsalesV1FreightTablesIdDelete**
> tepsalesV1FreightTablesIdDelete(id, opts)

Delete FreightTable by Id

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.FreightTableApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | FreightTable id
let opts = { 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "758999fa-0581-48ff-a8d8-572bf0800a80" // String | CSRF Protection
};
apiInstance.tepsalesV1FreightTablesIdDelete(id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| FreightTable id | 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 758999fa-0581-48ff-a8d8-572bf0800a80]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="tepsalesV1FreightTablesIdPatch"></a>
# **tepsalesV1FreightTablesIdPatch**
> tepsalesV1FreightTablesIdPatch(body, id, opts)

Update part of FreightTable

Sample request:                    PATCH /tepsales/v1/FreightTable/{id}      [          {              \&quot;op\&quot;: \&quot;replace\&quot;,              \&quot;path\&quot;: \&quot;/atribute_name\&quot;,              \&quot;value\&quot;: \&quot;new value\&quot;          }      ]

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.FreightTableApi();
let body = [new TepsalesserviceApi.Operation()]; // [Operation] | Atributes values
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | FreightTable id
let opts = { 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "cd703141-16de-405c-8d00-4fa07884765d" // String | CSRF Protection
};
apiInstance.tepsalesV1FreightTablesIdPatch(body, id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| FreightTable id | 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to cd703141-16de-405c-8d00-4fa07884765d]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="tepsalesV1FreightTablesIdPut"></a>
# **tepsalesV1FreightTablesIdPut**
> tepsalesV1FreightTablesIdPut(id, opts)

Update FreightTable

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.FreightTableApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | FreightTable Id
let opts = { 
  'body': new TepsalesserviceApi.PutFreightTableRequest(), // PutFreightTableRequest | FreightTable to update
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "43706b16-22b6-4155-bbdd-09906e396aff" // String | CSRF Protection
};
apiInstance.tepsalesV1FreightTablesIdPut(id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| FreightTable Id | 
 **body** | [**PutFreightTableRequest**](PutFreightTableRequest.md)| FreightTable to update | [optional] 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 43706b16-22b6-4155-bbdd-09906e396aff]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="tepsalesV1FreightTablesPagedGet"></a>
# **tepsalesV1FreightTablesPagedGet**
> GetAllPagedFreightTableResponse tepsalesV1FreightTablesPagedGet(opts)

Get All FreightTable by filter with pagination

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.FreightTableApi();
let opts = { 
  'externalCode': "externalCode_example", // String | 
  'paymentConditionId': "38400000-8cf0-11bd-b23e-10b96e4ef00d", // String | 
  'vehicleTypeId': "38400000-8cf0-11bd-b23e-10b96e4ef00d", // String | 
  'kilometers': 1.2, // Number | 
  'isFractional': true, // Boolean | 
  'operationType': new TepsalesserviceApi.TablePriceOperationTypeEnum(), // TablePriceOperationTypeEnum | 
  'status': new TepsalesserviceApi.FreightTableStatus(), // FreightTableStatus | 
  'page': 56, // Number | 
  'pageSize': 56, // Number | 
  'sort': "Id.desc", // String | Sorting atributes, sample: id.desc,name.asc
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "655ddc8e-8d2e-4b5b-ac49-418ee6639826" // String | CSRF Protection
};
apiInstance.tepsalesV1FreightTablesPagedGet(opts, (error, data, response) => {
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
 **externalCode** | **String**|  | [optional] 
 **paymentConditionId** | [**String**](.md)|  | [optional] 
 **vehicleTypeId** | [**String**](.md)|  | [optional] 
 **kilometers** | **Number**|  | [optional] 
 **isFractional** | **Boolean**|  | [optional] 
 **operationType** | [**TablePriceOperationTypeEnum**](.md)|  | [optional] 
 **status** | [**FreightTableStatus**](.md)|  | [optional] 
 **page** | **Number**|  | [optional] 
 **pageSize** | **Number**|  | [optional] 
 **sort** | **String**| Sorting atributes, sample: id.desc,name.asc | [optional] [default to Id.desc]
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 655ddc8e-8d2e-4b5b-ac49-418ee6639826]

### Return type

[**GetAllPagedFreightTableResponse**](GetAllPagedFreightTableResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="tepsalesV1FreightTablesPost"></a>
# **tepsalesV1FreightTablesPost**
> PostFreightTableResponse tepsalesV1FreightTablesPost(opts)

Create FreightTable

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.FreightTableApi();
let opts = { 
  'body': new TepsalesserviceApi.PostFreightTableRequest(), // PostFreightTableRequest | FreightTable to create
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "7e7e1a8c-95e5-4f29-a172-e2eaac8782d7" // String | CSRF Protection
};
apiInstance.tepsalesV1FreightTablesPost(opts, (error, data, response) => {
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
 **body** | [**PostFreightTableRequest**](PostFreightTableRequest.md)| FreightTable to create | [optional] 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 7e7e1a8c-95e5-4f29-a172-e2eaac8782d7]

### Return type

[**PostFreightTableResponse**](PostFreightTableResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

