export default class AvatarAlgorithm {

    //Recursive function that maps given number to the range
    static getMappedNumber (input, size, nonce = 5) {
        let x = input%(size*2);
        if (x != 1 && x != 0) {
            return x;
        }

        return this.getMappedNumber(input + nonce, size);
    }

    //Creating uniuqe value for the username
    static getUniqueNumber(username, size) {
        let number = 0;
        for (let i=0; i<username.length; i++) {
            number += username[i].charCodeAt();
        }

        number = this.getMappedNumber(number, size);
        return parseInt(number);
    }
    
}