const crypto = require('crypto');

//NOTE: Bad practice, should not store secret key, etc like this. 
const ALGORITHM = "aes-192-cbc";
const SECRET_KEY = "secret-key";
const KEY = crypto.scryptSync(SECRET_KEY, 'salt', 24);
const iv = crypto.randomBytes(16);

exports.encryptPassword = (password) => {
    const cipher = crypto.createCipheriv(ALGORITHM, KEY, iv);

    const encryptedPassword = cipher.update(password, 'utf8', 'hex') + cipher.final('hex');
    return encryptedPassword;
}

function decryptPassword(encryptedPassword) {
    const decipher = crypto.createDecipheriv(ALGORITHM, KEY, iv);
    const decrypted = decipher.update(encryptedPassword, 'hex', 'utf8') + decipher.final('utf8');

    return decrypted;
}

exports.comparePassword = (encryptedPassword, password) => {
    return decryptPassword(encryptedPassword) === password;
}