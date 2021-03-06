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
 * @class
 * Initializes a new instance of the SuppressionContract class.
 * @constructor
 * The details of the snoozed or dismissed rule; for example, the duration,
 * name, and GUID associated with the rule.
 *
 * @member {string} [suppressionId] The GUID of the suppression.
 *
 * @member {string} [ttl] The duration for which the suppression is valid.
 *
 */
class SuppressionContract extends models['Resource'] {
  constructor() {
    super();
  }

  /**
   * Defines the metadata of SuppressionContract
   *
   * @returns {object} metadata of SuppressionContract
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'SuppressionContract',
      type: {
        name: 'Composite',
        className: 'SuppressionContract',
        modelProperties: {
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            readOnly: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            readOnly: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          suppressionId: {
            required: false,
            serializedName: 'properties.suppressionId',
            type: {
              name: 'String'
            }
          },
          ttl: {
            required: false,
            serializedName: 'properties.ttl',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = SuppressionContract;
