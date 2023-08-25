# TepsalesserviceApi.PriceTableItemApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getByIdPriceTableItem**](PriceTableItemApi.md#getByIdPriceTableItem) | **GET** /tepsales/v1/pricetableitems/{id} | Get PriceTableItem by id
[**tepsalesV1PricetableitemsAllGet**](PriceTableItemApi.md#tepsalesV1PricetableitemsAllGet) | **GET** /tepsales/v1/pricetableitems/all | Get All PriceTableItem by filter
[**tepsalesV1PricetableitemsIdDelete**](PriceTableItemApi.md#tepsalesV1PricetableitemsIdDelete) | **DELETE** /tepsales/v1/pricetableitems/{id} | Delete PriceTableItem by Id
[**tepsalesV1PricetableitemsIdPatch**](PriceTableItemApi.md#tepsalesV1PricetableitemsIdPatch) | **PATCH** /tepsales/v1/pricetableitems/{id} | Update part of PriceTableItem
[**tepsalesV1PricetableitemsIdPut**](PriceTableItemApi.md#tepsalesV1PricetableitemsIdPut) | **PUT** /tepsales/v1/pricetableitems/{id} | Update PriceTableItem
[**tepsalesV1PricetableitemsPagedGet**](PriceTableItemApi.md#tepsalesV1PricetableitemsPagedGet) | **GET** /tepsales/v1/pricetableitems/paged | Get All PriceTableItem by filter with pagination
[**tepsalesV1PricetableitemsPost**](PriceTableItemApi.md#tepsalesV1PricetableitemsPost) | **POST** /tepsales/v1/pricetableitems | Create PriceTableItem

<a name="getByIdPriceTableItem"></a>
# **getByIdPriceTableItem**
> GetAllPriceTableItemResponse getByIdPriceTableItem(id, opts)

Get PriceTableItem by id

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.PriceTableItemApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | PriceTableItem id
let opts = { 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "5791911d-8325-44da-ab48-4df0410e5811" // String | CSRF Protection
};
apiInstance.getByIdPriceTableItem(id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| PriceTableItem id | 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 5791911d-8325-44da-ab48-4df0410e5811]

### Return type

[**GetAllPriceTableItemResponse**](GetAllPriceTableItemResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="tepsalesV1PricetableitemsAllGet"></a>
# **tepsalesV1PricetableitemsAllGet**
> [GetAllPriceTableItemResponse] tepsalesV1PricetableitemsAllGet(opts)

Get All PriceTableItem by filter

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.PriceTableItemApi();
let opts = { 
  'paymentPriceTableId': "38400000-8cf0-11bd-b23e-10b96e4ef00d", // String | 
  'productId': "38400000-8cf0-11bd-b23e-10b96e4ef00d", // String | 
  'externalCode': "externalCode_example", // String | 
  'status': new TepsalesserviceApi.PriceTableItemStatus(), // PriceTableItemStatus | 
  'limit': 100, // Number | limit
  'sort': "Id.desc", // String | Sorting atributes, sample: id.desc,name.asc
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "5c5a9e1d-d3b4-481d-873d-79073ccc4fc5" // String | CSRF Protection
};
apiInstance.tepsalesV1PricetableitemsAllGet(opts, (error, data, response) => {
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
 **paymentPriceTableId** | [**String**](.md)|  | [optional] 
 **productId** | [**String**](.md)|  | [optional] 
 **externalCode** | **String**|  | [optional] 
 **status** | [**PriceTableItemStatus**](.md)|  | [optional] 
 **limit** | **Number**| limit | [optional] [default to 100]
 **sort** | **String**| Sorting atributes, sample: id.desc,name.asc | [optional] [default to Id.desc]
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 5c5a9e1d-d3b4-481d-873d-79073ccc4fc5]

### Return type

[**[GetAllPriceTableItemResponse]**](GetAllPriceTableItemResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="tepsalesV1PricetableitemsIdDelete"></a>
# **tepsalesV1PricetableitemsIdDelete**
> tepsalesV1PricetableitemsIdDelete(id, opts)

Delete PriceTableItem by Id

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.PriceTableItemApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | PriceTableItem id
let opts = { 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "399ee258-af0d-4562-9a72-ab6420e54d32" // String | CSRF Protection
};
apiInstance.tepsalesV1PricetableitemsIdDelete(id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| PriceTableItem id | 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 399ee258-af0d-4562-9a72-ab6420e54d32]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="tepsalesV1PricetableitemsIdPatch"></a>
# **tepsalesV1PricetableitemsIdPatch**
> tepsalesV1PricetableitemsIdPatch(body, id, opts)

Update part of PriceTableItem

Sample request:                    PATCH /tepsales/v1/PriceTableItem/{id}      [          {              \&quot;op\&quot;: \&quot;replace\&quot;,              \&quot;path\&quot;: \&quot;/atribute_name\&quot;,              \&quot;value\&quot;: \&quot;new value\&quot;          }      ]

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.PriceTableItemApi();
let body = [new TepsalesserviceApi.Operation()]; // [Operation] | Atributes values
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | PriceTableItem id
let opts = { 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "16c984b7-9c17-4ae8-b2ac-7e3ea2b86091" // String | CSRF Protection
};
apiInstance.tepsalesV1PricetableitemsIdPatch(body, id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| PriceTableItem id | 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 16c984b7-9c17-4ae8-b2ac-7e3ea2b86091]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="tepsalesV1PricetableitemsIdPut"></a>
# **tepsalesV1PricetableitemsIdPut**
> tepsalesV1PricetableitemsIdPut(id, opts)

Update PriceTableItem

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.PriceTableItemApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | PriceTableItem Id
let opts = { 
  'body': new TepsalesserviceApi.PutPriceTableItemRequest(), // PutPriceTableItemRequest | PriceTableItem to update
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "ed1150fc-bafe-4df8-beb8-b1a7176c1703" // String | CSRF Protection
};
apiInstance.tepsalesV1PricetableitemsIdPut(id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| PriceTableItem Id | 
 **body** | [**PutPriceTableItemRequest**](PutPriceTableItemRequest.md)| PriceTableItem to update | [optional] 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to ed1150fc-bafe-4df8-beb8-b1a7176c1703]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="tepsalesV1PricetableitemsPagedGet"></a>
# **tepsalesV1PricetableitemsPagedGet**
> GetAllPagedPriceTableItemResponse tepsalesV1PricetableitemsPagedGet(opts)

Get All PriceTableItem by filter with pagination

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.PriceTableItemApi();
let opts = { 
  'paymentPriceTableId': "38400000-8cf0-11bd-b23e-10b96e4ef00d", // String | 
  'productId': "38400000-8cf0-11bd-b23e-10b96e4ef00d", // String | 
  'externalCode': "externalCode_example", // String | 
  'status': new TepsalesserviceApi.PriceTableItemStatus(), // PriceTableItemStatus | 
  'page': 56, // Number | 
  'pageSize': 56, // Number | 
  'sort': "Id.desc", // String | Sorting atributes, sample: id.desc,name.asc
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "05d19708-164f-4921-a2b0-4523bbdf239e" // String | CSRF Protection
};
apiInstance.tepsalesV1PricetableitemsPagedGet(opts, (error, data, response) => {
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
 **paymentPriceTableId** | [**String**](.md)|  | [optional] 
 **productId** | [**String**](.md)|  | [optional] 
 **externalCode** | **String**|  | [optional] 
 **status** | [**PriceTableItemStatus**](.md)|  | [optional] 
 **page** | **Number**|  | [optional] 
 **pageSize** | **Number**|  | [optional] 
 **sort** | **String**| Sorting atributes, sample: id.desc,name.asc | [optional] [default to Id.desc]
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 05d19708-164f-4921-a2b0-4523bbdf239e]

### Return type

[**GetAllPagedPriceTableItemResponse**](GetAllPagedPriceTableItemResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="tepsalesV1PricetableitemsPost"></a>
# **tepsalesV1PricetableitemsPost**
> PostPriceTableItemResponse tepsalesV1PricetableitemsPost(opts)

Create PriceTableItem

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.PriceTableItemApi();
let opts = { 
  'body': new TepsalesserviceApi.PostPriceTableItemRequest(), // PostPriceTableItemRequest | PriceTableItem to create
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "b9e220fe-6a04-456b-9f49-49197414c0a2" // String | CSRF Protection
};
apiInstance.tepsalesV1PricetableitemsPost(opts, (error, data, response) => {
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
 **body** | [**PostPriceTableItemRequest**](PostPriceTableItemRequest.md)| PriceTableItem to create | [optional] 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to b9e220fe-6a04-456b-9f49-49197414c0a2]

### Return type

[**PostPriceTableItemResponse**](PostPriceTableItemResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

