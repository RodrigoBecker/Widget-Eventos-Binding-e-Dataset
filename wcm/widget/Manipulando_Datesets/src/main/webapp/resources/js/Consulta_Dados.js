//função que consulta o dataset interno do fluig ("Colleague") passando como parãmetro as contraints(Filtros) para filtrar os registros. 
function consult_dataset (){
	var teste  = DatasetFactory.getDataset("colleague",null,null,null);   
    return teste;
}

// função que consulta dataset customizado do fluig ("Carro") passando os parâmetros default
function consult_data_customizado (){
    var database = DatasetFactory.getDataset("ds_Cars",null,null,null);
    return database;
}

