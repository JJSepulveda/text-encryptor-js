console.log("Se agrego correctamente el archivo index.js")

const input_text = document.getElementById('input_text');
const btn_encode = document.getElementById('btn_encode');
let result = document.getElementById('result_section');

const btn_decode = document.getElementById('btn_decode');

btn_encode.addEventListener("click", encript_textarea);
btn_decode.addEventListener("click", decript_textarea);

/**
 * Sustitulle las vocales por una secuencia de caracteres preestablecida
 * @param {string} str - La cadena que se va a encriptar
 */
function encript(str) {
    return str.replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
}

/**
 * Lee el contenido del textarea y encripta el contenido con la función ecript
 */
function encript_textarea() {
    encode_string = encript(input_text.value)
    console.log(encode_string);
    result.innerHTML = '';
    result.innerHTML = encode_string;
}

/**
 * Desencriptar el contenido del string
 * @param {string} str - La cadena que se va a des encriptar
 */
function decript(str){
    return str.replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
}

/**
 * Desencriptar la cadena de texto y
 */
function decript_textarea(){
    decode_string = decript(input_text.value)
    console.log(decode_string);
    result.innerHTML = '';
    result.innerHTML = decode_string;
}