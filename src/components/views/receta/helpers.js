export const cantidadCaracteres = (input, min, max) => {
    if (input.length >= min && input.length <= max) {
        return true; 
    } else {
        return false;
    }
};

export const validarURL = (input) => {
    if (input.length > 0) {
        let expRegular =
            /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
        if (expRegular.test(input.trim())) {
            return true;
        } else {
            return false;
        }
    } else {
        return true;
    }
};
