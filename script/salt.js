// Very quick file, is just meant to give us a salt when a salt doesn't really exist. Theoretically should check for this on-startup

function genSalt() {
    // Using the slow secure function, and then cherry-picking with the fast insecure function, all so we can make a salt.
    return window.crypto.getRandomValues(new Uint32Array(10))[Math.floor(Math.random() * 10)];
}

if (!localStorage.getItem('salt')) {
    console.log('No salt found, generating...');
    localStorage.setItem('salt', genSalt());
} else {
    console.log('Salt exists, do not need to generate...');
}