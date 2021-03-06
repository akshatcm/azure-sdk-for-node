/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import { BaseResource } from 'ms-rest-azure';
import { CloudError } from 'ms-rest-azure';

export { BaseResource } from 'ms-rest-azure';
export { CloudError } from 'ms-rest-azure';


/**
 * @class
 * Initializes a new instance of the CheckNameAvailabilityInput class.
 * @constructor
 * Input of check name availability API.
 *
 * @member {string} name The Search service name to validate. Search service
 * names must only contain lowercase letters, digits or dashes, cannot use dash
 * as the first two or last one characters, cannot contain consecutive dashes,
 * and must be between 2 and 60 characters in length.
 *
 */
export interface CheckNameAvailabilityInput {
  name: string;
}

/**
 * @class
 * Initializes a new instance of the CheckNameAvailabilityOutput class.
 * @constructor
 * Output of check name availability API.
 *
 * @member {boolean} [isNameAvailable] A value indicating whether the name is
 * available.
 *
 * @member {string} [reason] The reason why the name is not available.
 * 'Invalid' indicates the name provided does not match the naming requirements
 * (incorrect length, unsupported characters, etc.). 'AlreadyExists' indicates
 * that the name is already in use and is therefore unavailable. Possible
 * values include: 'Invalid', 'AlreadyExists'
 *
 * @member {string} [message] A message that explains why the name is invalid
 * and provides resource naming requirements. Available only if 'Invalid' is
 * returned in the 'reason' property.
 *
 */
export interface CheckNameAvailabilityOutput {
  readonly isNameAvailable?: boolean;
  readonly reason?: string;
  readonly message?: string;
}

/**
 * @class
 * Initializes a new instance of the AdminKeyResult class.
 * @constructor
 * Response containing the primary and secondary admin API keys for a given
 * Azure Search service.
 *
 * @member {string} [primaryKey] The primary admin API key of the Search
 * service.
 *
 * @member {string} [secondaryKey] The secondary admin API key of the Search
 * service.
 *
 */
export interface AdminKeyResult {
  readonly primaryKey?: string;
  readonly secondaryKey?: string;
}

/**
 * @class
 * Initializes a new instance of the QueryKey class.
 * @constructor
 * Describes an API key for a given Azure Search service that has permissions
 * for query operations only.
 *
 * @member {string} [name] The name of the query API key; may be empty.
 *
 * @member {string} [key] The value of the query API key.
 *
 */
export interface QueryKey {
  readonly name?: string;
  readonly key?: string;
}

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
export interface Sku {
  name?: string;
}

/**
 * @class
 * Initializes a new instance of the Resource class.
 * @constructor
 * Base type for all Azure resources.
 *
 * @member {string} [id] The ID of the resource. This can be used with the
 * Azure Resource Manager to link resources together.
 *
 * @member {string} [name] The name of the resource.
 *
 * @member {string} [type] The resource type.
 *
 * @member {string} location The geographic location of the resource. This must
 * be one of the supported and registered Azure Geo Regions (for example, West
 * US, East US, Southeast Asia, and so forth).
 *
 * @member {object} [tags] Tags to help categorize the resource in the Azure
 * portal.
 *
 */
export interface Resource extends BaseResource {
  readonly id?: string;
  readonly name?: string;
  readonly type?: string;
  location: string;
  tags?: { [propertyName: string]: string };
}

