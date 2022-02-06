const getSheetById = (id) => {
    const sheets = SpreadsheetApp.getActiveSpreadsheet().getSheets();
    return sheets.filter(sheet => sheet.getSheetId() === Number(id)).pop();
}
