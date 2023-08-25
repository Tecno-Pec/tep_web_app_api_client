# TepsalesserviceApi.NotificationApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getByIdNotification**](NotificationApi.md#getByIdNotification) | **GET** /tepsales/v1/notifications/{id} | Get Notification by id
[**tepsalesV1NotificationsGet**](NotificationApi.md#tepsalesV1NotificationsGet) | **GET** /tepsales/v1/notifications | Get All Notification by filter with pagination
[**tepsalesV1NotificationsIdDelete**](NotificationApi.md#tepsalesV1NotificationsIdDelete) | **DELETE** /tepsales/v1/notifications/{id} | Delete Notification by Id
[**tepsalesV1NotificationsIdPatch**](NotificationApi.md#tepsalesV1NotificationsIdPatch) | **PATCH** /tepsales/v1/notifications/{id} | Update part of Notification
[**tepsalesV1NotificationsIdPut**](NotificationApi.md#tepsalesV1NotificationsIdPut) | **PUT** /tepsales/v1/notifications/{id} | Update Notification
[**tepsalesV1NotificationsPost**](NotificationApi.md#tepsalesV1NotificationsPost) | **POST** /tepsales/v1/notifications | Create Notification

<a name="getByIdNotification"></a>
# **getByIdNotification**
> GetAllNotificationResponse getByIdNotification(id, opts)

Get Notification by id

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.NotificationApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | Notification id
let opts = { 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "2d7e67da-be27-4c2c-a381-828d75fadf15" // String | CSRF Protection
};
apiInstance.getByIdNotification(id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| Notification id | 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 2d7e67da-be27-4c2c-a381-828d75fadf15]

### Return type

[**GetAllNotificationResponse**](GetAllNotificationResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="tepsalesV1NotificationsGet"></a>
# **tepsalesV1NotificationsGet**
> GetAllPagedNotificationResponse tepsalesV1NotificationsGet(opts)

Get All Notification by filter with pagination

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.NotificationApi();
let opts = { 
  'message': "message_example", // String | 
  'type': new TepsalesserviceApi.NotificationType(), // NotificationType | 
  'userPhone': "userPhone_example", // String | 
  'userName': "userName_example", // String | 
  'userEmail': "userEmail_example", // String | 
  'userId': "38400000-8cf0-11bd-b23e-10b96e4ef00d", // String | 
  'page': 56, // Number | 
  'pageSize': 56, // Number | 
  'sort': "sort_example", // String | Sorting atributes, sample: id.desc,name.asc
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "64519bcc-3bcb-4bc9-9dba-5e686c2e1038" // String | CSRF Protection
};
apiInstance.tepsalesV1NotificationsGet(opts, (error, data, response) => {
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
 **message** | **String**|  | [optional] 
 **type** | [**NotificationType**](.md)|  | [optional] 
 **userPhone** | **String**|  | [optional] 
 **userName** | **String**|  | [optional] 
 **userEmail** | **String**|  | [optional] 
 **userId** | [**String**](.md)|  | [optional] 
 **page** | **Number**|  | [optional] 
 **pageSize** | **Number**|  | [optional] 
 **sort** | **String**| Sorting atributes, sample: id.desc,name.asc | [optional] 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 64519bcc-3bcb-4bc9-9dba-5e686c2e1038]

### Return type

[**GetAllPagedNotificationResponse**](GetAllPagedNotificationResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="tepsalesV1NotificationsIdDelete"></a>
# **tepsalesV1NotificationsIdDelete**
> tepsalesV1NotificationsIdDelete(id, opts)

Delete Notification by Id

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.NotificationApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | Notification id
let opts = { 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "e866c1bd-f6f5-4f3c-bddd-3b08ee7f3aff" // String | CSRF Protection
};
apiInstance.tepsalesV1NotificationsIdDelete(id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| Notification id | 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to e866c1bd-f6f5-4f3c-bddd-3b08ee7f3aff]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="tepsalesV1NotificationsIdPatch"></a>
# **tepsalesV1NotificationsIdPatch**
> tepsalesV1NotificationsIdPatch(body, id, opts)

Update part of Notification

Sample request:                    PATCH /tepsales/v1/Notification/{id}      [          {              \&quot;op\&quot;: \&quot;replace\&quot;,              \&quot;path\&quot;: \&quot;/atribute_name\&quot;,              \&quot;value\&quot;: \&quot;new value\&quot;          }      ]

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.NotificationApi();
let body = [new TepsalesserviceApi.Operation()]; // [Operation] | Atributes values
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | Notification id
let opts = { 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "e8f28e5d-cb76-4161-a12e-1dc996ef3aa5" // String | CSRF Protection
};
apiInstance.tepsalesV1NotificationsIdPatch(body, id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| Notification id | 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to e8f28e5d-cb76-4161-a12e-1dc996ef3aa5]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="tepsalesV1NotificationsIdPut"></a>
# **tepsalesV1NotificationsIdPut**
> tepsalesV1NotificationsIdPut(id, opts)

Update Notification

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.NotificationApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | Notification Id
let opts = { 
  'body': new TepsalesserviceApi.PutNotificationRequest(), // PutNotificationRequest | Notification to update
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "99e7316f-d3ad-44c3-8f98-e496b64324d4" // String | CSRF Protection
};
apiInstance.tepsalesV1NotificationsIdPut(id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| Notification Id | 
 **body** | [**PutNotificationRequest**](PutNotificationRequest.md)| Notification to update | [optional] 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 99e7316f-d3ad-44c3-8f98-e496b64324d4]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="tepsalesV1NotificationsPost"></a>
# **tepsalesV1NotificationsPost**
> PostNotificationResponse tepsalesV1NotificationsPost(opts)

Create Notification

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.NotificationApi();
let opts = { 
  'body': new TepsalesserviceApi.PostNotificationRequest(), // PostNotificationRequest | Notification to create
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "6337630e-3850-4bb5-bec1-94e24c38491c" // String | CSRF Protection
};
apiInstance.tepsalesV1NotificationsPost(opts, (error, data, response) => {
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
 **body** | [**PostNotificationRequest**](PostNotificationRequest.md)| Notification to create | [optional] 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 6337630e-3850-4bb5-bec1-94e24c38491c]

### Return type

[**PostNotificationResponse**](PostNotificationResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

