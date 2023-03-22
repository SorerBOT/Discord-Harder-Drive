function bufferFromString(string) {
    return Buffer.from(string, "ucs-2");
}

export default bufferFromString;