# TepsalesserviceApi.CompanyGlobalParameterApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getByIdCompanyGlobalParameter**](CompanyGlobalParameterApi.md#getByIdCompanyGlobalParameter) | **GET** /tepsales/v1/companyglobalparameters/{id} | Get CompanyGlobalParameter by id
[**tepsalesV1CompanyglobalparametersAllGet**](CompanyGlobalParameterApi.md#tepsalesV1CompanyglobalparametersAllGet) | **GET** /tepsales/v1/companyglobalparameters/all | Get All CompanyGlobalParameter by filter
[**tepsalesV1CompanyglobalparametersIdDelete**](CompanyGlobalParameterApi.md#tepsalesV1CompanyglobalparametersIdDelete) | **DELETE** /tepsales/v1/companyglobalparameters/{id} | Delete CompanyGlobalParameter by Id
[**tepsalesV1CompanyglobalparametersIdPatch**](CompanyGlobalParameterApi.md#tepsalesV1CompanyglobalparametersIdPatch) | **PATCH** /tepsales/v1/companyglobalparameters/{id} | Update part of CompanyGlobalParameter
[**tepsalesV1CompanyglobalparametersIdPut**](CompanyGlobalParameterApi.md#tepsalesV1CompanyglobalparametersIdPut) | **PUT** /tepsales/v1/companyglobalparameters/{id} | Update CompanyGlobalParameter
[**tepsalesV1CompanyglobalparametersPagedGet**](CompanyGlobalParameterApi.md#tepsalesV1CompanyglobalparametersPagedGet) | **GET** /tepsales/v1/companyglobalparameters/paged | Get All CompanyGlobalParameter by filter with pagination
[**tepsalesV1CompanyglobalparametersPost**](CompanyGlobalParameterApi.md#tepsalesV1CompanyglobalparametersPost) | **POST** /tepsales/v1/companyglobalparameters | Create CompanyGlobalParameter

<a name="getByIdCompanyGlobalParameter"></a>
# **getByIdCompanyGlobalParameter**
> GetAllCompanyGlobalParameterResponse getByIdCompanyGlobalParameter(id, opts)

Get CompanyGlobalParameter by id

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.CompanyGlobalParameterApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | CompanyGlobalParameter id
let opts = { 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "3223589d-cada-4cd1-bc2f-ec6e419488cb" // String | CSRF Protection
};
apiInstance.getByIdCompanyGlobalParameter(id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| CompanyGlobalParameter id | 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 3223589d-cada-4cd1-bc2f-ec6e419488cb]

### Return type

[**GetAllCompanyGlobalParameterResponse**](GetAllCompanyGlobalParameterResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="tepsalesV1CompanyglobalparametersAllGet"></a>
# **tepsalesV1CompanyglobalparametersAllGet**
> [GetAllCompanyGlobalParameterResponse] tepsalesV1CompanyglobalparametersAllGet(opts)

Get All CompanyGlobalParameter by filter

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.CompanyGlobalParameterApi();
let opts = { 
  'name': "name_example", // String | 
  'limit': 100, // Number | limit
  'sort': "Id.desc", // String | Sorting atributes, sample: id.desc,name.asc
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "8f3b071a-0af8-4a38-b4d9-fde431f0e386" // String | CSRF Protection
};
apiInstance.tepsalesV1CompanyglobalparametersAllGet(opts, (error, data, response) => {
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
 **limit** | **Number**| limit | [optional] [default to 100]
 **sort** | **String**| Sorting atributes, sample: id.desc,name.asc | [optional] [default to Id.desc]
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 8f3b071a-0af8-4a38-b4d9-fde431f0e386]

### Return type

[**[GetAllCompanyGlobalParameterResponse]**](GetAllCompanyGlobalParameterResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="tepsalesV1CompanyglobalparametersIdDelete"></a>
# **tepsalesV1CompanyglobalparametersIdDelete**
> tepsalesV1CompanyglobalparametersIdDelete(id, opts)

Delete CompanyGlobalParameter by Id

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.CompanyGlobalParameterApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | CompanyGlobalParameter id
let opts = { 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "c0298197-2848-4387-b408-5ae8224df17b" // String | CSRF Protection
};
apiInstance.tepsalesV1CompanyglobalparametersIdDelete(id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| CompanyGlobalParameter id | 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to c0298197-2848-4387-b408-5ae8224df17b]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="tepsalesV1CompanyglobalparametersIdPatch"></a>
# **tepsalesV1CompanyglobalparametersIdPatch**
> tepsalesV1CompanyglobalparametersIdPatch(body, id, opts)

Update part of CompanyGlobalParameter

Sample request:                    PATCH /tepsales/v1/CompanyGlobalParameter/{id}      [          {              \&quot;op\&quot;: \&quot;replace\&quot;,              \&quot;path\&quot;: \&quot;/atribute_name\&quot;,              \&quot;value\&quot;: \&quot;new value\&quot;          }      ]

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.CompanyGlobalParameterApi();
let body = [new TepsalesserviceApi.Operation()]; // [Operation] | Atributes values
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | CompanyGlobalParameter id
let opts = { 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "2f6e762e-ce8f-4295-a647-94642d596005" // String | CSRF Protection
};
apiInstance.tepsalesV1CompanyglobalparametersIdPatch(body, id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| CompanyGlobalParameter id | 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 2f6e762e-ce8f-4295-a647-94642d596005]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="tepsalesV1CompanyglobalparametersIdPut"></a>
# **tepsalesV1CompanyglobalparametersIdPut**
> tepsalesV1CompanyglobalparametersIdPut(id, opts)

Update CompanyGlobalParameter

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.CompanyGlobalParameterApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | CompanyGlobalParameter Id
let opts = { 
  'body': new TepsalesserviceApi.PutCompanyGlobalParameterRequest(), // PutCompanyGlobalParameterRequest | CompanyGlobalParameter to update
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "9165ddd9-d5dc-467f-8492-1e3292d1cbc3" // String | CSRF Protection
};
apiInstance.tepsalesV1CompanyglobalparametersIdPut(id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| CompanyGlobalParameter Id | 
 **body** | [**PutCompanyGlobalParameterRequest**](PutCompanyGlobalParameterRequest.md)| CompanyGlobalParameter to update | [optional] 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 9165ddd9-d5dc-467f-8492-1e3292d1cbc3]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="tepsalesV1CompanyglobalparametersPagedGet"></a>
# **tepsalesV1CompanyglobalparametersPagedGet**
> GetAllPagedCompanyGlobalParameterResponse tepsalesV1CompanyglobalparametersPagedGet(opts)

Get All CompanyGlobalParameter by filter with pagination

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.CompanyGlobalParameterApi();
let opts = { 
  'name': "name_example", // String | 
  'page': 56, // Number | 
  'pageSize': 56, // Number | 
  'sort': "Id.desc", // String | Sorting atributes, sample: id.desc,name.asc
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "139e7e74-78d6-429e-b208-3b39b9c8b712" // String | CSRF Protection
};
apiInstance.tepsalesV1CompanyglobalparametersPagedGet(opts, (error, data, response) => {
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
 **page** | **Number**|  | [optional] 
 **pageSize** | **Number**|  | [optional] 
 **sort** | **String**| Sorting atributes, sample: id.desc,name.asc | [optional] [default to Id.desc]
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 139e7e74-78d6-429e-b208-3b39b9c8b712]

### Return type

[**GetAllPagedCompanyGlobalParameterResponse**](GetAllPagedCompanyGlobalParameterResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="tepsalesV1CompanyglobalparametersPost"></a>
# **tepsalesV1CompanyglobalparametersPost**
> PostCompanyGlobalParameterResponse tepsalesV1CompanyglobalparametersPost(opts)

Create CompanyGlobalParameter

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.CompanyGlobalParameterApi();
let opts = { 
  'body': new TepsalesserviceApi.PostCompanyGlobalParameterRequest(), // PostCompanyGlobalParameterRequest | CompanyGlobalParameter to create
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "1f71440f-688a-48ea-af92-a20b31637c55" // String | CSRF Protection
};
apiInstance.tepsalesV1CompanyglobalparametersPost(opts, (error, data, response) => {
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
 **body** | [**PostCompanyGlobalParameterRequest**](PostCompanyGlobalParameterRequest.md)| CompanyGlobalParameter to create | [optional] 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 1f71440f-688a-48ea-af92-a20b31637c55]

### Return type

[**PostCompanyGlobalParameterResponse**](PostCompanyGlobalParameterResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

