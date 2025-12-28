const API_URL = "https://dazjjj-ogp5.vercel.app/api/user";
// or use preview URL for other branches

async function loadData() {
  try {
    const res = await fetch(API_URL);
    const data = await res.json();

    document.getElementById("output").innerHTML = `
      <p>Message: ${data.message}</p>
      <p>Branch: ${data.branch}</p>
    `;
  } catch (err) {
    document.getElementById("output").textContent =
      "Failed to load data";
  }
}

loadData();

