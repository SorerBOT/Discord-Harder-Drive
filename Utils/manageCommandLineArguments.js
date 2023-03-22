import uploadFile from "../Api/Discord/uploadFile.js";
import downloadFile from "../Api/Discord/downloadFile.js";

function manageCommandLineArguments(argv) {
    const uploadIndex = argv.findIndex((arg) => {
        return (arg === "-u" || arg === "--upload") ? true : false;
    });

    if (uploadIndex > -1) {
        const filePath = argv[uploadIndex + 1];
        uploadFile(filePath);

        return;
    }

    const downloadIndex = argv.findIndex((arg) => {
        return (arg === "-d" || arg === "--download") ? true : false;
    });

    if (downloadIndex > -1) {
        const filePath = argv[downloadIndex + 1];
        downloadFile(filePath);

        return;
    }

}

export default manageCommandLineArguments;