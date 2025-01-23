function IncludeAlphabet( str ) {
    return str.concat("abcdefghijklmnopqrstuvwxyz")
}

function IncludeNumbers( str ){
    return str.concat("0123456789")
}

function IncludeSpecialCharacters( str ){
    return str.concat(`!@#$%^&*()-_=+[]{}|;:'"<>,.?/~`)
}

function generateRandomNumber( len ){
    return parseInt(Math.random() * len)
}

function PasswordGeneration( string , len ){
    let count = len
    let password = ""
    while( count != 0 ){
        password += string.charAt(generateRandomNumber(string.length))
        count--
    }
    return password
}

function GeneratePassword( len ){
    let string = ""
    return ( alphabet ) => {
        if( alphabet ) string = IncludeAlphabet( string )
        return ( numbers ) => {
            if( numbers ) string = IncludeNumbers(string)
            return ( special_char ) => {
                if( special_char ) string = IncludeSpecialCharacters(string)
                return () => {
                    return PasswordGeneration( string , len )
                }
            }
        }
    }
}

module.exports = {
    GeneratePassword
}