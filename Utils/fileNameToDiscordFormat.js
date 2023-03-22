function fileNameToDiscordFormat(fileName) {
    return fileName.replace('.', '-');
}

export default fileNameToDiscordFormat;