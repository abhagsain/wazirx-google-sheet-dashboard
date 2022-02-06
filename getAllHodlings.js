/**
 * Built by - ✨ Anurag Bhagsain 
 * If you found this useful you might want to checkout Coingaze.in (My side project 😄) where you can create custom crypto alerts and get
 * notifications on your browser or telegram account :) 
 * It also has an extension so you can create alerts right from the WazirX Website 😬
 * 
 * @param { boolean } reference  Make this true if you want to get random values for your coins
 * @returns - Total coin holdings from your WazirX Wallet
 * @customfunction
 */

function getAllHodlings(showDummyData) {
    const { API_KEY, SECRET } = getEnvironmentVariables();
    if (!API_KEY || !SECRET) return ["Please provide API & SECRET to use this sheet"]
    const reqParams = `timestamp=${Date.now()}`
    const signature = getHMAC256(SECRET, reqParams);
    const ACCOUNT_FUNDS_URL = `https://api.wazirx.com/sapi/v1/funds?${reqParams}&signature=${signature}`;
    const params = {
        'method': 'GET',
        'headers': { 'X-Api-Key': API_KEY },
        'muteHttpExceptions ': true
    };

    try {
        const data = UrlFetchApp.fetch(ACCOUNT_FUNDS_URL, params);
        const hodledCoins = JSON.parse(data.getContentText()).filter(item => Number(item.free) !== 0);
        const hodlings = getUserHodlings(hodledCoins, showDummyData);
        Logger.log(hodlings);
        return hodlings;
    } catch (err) {
        Logger.log(err);
        return ['Request Failed. Probably Limit has reached. Please check the execution Logs']
    }
}
