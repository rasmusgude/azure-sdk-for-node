/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
*/

import { ServiceClientOptions, RequestOptions, ServiceCallback, HttpOperationResponse } from 'ms-rest';
import * as models from '../models';


/**
 * @class
 * Forecasts
 * __NOTE__: An instance of this class is automatically created for an
 * instance of the ConsumptionManagementClient.
 */
export interface Forecasts {


    /**
     * Lists the forecast charges by subscriptionId.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {string} [options.filter] May be used to filter forecasts by
     * properties/usageDate (Utc time), properties/chargeType or properties/grain.
     * The filter supports 'eq', 'lt', 'gt', 'le', 'ge', and 'and'. It does not
     * currently support 'ne', 'or', or 'not'.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<ForecastsListResult>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    listWithHttpOperationResponse(options?: { filter? : string, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.ForecastsListResult>>;

    /**
     * Lists the forecast charges by subscriptionId.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {string} [options.filter] May be used to filter forecasts by
     * properties/usageDate (Utc time), properties/chargeType or properties/grain.
     * The filter supports 'eq', 'lt', 'gt', 'le', 'ge', and 'and'. It does not
     * currently support 'ne', 'or', or 'not'.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {ForecastsListResult} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {ForecastsListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link ForecastsListResult} for more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    list(options?: { filter? : string, customHeaders? : { [headerName: string]: string; } }): Promise<models.ForecastsListResult>;
    list(callback: ServiceCallback<models.ForecastsListResult>): void;
    list(options: { filter? : string, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.ForecastsListResult>): void;
}

/**
 * @class
 * Operations
 * __NOTE__: An instance of this class is automatically created for an
 * instance of the ConsumptionManagementClient.
 */
export interface Operations {


    /**
     * Lists all of the available consumption REST API operations.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<OperationListResult>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    listWithHttpOperationResponse(options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.OperationListResult>>;

    /**
     * Lists all of the available consumption REST API operations.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {OperationListResult} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {OperationListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link OperationListResult} for more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    list(options?: { customHeaders? : { [headerName: string]: string; } }): Promise<models.OperationListResult>;
    list(callback: ServiceCallback<models.OperationListResult>): void;
    list(options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.OperationListResult>): void;


    /**
     * Lists all of the available consumption REST API operations.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call
     * to List operation.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<OperationListResult>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    listNextWithHttpOperationResponse(nextPageLink: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.OperationListResult>>;

    /**
     * Lists all of the available consumption REST API operations.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call
     * to List operation.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {OperationListResult} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {OperationListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link OperationListResult} for more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    listNext(nextPageLink: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<models.OperationListResult>;
    listNext(nextPageLink: string, callback: ServiceCallback<models.OperationListResult>): void;
    listNext(nextPageLink: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.OperationListResult>): void;
}
