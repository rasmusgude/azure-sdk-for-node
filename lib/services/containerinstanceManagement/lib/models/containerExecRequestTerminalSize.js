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
 * The size of the terminal.
 *
 */
class ContainerExecRequestTerminalSize {
  /**
   * Create a ContainerExecRequestTerminalSize.
   * @member {number} [row] The row size of the terminal
   * @member {number} [column] The column size of the terminal
   */
  constructor() {
  }

  /**
   * Defines the metadata of ContainerExecRequestTerminalSize
   *
   * @returns {object} metadata of ContainerExecRequestTerminalSize
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ContainerExecRequest_terminalSize',
      type: {
        name: 'Composite',
        className: 'ContainerExecRequestTerminalSize',
        modelProperties: {
          row: {
            required: false,
            serializedName: 'row',
            type: {
              name: 'Number'
            }
          },
          column: {
            required: false,
            serializedName: 'column',
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = ContainerExecRequestTerminalSize;
