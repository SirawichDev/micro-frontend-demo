import faker from "faker";

let data = "<div>Component_2</div>";

for (let i = 0; i < 4; i++) {
  let name = faker.vehicle.vehicle();
  data += `<li>${name}</li>`;
}

document.querySelector("#dev-comp2").innerHTML = data;
