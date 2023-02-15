// Import CryptoJS library
const CryptoJS = require('crypto-js');

// Define encryption and decryption keys
const encryptionKey = 'myencryptionkey';
const decryptionKey = 'mydecryptionkey';

// Encrypt HTML code using AES
const encryptedHtml = CryptoJS.AES.encrypt(document.documentElement.outerHTML, encryptionKey).toString();

// Decrypt and display HTML code in browser
const decryptedHtml = CryptoJS.AES.decrypt(encryptedHtml, decryptionKey).toString(CryptoJS.enc.Utf8);
document.open();
document.write(decryptedHtml);
document.close();
