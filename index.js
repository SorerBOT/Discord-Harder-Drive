import getByteArray from "./Utils/Files/getByteArray.js";
import fileFromByteArray from "./Utils/Files/fileFromByteArray.js";

const data = getByteArray("./file.jpg");
const stringData = data.toString("ucs2");

const newData = Buffer.from(stringData, "ucs2");

fileFromByteArray(newData, "newFile.jpg");