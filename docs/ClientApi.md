# TepsalesserviceApi.ClientApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getByIdClient**](ClientApi.md#getByIdClient) | **GET** /tepsales/v1/clients/{id} | Get Client by id
[**tepsalesV1ClientsAllGet**](ClientApi.md#tepsalesV1ClientsAllGet) | **GET** /tepsales/v1/clients/all | Get All Client by filter
[**tepsalesV1ClientsIdDelete**](ClientApi.md#tepsalesV1ClientsIdDelete) | **DELETE** /tepsales/v1/clients/{id} | Delete Client by Id
[**tepsalesV1ClientsIdPatch**](ClientApi.md#tepsalesV1ClientsIdPatch) | **PATCH** /tepsales/v1/clients/{id} | Update part of Client
[**tepsalesV1ClientsIdPut**](ClientApi.md#tepsalesV1ClientsIdPut) | **PUT** /tepsales/v1/clients/{id} | Update Client
[**tepsalesV1ClientsPagedGet**](ClientApi.md#tepsalesV1ClientsPagedGet) | **GET** /tepsales/v1/clients/paged | Get All Client by filter with pagination
[**tepsalesV1ClientsPost**](ClientApi.md#tepsalesV1ClientsPost) | **POST** /tepsales/v1/clients | Create Client

<a name="getByIdClient"></a>
# **getByIdClient**
> GetAllClientResponse getByIdClient(id, opts)

Get Client by id

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.ClientApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | Client id
let opts = { 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "1ab67886-b411-490b-b2a4-af516eef08e0" // String | CSRF Protection
};
apiInstance.getByIdClient(id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| Client id | 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 1ab67886-b411-490b-b2a4-af516eef08e0]

### Return type

[**GetAllClientResponse**](GetAllClientResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="tepsalesV1ClientsAllGet"></a>
# **tepsalesV1ClientsAllGet**
> [GetAllClientResponse] tepsalesV1ClientsAllGet(opts)

Get All Client by filter

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.ClientApi();
let opts = { 
  'name': "name_example", // String | 
  'document': "document_example", // String | 
  'phone': "phone_example", // String | 
  'ie': "ie_example", // String | 
  'email': "email_example", // String | 
  'externalCode': "externalCode_example", // String | 
  'status': new TepsalesserviceApi.ClientStatus(), // ClientStatus | 
  'userSellerId': "38400000-8cf0-11bd-b23e-10b96e4ef00d", // String | 
  'limit': 100, // Number | limit
  'sort': "Id.desc", // String | Sorting atributes, sample: id.desc,name.asc
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "bbf560e2-44c2-4977-91bf-d49d8690e133" // String | CSRF Protection
};
apiInstance.tepsalesV1ClientsAllGet(opts, (error, data, response) => {
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
 **document** | **String**|  | [optional] 
 **phone** | **String**|  | [optional] 
 **ie** | **String**|  | [optional] 
 **email** | **String**|  | [optional] 
 **externalCode** | **String**|  | [optional] 
 **status** | [**ClientStatus**](.md)|  | [optional] 
 **userSellerId** | [**String**](.md)|  | [optional] 
 **limit** | **Number**| limit | [optional] [default to 100]
 **sort** | **String**| Sorting atributes, sample: id.desc,name.asc | [optional] [default to Id.desc]
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to bbf560e2-44c2-4977-91bf-d49d8690e133]

### Return type

[**[GetAllClientResponse]**](GetAllClientResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="tepsalesV1ClientsIdDelete"></a>
# **tepsalesV1ClientsIdDelete**
> tepsalesV1ClientsIdDelete(id, opts)

Delete Client by Id

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.ClientApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | Client id
let opts = { 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "54d1c1ef-1b27-4fd1-9e58-ce72bf033ac6" // String | CSRF Protection
};
apiInstance.tepsalesV1ClientsIdDelete(id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| Client id | 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 54d1c1ef-1b27-4fd1-9e58-ce72bf033ac6]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="tepsalesV1ClientsIdPatch"></a>
# **tepsalesV1ClientsIdPatch**
> tepsalesV1ClientsIdPatch(body, id, opts)

Update part of Client

Sample request:                    PATCH /tepsales/v1/Client/{id}      [          {              \&quot;op\&quot;: \&quot;replace\&quot;,              \&quot;path\&quot;: \&quot;/atribute_name\&quot;,              \&quot;value\&quot;: \&quot;new value\&quot;          }      ]

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.ClientApi();
let body = [new TepsalesserviceApi.Operation()]; // [Operation] | Atributes values
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | Client id
let opts = { 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "386cb19e-619f-4cea-9e5f-6e74e5b29710" // String | CSRF Protection
};
apiInstance.tepsalesV1ClientsIdPatch(body, id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| Client id | 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 386cb19e-619f-4cea-9e5f-6e74e5b29710]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="tepsalesV1ClientsIdPut"></a>
# **tepsalesV1ClientsIdPut**
> tepsalesV1ClientsIdPut(id, opts)

Update Client

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.ClientApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | Client Id
let opts = { 
  'body': new TepsalesserviceApi.PutClientRequest(), // PutClientRequest | Client to update
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "f9aec345-e986-4d16-bf54-c7f7b7826989" // String | CSRF Protection
};
apiInstance.tepsalesV1ClientsIdPut(id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| Client Id | 
 **body** | [**PutClientRequest**](PutClientRequest.md)| Client to update | [optional] 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to f9aec345-e986-4d16-bf54-c7f7b7826989]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="tepsalesV1ClientsPagedGet"></a>
# **tepsalesV1ClientsPagedGet**
> GetAllPagedClientResponse tepsalesV1ClientsPagedGet(opts)

Get All Client by filter with pagination

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.ClientApi();
let opts = { 
  'name': "name_example", // String | 
  'document': "document_example", // String | 
  'phone': "phone_example", // String | 
  'ie': "ie_example", // String | 
  'email': "email_example", // String | 
  'externalCode': "externalCode_example", // String | 
  'status': new TepsalesserviceApi.ClientStatus(), // ClientStatus | 
  'userSellerId': "38400000-8cf0-11bd-b23e-10b96e4ef00d", // String | 
  'page': 56, // Number | 
  'pageSize': 56, // Number | 
  'sort': "Id.desc", // String | Sorting atributes, sample: id.desc,name.asc
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "d36e97a6-9d5e-4343-85fc-b1463eee87f6" // String | CSRF Protection
};
apiInstance.tepsalesV1ClientsPagedGet(opts, (error, data, response) => {
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
 **document** | **String**|  | [optional] 
 **phone** | **String**|  | [optional] 
 **ie** | **String**|  | [optional] 
 **email** | **String**|  | [optional] 
 **externalCode** | **String**|  | [optional] 
 **status** | [**ClientStatus**](.md)|  | [optional] 
 **userSellerId** | [**String**](.md)|  | [optional] 
 **page** | **Number**|  | [optional] 
 **pageSize** | **Number**|  | [optional] 
 **sort** | **String**| Sorting atributes, sample: id.desc,name.asc | [optional] [default to Id.desc]
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to d36e97a6-9d5e-4343-85fc-b1463eee87f6]

### Return type

[**GetAllPagedClientResponse**](GetAllPagedClientResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="tepsalesV1ClientsPost"></a>
# **tepsalesV1ClientsPost**
> PostClientResponse tepsalesV1ClientsPost(opts)

Create Client

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.ClientApi();
let opts = { 
  'body': new TepsalesserviceApi.PostClientRequest(), // PostClientRequest | Client to create
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "215d797e-7462-4675-bdd6-3bb1eb350a3e" // String | CSRF Protection
};
apiInstance.tepsalesV1ClientsPost(opts, (error, data, response) => {
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
 **body** | [**PostClientRequest**](PostClientRequest.md)| Client to create | [optional] 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 215d797e-7462-4675-bdd6-3bb1eb350a3e]

### Return type

[**PostClientResponse**](PostClientResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

