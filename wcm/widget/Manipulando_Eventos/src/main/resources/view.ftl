<div id="Events_${instanceId}" class="super-widget wcm-widget-class fluig-style-guide"
     data-params="Events.instance({})">

    <!-- efetua a tradução do texto do objeto i18n -->	
    <h1>${i18n.getTranslation('hello.example.hello')}</h1>

    <div>
    <!--  formulário base utilizando a biblioteca fluig style guide -->
    <div class="fluig-style-guide">
      	 <form id="form"  role="form"> 
  			<div class="form-group">
    			<label for="textNome" class="control-label">${i18n.getTranslation('Campo_01')}</label>
    			<input id="txt_campo_01" class="form-control" placeholder="Digite algum texto..." type="text">
  			</div>
   		 	<div class="form-group">
    			<label for="inputEmail" class="control-label">${i18n.getTranslation('Campo_02')}</label>
    			<input id="txt_campo_02" class="form-control" placeholder="Digite algum texto..." type="email">
  			</div>
   			<div class="form-group">
    			<label for="inputPassword" class="control-label">${i18n.getTranslation('Campo_03')}</label>
    			<input  id="txt_campo_03" class="form-control"  placeholder="Digite algum texto...">
  			</div>
   			<div class="form-group">
    			<label for="inputConfirm" class="control-label">${i18n.getTranslation('Campo_04')}</label>
    			<input id="txt_campo_04" class="form-control" placeholder="Digite algum texto...">
  			</div>
  			<div class="row form-group col-sm-12"> <!-- Botões que irão receber os eventos através da propriedade "data" -->
  			<button type="button" class="btn btn-default" data-modificar_cinza>${i18n.getTranslation('hello.button.Cinza')}</button> 
  	  		<button type="button" class="btn btn-default" data-modificar_azul>${i18n.getTranslation('hello.button.Azul')}</button>
  	  		<button type="button" class="btn btn-default" data-modificar_laranja>${i18n.getTranslation('hello.button.Laranja')}</button> 
  	  		<button type="button" class="btn btn-default" data-modificar_branco>${i18n.getTranslation('hello.button.Branco')}</button>
			
			</div> 			
  		</form>  
    </div>
  </div>
</div>
