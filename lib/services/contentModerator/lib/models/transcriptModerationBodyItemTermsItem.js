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
 * Class representing a TranscriptModerationBodyItemTermsItem.
 */
class TranscriptModerationBodyItemTermsItem {
  /**
   * Create a TranscriptModerationBodyItemTermsItem.
   * @member {number} index Index of the word
   * @member {string} term Detected word.
   */
  constructor() {
  }

  /**
   * Defines the metadata of TranscriptModerationBodyItemTermsItem
   *
   * @returns {object} metadata of TranscriptModerationBodyItemTermsItem
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'transcriptModerationBodyItem_TermsItem',
      type: {
        name: 'Composite',
        className: 'TranscriptModerationBodyItemTermsItem',
        modelProperties: {
          index: {
            required: true,
            serializedName: 'Index',
            type: {
              name: 'Number'
            }
          },
          term: {
            required: true,
            serializedName: 'Term',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = TranscriptModerationBodyItemTermsItem;
