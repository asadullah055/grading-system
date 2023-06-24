
const student = JSON.parse(localStorage.getItem("studentData") || "[]");

const tbody = document.querySelector("tbody");
const point = function (num) {
  return num.map(function (x) {
    if (x >= 80 && x <= 100) {
      return 5.0;
    } else if (x >= 70 && x <= 79) {
      return 4.0;
    } else if (x >= 60 && x <= 69) {
      return 3.5;
    } else if (x >= 50 && x <= 59) {
      return 3.0;
    } else if (x >= 40 && x <= 49) {
      return 2;
    } else if (x >= 33 && x <= 39) {
      return 1;
    } else if (x >= 0 && x <= 32) {
      return 0;
    }
  });
};
function showData() {
  document.querySelectorAll(".tr").forEach((tr) => tr.remove());
  student.forEach((item, index) => {
    const { student, roll } = item.data;
    // total
    const smark = Object.values(item.mark);
    const total = smark.reduce((acc, curr) => (acc += curr));

    const points = point(smark);
    const hasZero = points.includes(0);

    const average = points.reduce((acc, curr) => {
      return acc + curr;
    });
    const res = (average / points.length).toFixed(2);

    tbody.innerHTML += `<tr class="tr">
    <td>${index + 1}</td>
    <td>${roll}</td>
    <td>${student}</td>
    <td>${total}</td>
    <td>${hasZero ? "F" : res}</td>
    <td>
      <span><i class="edit fa-solid fa-pen-to-square"></i></span>
      <span ><i  onclick="deleteData(${index})"  class="delete fa-solid fa-trash-can"></i></span>
    </td>
    <td>
      <span><i class="fa-solid fa-download"></i></span>
    </td>
    <td>
      <span ><i class="fa-solid fa-download"></i></span>
    </td>
  </tr>`;
  });
}

function deleteData(index) {
  student.splice(index, 1);
  localStorage.setItem("studentData", JSON.stringify(student));
  showData();
}

showData();
