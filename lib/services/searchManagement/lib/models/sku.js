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
 * Initializes a new instance of the Sku class.
 * @constructor
 * Defines the SKU of an Azure Search Service, which determines price tier and
 * capacity limits.
 *
 * @member {string} [name] The SKU of the Search service. Valid values include:
 * 'free': Shared service. 'basic': Dedicated service with up to 3 replicas.
 * 'standard': Dedicated service with up to 12 partitions and 12 replicas.
 * 'standard2': Similar to standard, but with more capacity per search unit.
 * 'standard3': Offers maximum capacity per search unit with up to 12
 * partitions and 12 replicas (or up to 3 partitions with more indexes if you
 * also set the hostingMode property to 'highDensity'). Possible values
 * include: 'free', 'basic', 'standard', 'standard2', 'standard3'
 *
 */
class Sku {
  constructor() {
  }

  /**
   * Defines the metadata of Sku
   *
   * @returns {object} metadata of Sku
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Sku',
      type: {
        name: 'Composite',
        className: 'Sku',
        modelProperties: {
          name: {
            required: false,
            serializedName: 'name',
            type: {
              name: 'Enum',
              allowedValues: [ 'free', 'basic', 'standard', 'standard2', 'standard3' ]
            }
          }
        }
      }
    };
  }
}

module.exports = Sku;