/**
 * @class
 * Initializes a new instance of the SearchService class.
 * @constructor
 * Describes an Azure Search service and its current state.
 *
 * @member {number} [replicaCount] The number of replicas in the Search
 * service. If specified, it must be a value between 1 and 12 inclusive for
 * standard SKUs or between 1 and 3 inclusive for basic SKU. Default value: 1 .
 *
 * @member {number} [partitionCount] The number of partitions in the Search
 * service; if specified, it can be 1, 2, 3, 4, 6, or 12. Values greater than 1
 * are only valid for standard SKUs. For 'standard3' services with hostingMode
 * set to 'highDensity', the allowed values are between 1 and 3. Default value:
 * 1 .
 *
 * @member {string} [hostingMode] Applicable only for the standard3 SKU. You
 * can set this property to enable up to 3 high density partitions that allow
 * up to 1000 indexes, which is much higher than the maximum indexes allowed
 * for any other SKU. For the standard3 SKU, the value is either 'default' or
 * 'highDensity'. For all other SKUs, this value must be 'default'. Possible
 * values include: 'default', 'highDensity'. Default value: 'default' .
 *
 * @member {string} [status] The status of the Search service. Possible values
 * include: 'running': The Search service is running and no provisioning
 * operations are underway. 'provisioning': The Search service is being
 * provisioned or scaled up or down. 'deleting': The Search service is being
 * deleted. 'degraded': The Search service is degraded. This can occur when the
 * underlying search units are not healthy. The Search service is most likely
 * operational, but performance might be slow and some requests might be
 * dropped. 'disabled': The Search service is disabled. In this state, the
 * service will reject all API requests. 'error': The Search service is in an
 * error state. If your service is in the degraded, disabled, or error states,
 * it means the Azure Search team is actively investigating the underlying
 * issue. Dedicated services in these states are still chargeable based on the
 * number of search units provisioned. Possible values include: 'running',
 * 'provisioning', 'deleting', 'degraded', 'disabled', 'error'
 *
 * @member {string} [statusDetails] The details of the Search service status.
 *
 * @member {string} [provisioningState] The state of the last provisioning
 * operation performed on the Search service. Provisioning is an intermediate
 * state that occurs while service capacity is being established. After
 * capacity is set up, provisioningState changes to either 'succeeded' or
 * 'failed'. Client applications can poll provisioning status (the recommended
 * polling interval is from 30 seconds to one minute) by using the Get Search
 * Service operation to see when an operation is completed. If you are using
 * the free service, this value tends to come back as 'succeeded' directly in
 * the call to Create Search service. This is because the free service uses
 * capacity that is already set up. Possible values include: 'succeeded',
 * 'provisioning', 'failed'
 *
 * @member {object} sku The SKU of the Search Service, which determines price
 * tier and capacity limits.
 *
 * @member {string} [sku.name] The SKU of the Search service. Valid values
 * include: 'free': Shared service. 'basic': Dedicated service with up to 3
 * replicas. 'standard': Dedicated service with up to 12 partitions and 12
 * replicas. 'standard2': Similar to standard, but with more capacity per
 * search unit. 'standard3': Offers maximum capacity per search unit with up to
 * 12 partitions and 12 replicas (or up to 3 partitions with more indexes if
 * you also set the hostingMode property to 'highDensity'). Possible values
 * include: 'free', 'basic', 'standard', 'standard2', 'standard3'
 *
 */
export interface SearchService extends Resource {
  replicaCount?: number;
  partitionCount?: number;
  hostingMode?: string;
  readonly status?: string;
  readonly statusDetails?: string;
  readonly provisioningState?: string;
  sku: Sku;
}

/**
 * @class
 * Initializes a new instance of the SearchManagementRequestOptions class.
 * @constructor
 * Additional parameters for a set of operations.
 *
 * @member {uuid} [clientRequestId] A client-generated GUID value that
 * identifies this request. If specified, this will be included in response
 * information as a way to track the request.
 *
 */
export interface SearchManagementRequestOptions {
  clientRequestId?: string;
}

/**
 * @class
 * Initializes a new instance of the ListQueryKeysResult class.
 * @constructor
 * Response containing the query API keys for a given Azure Search service.
 *
 * @member {array} [value] The query keys for the Azure Search service.
 *
 */
export interface ListQueryKeysResult {
  readonly value?: QueryKey[];
}

/**
 * @class
 * Initializes a new instance of the SearchServiceListResult class.
 * @constructor
 * Response containing a list of Azure Search services.
 *
 * @member {array} [value] The list of Search services.
 *
 */
export interface SearchServiceListResult {
  readonly value?: SearchService[];
}


/**
 * @class
 * Initializes a new instance of the ListQueryKeysResult class.
 * @constructor
 * Response containing the query API keys for a given Azure Search service.
 *
 */
export interface ListQueryKeysResult extends Array<QueryKey> {
}

/**
 * @class
 * Initializes a new instance of the SearchServiceListResult class.
 * @constructor
 * Response containing a list of Azure Search services.
 *
 */
export interface SearchServiceListResult extends Array<SearchService> {
}
