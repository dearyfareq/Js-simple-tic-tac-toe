const Grid = document.querySelectorAll('.cell');
const cells = Array.from(Grid);
let range = 1;
cells.forEach(index => 
{
    index.value = range;
    range++;

})
//console.table(cells);

function handleUpdate(e){

    this.style.background = "cyan"

    this.value = 69

    cells.splice(cells.indexOf(69), 1);


    
    var num = Math.floor(Math.random() * cells.length);

    if(cells[num].value !== 69 ){cells[num].innerHTML = 'red'}

    cells.splice(num, 1);

    console.table(cells)
        
        


}

    



Grid.forEach(param => (param.addEventListener('click', handleUpdate)));




























