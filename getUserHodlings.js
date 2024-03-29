const getUserHodlings = (funds, showDummyData) => {
    Logger.log({ showDummyData });
    const marketPrices = getMarketPrices();
    const allFunds = funds.reduce((acc, curr) => {
        const { free: amount, asset } = curr;
        const found = marketPrices.find(item => item.baseAsset === asset);
        const currentPrice = found ? Number(amount) * Number(found.lastPrice) : Number(amount);
        const random = getRandomNumberBetween(5000, 50000);
        return [...acc, [asset.toUpperCase(), showDummyData ? random : currentPrice, +found?.lastPrice || +amount]]
    }, []);
    const sortedByAmount = allFunds.sort((a, b) => {
        const aAmount = a[1];
        const bAmount = b[1];
        return bAmount - aAmount;
    });
    return sortedByAmount;
}
