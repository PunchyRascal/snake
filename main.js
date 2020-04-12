function Snake() {
    let body = document.getElementsByTagName('body')[0],
        arena = new Arena(),
        snake = new Snake(arena);

    function Snake(arena) {
        let headElement,
            direction = 39,
            LEFT = 37,
            RIGHT = 39,
            UP = 38,
            DOWN = 40;

        headElement = document.createElement('div')
        headElement.classList.add('snake', 'head');
        arena.element.appendChild(headElement);
        setInterval(move, 1000);
        document.addEventListener('keydown', keyPress);

        function keyPress(e) {
            if ([LEFT, RIGHT, UP, DOWN].includes(e.keyCode)) {
                direction = e.keyCode;
            }
        };

        function move() {
            let left = Number(headElement.style.left.replace('px', '')),
                top = Number(headElement.style.top.replace('px', ''));

            if (direction === RIGHT) {
                headElement.style.left = left + 20 + 'px';
            }

            if (direction === LEFT) {
                headElement.style.left = left - 20 + 'px';
            }

            if (direction === UP) {
                headElement.style.top = top - 20 + 'px';
            }

            if (direction === DOWN) {
                headElement.style.top = top + 20 + 'px';
            }
        };
    }

    function Arena() {
        this.element = document.createElement('div');
        this.element.id = 'arena';
        body.appendChild(this.element);
    }
}