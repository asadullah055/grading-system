import * as groupName from "./group.js";
const form = document.querySelector("form");
const group = document.getElementById("group");
const selectGroup = document.querySelector('select[name="group"]');
const select = document.querySelectorAll("select");
const instituteName = document.getElementById("instituteName");
const checkbox = document.getElementById("checkbox");
const personalInfo = document.querySelectorAll(
  '.personal-info input[type="text"]'
);
const submit = document.getElementById("submit");
let student = JSON.parse(localStorage.getItem("studentData") || "[]");
function collectInputValues() {
  const marksInput = document.querySelectorAll('input[type="number"]');
  const marks = {};

  marksInput.forEach((mark) => {
    marks[mark.name] = parseInt(mark.value);
  });

  return marks;
}



form.addEventListener("submit", function (event) {
  event.preventDefault();



  let examData = {
    institute: instituteName.value,
  };
  select.forEach(function (option) {
    examData[option.name] = option.value;
  });

  // Personal Info
  let data = {};
  personalInfo.forEach(function (info) {
    data[info.name] = info.value;
  });
  const allData = {
    data,
    examData,
    mark: collectInputValues(),
  };
  student.push(allData);
  localStorage.setItem("studentData", JSON.stringify(student));

  personalInfo.forEach(function (info) {
    info.value = "";
  });
  document.querySelectorAll('input[type="number"]').forEach(function (input) {
    input.value = "";
  });

});

// fixed information
checkbox.addEventListener("change", function (e) {
  if (e.target.checked) {
    select.forEach(function (item) {
      item.setAttribute("disabled", "disabled");
    });
    instituteName.setAttribute("disabled", "disabled");
  } else if (!e.target.checked) {
    select.forEach(function (item) {
      item.removeAttribute("disabled");
    });
    instituteName.removeAttribute("disabled");
  }
});
// change group subject
selectGroup.addEventListener("change", function (e) {
  if (e.target.value === "Science") {
    group.innerHTML = groupName.science;
  } else if (e.target.value === "Humanities") {
    group.innerHTML = groupName.humanity;
  } else if (e.target.value === "Business Studies") {
    group.innerHTML = groupName.business;
  }
});
