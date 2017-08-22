var Events = SuperWidget.extend({
    message: null,

    init: function () {
        //code
    },
    // Função que permite interagir com os elementos buttom do html através da propriedade "data"
    bindings: {
        local: {      
        	'modificar_cinza': ['click_cinza'], // Função que irá ser executado através do evento "CLICK"
        	'modificar_azul': ['mouseenter_azul'],  // Função que irá ser executado através do evento "MOUSEENTER"
        	'modificar_laranja': ['keypress_laranja'],  // Função que irá ser executado através do evento "KEYPRESS"
        	'modificar_branco': ['dblclick_branco'],  // Função que irá ser executado através do evento "DBLCLICK"
        }
    },

    // Função que recebe o seletor dos campos do formulário e altera sua propriedade css
    cinza: function () {
    	$("#txt_campo_01").css("background","#cccccc");
    	$("#txt_campo_02").css("background","#cccccc");
    	$("#txt_campo_03").css("background","#cccccc");
    	$("#txt_campo_04").css("background","#cccccc");
	},
    // Função que recebe o seletor dos campos do formulário e altera sua propriedade css	
   azul: function () {
    	$("#txt_campo_01").css("background","#66ccff");
    	$("#txt_campo_02").css("background","#66ccff");
    	$("#txt_campo_03").css("background","#66ccff");
    	$("#txt_campo_04").css("background","#66ccff");
    },
    // Função que recebe o seletor dos campos do formulário e altera sua propriedade css
    laranja: function () {
    	$("#txt_campo_01").css("background","#FFA500");
    	$("#txt_campo_02").css("background","#FFA500");
    	$("#txt_campo_03").css("background","#FFA500");
    	$("#txt_campo_04").css("background","#FFA500");
    },
    // Função que recebe o seletor dos campos do formulário e altera sua propriedade css
    branco: function () {
    	$("#txt_campo_01").css("background","#FFFFFF");
    	$("#txt_campo_02").css("background","#FFFFFF");
    	$("#txt_campo_03").css("background","#FFFFFF");
    	$("#txt_campo_04").css("background","#FFFFFF");
	}
    
});