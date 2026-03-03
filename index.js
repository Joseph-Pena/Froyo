function froyoFlavors(count) {
  let froyo = [];

  for (let i = 0; i < count; i++) {
    let response = prompt(`write down froyo flavors #${i + 1}: `);

    console.log("prompt returned:", response);

    if (response) {
      froyo.push(response);
      console.log(`Added: ${response}`);
      alert(`Added: ${response}`);
    }
  }

  return froyo;
}

let chosenFlavors = froyoFlavors(6);

alert("The flavors you choose are: " + chosenFlavors);

let flavorCounts = {};
for (const flavor of chosenFlavors) {
  flavorCounts[flavor] = (flavorCounts[flavor] || 0) + 1;
}

console.log("flavorCounts:", flavorCounts);
alert("Flavor frequencies:\n" + JSON.stringify(flavorCounts, null, 2));

let totalFlavors = chosenFlavors.length;
alert("Total amount of flavors entered: " + totalFlavors);
