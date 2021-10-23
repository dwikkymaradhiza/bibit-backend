# Refactor the Code

Before :
```javascript
function findFirstStringInBracket(str) {
    if(str.length > 0) {
        let indexFirstBracketFound = str.indexOf("(");
        if (indexFirstBracketFound >= 0) {
            let wordsAfterFirstBracket = str.substr(indexFirstBracketFound);
            if(wordsAfterFirstBracket) {
                wordsAfterFirstBracket = wordsAfterFirstBracket.substr(1);
                let indexClosingBracketFound = wordsAfterFirstBracket.indexOf(")");
                if(indexClosingBracketFound >= 0) {
                    return wordsAfterFirstBracket.substring(0, indexClosingBracketFound);
                }
                else {
                    return '';
                }
            } else {
                return '';
            }
        } else {
            return '';
        }
    } else {
        return '';
    }
}
```

After :
```javascript
function findFirstStringInBracket(str) {
    // If not string OR string length < 1, return empty string
    if (!str || str.length < 1) {
        return '';
    }

    // Find words after opening bracket, if not found return empty string
    const indexFirstBracketFound = str.indexOf('(');
    if (indexFirstBracketFound < 0) {
        return '';
    }
    
    // Find words after first bracket, if not found return empty string
    let wordsAfterFirstBracket = str.substr(indexFirstBracketFound);
    if (!wordsAfterFirstBracket) {
        return '';
    }

    // Find closing bracket, if not found return empty string
    wordsAfterFirstBracket = wordsAfterFirstBracket.substr(1);
    const indexClosingBracketFound = wordsAfterFirstBracket.indexOf(')');
    if (indexClosingBracketFound < 0) {
        return '';
    }

    return wordsAfterFirstBracket.substring(0, indexClosingBracketFound);
}
```