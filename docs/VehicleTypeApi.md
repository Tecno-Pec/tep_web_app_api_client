# TepsalesserviceApi.VehicleTypeApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getByIdVehicleType**](VehicleTypeApi.md#getByIdVehicleType) | **GET** /tepsales/v1/vehicleTypes/{id} | Get VehicleType by id
[**tepsalesV1VehicleTypesAllGet**](VehicleTypeApi.md#tepsalesV1VehicleTypesAllGet) | **GET** /tepsales/v1/vehicleTypes/all | Get All VehicleType by filter
[**tepsalesV1VehicleTypesIdDelete**](VehicleTypeApi.md#tepsalesV1VehicleTypesIdDelete) | **DELETE** /tepsales/v1/vehicleTypes/{id} | Delete VehicleType by Id
[**tepsalesV1VehicleTypesIdPatch**](VehicleTypeApi.md#tepsalesV1VehicleTypesIdPatch) | **PATCH** /tepsales/v1/vehicleTypes/{id} | Update part of VehicleType
[**tepsalesV1VehicleTypesIdPut**](VehicleTypeApi.md#tepsalesV1VehicleTypesIdPut) | **PUT** /tepsales/v1/vehicleTypes/{id} | Update VehicleType
[**tepsalesV1VehicleTypesPagedGet**](VehicleTypeApi.md#tepsalesV1VehicleTypesPagedGet) | **GET** /tepsales/v1/vehicleTypes/paged | Get All VehicleType by filter with pagination
[**tepsalesV1VehicleTypesPost**](VehicleTypeApi.md#tepsalesV1VehicleTypesPost) | **POST** /tepsales/v1/vehicleTypes | Create VehicleType

<a name="getByIdVehicleType"></a>
# **getByIdVehicleType**
> GetAllVehicleTypeResponse getByIdVehicleType(id, opts)

Get VehicleType by id

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.VehicleTypeApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | VehicleType id
let opts = { 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "ca9272b0-bb48-4399-9379-79f4da47e7d3" // String | CSRF Protection
};
apiInstance.getByIdVehicleType(id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| VehicleType id | 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to ca9272b0-bb48-4399-9379-79f4da47e7d3]

### Return type

[**GetAllVehicleTypeResponse**](GetAllVehicleTypeResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="tepsalesV1VehicleTypesAllGet"></a>
# **tepsalesV1VehicleTypesAllGet**
> [GetAllVehicleTypeResponse] tepsalesV1VehicleTypesAllGet(opts)

Get All VehicleType by filter

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.VehicleTypeApi();
let opts = { 
  'name': "name_example", // String | 
  'externalCode': "externalCode_example", // String | 
  'status': new TepsalesserviceApi.VehicleTypeStatus(), // VehicleTypeStatus | 
  'limit': 100, // Number | limit
  'sort': "Id.desc", // String | Sorting atributes, sample: id.desc,name.asc
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "1ead3280-6bfc-4db8-a3b9-9d740c5f2b95" // String | CSRF Protection
};
apiInstance.tepsalesV1VehicleTypesAllGet(opts, (error, data, response) => {
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
 **status** | [**VehicleTypeStatus**](.md)|  | [optional] 
 **limit** | **Number**| limit | [optional] [default to 100]
 **sort** | **String**| Sorting atributes, sample: id.desc,name.asc | [optional] [default to Id.desc]
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 1ead3280-6bfc-4db8-a3b9-9d740c5f2b95]

### Return type

[**[GetAllVehicleTypeResponse]**](GetAllVehicleTypeResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="tepsalesV1VehicleTypesIdDelete"></a>
# **tepsalesV1VehicleTypesIdDelete**
> tepsalesV1VehicleTypesIdDelete(id, opts)

Delete VehicleType by Id

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.VehicleTypeApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | VehicleType id
let opts = { 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "e70393cc-13b8-4284-9f9b-f18a15e3c69e" // String | CSRF Protection
};
apiInstance.tepsalesV1VehicleTypesIdDelete(id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| VehicleType id | 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to e70393cc-13b8-4284-9f9b-f18a15e3c69e]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="tepsalesV1VehicleTypesIdPatch"></a>
# **tepsalesV1VehicleTypesIdPatch**
> tepsalesV1VehicleTypesIdPatch(body, id, opts)

Update part of VehicleType

Sample request:                    PATCH /tepsales/v1/VehicleType/{id}      [          {              \&quot;op\&quot;: \&quot;replace\&quot;,              \&quot;path\&quot;: \&quot;/atribute_name\&quot;,              \&quot;value\&quot;: \&quot;new value\&quot;          }      ]

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.VehicleTypeApi();
let body = [new TepsalesserviceApi.Operation()]; // [Operation] | Atributes values
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | VehicleType id
let opts = { 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "c9182fa5-bfa1-4f82-8c23-019ef36d96eb" // String | CSRF Protection
};
apiInstance.tepsalesV1VehicleTypesIdPatch(body, id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| VehicleType id | 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to c9182fa5-bfa1-4f82-8c23-019ef36d96eb]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="tepsalesV1VehicleTypesIdPut"></a>
# **tepsalesV1VehicleTypesIdPut**
> tepsalesV1VehicleTypesIdPut(id, opts)

Update VehicleType

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.VehicleTypeApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | VehicleType Id
let opts = { 
  'body': new TepsalesserviceApi.PutVehicleTypeRequest(), // PutVehicleTypeRequest | VehicleType to update
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "5f82c663-a28d-4bb9-aafb-22c61a5c7832" // String | CSRF Protection
};
apiInstance.tepsalesV1VehicleTypesIdPut(id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| VehicleType Id | 
 **body** | [**PutVehicleTypeRequest**](PutVehicleTypeRequest.md)| VehicleType to update | [optional] 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 5f82c663-a28d-4bb9-aafb-22c61a5c7832]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="tepsalesV1VehicleTypesPagedGet"></a>
# **tepsalesV1VehicleTypesPagedGet**
> GetAllPagedVehicleTypeResponse tepsalesV1VehicleTypesPagedGet(opts)

Get All VehicleType by filter with pagination

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.VehicleTypeApi();
let opts = { 
  'name': "name_example", // String | 
  'externalCode': "externalCode_example", // String | 
  'status': new TepsalesserviceApi.VehicleTypeStatus(), // VehicleTypeStatus | 
  'page': 56, // Number | 
  'pageSize': 56, // Number | 
  'sort': "Id.desc", // String | Sorting atributes, sample: id.desc,name.asc
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "37aa40ef-1321-4ce9-9555-6e6c41b20a82" // String | CSRF Protection
};
apiInstance.tepsalesV1VehicleTypesPagedGet(opts, (error, data, response) => {
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
 **status** | [**VehicleTypeStatus**](.md)|  | [optional] 
 **page** | **Number**|  | [optional] 
 **pageSize** | **Number**|  | [optional] 
 **sort** | **String**| Sorting atributes, sample: id.desc,name.asc | [optional] [default to Id.desc]
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 37aa40ef-1321-4ce9-9555-6e6c41b20a82]

### Return type

[**GetAllPagedVehicleTypeResponse**](GetAllPagedVehicleTypeResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="tepsalesV1VehicleTypesPost"></a>
# **tepsalesV1VehicleTypesPost**
> PostVehicleTypeResponse tepsalesV1VehicleTypesPost(opts)

Create VehicleType

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.VehicleTypeApi();
let opts = { 
  'body': new TepsalesserviceApi.PostVehicleTypeRequest(), // PostVehicleTypeRequest | VehicleType to create
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "568b1368-8121-45d3-9c73-a38f5aeff1fc" // String | CSRF Protection
};
apiInstance.tepsalesV1VehicleTypesPost(opts, (error, data, response) => {
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
 **body** | [**PostVehicleTypeRequest**](PostVehicleTypeRequest.md)| VehicleType to create | [optional] 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 568b1368-8121-45d3-9c73-a38f5aeff1fc]

### Return type

[**PostVehicleTypeResponse**](PostVehicleTypeResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

