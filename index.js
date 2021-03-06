function lancamentos() {
    var sheet = SpreadsheetApp.getActiveSpreadsheet();
    var planilha = sheet.getSheetByName('Lançamentos');
    SpreadsheetApp.setActiveSheet(planilha);
  }
  
  function investimentos() {
    var sheet = SpreadsheetApp.getActiveSpreadsheet();
    var planilha = sheet.getSheetByName('Investimentos');
    SpreadsheetApp.setActiveSheet(planilha);
  }
  
  function cadastro() {
    var sheet = SpreadsheetApp.getActiveSpreadsheet();
    var planilha = sheet.getSheetByName('Cadastro');
    SpreadsheetApp.setActiveSheet(planilha);
  }
  
  
  function menu() {
    var sheet = SpreadsheetApp.getActiveSpreadsheet();
    var planilha = sheet.getSheetByName('Menu');
    SpreadsheetApp.setActiveSheet(planilha);
  }
  
  function insertRow() {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName('Investimentos');
    sheet.insertRowAfter(8);
  
    var dataVali = SpreadsheetApp.newDataValidation().requireDate().setAllowInvalid(false).build();
    var dataCol = sheet.getRange("A9");
    dataCol.setBackground("#6D9EEC");
    dataCol.setFontColor("white");
    dataCol.setDataValidation(dataVali);
  
    var dataCols = sheet.getRange("B9:D9");
    dataCols.setBackground("#4A85E8");
    dataCols.setFontColor("white");
  
    var extraCols = sheet.getRange("E9:G9");
    extraCols.setBackground("#CFE2F3");
    extraCols.setFontColor("black");
  
    var valueCol = sheet.getRange("H9");
    valueCol.setBackground("#D9EBD3");
    valueCol.setFontColor("black");
  
    var tipoVali = SpreadsheetApp.newDataValidation().requireValueInList(['Investimento', 'Aposentadoria']).setAllowInvalid(false).build();
    var tipoCol = sheet.getRange("E9");
    tipoCol.setDataValidation(tipoVali);
    tipoCol.setValue("Investimento");
  
    var catVali = sheet.getRange("I7").getDataValidation();
    var catCol = sheet.getRange("F9");
    catCol.setDataValidation(catVali);
    catCol.setValue("Bens");
  
    var catchB = sheet.getRange("B9");
    catchB.setFormula("=TEXT(A9:A;\"ddd\")");
  
    var catchC = sheet.getRange("C9");
    catchC.setFormula("=TEXT(A9:A;\"mmm\")");
  
    var catchD = sheet.getRange("D9");
    catchD.setFormula("=TEXT(A9:A;\"yyy\")");
  
    var catchH = sheet.getRange("H9");
    catchH.setFormula("=SUBTOTAL(109; G9)");
  }
  
  function insertRowLancamentos() {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName('Lançamentos');
    sheet.insertRowAfter(9);
  
    var tipoVali = SpreadsheetApp.newDataValidation().requireValueInList(['Entrada', 'Saída']).setAllowInvalid(false).setHelpText("Insira o tipo do lançamento.").build();
    var tipoCol = sheet.getRange("E10");
    tipoCol.setDataValidation(tipoVali);
    tipoCol.setValue("Entrada");
  
    var dataVali = SpreadsheetApp.newDataValidation().requireDate().setAllowInvalid(false).build();
    var dataCol = sheet.getRange("A10");
    dataCol.setBackground("#6D9EEC");
    dataCol.setFontColor("black");
    dataCol.setDataValidation(dataVali);
  
    var catVali = sheet.getRange("I8").getDataValidation();
    var catCol = sheet.getRange("F10");
    catCol.setDataValidation(catVali);
  
    var dataCols = sheet.getRange("B10:D10");
    dataCols.setBackground("#4A85E8");
    dataCols.setFontColor("black");
  
    var extraCols = sheet.getRange("E10:G10");
    extraCols.setBackground("#CFE2F3");
    extraCols.setFontColor("black");
  
    var valueCol = sheet.getRange("H10");
    valueCol.setBackground("#D9EBD3");
    valueCol.setFontColor("black");
  
    var catchB = sheet.getRange("B10");
    catchB.setFormula("=TEXT(A10:A;\"ddd\")");
  
    var catchC = sheet.getRange("C10");
    catchC.setFormula("=TEXT(A10:A;\"mmm\")");
  
    var catchD = sheet.getRange("D10");
    catchD.setFormula("=TEXT(A10:A;\"yy\")");
  
    var catchI = sheet.getRange("I10");
    catchI.setFormula("=SUBTOTAL(109; H10)");
  }
  
  function sortInvestimentos() {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName('Investimentos');
    if (sheet.getLastRow() === 8)
    {
      return;
    }
  
    var range = sheet.getRange("A9:C");
    range.sort({column: 1, ascending: true});
  }
  
  function sortLancamentos() {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName('Lançamentos');
    if (sheet.getLastRow() === 9)
    {
      return;
    }
    
    var range = sheet.getRange("A10:I");
    range.sort({column: 1, ascending: true});
  }