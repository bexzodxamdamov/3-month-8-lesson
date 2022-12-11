const users = [
  { name: "abror", age: "16" },
  { name: "bobur", age: "16" },
  { name: "dilmurod", age: "16" },
  { name: "elbek", age: "16" },
  { name: "farruh", age: "16" },
  { name: "haydar", age: "16" },
  { name: "imron", age: "16" },
  { name: "jasur", age: "16" },
  { name: "komron", age: "16" },
  { name: "laziz", age: "16" },
  { name: "muhammad", age: "16" },
  { name: "nuriddin", age: "16" },
  { name: "omon", age: "16" },
  { name: "qahramon", age: "16" },
  { name: "ravshan", age: "16" },
  { name: "sardor", age: "16" },
  { name: "timur", age: "16" },
  { name: "umar", age: "16" },
  { name: "vohid", age: "16" },
  { name: "xumoyun", age: "16" },
  { name: "zafar", age: "16" },
];

let text = prompt(`Qidirvotgan so'zizzi kiritin  :)`);

let isDefined = false;
for (let i = 0; i < users.length; i++) {
  let elementTexts = users[i].name.slice(0, text.length);
  if (elementTexts === text) {
    isDefined == true;
    console.log(users[i]);
  }
}

if (!isDefined) {
  console.log(`So'ziz topilmadi :(`);
}
