# TepsalesserviceApi.AuditApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**tepsalesV1AuditsGet**](AuditApi.md#tepsalesV1AuditsGet) | **GET** /tepsales/v1/audits | Get All Audit by filter with pagination

<a name="tepsalesV1AuditsGet"></a>
# **tepsalesV1AuditsGet**
> GetAllPagedAuditResponse tepsalesV1AuditsGet(opts)

Get All Audit by filter with pagination

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.AuditApi();
let opts = { 
  'parentId': "38400000-8cf0-11bd-b23e-10b96e4ef00d", // String | 
  'entity': "entity_example", // String | 
  'action': new TepsalesserviceApi.ActionType(), // ActionType | 
  'startDate': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'endDate': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'userCreated': "38400000-8cf0-11bd-b23e-10b96e4ef00d", // String | 
  'userUpdated': "38400000-8cf0-11bd-b23e-10b96e4ef00d", // String | 
  'page': 56, // Number | 
  'pageSize': 56, // Number | 
  'sort': "Id.desc", // String | Sorting atributes, sample: id.desc,name.asc
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "da180fdb-93f7-4b8e-ae7c-4069ed6eed48" // String | CSRF Protection
};
apiInstance.tepsalesV1AuditsGet(opts, (error, data, response) => {
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
 **entity** | **String**|  | [optional] 
 **action** | [**ActionType**](.md)|  | [optional] 
 **startDate** | **Date**|  | [optional] 
 **endDate** | **Date**|  | [optional] 
 **userCreated** | [**String**](.md)|  | [optional] 
 **userUpdated** | [**String**](.md)|  | [optional] 
 **page** | **Number**|  | [optional] 
 **pageSize** | **Number**|  | [optional] 
 **sort** | **String**| Sorting atributes, sample: id.desc,name.asc | [optional] [default to Id.desc]
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to da180fdb-93f7-4b8e-ae7c-4069ed6eed48]

### Return type

[**GetAllPagedAuditResponse**](GetAllPagedAuditResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

