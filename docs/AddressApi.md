# TepsalesserviceApi.AddressApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getByIdAddress**](AddressApi.md#getByIdAddress) | **GET** /tepsales/v1/addresses/{id} | Get Address by id
[**tepsalesV1AddressesAllGet**](AddressApi.md#tepsalesV1AddressesAllGet) | **GET** /tepsales/v1/addresses/all | Get All Address by filter
[**tepsalesV1AddressesIdDelete**](AddressApi.md#tepsalesV1AddressesIdDelete) | **DELETE** /tepsales/v1/addresses/{id} | Delete Address by Id
[**tepsalesV1AddressesIdPatch**](AddressApi.md#tepsalesV1AddressesIdPatch) | **PATCH** /tepsales/v1/addresses/{id} | Update part of Address
[**tepsalesV1AddressesIdPut**](AddressApi.md#tepsalesV1AddressesIdPut) | **PUT** /tepsales/v1/addresses/{id} | Update Address
[**tepsalesV1AddressesPagedGet**](AddressApi.md#tepsalesV1AddressesPagedGet) | **GET** /tepsales/v1/addresses/paged | Get All Address by filter with pagination
[**tepsalesV1AddressesPost**](AddressApi.md#tepsalesV1AddressesPost) | **POST** /tepsales/v1/addresses | Create Address

<a name="getByIdAddress"></a>
# **getByIdAddress**
> GetAllAddressResponse getByIdAddress(id, opts)

Get Address by id

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.AddressApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | Address id
let opts = { 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "8787799b-13f7-4fc6-aecc-d24babd84634" // String | CSRF Protection
};
apiInstance.getByIdAddress(id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| Address id | 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 8787799b-13f7-4fc6-aecc-d24babd84634]

### Return type

[**GetAllAddressResponse**](GetAllAddressResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="tepsalesV1AddressesAllGet"></a>
# **tepsalesV1AddressesAllGet**
> [GetAllAddressResponse] tepsalesV1AddressesAllGet(opts)

Get All Address by filter

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.AddressApi();
let opts = { 
  'parentId': "38400000-8cf0-11bd-b23e-10b96e4ef00d", // String | 
  'name': "name_example", // String | 
  'type': new TepsalesserviceApi.AddressTypeEnum(), // AddressTypeEnum | 
  'externalCode': "externalCode_example", // String | 
  'status': new TepsalesserviceApi.AddressStatus(), // AddressStatus | 
  'parentIds': ["parentIds_example"], // [String] | 
  'limit': 100, // Number | limit
  'sort': "Id.asc", // String | Sorting atributes, sample: id.desc,name.asc
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "8c57c94d-b943-4991-82f2-40afdec40b78" // String | CSRF Protection
};
apiInstance.tepsalesV1AddressesAllGet(opts, (error, data, response) => {
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
 **parentId** | [**String**](.md)|  | [optional] 
 **name** | **String**|  | [optional] 
 **type** | [**AddressTypeEnum**](.md)|  | [optional] 
 **externalCode** | **String**|  | [optional] 
 **status** | [**AddressStatus**](.md)|  | [optional] 
 **parentIds** | [**[String]**](String.md)|  | [optional] 
 **limit** | **Number**| limit | [optional] [default to 100]
 **sort** | **String**| Sorting atributes, sample: id.desc,name.asc | [optional] [default to Id.asc]
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 8c57c94d-b943-4991-82f2-40afdec40b78]

### Return type

[**[GetAllAddressResponse]**](GetAllAddressResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="tepsalesV1AddressesIdDelete"></a>
# **tepsalesV1AddressesIdDelete**
> tepsalesV1AddressesIdDelete(id, opts)

Delete Address by Id

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.AddressApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | Address id
let opts = { 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "2faa3f2d-cf40-4e46-abc5-bc3aefd79c3f" // String | CSRF Protection
};
apiInstance.tepsalesV1AddressesIdDelete(id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| Address id | 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 2faa3f2d-cf40-4e46-abc5-bc3aefd79c3f]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="tepsalesV1AddressesIdPatch"></a>
# **tepsalesV1AddressesIdPatch**
> tepsalesV1AddressesIdPatch(body, id, opts)

Update part of Address

Sample request:                    PATCH /tepsales/v1/Address/{id}      [          {              \&quot;op\&quot;: \&quot;replace\&quot;,              \&quot;path\&quot;: \&quot;/atribute_name\&quot;,              \&quot;value\&quot;: \&quot;new value\&quot;          }      ]

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.AddressApi();
let body = [new TepsalesserviceApi.Operation()]; // [Operation] | Atributes values
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | Address id
let opts = { 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "16cd2c8d-1f11-4c35-afa6-2f634f71066e" // String | CSRF Protection
};
apiInstance.tepsalesV1AddressesIdPatch(body, id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| Address id | 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 16cd2c8d-1f11-4c35-afa6-2f634f71066e]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="tepsalesV1AddressesIdPut"></a>
# **tepsalesV1AddressesIdPut**
> tepsalesV1AddressesIdPut(id, opts)

Update Address

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.AddressApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | Address Id
let opts = { 
  'body': new TepsalesserviceApi.PutAddressRequest(), // PutAddressRequest | Address to update
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "5f31dc23-710c-4fe4-87cf-f497d0075872" // String | CSRF Protection
};
apiInstance.tepsalesV1AddressesIdPut(id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| Address Id | 
 **body** | [**PutAddressRequest**](PutAddressRequest.md)| Address to update | [optional] 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 5f31dc23-710c-4fe4-87cf-f497d0075872]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="tepsalesV1AddressesPagedGet"></a>
# **tepsalesV1AddressesPagedGet**
> GetAllPagedAddressResponse tepsalesV1AddressesPagedGet(opts)

Get All Address by filter with pagination

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.AddressApi();
let opts = { 
  'parentId': "38400000-8cf0-11bd-b23e-10b96e4ef00d", // String | 
  'name': "name_example", // String | 
  'type': new TepsalesserviceApi.AddressTypeEnum(), // AddressTypeEnum | 
  'externalCode': "externalCode_example", // String | 
  'status': new TepsalesserviceApi.AddressStatus(), // AddressStatus | 
  'parentIds': ["parentIds_example"], // [String] | 
  'page': 56, // Number | 
  'pageSize': 56, // Number | 
  'sort': "Id.desc", // String | Sorting atributes, sample: id.desc,name.asc
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "8a76fa35-908c-470c-a8d1-fbd5e62e8b85" // String | CSRF Protection
};
apiInstance.tepsalesV1AddressesPagedGet(opts, (error, data, response) => {
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
 **parentId** | [**String**](.md)|  | [optional] 
 **name** | **String**|  | [optional] 
 **type** | [**AddressTypeEnum**](.md)|  | [optional] 
 **externalCode** | **String**|  | [optional] 
 **status** | [**AddressStatus**](.md)|  | [optional] 
 **parentIds** | [**[String]**](String.md)|  | [optional] 
 **page** | **Number**|  | [optional] 
 **pageSize** | **Number**|  | [optional] 
 **sort** | **String**| Sorting atributes, sample: id.desc,name.asc | [optional] [default to Id.desc]
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 8a76fa35-908c-470c-a8d1-fbd5e62e8b85]

### Return type

[**GetAllPagedAddressResponse**](GetAllPagedAddressResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="tepsalesV1AddressesPost"></a>
# **tepsalesV1AddressesPost**
> PostAddressResponse tepsalesV1AddressesPost(opts)

Create Address

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.AddressApi();
let opts = { 
  'body': new TepsalesserviceApi.PostAddressRequest(), // PostAddressRequest | Address to create
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "6846a014-bd83-47db-a3ed-87e52ac21a8b" // String | CSRF Protection
};
apiInstance.tepsalesV1AddressesPost(opts, (error, data, response) => {
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
 **body** | [**PostAddressRequest**](PostAddressRequest.md)| Address to create | [optional] 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 6846a014-bd83-47db-a3ed-87e52ac21a8b]

### Return type

[**PostAddressResponse**](PostAddressResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

