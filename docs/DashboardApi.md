# TepsalesserviceApi.DashboardApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**tepsalesV1DashboardPurchaseorderbysalesmanGet**](DashboardApi.md#tepsalesV1DashboardPurchaseorderbysalesmanGet) | **GET** /tepsales/v1/dashboard/purchaseorderbysalesman | Get GetPurchaseOrderBySalesman
[**tepsalesV1DashboardPurchaseorderfavoriteproductsGet**](DashboardApi.md#tepsalesV1DashboardPurchaseorderfavoriteproductsGet) | **GET** /tepsales/v1/dashboard/purchaseorderfavoriteproducts | Get GroupPurchaseOrderByStatus
[**tepsalesV1DashboardPurchaseorderlastsixmonthsGet**](DashboardApi.md#tepsalesV1DashboardPurchaseorderlastsixmonthsGet) | **GET** /tepsales/v1/dashboard/purchaseorderlastsixmonths | Get GroupPurchaseOrderByStatus
[**tepsalesV1DashboardPurchaseorderstatusGet**](DashboardApi.md#tepsalesV1DashboardPurchaseorderstatusGet) | **GET** /tepsales/v1/dashboard/purchaseorderstatus | Get GroupPurchaseOrderByStatus
[**tepsalesV1DashboardWidgetsGet**](DashboardApi.md#tepsalesV1DashboardWidgetsGet) | **GET** /tepsales/v1/dashboard/widgets | Get Widgets

<a name="tepsalesV1DashboardPurchaseorderbysalesmanGet"></a>
# **tepsalesV1DashboardPurchaseorderbysalesmanGet**
> GroupPurchaseOrderDto tepsalesV1DashboardPurchaseorderbysalesmanGet(opts)

Get GetPurchaseOrderBySalesman

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.DashboardApi();
let opts = { 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "203da185-8492-4e3c-b950-9f258c9db607" // String | CSRF Protection
};
apiInstance.tepsalesV1DashboardPurchaseorderbysalesmanGet(opts, (error, data, response) => {
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
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 203da185-8492-4e3c-b950-9f258c9db607]

### Return type

[**GroupPurchaseOrderDto**](GroupPurchaseOrderDto.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="tepsalesV1DashboardPurchaseorderfavoriteproductsGet"></a>
# **tepsalesV1DashboardPurchaseorderfavoriteproductsGet**
> GroupPurchaseOrderDto tepsalesV1DashboardPurchaseorderfavoriteproductsGet(opts)

Get GroupPurchaseOrderByStatus

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.DashboardApi();
let opts = { 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "ed2b38f1-2e29-4407-8f55-afd20b1f72bf" // String | CSRF Protection
};
apiInstance.tepsalesV1DashboardPurchaseorderfavoriteproductsGet(opts, (error, data, response) => {
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
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to ed2b38f1-2e29-4407-8f55-afd20b1f72bf]

### Return type

[**GroupPurchaseOrderDto**](GroupPurchaseOrderDto.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="tepsalesV1DashboardPurchaseorderlastsixmonthsGet"></a>
# **tepsalesV1DashboardPurchaseorderlastsixmonthsGet**
> GroupPurchaseOrderDto tepsalesV1DashboardPurchaseorderlastsixmonthsGet(opts)

Get GroupPurchaseOrderByStatus

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.DashboardApi();
let opts = { 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "1e5a6da2-c63b-4918-af26-5b7f3215a5bb" // String | CSRF Protection
};
apiInstance.tepsalesV1DashboardPurchaseorderlastsixmonthsGet(opts, (error, data, response) => {
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
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 1e5a6da2-c63b-4918-af26-5b7f3215a5bb]

### Return type

[**GroupPurchaseOrderDto**](GroupPurchaseOrderDto.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="tepsalesV1DashboardPurchaseorderstatusGet"></a>
# **tepsalesV1DashboardPurchaseorderstatusGet**
> GroupPurchaseOrderDto tepsalesV1DashboardPurchaseorderstatusGet(opts)

Get GroupPurchaseOrderByStatus

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.DashboardApi();
let opts = { 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "fba2f13c-978d-42e9-a838-da5793853e09" // String | CSRF Protection
};
apiInstance.tepsalesV1DashboardPurchaseorderstatusGet(opts, (error, data, response) => {
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
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to fba2f13c-978d-42e9-a838-da5793853e09]

### Return type

[**GroupPurchaseOrderDto**](GroupPurchaseOrderDto.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="tepsalesV1DashboardWidgetsGet"></a>
# **tepsalesV1DashboardWidgetsGet**
> GetWidgetsDto tepsalesV1DashboardWidgetsGet(opts)

Get Widgets

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.DashboardApi();
let opts = { 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "e8345e7d-f873-490b-94c9-6e071aa3b824" // String | CSRF Protection
};
apiInstance.tepsalesV1DashboardWidgetsGet(opts, (error, data, response) => {
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
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to e8345e7d-f873-490b-94c9-6e071aa3b824]

### Return type

[**GetWidgetsDto**](GetWidgetsDto.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

