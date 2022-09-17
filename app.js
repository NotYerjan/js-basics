let primitive = true;

switch (typeof primitive) {
  case "number":
    console.log(`data type of '${primitive}' is number`);
    break;
  case "string":
    console.log(`data type of '${primitive}' is string`);
    break;
  case "boolean":
    console.log(`data type of '${primitive}' is boolean`);
    break;
}
