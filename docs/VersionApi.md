# TepsalesserviceApi.VersionApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**tepsalesV1VersionGet**](VersionApi.md#tepsalesV1VersionGet) | **GET** /tepsales/v1/version | Get Version

<a name="tepsalesV1VersionGet"></a>
# **tepsalesV1VersionGet**
> tepsalesV1VersionGet(opts)

Get Version

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.VersionApi();
let opts = { 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "2a7642a6-718d-40a8-a556-3d673f3d808a" // String | CSRF Protection
};
apiInstance.tepsalesV1VersionGet(opts, (error, data, response) => {
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
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 2a7642a6-718d-40a8-a556-3d673f3d808a]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

