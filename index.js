// Prompt the user to enter a single character
let input = prompt('Enter a single character:');

// Check if the input is exactly one character
if (input && input.length === 1) {
    // Convert to lowercase to handle both uppercase and lowercase vowels
    let char = input.toLowerCase();
    
    // Check if the character is a letter
    if (char >= 'a' && char <= 'z') {
        // Check if it's a vowel
        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
            alert(`'${input}' is a vowel.`);
        } else {
            alert(`'${input}' is a consonant.`);
        }
    } else {
        alert('Please enter a valid letter from A-Z or a-z');
    }
} else {
    alert('Please enter exactly one character.');
}
}