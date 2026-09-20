export function computeAverage(prelim, midterm, final) {
  const total = prelim + midterm + final;
  return total / 3;
}

export default function isPassing(average) {
  return average >= 75;
}