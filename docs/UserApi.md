# TepsalesserviceApi.UserApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getByIdUser**](UserApi.md#getByIdUser) | **GET** /tepsales/v1/users/{id} | Get User by id
[**getUserInfo**](UserApi.md#getUserInfo) | **GET** /tepsales/v1/users/userinfo | Get User Info
[**tepsalesV1UsersAllGet**](UserApi.md#tepsalesV1UsersAllGet) | **GET** /tepsales/v1/users/all | Get All User by filter
[**tepsalesV1UsersForcerchangepasswordPost**](UserApi.md#tepsalesV1UsersForcerchangepasswordPost) | **POST** /tepsales/v1/users/forcerchangepassword | Create User
[**tepsalesV1UsersIdDelete**](UserApi.md#tepsalesV1UsersIdDelete) | **DELETE** /tepsales/v1/users/{id} | Delete User by Id
[**tepsalesV1UsersIdPatch**](UserApi.md#tepsalesV1UsersIdPatch) | **PATCH** /tepsales/v1/users/{id} | Update part of User
[**tepsalesV1UsersIdPut**](UserApi.md#tepsalesV1UsersIdPut) | **PUT** /tepsales/v1/users/{id} | Update User
[**tepsalesV1UsersPagedGet**](UserApi.md#tepsalesV1UsersPagedGet) | **GET** /tepsales/v1/users/paged | Get All User by filter with pagination
[**tepsalesV1UsersPost**](UserApi.md#tepsalesV1UsersPost) | **POST** /tepsales/v1/users | Create User
[**tepsalesV1UsersPushtokenPost**](UserApi.md#tepsalesV1UsersPushtokenPost) | **POST** /tepsales/v1/users/pushtoken | Add User Push Token
[**tepsalesV1UsersResetPasswordPost**](UserApi.md#tepsalesV1UsersResetPasswordPost) | **POST** /tepsales/v1/users/reset_password | Create User
[**tepsalesV1UsersSigninPost**](UserApi.md#tepsalesV1UsersSigninPost) | **POST** /tepsales/v1/users/signin | Create User
[**tepsalesV1UsersSignupPost**](UserApi.md#tepsalesV1UsersSignupPost) | **POST** /tepsales/v1/users/signup | Create User

<a name="getByIdUser"></a>
# **getByIdUser**
> GetAllUserResponse getByIdUser(id, opts)

Get User by id

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.UserApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | User id
let opts = { 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "a852b939-3269-4604-aa89-e0ae6076e12d" // String | CSRF Protection
};
apiInstance.getByIdUser(id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| User id | 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to a852b939-3269-4604-aa89-e0ae6076e12d]

### Return type

[**GetAllUserResponse**](GetAllUserResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getUserInfo"></a>
# **getUserInfo**
> GetAllUserResponse getUserInfo(opts)

Get User Info

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.UserApi();
let opts = { 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "3eab8efa-46c2-4593-9cd1-28d2dd88a4f2" // String | CSRF Protection
};
apiInstance.getUserInfo(opts, (error, data, response) => {
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
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 3eab8efa-46c2-4593-9cd1-28d2dd88a4f2]

### Return type

[**GetAllUserResponse**](GetAllUserResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="tepsalesV1UsersAllGet"></a>
# **tepsalesV1UsersAllGet**
> [GetAllUserResponse] tepsalesV1UsersAllGet(opts)

Get All User by filter

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.UserApi();
let opts = { 
  'name': "name_example", // String | 
  'documentId': "documentId_example", // String | 
  'phone': "phone_example", // String | 
  'email': "email_example", // String | 
  'externalCode': "externalCode_example", // String | 
  'status': new TepsalesserviceApi.UserStatus(), // UserStatus | 
  'limit': 56, // Number | limit
  'sort': "sort_example", // String | Sorting atributes, sample: id.desc,name.asc
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "16f00118-f841-4952-9373-76901fff1ce5" // String | CSRF Protection
};
apiInstance.tepsalesV1UsersAllGet(opts, (error, data, response) => {
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
 **documentId** | **String**|  | [optional] 
 **phone** | **String**|  | [optional] 
 **email** | **String**|  | [optional] 
 **externalCode** | **String**|  | [optional] 
 **status** | [**UserStatus**](.md)|  | [optional] 
 **limit** | **Number**| limit | [optional] 
 **sort** | **String**| Sorting atributes, sample: id.desc,name.asc | [optional] 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 16f00118-f841-4952-9373-76901fff1ce5]

### Return type

[**[GetAllUserResponse]**](GetAllUserResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="tepsalesV1UsersForcerchangepasswordPost"></a>
# **tepsalesV1UsersForcerchangepasswordPost**
> PostUserResetPasswordResponse tepsalesV1UsersForcerchangepasswordPost(opts)

Create User

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.UserApi();
let opts = { 
  'body': new TepsalesserviceApi.PostUserForceChangePasswordRequest(), // PostUserForceChangePasswordRequest | Force Change Password
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "94ba2777-46a6-4775-854e-d4a7521a4e89" // String | CSRF Protection
};
apiInstance.tepsalesV1UsersForcerchangepasswordPost(opts, (error, data, response) => {
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
 **body** | [**PostUserForceChangePasswordRequest**](PostUserForceChangePasswordRequest.md)| Force Change Password | [optional] 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 94ba2777-46a6-4775-854e-d4a7521a4e89]

### Return type

[**PostUserResetPasswordResponse**](PostUserResetPasswordResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="tepsalesV1UsersIdDelete"></a>
# **tepsalesV1UsersIdDelete**
> tepsalesV1UsersIdDelete(id, opts)

Delete User by Id

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.UserApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | User id
let opts = { 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "80619a9e-5800-4b8f-9e08-dd52e95bb096" // String | CSRF Protection
};
apiInstance.tepsalesV1UsersIdDelete(id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| User id | 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 80619a9e-5800-4b8f-9e08-dd52e95bb096]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="tepsalesV1UsersIdPatch"></a>
# **tepsalesV1UsersIdPatch**
> tepsalesV1UsersIdPatch(body, id, opts)

Update part of User

Sample request:                    PATCH /tepsales/v1/User/{id}      [          {              \&quot;op\&quot;: \&quot;replace\&quot;,              \&quot;path\&quot;: \&quot;/atribute_name\&quot;,              \&quot;value\&quot;: \&quot;new value\&quot;          }      ]

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.UserApi();
let body = [new TepsalesserviceApi.Operation()]; // [Operation] | Atributes values
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | User id
let opts = { 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "3cfca35a-9c55-46e1-882e-563387265452" // String | CSRF Protection
};
apiInstance.tepsalesV1UsersIdPatch(body, id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| User id | 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 3cfca35a-9c55-46e1-882e-563387265452]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="tepsalesV1UsersIdPut"></a>
# **tepsalesV1UsersIdPut**
> tepsalesV1UsersIdPut(id, opts)

Update User

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.UserApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | User Id
let opts = { 
  'body': new TepsalesserviceApi.PutUserRequest(), // PutUserRequest | User to update
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "a983a492-11bb-4ce6-b3ed-b2e3278e99b8" // String | CSRF Protection
};
apiInstance.tepsalesV1UsersIdPut(id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| User Id | 
 **body** | [**PutUserRequest**](PutUserRequest.md)| User to update | [optional] 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to a983a492-11bb-4ce6-b3ed-b2e3278e99b8]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="tepsalesV1UsersPagedGet"></a>
# **tepsalesV1UsersPagedGet**
> GetAllPagedUserResponse tepsalesV1UsersPagedGet(opts)

Get All User by filter with pagination

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.UserApi();
let opts = { 
  'name': "name_example", // String | 
  'documentId': "documentId_example", // String | 
  'phone': "phone_example", // String | 
  'email': "email_example", // String | 
  'externalCode': "externalCode_example", // String | 
  'status': new TepsalesserviceApi.UserStatus(), // UserStatus | 
  'page': 56, // Number | 
  'pageSize': 56, // Number | 
  'sort': "sort_example", // String | Sorting atributes, sample: id.desc,name.asc
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "152b51d4-93af-4376-8481-582baa81f6c5" // String | CSRF Protection
};
apiInstance.tepsalesV1UsersPagedGet(opts, (error, data, response) => {
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
 **documentId** | **String**|  | [optional] 
 **phone** | **String**|  | [optional] 
 **email** | **String**|  | [optional] 
 **externalCode** | **String**|  | [optional] 
 **status** | [**UserStatus**](.md)|  | [optional] 
 **page** | **Number**|  | [optional] 
 **pageSize** | **Number**|  | [optional] 
 **sort** | **String**| Sorting atributes, sample: id.desc,name.asc | [optional] 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 152b51d4-93af-4376-8481-582baa81f6c5]

### Return type

[**GetAllPagedUserResponse**](GetAllPagedUserResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="tepsalesV1UsersPost"></a>
# **tepsalesV1UsersPost**
> PostUserResponse tepsalesV1UsersPost(opts)

Create User

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.UserApi();
let opts = { 
  'body': new TepsalesserviceApi.PostUserRequest(), // PostUserRequest | User to create
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "30bf7dcb-c910-4943-8971-ea405ce8e351" // String | CSRF Protection
};
apiInstance.tepsalesV1UsersPost(opts, (error, data, response) => {
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
 **body** | [**PostUserRequest**](PostUserRequest.md)| User to create | [optional] 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 30bf7dcb-c910-4943-8971-ea405ce8e351]

### Return type

[**PostUserResponse**](PostUserResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="tepsalesV1UsersPushtokenPost"></a>
# **tepsalesV1UsersPushtokenPost**
> tepsalesV1UsersPushtokenPost(opts)

Add User Push Token

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.UserApi();
let opts = { 
  'body': new TepsalesserviceApi.PostUserPushTokenRequest(), // PostUserPushTokenRequest | FCM Token
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "6144254c-d738-4b5a-b7a8-068a4b14f0ce" // String | CSRF Protection
};
apiInstance.tepsalesV1UsersPushtokenPost(opts, (error, data, response) => {
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
 **body** | [**PostUserPushTokenRequest**](PostUserPushTokenRequest.md)| FCM Token | [optional] 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 6144254c-d738-4b5a-b7a8-068a4b14f0ce]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

<a name="tepsalesV1UsersResetPasswordPost"></a>
# **tepsalesV1UsersResetPasswordPost**
> PostUserResetPasswordResponse tepsalesV1UsersResetPasswordPost(opts)

Create User

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.UserApi();
let opts = { 
  'body': new TepsalesserviceApi.PostUserResetPassword(), // PostUserResetPassword | Reset Password
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "0114a68f-493a-4faa-b0f4-727f19cf6190" // String | CSRF Protection
};
apiInstance.tepsalesV1UsersResetPasswordPost(opts, (error, data, response) => {
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
 **body** | [**PostUserResetPassword**](PostUserResetPassword.md)| Reset Password | [optional] 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 0114a68f-493a-4faa-b0f4-727f19cf6190]

### Return type

[**PostUserResetPasswordResponse**](PostUserResetPasswordResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="tepsalesV1UsersSigninPost"></a>
# **tepsalesV1UsersSigninPost**
> PostUserSignInResponse tepsalesV1UsersSigninPost(opts)

Create User

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.UserApi();
let opts = { 
  'body': new TepsalesserviceApi.PostUserSignInRequest(), // PostUserSignInRequest | User to create
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "5c6c3bd2-23d5-4c95-b0db-2ee97336fa3e" // String | CSRF Protection
};
apiInstance.tepsalesV1UsersSigninPost(opts, (error, data, response) => {
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
 **body** | [**PostUserSignInRequest**](PostUserSignInRequest.md)| User to create | [optional] 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 5c6c3bd2-23d5-4c95-b0db-2ee97336fa3e]

### Return type

[**PostUserSignInResponse**](PostUserSignInResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="tepsalesV1UsersSignupPost"></a>
# **tepsalesV1UsersSignupPost**
> PostUserResponse tepsalesV1UsersSignupPost(opts)

Create User

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.UserApi();
let opts = { 
  'body': new TepsalesserviceApi.PostUserRequest(), // PostUserRequest | User to create
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "d8d3446d-57f0-41fd-b89a-f6dbc2ba5671" // String | CSRF Protection
};
apiInstance.tepsalesV1UsersSignupPost(opts, (error, data, response) => {
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
 **body** | [**PostUserRequest**](PostUserRequest.md)| User to create | [optional] 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to d8d3446d-57f0-41fd-b89a-f6dbc2ba5671]

### Return type

[**PostUserResponse**](PostUserResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

