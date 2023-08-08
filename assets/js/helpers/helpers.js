/**
*
* Script com funções utilizadas
*
* @author Willen L. Carneiro
*
**/
;(function($, Helpers){

	var searchTable = function(){

		$('input[name="search"]').keyup(function(){

			var search = $(this).val().toLowerCase();

			$('table tbody tr').hide();

			if(search == ''){
				$('table tbody tr').show();
				return;
			}

			$($('table tbody td')).each(function(){

				if($(this).html() != ''){
					if($(this).html().toLowerCase().indexOf(search) != -1){
						$(this).parent().show();
					}else if($(this).html().indexOf(search) != -1){
						$(this).parent().show();
					}
				}

			});

		})

	}

	var getPage = function(){

		var split = window.location.href.split('/');
		var last  = split.length - 1;
		var page  = split[last];

		if(isNaN(page)){
			return page;
		}

		return split[last - 2] + '/' + split[last - 1];

	};

	var datepicker = function(input){

  		input.daterangepicker({
  			singleDatePicker: true,
  			locale: {
				format: 'DD/MM/YYYY',
			},
		    minYear: 1900,
		});

	};

	var phoneMask = function(phone){

		var phone = phone || $('#phone');
		var mask  = '(00) 00000-0000';

		phone.mask(mask);
		phone.on('keyup', function(){

			var number = $(this).val()[5];

			if(number == 9){
				phone.mask('(00) 00000-0000');
			}else{
				phone.mask(mask);
			}

		});

	};

	var dateMask = function(date)
	{
		var date = date || $('#birthdate');
		var mask  = '00/00/0000';
		date.mask(mask);
	};

	var timeMask = function(time)
	{
		var time = time || $('.time');
		var mask  = '00:00';
		time.mask(mask);
	};

	var cpfMask = function(cpf)
	{
		var cpf = cpf || $('#cpf');
		var mask  = '000.000.000-00';
		cpf.mask(mask);
	};

	var loadCep = function(cep){

		resetAddress();
		$.ajax({
			url: 'https://viacep.com.br/ws/' + cep + '/json/',
			dataType: 'JSON',
			
			complete: function(response){
				if(response.status === 200){
					
					addAddress(response.responseJSON);

				}
			}
		});

	};

	var loadShippingCep = function(cep){

		resetShippingAddress();
		$.ajax({
			url: 'https://viacep.com.br/ws/' + cep + '/json/',
			dataType: 'JSON',
			
			complete: function(response){
				if(response.status === 200){
					
					addShippingAddress(response.responseJSON);

				}
			}
		});

	};

	var cnpjMask = function(cnpj){

		var cnpj = cnpj || $('#cnpj');
		var mask  = '00.000.000/0000-00';
		cnpj.mask(mask);

	};

	var cpfcnpjMask = function(documentUser){

		var documentUser = documentUser || $('#accountdocument');
		var mask  = '000.000.000-000';
		documentUser.mask(mask);

		documentUser.on('keyup', function(){

			var number = $(this).val().length;

			if(number > 14){
				documentUser.mask('00.000.000/0000-00');
			}else{
				documentUser.mask(mask);
			}

		});
	};

	var cepMask = function(cep){

		var cep = cep || $('#cep');
		var mask  = '00000-000';
		cep.mask(mask);

	};

	var rgMask = function(rg){

		var rg = rg || $('#rg');
		var mask  = '0.000.0000';
		rg.mask(mask);

	};

	var numberMask = function(number){

		var number = number || $('#number');
		var mask  = '000000';
		number.mask(mask);

	};

	var heigthMask = function(heigth){

		var heigth = heigth || $('#heigth');
		var mask  = '0.00 m';
		heigth.mask(mask);

	};	

	var weightMask = function(weight){

		var weight = weight || $('#weight');
		var mask  = '00 Kg';
		weight.mask(mask);

	};		

	var addAddress = function(address){

		if(address.erro){
			
			return;
			
		}

		$('#state').prop("value", address.uf);
		$('#city').prop("value", address.localidade);
		$('#neighborhood').prop("value", address.bairro);
		$('#street').prop("value", address.logradouro);

	};

	var addShippingAddress = function(address){

		if(address.erro){
			
			return;
			
		}

		$('.shipping-uf').prop("value", address.uf);
		$('.shipping-city').prop("value", address.localidade);
		$('.shipping-neighborhood').prop("value", address.bairro);
		$('.shipping-street').prop("value", address.logradouro);

	};	

	var moneyMask = function(value){

		value.maskMoney({ prefix: "R$", decimal:",", thousands:"."});

	}

	var resetAddress = function(){

		$('.address-input').val('');
		
	};

	var resetShippingAddress = function(){

		$('.shipping-address-input').val('');
		
	};


	Helpers.getPage 		 	= getPage;
	Helpers.datepicker       	= datepicker;
	Helpers.phoneMask        	= phoneMask;
	Helpers.dateMask        	= dateMask;
	Helpers.timeMask        	= timeMask;
	Helpers.numberMask        	= numberMask;
	Helpers.cnpjMask         	= cnpjMask;
	Helpers.cpfMask         	= cpfMask;
	Helpers.cpfcnpjMask        	= cpfcnpjMask;
	Helpers.cepMask          	= cepMask;
	Helpers.loadCep          	= loadCep;
	Helpers.loadShippingCep     = loadShippingCep;
    Helpers.moneyMask		 	= moneyMask;
    Helpers.rgMask		 		= rgMask;
    Helpers.heigthMask		 	= heigthMask;
    Helpers.weightMask		 	= weightMask;
    Helpers.searchTable  	    = searchTable;

})($, Helpers);