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
 * Initializes a new instance of the LongTermRetentionPolicy class.
 * @constructor
 * Long-term retention policy.
 *
 * @member {object} [dailySchedule] Daily retention schedule of the backup
 * policy.
 *
 * @member {array} [dailySchedule.retentionTimes] The retention times of
 * retention policy.
 *
 * @member {object} [dailySchedule.retentionDuration] The retention duration of
 * retention policy.
 *
 * @member {number} [dailySchedule.retentionDuration.count] Count of the
 * duration types. Retention duration is determined by the combining the Count
 * times and durationType.
 * For example, if Count = 3 and durationType = Weeks, then the retention
 * duration is three weeks.
 *
 * @member {string} [dailySchedule.retentionDuration.durationType] The
 * retention duration type of the retention policy. Possible values include:
 * 'Invalid', 'Days', 'Weeks', 'Months', 'Years'
 *
 * @member {object} [weeklySchedule] Weekly retention schedule of the backup
 * policy.
 *
 * @member {array} [weeklySchedule.daysOfTheWeek] List of the days of the week
 * for the weekly retention policy.
 *
 * @member {array} [weeklySchedule.retentionTimes] Retention times of the
 * retention policy.
 *
 * @member {object} [weeklySchedule.retentionDuration] Retention duration of
 * retention policy.
 *
 * @member {number} [weeklySchedule.retentionDuration.count] Count of the
 * duration types. Retention duration is determined by the combining the Count
 * times and durationType.
 * For example, if Count = 3 and durationType = Weeks, then the retention
 * duration is three weeks.
 *
 * @member {string} [weeklySchedule.retentionDuration.durationType] The
 * retention duration type of the retention policy. Possible values include:
 * 'Invalid', 'Days', 'Weeks', 'Months', 'Years'
 *
 * @member {object} [monthlySchedule] Monthly retention schedule of the backup
 * policy.
 *
 * @member {string} [monthlySchedule.retentionScheduleFormatType] Retention
 * schedule format type for monthly retention policy. Possible values include:
 * 'Invalid', 'Daily', 'Weekly'
 *
 * @member {object} [monthlySchedule.retentionScheduleDaily] Daily retention
 * format for the monthly retention policy.
 *
 * @member {array} [monthlySchedule.retentionScheduleDaily.daysOfTheMonth] List
 * of days of the month.
 *
 * @member {object} [monthlySchedule.retentionScheduleWeekly] Weekly retention
 * format for the monthly retention policy.
 *
 * @member {array} [monthlySchedule.retentionScheduleWeekly.daysOfTheWeek] List
 * of days of the week.
 *
 * @member {array} [monthlySchedule.retentionScheduleWeekly.weeksOfTheMonth]
 * List of weeks of the month.
 *
 * @member {array} [monthlySchedule.retentionTimes] Retention times of the
 * retention policy.
 *
 * @member {object} [monthlySchedule.retentionDuration] Retention duration of
 * the retention policy.
 *
 * @member {number} [monthlySchedule.retentionDuration.count] Count of the
 * duration types. Retention duration is determined by the combining the Count
 * times and durationType.
 * For example, if Count = 3 and durationType = Weeks, then the retention
 * duration is three weeks.
 *
 * @member {string} [monthlySchedule.retentionDuration.durationType] The
 * retention duration type of the retention policy. Possible values include:
 * 'Invalid', 'Days', 'Weeks', 'Months', 'Years'
 *
 * @member {object} [yearlySchedule] Yearly retention schedule of the backup
 * policy.
 *
 * @member {string} [yearlySchedule.retentionScheduleFormatType] Retention
 * schedule format for the yearly retention policy. Possible values include:
 * 'Invalid', 'Daily', 'Weekly'
 *
 * @member {array} [yearlySchedule.monthsOfYear] List of the months of year for
 * the yearly retention policy.
 *
 * @member {object} [yearlySchedule.retentionScheduleDaily] Daily retention
 * format for the yearly retention policy.
 *
 * @member {array} [yearlySchedule.retentionScheduleDaily.daysOfTheMonth] List
 * of days of the month.
 *
 * @member {object} [yearlySchedule.retentionScheduleWeekly] Weekly retention
 * format for the yearly retention policy.
 *
 * @member {array} [yearlySchedule.retentionScheduleWeekly.daysOfTheWeek] List
 * of days of the week.
 *
 * @member {array} [yearlySchedule.retentionScheduleWeekly.weeksOfTheMonth]
 * List of weeks of the month.
 *
 * @member {array} [yearlySchedule.retentionTimes] Retention times for the
 * retention policy.
 *
 * @member {object} [yearlySchedule.retentionDuration] Retention duration for
 * the retention policy.
 *
 * @member {number} [yearlySchedule.retentionDuration.count] Count of the
 * duration types. Retention duration is determined by the combining the Count
 * times and durationType.
 * For example, if Count = 3 and durationType = Weeks, then the retention
 * duration is three weeks.
 *
 * @member {string} [yearlySchedule.retentionDuration.durationType] The
 * retention duration type of the retention policy. Possible values include:
 * 'Invalid', 'Days', 'Weeks', 'Months', 'Years'
 *
 */
class LongTermRetentionPolicy extends models['RetentionPolicy'] {
  constructor() {
    super();
  }

  /**
   * Defines the metadata of LongTermRetentionPolicy
   *
   * @returns {object} metadata of LongTermRetentionPolicy
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'LongTermRetentionPolicy',
      type: {
        name: 'Composite',
        className: 'LongTermRetentionPolicy',
        modelProperties: {
          retentionPolicyType: {
            required: true,
            serializedName: 'retentionPolicyType',
            type: {
              name: 'String'
            }
          },
          dailySchedule: {
            required: false,
            serializedName: 'dailySchedule',
            type: {
              name: 'Composite',
              className: 'DailyRetentionSchedule'
            }
          },
          weeklySchedule: {
            required: false,
            serializedName: 'weeklySchedule',
            type: {
              name: 'Composite',
              className: 'WeeklyRetentionSchedule'
            }
          },
          monthlySchedule: {
            required: false,
            serializedName: 'monthlySchedule',
            type: {
              name: 'Composite',
              className: 'MonthlyRetentionSchedule'
            }
          },
          yearlySchedule: {
            required: false,
            serializedName: 'yearlySchedule',
            type: {
              name: 'Composite',
              className: 'YearlyRetentionSchedule'
            }
          }
        }
      }
    };
  }
}

module.exports = LongTermRetentionPolicy;