import { writeFile } from "fs";

function fileFromByteArray(byteArray, filename) {
    writeFile(filename, byteArray, (error) => { if (error) console.error(error)});
}

export default fileFromByteArray;