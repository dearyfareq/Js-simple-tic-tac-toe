const text = document.querySelector('h1')
const Grid = document.querySelectorAll('.cell');
const cells = Array.from(Grid);
let range = 1;
let condition = 1;
let condition2 = 1;

cells.forEach(index => 
    {
        index.value = 1;
    })

const winningCondition = [
    [cells[0].value == cells[1].value == cells[2].value ],
    [cells[3].value == cells[4].value == cells[5].value ],
    [cells[6].value == cells[7].value == cells[8].value ],
    [cells[0].value == cells[3].value == cells[6].value ],
    [cells[1].value == cells[4].value == cells[7].value ],
    [cells[2].value == cells[5].value == cells[8].value ],
    [cells[2].value == cells[4].value == cells[6].value ],
    [cells[0].value == cells[4].value == cells[8].value ]
]

function handleUpdate(){

    condition = 1;

    this.style.background = "cyan";

    this.value = 2;

     
    while( (condition <= 1 && condition2 < 5)){
    var num = Math.floor(Math.random() * cells.length);


    if(cells[num].value == 1){

        cells[num].style.background = 'red'

        cells[num].value = 3

        condition++;
        condition2++;


    }
    }

    
if( cells[0].value  == 2 && cells[1].value  == 2 && cells[2].value  == 2 ){youwin()}
else if( cells[3].value  == 2 && cells[4].value  == 2 && cells[5].value  == 2 ){youwin()}
else if( cells[6].value  == 2 && cells[7].value  == 2 && cells[8].value  == 2 ){youwin()}
else if( cells[0].value  == 2 && cells[3].value  == 2 && cells[6].value  == 2 ){youwin()}
else if( cells[1].value  == 2 && cells[4].value  == 2 && cells[7].value  == 2 ){youwin()}
else if( cells[2].value  == 2 && cells[5].value  == 2 && cells[8].value  == 2 ){youwin()}
else if( cells[0].value  == 2 && cells[4].value  == 2 && cells[8].value  == 2 ){youwin()}
else if( cells[2].value  == 2 && cells[4].value  == 2 && cells[6].value  == 2 ){youwin()}

if( cells[0].value  == 3 && cells[1].value  == 3 && cells[2].value  == 3 ){youlost()}
else if( cells[3].value  == 3 && cells[4].value  == 3 && cells[5].value  == 3 ){youlost()}
else if( cells[6].value  == 3 && cells[7].value  == 3 && cells[8].value  == 3 ){youlost()}
else if( cells[0].value  == 3 && cells[3].value  == 3 && cells[6].value  == 3 ){youlost()}
else if( cells[1].value  == 3 && cells[4].value  == 3 && cells[7].value  == 3 ){youlost()}
else if( cells[2].value  == 3 && cells[5].value  == 3 && cells[8].value  == 3 ){youlost()}
else if( cells[0].value  == 3 && cells[4].value  == 3 && cells[8].value  == 3 ){youlost()}
else if( cells[2].value  == 3 && cells[4].value  == 3 && cells[6].value  == 3 ){youlost()}


}

function youwin(){
    text.classList.add('active');
}   

function youlost(){
    text.innerHTML = 'you lost!'
    text.classList.add('active');
}   



Grid.forEach(param => (param.addEventListener('click', handleUpdate, {once : true})));




























