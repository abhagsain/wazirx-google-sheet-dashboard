const getHMAC256 = (key, params) => {
    let signatureKey = Utilities.computeHmacSha256Signature(params, key);
    return signatureKey.map(function (element) {
        var v = (element < 0 ? element + 256 : element).toString(16);
        return v.length == 1 ? "0" + v : v;
    }).join("");
}
