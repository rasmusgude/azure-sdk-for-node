/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * LogAnalytics operation status response
 *
 * @extends models['OperationStatusResponse']
 */
class LogAnalyticsOperationResult extends models['OperationStatusResponse'] {
  /**
   * Create a LogAnalyticsOperationResult.
   * @member {object} [properties] LogAnalyticsOutput
   * @member {string} [properties.output] Output file Uri path to blob
   * container.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of LogAnalyticsOperationResult
   *
   * @returns {object} metadata of LogAnalyticsOperationResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'LogAnalyticsOperationResult',
      type: {
        name: 'Composite',
        className: 'LogAnalyticsOperationResult',
        modelProperties: {
          name: {
            required: false,
            readOnly: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          status: {
            required: false,
            readOnly: true,
            serializedName: 'status',
            type: {
              name: 'String'
            }
          },
          startTime: {
            required: false,
            readOnly: true,
            serializedName: 'startTime',
            type: {
              name: 'DateTime'
            }
          },
          endTime: {
            required: false,
            readOnly: true,
            serializedName: 'endTime',
            type: {
              name: 'DateTime'
            }
          },
          error: {
            required: false,
            readOnly: true,
            serializedName: 'error',
            type: {
              name: 'Composite',
              className: 'ApiError'
            }
          },
          properties: {
            required: false,
            readOnly: true,
            serializedName: 'properties',
            type: {
              name: 'Composite',
              className: 'LogAnalyticsOutput'
            }
          }
        }
      }
    };
  }
}

module.exports = LogAnalyticsOperationResult;