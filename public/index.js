
document.addEventListener("DOMContentLoaded", function() {
    const generateButton = document.querySelector("button");
    generateButton.addEventListener("click", function() {
        const lengthInput = document.getElementById("length").value;
        const includeLowercase = document.getElementById("lowerCase").checked;
        const includeUppercase = document.getElementById("upperCase").checked;
        const includeNumbers = document.getElementById("numbers").checked;
        const includeSymbols = document.getElementById("symbols").checked;
        const password = passwordGenerator(lengthInput, includeLowercase, includeUppercase, includeNumbers, includeSymbols);

        const result = document.getElementById("result");
        result.textContent = password;
        result.style.whiteSpace = "pre-line";

        const copyButton = document.getElementById("copyButton");
        copyButton.style.display = "inline";
    });
});



function passwordGenerator(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols) {
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "1234567890";
    const symbolChars = "!@#$%^&*()_+";
    let allowedChars = "";
    let password = "";

    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeUppercase ? uppercaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars : "";

    if (length <= 0) {
        return`(Password length must be at least 1)`;
    }
    if (allowedChars.length === 0) {
        return `(At least 1 set of characters needs to be selected!)`;
    }

    for (let i = 0; i < length; i++) {
        const index = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[index];
    }

    const chunkSize = 20;
    const chunkedPassword = password.match(new RegExp('.{1,' + chunkSize + '}', 'g')).join('\n');
    return chunkedPassword;
}

function copyPassword() {
    const result = document.getElementById("result");
    const password = result.textContent;

    // const textarea = document.createElement("textarea");
    // textarea.value = password;
    // document.body.appendChild(textarea);

    // textarea.select();
    // try {
    //     document.execCommand("copy");
    //     alert("password copied to chipboard!");
    // } catch (error) {
    //     console.error("Failed to copy password:", error);
    //     alert("Failed to copy password. Please try again!");
    // } finally {
    //     document.body.removeChild(textarea);
    // }

    navigator.clipboard.writeText(password)
    .then(() => {
        alert("Password copied to clipboard!");
    })
    .catch((error) => {
        console.error("Failed to copy password!", error);
        alert("Failed to copy password, please try again.");
    });
}