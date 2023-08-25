# TepsalesserviceApi.ProductApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getByIdProduct**](ProductApi.md#getByIdProduct) | **GET** /tepsales/v1/products/{id} | Get Product by id
[**tepsalesV1ProductsAllGet**](ProductApi.md#tepsalesV1ProductsAllGet) | **GET** /tepsales/v1/products/all | Get All Product by filter
[**tepsalesV1ProductsIdDelete**](ProductApi.md#tepsalesV1ProductsIdDelete) | **DELETE** /tepsales/v1/products/{id} | Delete Product by Id
[**tepsalesV1ProductsIdPatch**](ProductApi.md#tepsalesV1ProductsIdPatch) | **PATCH** /tepsales/v1/products/{id} | Update part of Product
[**tepsalesV1ProductsIdPut**](ProductApi.md#tepsalesV1ProductsIdPut) | **PUT** /tepsales/v1/products/{id} | Update Product
[**tepsalesV1ProductsPagedGet**](ProductApi.md#tepsalesV1ProductsPagedGet) | **GET** /tepsales/v1/products/paged | Get All Product by filter with pagination
[**tepsalesV1ProductsPost**](ProductApi.md#tepsalesV1ProductsPost) | **POST** /tepsales/v1/products | Create Product

<a name="getByIdProduct"></a>
# **getByIdProduct**
> GetAllProductResponse getByIdProduct(id, opts)

Get Product by id

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.ProductApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | Product id
let opts = { 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "707275e9-5e6a-44f5-a5eb-622ceded748d" // String | CSRF Protection
};
apiInstance.getByIdProduct(id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| Product id | 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 707275e9-5e6a-44f5-a5eb-622ceded748d]

### Return type

[**GetAllProductResponse**](GetAllProductResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="tepsalesV1ProductsAllGet"></a>
# **tepsalesV1ProductsAllGet**
> [GetAllProductResponse] tepsalesV1ProductsAllGet(opts)

Get All Product by filter

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.ProductApi();
let opts = { 
  'externalCode': "externalCode_example", // String | 
  'name': "name_example", // String | 
  'description': "description_example", // String | 
  'productLineId': "38400000-8cf0-11bd-b23e-10b96e4ef00d", // String | 
  'productGroupId': "38400000-8cf0-11bd-b23e-10b96e4ef00d", // String | 
  'unitMeasurementType': new TepsalesserviceApi.UnitMeasurementTypeEnum(), // UnitMeasurementTypeEnum | 
  'status': new TepsalesserviceApi.ProductStatus(), // ProductStatus | 
  'limit': 100, // Number | limit
  'sort': "Id.desc", // String | Sorting atributes, sample: id.desc,name.asc
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "c625dfd5-9b2b-4266-be0c-cc218014c718" // String | CSRF Protection
};
apiInstance.tepsalesV1ProductsAllGet(opts, (error, data, response) => {
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
 **name** | **String**|  | [optional] 
 **description** | **String**|  | [optional] 
 **productLineId** | [**String**](.md)|  | [optional] 
 **productGroupId** | [**String**](.md)|  | [optional] 
 **unitMeasurementType** | [**UnitMeasurementTypeEnum**](.md)|  | [optional] 
 **status** | [**ProductStatus**](.md)|  | [optional] 
 **limit** | **Number**| limit | [optional] [default to 100]
 **sort** | **String**| Sorting atributes, sample: id.desc,name.asc | [optional] [default to Id.desc]
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to c625dfd5-9b2b-4266-be0c-cc218014c718]

### Return type

[**[GetAllProductResponse]**](GetAllProductResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="tepsalesV1ProductsIdDelete"></a>
# **tepsalesV1ProductsIdDelete**
> tepsalesV1ProductsIdDelete(id, opts)

Delete Product by Id

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.ProductApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | Product id
let opts = { 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "a8a7882a-09d7-42e0-b68e-7d5a259aa352" // String | CSRF Protection
};
apiInstance.tepsalesV1ProductsIdDelete(id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| Product id | 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to a8a7882a-09d7-42e0-b68e-7d5a259aa352]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="tepsalesV1ProductsIdPatch"></a>
# **tepsalesV1ProductsIdPatch**
> tepsalesV1ProductsIdPatch(body, id, opts)

Update part of Product

Sample request:                    PATCH /tepsales/v1/Product/{id}      [          {              \&quot;op\&quot;: \&quot;replace\&quot;,              \&quot;path\&quot;: \&quot;/atribute_name\&quot;,              \&quot;value\&quot;: \&quot;new value\&quot;          }      ]

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.ProductApi();
let body = [new TepsalesserviceApi.Operation()]; // [Operation] | Atributes values
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | Product id
let opts = { 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "4fd0ea52-f7a6-437d-b728-70dbdcb4c6f3" // String | CSRF Protection
};
apiInstance.tepsalesV1ProductsIdPatch(body, id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| Product id | 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 4fd0ea52-f7a6-437d-b728-70dbdcb4c6f3]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="tepsalesV1ProductsIdPut"></a>
# **tepsalesV1ProductsIdPut**
> tepsalesV1ProductsIdPut(id, opts)

Update Product

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.ProductApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | Product Id
let opts = { 
  'body': new TepsalesserviceApi.PutProductRequest(), // PutProductRequest | Product to update
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "a8b73cc3-a1e4-4e99-9551-fc40fce3e603" // String | CSRF Protection
};
apiInstance.tepsalesV1ProductsIdPut(id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| Product Id | 
 **body** | [**PutProductRequest**](PutProductRequest.md)| Product to update | [optional] 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to a8b73cc3-a1e4-4e99-9551-fc40fce3e603]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="tepsalesV1ProductsPagedGet"></a>
# **tepsalesV1ProductsPagedGet**
> GetAllPagedProductResponse tepsalesV1ProductsPagedGet(opts)

Get All Product by filter with pagination

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.ProductApi();
let opts = { 
  'externalCode': "externalCode_example", // String | 
  'name': "name_example", // String | 
  'description': "description_example", // String | 
  'productLineId': "38400000-8cf0-11bd-b23e-10b96e4ef00d", // String | 
  'productGroupId': "38400000-8cf0-11bd-b23e-10b96e4ef00d", // String | 
  'unitMeasurementType': new TepsalesserviceApi.UnitMeasurementTypeEnum(), // UnitMeasurementTypeEnum | 
  'status': new TepsalesserviceApi.ProductStatus(), // ProductStatus | 
  'page': 56, // Number | 
  'pageSize': 56, // Number | 
  'sort': "Id.desc", // String | Sorting atributes, sample: id.desc,name.asc
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "73f958da-a08b-4bc5-93af-086860fd26b1" // String | CSRF Protection
};
apiInstance.tepsalesV1ProductsPagedGet(opts, (error, data, response) => {
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
 **name** | **String**|  | [optional] 
 **description** | **String**|  | [optional] 
 **productLineId** | [**String**](.md)|  | [optional] 
 **productGroupId** | [**String**](.md)|  | [optional] 
 **unitMeasurementType** | [**UnitMeasurementTypeEnum**](.md)|  | [optional] 
 **status** | [**ProductStatus**](.md)|  | [optional] 
 **page** | **Number**|  | [optional] 
 **pageSize** | **Number**|  | [optional] 
 **sort** | **String**| Sorting atributes, sample: id.desc,name.asc | [optional] [default to Id.desc]
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 73f958da-a08b-4bc5-93af-086860fd26b1]

### Return type

[**GetAllPagedProductResponse**](GetAllPagedProductResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="tepsalesV1ProductsPost"></a>
# **tepsalesV1ProductsPost**
> PostProductResponse tepsalesV1ProductsPost(opts)

Create Product

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.ProductApi();
let opts = { 
  'body': new TepsalesserviceApi.PostProductRequest(), // PostProductRequest | Product to create
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "80cc2c04-dd0e-4b13-8dfe-ccb2dbd63465" // String | CSRF Protection
};
apiInstance.tepsalesV1ProductsPost(opts, (error, data, response) => {
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
 **body** | [**PostProductRequest**](PostProductRequest.md)| Product to create | [optional] 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 80cc2c04-dd0e-4b13-8dfe-ccb2dbd63465]

### Return type

[**PostProductResponse**](PostProductResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

