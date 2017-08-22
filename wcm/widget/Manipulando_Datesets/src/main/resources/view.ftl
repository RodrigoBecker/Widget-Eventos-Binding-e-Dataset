<div id="datasets_${instanceId}" class="super-widget wcm-widget-class fluig-style-guide"
     data-params="datasets.instance({})">

    <!-- efetua a tradução do texto do objeto i18n -->	
    <h1>${i18n.getTranslation('hello.example.hello')}</h1>

   	<!--  formulário base utilizando a biblioteca fluig style guide -->
   	<div class="row form-group col-sm-12">
  			 	<form id="form_01"  role="form">
  					<div class="form-group col-sm-4" >
    					<label for="name" class="control-label">${i18n.getTranslation('name')}</label>
    					<input id="name" class="form-control" placeholder="Digite algum texto..." type="text">
  					</div>
  					<div class="form-group col-sm-4">
    					<label for="email" class="control-label">${i18n.getTranslation('email')}</label>
    					<input id="email" class="form-control" placeholder="Digite algum texto..." type="text">
  					</div>
  					<div class="form-group col-sm-4">
    					<label for="setor" class="control-label">${i18n.getTranslation('setor')}</label>
    					<input id="setor" class="form-control" placeholder="Digite algum texto..." type="text">
  					</div>
  					<div class="form-group col-sm-4"><!-- button que irá receber ação de consultar o dataset por meio da propriedade "data" -->
						<button type="button" class="btn btn-default" data-modificar_consultar>${i18n.getTranslation('button.consultar')}</button>
					</div>
					
					<div class="form-group col-sm-12">
						<label for="select" class="control-label">${i18n.getTranslation('select_cars')}</label>
							<select  id="carros" class="form-control" data-select>
							</select>	
					<div>
				</form>
  		</div>
</div>

<!-- Link de referêcia a biblioteca vcXMLRPC que permite manipular os objetos de dataset diretamente no front  -->
<script type="text/javascript" src="/webdesk/vcXMLRPC.js"></script>