var M = "";
var C = "";
var K = "";
var D = "";
var keyword = "";
var L = 26 ;
var asciioffset = 65;


keyword = prompt("Please enter the encryption keyword")
M = prompt("Please type in the message. ");
M = removeSpaces(M);
console.log(M);
document.writeln("The input message is: ");
document.writeln(M);

document.writeln ("<br>");
document.writeln ("<hr>");

K = generateEncryptionKey(M, keyword);
console.log(K);
document.writeln("The keyword fit to length is: ");
document.writeln(K);

document.writeln ("<br>");
document.writeln ("<hr>");

C = encrypt_(M, K);
console.log(C);
document.writeln("The encrypted message is: ");
document.writeln(C);

document.writeln ("<br>");
document.writeln ("<hr>");

D = returnClearText(C, K);
console.log(D);
document.writeln("The decrypted message is: ");
document.writeln(D);

function removeSpaces(message_) {
	var mwos = "" ;
	for (var position = 0 ; position < message_.length ; position++){
		if ( message_.charAt(position) != ' ' ){
			mwos = mwos.concat( message_.charAt(position) ) ;
		//console.log( mwos ) ;
		}
}
    return mwos.toUpperCase() ; 
}

function generateEncryptionKey(message_, keyword_){
	var key = "";
	var esl = keyword_.length;
	var esu = keyword_.toUpperCase();
	for (var position = 0 ; position < message_.length ; position++){
		key = key.concat( esu.charAt( position % esl ));
	}
	return key;
}

function encrypt_(message_, key_){

	var encrypted = "";
	
	for (var position   = 0 ; position < message_.length ; position++){
	
		var lettercode  = message_.charCodeAt(position);
		var keycode     = key_.charCodeAt(position);
		
		encrypted =
		encrypted.concat(
			String.fromCharCode( ( ( lettercode + keycode ) % L) + asciioffset) );
		//console.log(encrypted);
	}
	return encrypted;
}

function returnClearText(ciphertext_, key_){

	var decrypted = "";
	
	for (var position   = 0 ; position < ciphertext_.length ; position++){
	
		var cipheros    = ciphertext_.charCodeAt(position) - asciioffset;
		var keypos      = key_.charCodeAt(position) - asciioffset;
		var clearpos    = ( cipheros - keypos) ;
		
		if ( clearpos <= 0)
		   clearpos += L ;
		   
		clearpos = clearpos % L;
		
		decrypted =
		decrypted.concat(
		   String.fromCharCode( clearpos + asciioffset ) );
		   //console.log(decrypted);
        }
	return decrypted;
}