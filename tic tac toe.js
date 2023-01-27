const Grid = document.querySelectorAll('.cell');
const cells = Array.from(Grid);
let range = 0;
let condition = 1;
let condition2 = 1;


const winningCondition = [
    [cells[1] == cells[2] == cells[3] ],
    [cells[7] == cells[8] == cells[9] ],
    [cells[1] == cells[4] == cells[7] ],
    [cells[2] == cells[5] == cells[8] ],
    [cells[3] == cells[6] == cells[9] ],
    [cells[1] == cells[5] == cells[9] ],
    [cells[3] == cells[5] == cells[7] ],
]

const allEqual = arr => arr.every( v => v === (1 || 2) )

cells.forEach(index => 
{
    index.value = range;
})


function handleUpdate(e){

    condition = 1;

    this.style.background = "cyan";

    this.value = 2;
     
    while( (condition <= 1 && condition2 < 5)){
    var num = Math.floor(Math.random() * cells.length);

    if(cells[num].value == 0){

        cells[num].style.background = 'red'

        cells[num].value = 1

        condition++;
        condition2++;


    }
    }

}

    



Grid.forEach(param => (param.addEventListener('click', handleUpdate)));




























