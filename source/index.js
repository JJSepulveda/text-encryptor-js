console.log("Se agrego correctamente el archivo index.js")

const encode_input = document.getElementById('encode_input');
const btn_encode = document.getElementById('btn_encode');
let result = document.getElementById('result_section');

btn_encode.addEventListener("click", encript_textarea);

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
    encode_string = encript(encode_input.value)
    console.log(encode_string);
    result.innerHTML = '';
    result.innerHTML = encode_string;
}