// src/utils/formatDate.js
export function formatDate(unixTimestamp) {
  const date = new Date(unixTimestamp * 1000); // convert seconds to ms

  const day = date.getDate();
  const month = date.toLocaleString("en-US", { month: "long" }).toUpperCase();
  const year = date.getFullYear();

  return `${day} ${month} ${year}`;
}
