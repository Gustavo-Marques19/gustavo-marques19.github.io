function romanize (num) {
	if (!+num){
        document.getElementById('decimal_error').innerHTML = 'Caracter inválido';
		return false;
    }
	var	digits = String(+num).split(""),
		key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
		       "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
		       "","I","II","III","IV","V","VI","VII","VIII","IX"],
		roman = "",
		i = 3;
	while (i--)
		roman = (key[+digits.pop() + (i * 10)] || "") + roman;
	return Array(+digits.join("") + 1).join("M") + roman;
}

function deromanize (str) {
    console.log(str);
	var	str = str.toUpperCase(),
		validator = /^M*(?:D?C{0,3}|C[MD])(?:L?X{0,3}|X[CL])(?:V?I{0,3}|I[XV])$/,
		token = /[MDLV]|C[MD]?|X[CL]?|I[XV]?/g,
		key = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},
		num = 0, m;
	if (!(str && validator.test(str))) {
        document.getElementById('romanos_error').innerHTML = 'Caracter inválido';
		return false;
    }
	while (m = token.exec(str))
		num += key[m[0]];
	return num;
}

function convertToDecimal(){
	document.getElementById('romanos_error').innerHTML = '';

	var numeroRomano = document.getElementById("inputRomanos").value;
	
	var res = deromanize(numeroRomano);
    
    var numeroDecimal = res == false ? 0 : res;

    document.getElementById("inputDecimal").setAttribute('value', numeroDecimal);

    console.log(numeroDecimal);
}

function convertToRomano(){
    var numeroDecimal = document.getElementById("inputDecimal").value;
    
    var numeroRomano = romanize(numeroDecimal);

    document.getElementById("inputRomanos").value = numeroRomano;

    console.log(numeroRomano);
}