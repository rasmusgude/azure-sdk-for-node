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
 * Management group creation parameters.
 *
 */
class CreateManagementGroupRequest {
  /**
   * Create a CreateManagementGroupRequest.
   * @member {string} [displayName] The friendly name of the management group.
   * @member {string} [parentId] (Optional) The fully qualified ID for the
   * parent management group.  For example,
   * /providers/Microsoft.Management/managementGroups/0000000-0000-0000-0000-000000000000
   */
  constructor() {
  }

  /**
   * Defines the metadata of CreateManagementGroupRequest
   *
   * @returns {object} metadata of CreateManagementGroupRequest
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'CreateManagementGroupRequest',
      type: {
        name: 'Composite',
        className: 'CreateManagementGroupRequest',
        modelProperties: {
          displayName: {
            required: false,
            serializedName: 'displayName',
            type: {
              name: 'String'
            }
          },
          parentId: {
            required: false,
            serializedName: 'parentId',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = CreateManagementGroupRequest;