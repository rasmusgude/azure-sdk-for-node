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

/**
 * @class
 * Initializes a new instance of the RecoveryPolicy class.
 * @constructor
 * Describes the recovery policy.
 *
 * @member {string} [mode] The recovery mode. Possible values include: 'None',
 * 'OverProvision', 'Reprovision'
 *
 */
class RecoveryPolicy {
  constructor() {
  }

  /**
   * Defines the metadata of RecoveryPolicy
   *
   * @returns {object} metadata of RecoveryPolicy
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'RecoveryPolicy',
      type: {
        name: 'Composite',
        className: 'RecoveryPolicy',
        modelProperties: {
          mode: {
            required: false,
            serializedName: 'mode',
            type: {
              name: 'Enum',
              allowedValues: [ 'None', 'OverProvision', 'Reprovision' ]
            }
          }
        }
      }
    };
  }
}

module.exports = RecoveryPolicy;