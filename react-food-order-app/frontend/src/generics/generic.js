export const rnd = Math.floor(Math.random() * 9999);

const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
export function rndStr() {
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < 4; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}