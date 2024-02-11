"use strict";

// სერვერიდან წამოიღეთ მონაცემები ამ endpoint-ის
//  გამოყენებით https://jsonplaceholder.typicode.com/users
//  ჯავასკრიპტის გამოყენებით გამოიტანეთ  შემდეგი
//  ინფორმაცია:name, email და address;
// დაამატეთ სტილებიც რომ ვიზუალურად კარგად
//  გამოიყურებოდეს, სასურველი იქნება გამოიყენოთ
//  grid-template-columns: repeate(3,1fr) სტრუქტურა,
//   რომ ქარდები სამ-სამ ბლოკებად იყოს განაწილებული

const gridContainer = document.querySelector(".grid-container");
// const xmlHttpRequest = new XMLHttpRequest();
const url = "https://jsonplaceholder.typicode.com/users";
// xmlHttpRequest.open("GET", url);
// xmlHttpRequest.send();
// xmlHttpRequest.onload = () => {
//   console.log(xmlHttpRequest);
//   const data = JSON.parse(xmlHttpRequest.response);
//   console.log(data);
//   data.forEach((item) => {
//     const elementsForArr = document.createElement("div");
//     const information = document.createElement("div");
//     elementsForArr.setAttribute("id", item.id);
//     information.classList.add("grid-item");
//     gridContainer.appendChild(elementsForArr);
//     information.innerHTML = `
//         <p>
//         <span>Name: ${item.name}</span>
//         <span>Email: ${item.email}</span>
//         <span>Address: city: ${item.address.city} treet: ${item.address.street}
//         </span>
//       </p>
//       `;

//     elementsForArr.append(information);
//   });
// };

const fetchType = async () => {
  try {
    const data = await fetch(url);
    const jsonCovnerter = await data.json();
    console.log(jsonCovnerter);
    jsonCovnerter.slice(0, 3).forEach((item) => {
      const elementsForArr = document.createElement("div");
      const information = document.createElement("div");
      elementsForArr.setAttribute("id", item.id);
      information.classList.add("grid-item");
      gridContainer.appendChild(elementsForArr);
      information.innerHTML = `
        <span>Name: ${item.name}</span>
        <span>Email: ${item.email}</span>
        <span>Address: <span class = "addressStyle"> city: ${item.address.city} </br> Street: ${item.address.street}
        </span>
     </span>
        
        `;
      elementsForArr.append(information);
    });
  } catch (error) {
    console.log(error);
  }
};
fetchType();
