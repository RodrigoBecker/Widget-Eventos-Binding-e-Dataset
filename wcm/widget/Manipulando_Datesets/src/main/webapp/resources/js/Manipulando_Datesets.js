var datasets = SuperWidget.extend({
    message: null,

    init: function () {
    	
    	// variavel que recebe a função que consulta o dataset interno "ds_Carros"
    	var dataset = consult_data_customizado();
    	// metódo para preencher a combobox com os dados do dataset
    	$.each(dataset.values,function(k,v){
    	$("#carros").append("<option value="+v.Codigo+">"+v.Modelo +"</option>");

    	})

    },

    bindings: {
        local: {
        	'modificar_consultar':['click_consultar'] // função que é executa por meio do evento click
        }
    },

	consultar: function () {
		
		// variavel que recebe a função que consulta o dataset interno "colleague"
		var data = consult_dataset();
		$("#name").val(data.values[0].colleagueName); // método de inserção dos dados do dataset no input 
		$("#email").val(data.values[0].mail);
		$("#setor").val(data.values[0].currentProject);
		
    },
    		
});