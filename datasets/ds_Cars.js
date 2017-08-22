function defineStructure() {

}
function onSync(lastSyncDate) {

}
function createDataset(fields, constraints, sortFields) {
	
	var dataset = DatasetBuilder.newDataset();
	//Cria as colunas
    dataset.addColumn("Codigo");
    dataset.addColumn("Modelo");
    dataset.addColumn("Marca");
    dataset.addColumn("Ano");
    
    //Cria os registros
    dataset.addRow(new Array("01", "Gol 1.6", "Volkswagen", "2014"));
    dataset.addRow(new Array("02", "Polo 1.6", "Volkswagen", "2015"));
    dataset.addRow(new Array("03", "Classic 1.0", "Chevrolet", "2016"));
    dataset.addRow(new Array("04", "Camaro SS 2.0", "Chevrolet", "2017"));
    dataset.addRow(new Array("05", "Siena 1.5", "FIAT", "2013"));
     
    return dataset;
	

}function onMobileSync(user) {

}