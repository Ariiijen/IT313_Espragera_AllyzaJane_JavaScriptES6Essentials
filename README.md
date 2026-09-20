## Problem
Given a raw list of enrollee records (name, prelim, midterm, final), produce
a formatted eligibility report. An enrollee is PASSING if the average of the
three grades is 75 or above; otherwise they are on PROBATION.

## Approach
This project demonstrates modern JavaScript (ES6+) essentials:
 ES modules: computeAverage (named export), isPassing (default export)
 Promises + setTimeout: simulated registrar API in getEnrollees()
 async/await with try/catch: graceful failure handling
 Destructuring: pulling fields out of each record in map()
 Array methods: map builds results, filter splits status, reduce sums averages
 Template literals: formatted console report


## Files
gradeUtils.js — computeAverage (named) and isPassing (default)
main.js — async report generator
package.json — declares "type": "module"

## How to Run
node main.js

## Expected Result
=== IT313 Enrollment Eligibility Report ===
Ana Cruz - Average: 87.67 - PASSING
Bea Santos - Average: 65.00 - PROBATION
Cid Ramos - Average: 94.67 - PASSING
Dex Alonzo - Average: 55.00 - PROBATION
Eli Tan - Average: 78.00 - PASSING
Class Average: 76.07
Passing: 3 / 5
On Probation: 2
