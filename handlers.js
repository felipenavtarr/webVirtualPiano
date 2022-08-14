const keycode_path_map = {
    "KeyA": "./audio/white_keys/A.mp3",
    "KeyS": "./audio/white_keys/S.mp3",
    "KeyD": "./audio/white_keys/D.mp3",
    "KeyF": "./audio/white_keys/F.mp3",
    "KeyG": "./audio/white_keys/G.mp3",
    "KeyH": "./audio/white_keys/H.mp3",
    "KeyJ": "./audio/white_keys/J.mp3",
    "KeyE": "./audio/black_keys/E.mp3",
    "KeyT": "./audio/black_keys/T.mp3",
    "KeyU": "./audio/black_keys/U.mp3",
    "KeyW": "./audio/black_keys/W.mp3",
    "KeyY": "./audio/black_keys/Y.mp3",
}

document.addEventListener("keydown", (event) => {
    event.code in keycode_path_map ?
        new Audio(keycode_path_map[event.code]).play()
    :
        console.log('Invalid key pressed: only A, S, D, F, G, H, J, E, T, U, W, Y');
});
