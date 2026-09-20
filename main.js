// import
import { computeAverage } from './gradeUtils.js';
import isPassing from './gradeUtils.js';

const enrollees = [
  { name: "Ana Cruz",   prelim: 85, midterm: 90, final: 88 },
  { name: "Bea Santos", prelim: 70, midterm: 65, final: 60 },
  { name: "Cid Ramos",  prelim: 95, midterm: 92, final: 97 },
  { name: "Dex Alonzo", prelim: 60, midterm: 55, final: 50 },
  { name: "Eli Tan",    prelim: 78, midterm: 80, final: 76 },
];

// simulated registrar API
function getEnrollees() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(enrollees);
      //reject(new Error("Failed to fetch enrollees from the registrar API."));
    }, 1000);
  });
}

// async function with try/catch
async function generateReport() {
  try {
    const records = await getEnrollees();

    // -- Destructuring and map
    const results = records.map(({ name, prelim, midterm, final }) => {
      const average = computeAverage(prelim, midterm, final);
      const status = isPassing(average) ? "PASSING" : "PROBATION";
      return { name, average, status };
    });

    // filter to separate
    const passing = results.filter(r => r.status === "PASSING");
    const probation = results.filter(r => r.status === "PROBATION");

    // reduce to compute class average
    const classAverage =
      results.reduce((sum, r) => sum + r.average, 0) / results.length;

    // template literals
    console.log("=== IT313 Enrollment Eligibility Report ===");
    results.forEach(({ name, average, status }) => {
      console.log(`${name} - Average: ${average.toFixed(2)} - ${status}`);
    });
    console.log(`Class Average: ${classAverage.toFixed(2)}`);
    console.log(`Passing: ${passing.length} / ${results.length}`);
    console.log(`On Probation: ${probation.length}`);
  } catch (error) {
    // Graceful error handling
    console.error("Failed to generate report:", error.message);
  }
}

generateReport();