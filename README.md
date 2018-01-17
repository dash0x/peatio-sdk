# peatio-sdk

PeatioSdk - JavaScript client for peatio-sdk
No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 0.2.6
- Package version: 0.2.6
- Build package: io.swagger.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install peatio-sdk --save
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing 
into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

Finally, switch to the directory you want to use your peatio-sdk from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

You should now be able to `require('peatio-sdk')` in javascript files from the directory you ran the last 
command above from.

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file, that's to say your javascript file where you actually 
use this library):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var PeatioSdk = require('peatio-sdk');

var defaultClient = PeatioSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: jwt
var jwt = defaultClient.authentications['jwt'];
jwt.accessToken = "YOUR ACCESS TOKEN"

var api = new PeatioSdk.DepositApi()

var txid = "txid_example"; // {String} 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.getV2Deposit(txid, callback);

```

## Documentation for API Endpoints

All URIs are relative to *http://localhost:8000/api/v2*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*PeatioSdk.DepositApi* | [**getV2Deposit**](docs/DepositApi.md#getV2Deposit) | **GET** /deposit | Get details of specific deposit.
*PeatioSdk.DepositAddressApi* | [**getV2DepositAddress**](docs/DepositAddressApi.md#getV2DepositAddress) | **GET** /deposit_address | Where to deposit. The address field could be empty when a new address is generating (e.g. for bitcoin), you should try again later in that case.
*PeatioSdk.DepositsApi* | [**getV2Deposits**](docs/DepositsApi.md#getV2Deposits) | **GET** /deposits | Get your deposits history.
*PeatioSdk.DepthApi* | [**getV2Depth**](docs/DepthApi.md#getV2Depth) | **GET** /depth | Get depth or specified market. Both asks and bids are sorted from highest price to lowest.
*PeatioSdk.KApi* | [**getV2K**](docs/KApi.md#getV2K) | **GET** /k | Get OHLC(k line) of specific market.
*PeatioSdk.KWithPendingTradesApi* | [**getV2KWithPendingTrades**](docs/KWithPendingTradesApi.md#getV2KWithPendingTrades) | **GET** /k_with_pending_trades | Get K data with pending trades, which are the trades not included in K data yet, because there&#39;s delay between trade generated and processed by K data generator.
*PeatioSdk.MarketsApi* | [**getV2Markets**](docs/MarketsApi.md#getV2Markets) | **GET** /markets | Get all available markets.
*PeatioSdk.MembersApi* | [**getV2MembersMe**](docs/MembersApi.md#getV2MembersMe) | **GET** /members/me | Get your profile and accounts info.
*PeatioSdk.OrderApi* | [**getV2Order**](docs/OrderApi.md#getV2Order) | **GET** /order | Get information of specified order.
*PeatioSdk.OrderApi* | [**postV2OrderDelete**](docs/OrderApi.md#postV2OrderDelete) | **POST** /order/delete | Cancel an order.
*PeatioSdk.OrderBookApi* | [**getV2OrderBook**](docs/OrderBookApi.md#getV2OrderBook) | **GET** /order_book | Get the order book of specified market.
*PeatioSdk.OrdersApi* | [**getV2Orders**](docs/OrdersApi.md#getV2Orders) | **GET** /orders | Get your orders, results is paginated.
*PeatioSdk.OrdersApi* | [**postV2Orders**](docs/OrdersApi.md#postV2Orders) | **POST** /orders | Create a Sell/Buy order.
*PeatioSdk.OrdersApi* | [**postV2OrdersClear**](docs/OrdersApi.md#postV2OrdersClear) | **POST** /orders/clear | Cancel all my orders.
*PeatioSdk.OrdersApi* | [**postV2OrdersMulti**](docs/OrdersApi.md#postV2OrdersMulti) | **POST** /orders/multi | Create multiple sell/buy orders.
*PeatioSdk.TickersApi* | [**getV2Tickers**](docs/TickersApi.md#getV2Tickers) | **GET** /tickers | Get ticker of all markets.
*PeatioSdk.TickersApi* | [**getV2TickersMarket**](docs/TickersApi.md#getV2TickersMarket) | **GET** /tickers/{market} | Get ticker of specific market.
*PeatioSdk.TimestampApi* | [**timestamp**](docs/TimestampApi.md#timestamp) | **GET** /timestamp | Get server current time, in seconds since Unix epoch.
*PeatioSdk.TradesApi* | [**getV2Trades**](docs/TradesApi.md#getV2Trades) | **GET** /trades | Get recent trades on market, each trade is included only once. Trades are sorted in reverse creation order.
*PeatioSdk.TradesApi* | [**getV2TradesMy**](docs/TradesApi.md#getV2TradesMy) | **GET** /trades/my | Get your executed trades. Trades are sorted in reverse creation order.


## Documentation for Models

 - [PeatioSdk.Account](docs/Account.md)
 - [PeatioSdk.Market](docs/Market.md)
 - [PeatioSdk.Member](docs/Member.md)
 - [PeatioSdk.TickerInfo](docs/TickerInfo.md)
 - [PeatioSdk.TickerInfoTicker](docs/TickerInfoTicker.md)


## Documentation for Authorization


### jwt

- **Type**: OAuth
- **Flow**: implicit
- **Authorization URL**: https://demo.peatio.tech/auth/auth0
- **Scopes**: 
  - write:peatio: base write scope
  - read:peatio: base read scope

## Getting Help

We can help you installing or customizing peatio: [Peatio Consulting](https://www.peatio.tech)

