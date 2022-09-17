let primitive = 5;
let primitiveType = typeof primitive;

if (primitiveType === "number") {
  console.log(`data type of '${primitive}' is number`);
} else if (primitiveType === "string") {
  console.log(`data type of '${primitive}' is string`);
} else if (primitiveType === "boolean") {
  console.log(`data type of '${primitive}' is boolean`);
}
