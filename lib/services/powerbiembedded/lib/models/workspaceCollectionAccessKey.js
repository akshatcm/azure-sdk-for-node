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
 * Initializes a new instance of the WorkspaceCollectionAccessKey class.
 * @constructor
 * @member {string} [keyName] Key name. Possible values include: 'key1', 'key2'
 *
 */
class WorkspaceCollectionAccessKey {
  constructor() {
  }

  /**
   * Defines the metadata of WorkspaceCollectionAccessKey
   *
   * @returns {object} metadata of WorkspaceCollectionAccessKey
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'WorkspaceCollectionAccessKey',
      type: {
        name: 'Composite',
        className: 'WorkspaceCollectionAccessKey',
        modelProperties: {
          keyName: {
            required: false,
            serializedName: 'keyName',
            type: {
              name: 'Enum',
              allowedValues: [ 'key1', 'key2' ]
            }
          }
        }
      }
    };
  }
}

module.exports = WorkspaceCollectionAccessKey;
