import faker from "faker";

let data = "<div>From Component_1</div>";

for (let i = 0; i < 5; i++) {
  const name = faker.company.companyName();
  data += `<div>${name}</div>`;
}
document.querySelector("#dev-comp1").innerHTML = data;
