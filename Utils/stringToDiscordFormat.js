function stringToDiscordFormat(string) {
    return string.match(/.{1,2000}/g);
}

export default stringToDiscordFormat;