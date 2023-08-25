# TepsalesserviceApi.TemplateApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getByIdTemplate**](TemplateApi.md#getByIdTemplate) | **GET** /tepsales/v1/templates/{id} | Get Template by id
[**tepsalesV1TemplatesAllGet**](TemplateApi.md#tepsalesV1TemplatesAllGet) | **GET** /tepsales/v1/templates/all | Get All Template by filter
[**tepsalesV1TemplatesIdDelete**](TemplateApi.md#tepsalesV1TemplatesIdDelete) | **DELETE** /tepsales/v1/templates/{id} | Delete Template by Id
[**tepsalesV1TemplatesIdPatch**](TemplateApi.md#tepsalesV1TemplatesIdPatch) | **PATCH** /tepsales/v1/templates/{id} | Update part of Template
[**tepsalesV1TemplatesIdPut**](TemplateApi.md#tepsalesV1TemplatesIdPut) | **PUT** /tepsales/v1/templates/{id} | Update Template
[**tepsalesV1TemplatesPagedGet**](TemplateApi.md#tepsalesV1TemplatesPagedGet) | **GET** /tepsales/v1/templates/paged | Get All Template by filter with pagination
[**tepsalesV1TemplatesPost**](TemplateApi.md#tepsalesV1TemplatesPost) | **POST** /tepsales/v1/templates | Create Template

<a name="getByIdTemplate"></a>
# **getByIdTemplate**
> GetAllTemplateResponse getByIdTemplate(id, opts)

Get Template by id

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.TemplateApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | Template id
let opts = { 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "17db2823-2323-441b-b2aa-bc998743c240" // String | CSRF Protection
};
apiInstance.getByIdTemplate(id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| Template id | 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 17db2823-2323-441b-b2aa-bc998743c240]

### Return type

[**GetAllTemplateResponse**](GetAllTemplateResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="tepsalesV1TemplatesAllGet"></a>
# **tepsalesV1TemplatesAllGet**
> [GetAllTemplateResponse] tepsalesV1TemplatesAllGet(opts)

Get All Template by filter

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.TemplateApi();
let opts = { 
  'name': "name_example", // String | 
  'limit': 100, // Number | limit
  'sort': "Id.desc", // String | Sorting atributes, sample: id.desc,name.asc
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "4cf479e0-1855-474a-a20f-0bcc9d10791f" // String | CSRF Protection
};
apiInstance.tepsalesV1TemplatesAllGet(opts, (error, data, response) => {
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
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 4cf479e0-1855-474a-a20f-0bcc9d10791f]

### Return type

[**[GetAllTemplateResponse]**](GetAllTemplateResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="tepsalesV1TemplatesIdDelete"></a>
# **tepsalesV1TemplatesIdDelete**
> tepsalesV1TemplatesIdDelete(id, opts)

Delete Template by Id

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.TemplateApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | Template id
let opts = { 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "98e2e376-f61f-49f0-a1d6-0e88885e4a94" // String | CSRF Protection
};
apiInstance.tepsalesV1TemplatesIdDelete(id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| Template id | 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 98e2e376-f61f-49f0-a1d6-0e88885e4a94]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="tepsalesV1TemplatesIdPatch"></a>
# **tepsalesV1TemplatesIdPatch**
> tepsalesV1TemplatesIdPatch(body, id, opts)

Update part of Template

Sample request:                    PATCH /tepsales/v1/Template/{id}      [          {              \&quot;op\&quot;: \&quot;replace\&quot;,              \&quot;path\&quot;: \&quot;/atribute_name\&quot;,              \&quot;value\&quot;: \&quot;new value\&quot;          }      ]

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.TemplateApi();
let body = [new TepsalesserviceApi.Operation()]; // [Operation] | Atributes values
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | Template id
let opts = { 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "f1c481cb-70df-4dc8-ab91-117617f2bf40" // String | CSRF Protection
};
apiInstance.tepsalesV1TemplatesIdPatch(body, id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| Template id | 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to f1c481cb-70df-4dc8-ab91-117617f2bf40]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="tepsalesV1TemplatesIdPut"></a>
# **tepsalesV1TemplatesIdPut**
> tepsalesV1TemplatesIdPut(id, opts)

Update Template

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.TemplateApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | Template Id
let opts = { 
  'body': new TepsalesserviceApi.PutTemplateRequest(), // PutTemplateRequest | Template to update
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "9ec2219d-4e0a-4d33-b632-eaeb32cd8bab" // String | CSRF Protection
};
apiInstance.tepsalesV1TemplatesIdPut(id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| Template Id | 
 **body** | [**PutTemplateRequest**](PutTemplateRequest.md)| Template to update | [optional] 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 9ec2219d-4e0a-4d33-b632-eaeb32cd8bab]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="tepsalesV1TemplatesPagedGet"></a>
# **tepsalesV1TemplatesPagedGet**
> GetAllPagedTemplateResponse tepsalesV1TemplatesPagedGet(opts)

Get All Template by filter with pagination

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.TemplateApi();
let opts = { 
  'name': "name_example", // String | 
  'page': 56, // Number | 
  'pageSize': 56, // Number | 
  'sort': "Id.desc", // String | Sorting atributes, sample: id.desc,name.asc
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "1501cb2c-cf97-4b3f-9b53-d79ce26b6f1a" // String | CSRF Protection
};
apiInstance.tepsalesV1TemplatesPagedGet(opts, (error, data, response) => {
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
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 1501cb2c-cf97-4b3f-9b53-d79ce26b6f1a]

### Return type

[**GetAllPagedTemplateResponse**](GetAllPagedTemplateResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="tepsalesV1TemplatesPost"></a>
# **tepsalesV1TemplatesPost**
> PostTemplateResponse tepsalesV1TemplatesPost(opts)

Create Template

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.TemplateApi();
let opts = { 
  'body': new TepsalesserviceApi.PostTemplateRequest(), // PostTemplateRequest | Template to create
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "0af367f6-e580-4783-a16a-ecde930a42ea" // String | CSRF Protection
};
apiInstance.tepsalesV1TemplatesPost(opts, (error, data, response) => {
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
 **body** | [**PostTemplateRequest**](PostTemplateRequest.md)| Template to create | [optional] 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 0af367f6-e580-4783-a16a-ecde930a42ea]

### Return type

[**PostTemplateResponse**](PostTemplateResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

