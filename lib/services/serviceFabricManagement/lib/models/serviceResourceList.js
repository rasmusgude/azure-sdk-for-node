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
 * The list of service resources.
 *
 */
class ServiceResourceList {
  /**
   * Create a ServiceResourceList.
   * @member {array} [value]
   */
  constructor() {
  }

  /**
   * Defines the metadata of ServiceResourceList
   *
   * @returns {object} metadata of ServiceResourceList
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ServiceResourceList',
      type: {
        name: 'Composite',
        className: 'ServiceResourceList',
        modelProperties: {
          value: {
            required: false,
            serializedName: 'value',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ServiceResourceElementType',
                  type: {
                    name: 'Composite',
                    className: 'ServiceResource'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = ServiceResourceList;
