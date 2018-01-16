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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.PeatioSdk) {
      root.PeatioSdk = {};
    }
    root.PeatioSdk.OrderBookApi = factory(root.PeatioSdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * OrderBook service.
   * @module api/OrderBookApi
   * @version 0.2.4
   */

  /**
   * Constructs a new OrderBookApi. 
   * @alias module:api/OrderBookApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getV2OrderBook operation.
     * @callback module:api/OrderBookApi~getV2OrderBookCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the order book of specified market.
     * Get the order book of specified market.
     * @param {module:model/String} market Unique market id. It&#39;s always in the form of xxxyyy, where xxx is the base currency code, yyy is the quote currency code, e.g. &#39;btcusd&#39;. All available markets can be found at /api/markets.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.asksLimit Limit the number of returned sell orders. Default to 20. (default to 20)
     * @param {Number} opts.bidsLimit Limit the number of returned buy orders. Default to 20. (default to 20)
     * @param {module:api/OrderBookApi~getV2OrderBookCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getV2OrderBook = function(market, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'market' is set
      if (market === undefined || market === null) {
        throw new Error("Missing the required parameter 'market' when calling getV2OrderBook");
      }


      var pathParams = {
      };
      var queryParams = {
        'market': market,
        'asks_limit': opts['asksLimit'],
        'bids_limit': opts['bidsLimit']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['jwt'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/order_book', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
