function Snake() {
    let body = document.getElementsByTagName('body')[0],
        arena = new Arena(),
        snake = new Snake(arena),
        el = function (name, text) { let e = document.createElement(name); e.innerText = text; return e; };

    function Snake(arena) {
        let headElement,
            LEFT = 37,
            RIGHT = 39,
            UP = 38,
            DOWN = 40,
            direction = RIGHT,
            interval;

        console.log(arena);

        headElement = document.createElement('div')
        headElement.classList.add('snake', 'head');
        arena.element.appendChild(headElement);
        interval = setInterval(move, 1000);
        document.addEventListener('keydown', keyPress);

        function keyPress(e) {
            if ([LEFT, RIGHT, UP, DOWN].includes(e.keyCode)) {
                direction = e.keyCode;
            }
        };

        function gameOver() {
            let message = el('div');

            message.innerText = "Game over";
            message.id = 'message';
            body.appendChild(message);
            clearInterval(interval);
        }

        function move() {
            let left = Number(headElement.style.left.replace('px', '')),
                top = Number(headElement.style.top.replace('px', '')),
                newPos,
                step = 20;

            if (direction === RIGHT) {
                newPos = left + step;

                if (newPos + step > arena.element.offsetWidth) {
                    return gameOver();
                }

                headElement.style.left = newPos + 'px';
            }

            if (direction === LEFT) {
                newPos = left - step;

                console.log(newPos)

                if (newPos < 0) {
                    return gameOver();
                }

                headElement.style.left = newPos + 'px';
            }

            if (direction === UP) {
                newPos = top - step;

                if (newPos < 0) {
                    return gameOver();
                }

                headElement.style.top = newPos + 'px';
            }

            if (direction === DOWN) {
                newPos = top + step;
                if (newPos + step > arena.element.offsetHeight) {
                    return gameOver();
                }

                headElement.style.top = newPos + 'px';
            }
        };
    }

    function Arena() {
        this.element = document.createElement('div');
        this.element.id = 'arena';
        body.appendChild(this.element);
    }
}