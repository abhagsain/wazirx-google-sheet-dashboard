const getMarketPrices = () => {
    const URL = 'https://api.wazirx.com/sapi/v1/tickers/24hr'
    const params = {
        method: "GET"
    }
    return JSON.parse(UrlFetchApp.fetch(URL, params).getContentText());
}
