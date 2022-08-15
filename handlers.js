const key_path_map = {
    "a": "./audio/white_keys/A.mp3",
    "s": "./audio/white_keys/S.mp3",
    "d": "./audio/white_keys/D.mp3",
    "f": "./audio/white_keys/F.mp3",
    "g": "./audio/white_keys/G.mp3",
    "h": "./audio/white_keys/H.mp3",
    "j": "./audio/white_keys/J.mp3",
    "e": "./audio/black_keys/E.mp3",
    "t": "./audio/black_keys/T.mp3",
    "u": "./audio/black_keys/U.mp3",
    "w": "./audio/black_keys/W.mp3",
    "y": "./audio/black_keys/Y.mp3",
}

const keys = document.getElementsByTagName('kbd');
let piano_key_pressed = undefined;

document.addEventListener("keydown", (event) => {
    let key_pressed = event.key.toLowerCase();
    if (key_pressed in key_path_map) {
        new Audio(key_path_map[key_pressed]).play();
        // change key background color
        for (let kbd of keys) {
            if (key_pressed === kbd.innerHTML) {
                piano_key_pressed = kbd;
                kbd.style.backgroundColor = 'blue';
                break;
            }
        }
    } else {
        console.log('Invalid key pressed: only A, S, D, F, G, H, J, E, T, U, W, Y');
    }
});

// turn to original color when the key is released
document.addEventListener("keyup", (event) => {
    if (event.key.toLowerCase() in key_path_map) {
        piano_key_pressed.closest('.black-keys') ?
            piano_key_pressed.style.backgroundColor = '#1d1e22'
        :
            piano_key_pressed.style.backgroundColor = 'white';
    }
});
