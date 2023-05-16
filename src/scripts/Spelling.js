const Spelling = {
    
    spell: (params) => {
        const number = Number(params);
        if (isNaN(number)) throw new Error('Parameter harus berupa angka');

        let result = "";
        const spells = ['nol', 'satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan']; 

        const text = String(params);

        for(let j = 0; j < text.length; j++){
            let t = text.substring(j, j + 1);
            
            let level = text.length - j;
            
            if((text.length > 1) && (text.substring(text.length - 2, text.length - 1) == '1') && (j == text.length - 1) && (t != '0')){
                result += " " + spells[text.substring(text.length - 1, text.length)] + " belas";
            }else if((text.substring(text.length - 2, text.length - 1) != '1')){
                result += " " + spells[t];
                if((level == 3) && (t != '0')) result += " ratus";
                else if((level == 2) && (t != '0')) result += " puluh";
            }else if(text.substring(text.length - 2, text.length) == '10' && j == text.length - 1){
                result += " sepuluh";
            }else if(level == 3){
                result += " " + spells[t];
                if((level == 3) && (t != '0')) result += " ratus";    
            }
            if(text.length > 1) result = result.replace("nol", "");
            result = result.replace("satu puluh", "sepuluh");
            result = result.replace("satu ratus", "seratus");
            result = result.replace("satu belas", "sebelas");
        }

        console.log(result);
        return result.trim();
    },
};

export default Spelling;
