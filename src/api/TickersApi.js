/**
 * Peatio SDK
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.2.4
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/TickerInfo'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/TickerInfo'));
  } else {
    // Browser globals (root is window)
    if (!root.PeatioSdk) {
      root.PeatioSdk = {};
    }
    root.PeatioSdk.TickersApi = factory(root.PeatioSdk.ApiClient, root.PeatioSdk.TickerInfo);
  }
}(this, function(ApiClient, TickerInfo) {
  'use strict';

  /**
   * Tickers service.
   * @module api/TickersApi
   * @version 0.2.4
   */

  /**
   * Constructs a new TickersApi. 
   * @alias module:api/TickersApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getV2Tickers operation.
     * @callback module:api/TickersApi~getV2TickersCallback
     * @param {String} error Error message, if any.
     * @param {Object.<String, module:model/{'String': TickerInfo}>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get ticker of all markets.
     * Get ticker of all markets.
     * @param {module:api/TickersApi~getV2TickersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object.<String, module:model/{'String': TickerInfo}>}
     */
    this.getV2Tickers = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['jwt'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = {'String': TickerInfo};

      return this.apiClient.callApi(
        '/tickers', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getV2TickersMarket operation.
     * @callback module:api/TickersApi~getV2TickersMarketCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TickerInfo} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get ticker of specific market.
     * Get ticker of specific market.
     * @param {module:model/String} market Unique market id. It&#39;s always in the form of xxxyyy, where xxx is the base currency code, yyy is the quote currency code, e.g. &#39;btcusd&#39;. All available markets can be found at /api/markets.
     * @param {module:api/TickersApi~getV2TickersMarketCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TickerInfo}
     */
    this.getV2TickersMarket = function(market, callback) {
      var postBody = null;

      // verify the required parameter 'market' is set
      if (market === undefined || market === null) {
        throw new Error("Missing the required parameter 'market' when calling getV2TickersMarket");
      }


      var pathParams = {
        'market': market
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['jwt'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = TickerInfo;

      return this.apiClient.callApi(
        '/tickers/{market}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
