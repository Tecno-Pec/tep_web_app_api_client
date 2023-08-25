# TepsalesserviceApi.CompanyApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getByIdCompany**](CompanyApi.md#getByIdCompany) | **GET** /tepsales/v1/companies/{id} | Get Company by id
[**tepsalesV1CompaniesAllGet**](CompanyApi.md#tepsalesV1CompaniesAllGet) | **GET** /tepsales/v1/companies/all | Get All Company by filter
[**tepsalesV1CompaniesIdDelete**](CompanyApi.md#tepsalesV1CompaniesIdDelete) | **DELETE** /tepsales/v1/companies/{id} | Delete Company by Id
[**tepsalesV1CompaniesIdPatch**](CompanyApi.md#tepsalesV1CompaniesIdPatch) | **PATCH** /tepsales/v1/companies/{id} | Update part of Company
[**tepsalesV1CompaniesIdPut**](CompanyApi.md#tepsalesV1CompaniesIdPut) | **PUT** /tepsales/v1/companies/{id} | Update Company
[**tepsalesV1CompaniesPagedGet**](CompanyApi.md#tepsalesV1CompaniesPagedGet) | **GET** /tepsales/v1/companies/paged | Get All Company by filter with pagination
[**tepsalesV1CompaniesPost**](CompanyApi.md#tepsalesV1CompaniesPost) | **POST** /tepsales/v1/companies | Create Company

<a name="getByIdCompany"></a>
# **getByIdCompany**
> GetAllCompanyResponse getByIdCompany(id, opts)

Get Company by id

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.CompanyApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | Company id
let opts = { 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "63e143bb-0575-43d2-9f7b-c40add1b4341" // String | CSRF Protection
};
apiInstance.getByIdCompany(id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| Company id | 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 63e143bb-0575-43d2-9f7b-c40add1b4341]

### Return type

[**GetAllCompanyResponse**](GetAllCompanyResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="tepsalesV1CompaniesAllGet"></a>
# **tepsalesV1CompaniesAllGet**
> [GetAllCompanyResponse] tepsalesV1CompaniesAllGet(opts)

Get All Company by filter

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.CompanyApi();
let opts = { 
  'name': "name_example", // String | 
  'document': "document_example", // String | 
  'limit': 100, // Number | limit
  'sort': "Id.desc", // String | Sorting atributes, sample: id.desc,name.asc
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "b482e07a-d323-475d-bd05-5196d1dbcb32" // String | CSRF Protection
};
apiInstance.tepsalesV1CompaniesAllGet(opts, (error, data, response) => {
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
 **limit** | **Number**| limit | [optional] [default to 100]
 **sort** | **String**| Sorting atributes, sample: id.desc,name.asc | [optional] [default to Id.desc]
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to b482e07a-d323-475d-bd05-5196d1dbcb32]

### Return type

[**[GetAllCompanyResponse]**](GetAllCompanyResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="tepsalesV1CompaniesIdDelete"></a>
# **tepsalesV1CompaniesIdDelete**
> tepsalesV1CompaniesIdDelete(id, opts)

Delete Company by Id

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.CompanyApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | Company id
let opts = { 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "a3036157-5445-4410-8ec4-76fbaaea0a3d" // String | CSRF Protection
};
apiInstance.tepsalesV1CompaniesIdDelete(id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| Company id | 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to a3036157-5445-4410-8ec4-76fbaaea0a3d]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="tepsalesV1CompaniesIdPatch"></a>
# **tepsalesV1CompaniesIdPatch**
> tepsalesV1CompaniesIdPatch(body, id, opts)

Update part of Company

Sample request:                    PATCH /tepsales/v1/Company/{id}      [          {              \&quot;op\&quot;: \&quot;replace\&quot;,              \&quot;path\&quot;: \&quot;/atribute_name\&quot;,              \&quot;value\&quot;: \&quot;new value\&quot;          }      ]

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.CompanyApi();
let body = [new TepsalesserviceApi.Operation()]; // [Operation] | Atributes values
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | Company id
let opts = { 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "443cd017-98a5-4a96-b157-3d4217d8bef8" // String | CSRF Protection
};
apiInstance.tepsalesV1CompaniesIdPatch(body, id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| Company id | 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 443cd017-98a5-4a96-b157-3d4217d8bef8]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="tepsalesV1CompaniesIdPut"></a>
# **tepsalesV1CompaniesIdPut**
> tepsalesV1CompaniesIdPut(id, opts)

Update Company

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.CompanyApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | Company Id
let opts = { 
  'body': new TepsalesserviceApi.PutCompanyRequest(), // PutCompanyRequest | Company to update
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "f206746d-37c1-422e-a975-68e5887d9d43" // String | CSRF Protection
};
apiInstance.tepsalesV1CompaniesIdPut(id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| Company Id | 
 **body** | [**PutCompanyRequest**](PutCompanyRequest.md)| Company to update | [optional] 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to f206746d-37c1-422e-a975-68e5887d9d43]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="tepsalesV1CompaniesPagedGet"></a>
# **tepsalesV1CompaniesPagedGet**
> GetAllPagedCompanyResponse tepsalesV1CompaniesPagedGet(opts)

Get All Company by filter with pagination

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.CompanyApi();
let opts = { 
  'name': "name_example", // String | 
  'document': "document_example", // String | 
  'page': 56, // Number | 
  'pageSize': 56, // Number | 
  'sort': "Id.desc", // String | Sorting atributes, sample: id.desc,name.asc
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "4cbdea18-2d0a-4ae0-b612-4ef892a86aa1" // String | CSRF Protection
};
apiInstance.tepsalesV1CompaniesPagedGet(opts, (error, data, response) => {
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
 **page** | **Number**|  | [optional] 
 **pageSize** | **Number**|  | [optional] 
 **sort** | **String**| Sorting atributes, sample: id.desc,name.asc | [optional] [default to Id.desc]
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 4cbdea18-2d0a-4ae0-b612-4ef892a86aa1]

### Return type

[**GetAllPagedCompanyResponse**](GetAllPagedCompanyResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="tepsalesV1CompaniesPost"></a>
# **tepsalesV1CompaniesPost**
> PostCompanyResponse tepsalesV1CompaniesPost(opts)

Create Company

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.CompanyApi();
let opts = { 
  'body': new TepsalesserviceApi.PostCompanyRequest(), // PostCompanyRequest | Company to create
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "c521d77c-66ca-45b5-afb3-19daf59764de" // String | CSRF Protection
};
apiInstance.tepsalesV1CompaniesPost(opts, (error, data, response) => {
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
 **body** | [**PostCompanyRequest**](PostCompanyRequest.md)| Company to create | [optional] 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to c521d77c-66ca-45b5-afb3-19daf59764de]

### Return type

[**PostCompanyResponse**](PostCompanyResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

