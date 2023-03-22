import uploadFile from "../Api/Discord/uploadFile.js";

function manageCommandLineArguments(argv) {
    const uploadIndex = argv.findIndex((arg) => {
        return (arg === "-u" || arg === "--upload") ? true : false;
    });

    if (uploadIndex > -1) {
        const filePath = argv[uploadIndex + 1];
        uploadFile(filePath);
    }
}

export default manageCommandLineArguments;