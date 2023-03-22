import { readFileSync } from "fs";

function getByteArray(filePath){
  return readFileSync(filePath);
}

export default getByteArray;