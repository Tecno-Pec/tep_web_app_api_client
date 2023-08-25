# TepsalesserviceApi.DiscountRuleApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getByIdDiscountRule**](DiscountRuleApi.md#getByIdDiscountRule) | **GET** /tepsales/v1/discountRules/{id} | Get DiscountRule by id
[**tepsalesV1DiscountRulesAllGet**](DiscountRuleApi.md#tepsalesV1DiscountRulesAllGet) | **GET** /tepsales/v1/discountRules/all | Get All DiscountRule by filter
[**tepsalesV1DiscountRulesIdDelete**](DiscountRuleApi.md#tepsalesV1DiscountRulesIdDelete) | **DELETE** /tepsales/v1/discountRules/{id} | Delete DiscountRule by Id
[**tepsalesV1DiscountRulesIdPatch**](DiscountRuleApi.md#tepsalesV1DiscountRulesIdPatch) | **PATCH** /tepsales/v1/discountRules/{id} | Update part of DiscountRule
[**tepsalesV1DiscountRulesIdPut**](DiscountRuleApi.md#tepsalesV1DiscountRulesIdPut) | **PUT** /tepsales/v1/discountRules/{id} | Update DiscountRule
[**tepsalesV1DiscountRulesPagedGet**](DiscountRuleApi.md#tepsalesV1DiscountRulesPagedGet) | **GET** /tepsales/v1/discountRules/paged | Get All DiscountRule by filter with pagination
[**tepsalesV1DiscountRulesPost**](DiscountRuleApi.md#tepsalesV1DiscountRulesPost) | **POST** /tepsales/v1/discountRules | Create DiscountRule

<a name="getByIdDiscountRule"></a>
# **getByIdDiscountRule**
> GetAllDiscountRuleResponse getByIdDiscountRule(id, opts)

Get DiscountRule by id

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.DiscountRuleApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | DiscountRule id
let opts = { 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "c6e13c9e-40c7-4da5-9572-e26abb82465f" // String | CSRF Protection
};
apiInstance.getByIdDiscountRule(id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| DiscountRule id | 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to c6e13c9e-40c7-4da5-9572-e26abb82465f]

### Return type

[**GetAllDiscountRuleResponse**](GetAllDiscountRuleResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="tepsalesV1DiscountRulesAllGet"></a>
# **tepsalesV1DiscountRulesAllGet**
> [GetAllDiscountRuleResponse] tepsalesV1DiscountRulesAllGet(opts)

Get All DiscountRule by filter

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.DiscountRuleApi();
let opts = { 
  'discountWeightType': new TepsalesserviceApi.DiscountWeightTypeEnum(), // DiscountWeightTypeEnum | 
  'discountType': new TepsalesserviceApi.DiscountTypeEnum(), // DiscountTypeEnum | 
  'referenceType': new TepsalesserviceApi.ReferenceTypeEnum(), // ReferenceTypeEnum | 
  'referenceId': "38400000-8cf0-11bd-b23e-10b96e4ef00d", // String | 
  'externalCode': "externalCode_example", // String | 
  'status': new TepsalesserviceApi.DiscountRuleStatus(), // DiscountRuleStatus | 
  'limit': 100, // Number | limit
  'sort': "Id.desc", // String | Sorting atributes, sample: id.desc,name.asc
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "a1472c26-63b3-4b9e-bdfe-0770d79b6d1f" // String | CSRF Protection
};
apiInstance.tepsalesV1DiscountRulesAllGet(opts, (error, data, response) => {
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
 **discountWeightType** | [**DiscountWeightTypeEnum**](.md)|  | [optional] 
 **discountType** | [**DiscountTypeEnum**](.md)|  | [optional] 
 **referenceType** | [**ReferenceTypeEnum**](.md)|  | [optional] 
 **referenceId** | [**String**](.md)|  | [optional] 
 **externalCode** | **String**|  | [optional] 
 **status** | [**DiscountRuleStatus**](.md)|  | [optional] 
 **limit** | **Number**| limit | [optional] [default to 100]
 **sort** | **String**| Sorting atributes, sample: id.desc,name.asc | [optional] [default to Id.desc]
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to a1472c26-63b3-4b9e-bdfe-0770d79b6d1f]

### Return type

[**[GetAllDiscountRuleResponse]**](GetAllDiscountRuleResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="tepsalesV1DiscountRulesIdDelete"></a>
# **tepsalesV1DiscountRulesIdDelete**
> tepsalesV1DiscountRulesIdDelete(id, opts)

Delete DiscountRule by Id

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.DiscountRuleApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | DiscountRule id
let opts = { 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "4f339e3b-fa37-41bb-837c-abc1d710b76b" // String | CSRF Protection
};
apiInstance.tepsalesV1DiscountRulesIdDelete(id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| DiscountRule id | 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 4f339e3b-fa37-41bb-837c-abc1d710b76b]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="tepsalesV1DiscountRulesIdPatch"></a>
# **tepsalesV1DiscountRulesIdPatch**
> tepsalesV1DiscountRulesIdPatch(body, id, opts)

Update part of DiscountRule

Sample request:                    PATCH /tepsales/v1/DiscountRule/{id}      [          {              \&quot;op\&quot;: \&quot;replace\&quot;,              \&quot;path\&quot;: \&quot;/atribute_name\&quot;,              \&quot;value\&quot;: \&quot;new value\&quot;          }      ]

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.DiscountRuleApi();
let body = [new TepsalesserviceApi.Operation()]; // [Operation] | Atributes values
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | DiscountRule id
let opts = { 
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "772da5e5-0520-4011-945e-c63449c25c72" // String | CSRF Protection
};
apiInstance.tepsalesV1DiscountRulesIdPatch(body, id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| DiscountRule id | 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 772da5e5-0520-4011-945e-c63449c25c72]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="tepsalesV1DiscountRulesIdPut"></a>
# **tepsalesV1DiscountRulesIdPut**
> tepsalesV1DiscountRulesIdPut(id, opts)

Update DiscountRule

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.DiscountRuleApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | DiscountRule Id
let opts = { 
  'body': new TepsalesserviceApi.PutDiscountRuleRequest(), // PutDiscountRuleRequest | DiscountRule to update
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "3cf13bb2-8c76-42d9-98ac-959d517f5eaa" // String | CSRF Protection
};
apiInstance.tepsalesV1DiscountRulesIdPut(id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)| DiscountRule Id | 
 **body** | [**PutDiscountRuleRequest**](PutDiscountRuleRequest.md)| DiscountRule to update | [optional] 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 3cf13bb2-8c76-42d9-98ac-959d517f5eaa]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="tepsalesV1DiscountRulesPagedGet"></a>
# **tepsalesV1DiscountRulesPagedGet**
> GetAllPagedDiscountRuleResponse tepsalesV1DiscountRulesPagedGet(opts)

Get All DiscountRule by filter with pagination

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.DiscountRuleApi();
let opts = { 
  'discountWeightType': new TepsalesserviceApi.DiscountWeightTypeEnum(), // DiscountWeightTypeEnum | 
  'discountType': new TepsalesserviceApi.DiscountTypeEnum(), // DiscountTypeEnum | 
  'referenceType': new TepsalesserviceApi.ReferenceTypeEnum(), // ReferenceTypeEnum | 
  'referenceId': "38400000-8cf0-11bd-b23e-10b96e4ef00d", // String | 
  'externalCode': "externalCode_example", // String | 
  'status': new TepsalesserviceApi.DiscountRuleStatus(), // DiscountRuleStatus | 
  'page': 56, // Number | 
  'pageSize': 56, // Number | 
  'sort': "Id.desc", // String | Sorting atributes, sample: id.desc,name.asc
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "87405962-5dd0-4da0-abd8-cd9ea0045e63" // String | CSRF Protection
};
apiInstance.tepsalesV1DiscountRulesPagedGet(opts, (error, data, response) => {
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
 **discountWeightType** | [**DiscountWeightTypeEnum**](.md)|  | [optional] 
 **discountType** | [**DiscountTypeEnum**](.md)|  | [optional] 
 **referenceType** | [**ReferenceTypeEnum**](.md)|  | [optional] 
 **referenceId** | [**String**](.md)|  | [optional] 
 **externalCode** | **String**|  | [optional] 
 **status** | [**DiscountRuleStatus**](.md)|  | [optional] 
 **page** | **Number**|  | [optional] 
 **pageSize** | **Number**|  | [optional] 
 **sort** | **String**| Sorting atributes, sample: id.desc,name.asc | [optional] [default to Id.desc]
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to 87405962-5dd0-4da0-abd8-cd9ea0045e63]

### Return type

[**GetAllPagedDiscountRuleResponse**](GetAllPagedDiscountRuleResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="tepsalesV1DiscountRulesPost"></a>
# **tepsalesV1DiscountRulesPost**
> PostDiscountRuleResponse tepsalesV1DiscountRulesPost(opts)

Create DiscountRule

### Example
```javascript
import {TepsalesserviceApi} from 'tepsalesservice_api';
let defaultClient = TepsalesserviceApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new TepsalesserviceApi.DiscountRuleApi();
let opts = { 
  'body': new TepsalesserviceApi.PostDiscountRuleRequest(), // PostDiscountRuleRequest | DiscountRule to create
  'xApiKey': "xApiKey_example", // String | Your Api Key
  'xCsrfToken': "f2f688d8-c1b4-4f69-9f35-4fad39544c3d" // String | CSRF Protection
};
apiInstance.tepsalesV1DiscountRulesPost(opts, (error, data, response) => {
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
 **body** | [**PostDiscountRuleRequest**](PostDiscountRuleRequest.md)| DiscountRule to create | [optional] 
 **xApiKey** | **String**| Your Api Key | [optional] 
 **xCsrfToken** | **String**| CSRF Protection | [optional] [default to f2f688d8-c1b4-4f69-9f35-4fad39544c3d]

### Return type

[**PostDiscountRuleResponse**](PostDiscountRuleResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

