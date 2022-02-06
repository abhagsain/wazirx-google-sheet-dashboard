function getEnvironmentVariables() {
    const sheet = getSheetById('1798853688')
    if (!sheet) return {
        API_KEY: null,
        SECRET: null
    }

    try {

        const [[API_KEY], [SECRET]] = sheet.getRange('B1:B2').getValues();
        return {
            API_KEY, SECRET
        }
    } catch (error) {
        Logger.log(error)
        return {
            API_KEY: undefined, SECRET: undefined
        }
    }
}
