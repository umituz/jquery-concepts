function boyutu_degistir(eleman, boyut){

	var mevcut = parseInt(eleman.css('font-size'));
	if (boyut == 'kucult'){
		var yeni_boyut = mevcut - 2;
	}else if(boyut == 'buyult'){
		var yeni_boyut = mevcut + 2;
	}

	eleman.css('font-size', yeni_boyut + 'px');
}

$('#kucuk').click( function(){
	boyutu_degistir($('p'),'kucult');
});

$('#buyuk').click( function(){
	boyutu_degistir($('p'),'buyult');
});