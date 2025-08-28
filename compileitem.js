const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");

searchBtn.addEventListener("click", () => {
  searchInput.classList.toggle("open");
  searchBtn.classList.toggle("active");  // يغير لون الايقونة
  if (!searchInput.classList.contains("open")) {
    searchInput.value = "";  // مسح النص عند الإغلاق
  } else {
    searchInput.focus();     // تركيز على الـ input عند الفتح
  }
});



const searchinput = document.getElementById("searchInput");
const itemsTable = document.getElementById("itemsTable");

searchInput.addEventListener("input", () => {
  const filter = searchInput.value.toLowerCase();
  const rows = itemsTable.querySelectorAll("tr");

  rows.forEach(row => {
    const modelCell = row.cells[2]; // العمود الثالث هو Model
    if (modelCell.textContent.toLowerCase().includes(filter)) {
      row.style.display = "";
    } else {
      row.style.display = "none";
    }
  });
});



