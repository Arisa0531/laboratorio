const board = document.querySelector('.board');
const boardSize = 4;
const boardWidth = 100 * boardSize;
const tiles = Array.from({ length: boardSize * boardSize }, (_, i) => i + 1);
let emptyTileIndex = tiles.length - 1;

function renderBoard() {
    board.innerHTML = '';
    tiles.forEach((tile, i) => {
        const tileElement = document.createElement('div');
        tileElement.classList.add('tile');
        tileElement.textContent = tile;
        tileElement.style.gridArea = `${Math.floor(i / boardSize) + 1} / ${(i % boardSize) + 1}`;
        tileElement.addEventListener('click', () => handleTileClick(i));
        board.appendChild(tileElement);
    });
}

function isValidMove(move) {
    return (
        move === emptyTileIndex - 1 ||
        move === emptyTileIndex + 1 ||
        move === emptyTileIndex - boardSize ||
        move === emptyTileIndex + boardSize
    );
}

function handleTileClick(clickedTileIndex) {
    if (isValidMove(clickedTileIndex)) {
        tiles[emptyTileIndex] = tiles[clickedTileIndex];
        tiles[clickedTileIndex] = 0;
        emptyTileIndex = clickedTileIndex;
        renderBoard();

        if (isPuzzleSolved()) {
            alert('¡Felicidades, has resuelto el rompecabezas!');
        }
    }
}

function isPuzzleSolved() {
    return tiles.every((tile, index) => (tile === 0) || (tile === index + 1));
}

function shufflePuzzle() {
    for (let i = 0; i < 1000; i++) {
        const possibleMoves = [
            emptyTileIndex - 1,
            emptyTileIndex + 1,
            emptyTileIndex - boardSize,
            emptyTileIndex + boardSize
        ].filter(move => move >= 0 && move < tiles.length);

        const randomMove = possibleMoves[Math.floor(Math.random() * possibleMoves.length)];
        tiles[emptyTileIndex] = tiles[randomMove];
        tiles[randomMove] = 0;
        emptyTileIndex = randomMove;
    }
    renderBoard();
}

function setupBoard() {
    board.style.width = boardWidth + 'px';
    shufflePuzzle();
    renderBoard();

    const shuffleButton = document.getElementById('shuffle-button');
    shuffleButton.addEventListener('click', shufflePuzzle);
}

setupBoard();
