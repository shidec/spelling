const Spelling = {

    spell: (params) => {
        const number = Number(params);
        if (isNaN(number)) throw new Error('Parameter harus berupa angka');

        const text = String(params).trim();
        if(text.length > 15) throw new Error('Input maksimal 15 digit (trilyun)');

        const degrees = ['ribu', 'juta', 'milyar', 'trilyun'];

        let result = "";
        const numbers = [];

        for(let i = text.length; i > 0; i -= 3){
            if((i - 3) > 0){
                numbers.unshift(text.substring(i - 3, i));
            }else{
                numbers.unshift(text.substring(0, i));
            }
        }

        for(let i = 0; i < numbers.length; i++){
            let level = numbers.length - i - 2;
            
            result += Spelling.spellPart(numbers[i]) + (level >= 0 ? ' ' + degrees[level]: '');
        }
        result = result.trim().replace(/^satu ribu/, "seribu");

        console.log(result);
        return result.trim();
    },

    spellPart: params => {
        const spells = ['nol', 'satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan'];
        const text = String(params);

        let result = '';

        for(let j = 0; j < text.length; j++){

            if((text.length > 1) 
                && (text.substring(text.length - 2, text.length - 1) == '1') && (j == text.length - 2)
                && (text.substring(text.length - 2, text.length) != '10') && (j == text.length - 2)){
                continue;
            }

            let t = text.substring(j, j + 1);
	        result += " " + spells[t];

            let level = text.length - j;

            if((text.length > 1) 
                && (text.substring(text.length - 2, text.length - 1) == '1') && (j == text.length - 1)
                && (text.substring(text.length - 2, text.length) != '10') && (j == text.length - 1)){
                result += " belas";
            }
            
            if((level == 2) && (t != '0')) result += " puluh";
            else if((level == 3) && (t != '0')) result += " ratus";            
        }
	
        if(text.length > 1) result = result.replaceAll("nol", "");
        result = result.replace("satu puluh", "sepuluh");
        result = result.replace("satu ratus", "seratus");
		result = result.replace("satu belas", "sebelas");

        return result;
    }
};

export default Spelling;
