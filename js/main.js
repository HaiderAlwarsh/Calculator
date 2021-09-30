const buttCon = document.getElementById('buttons-container');
const input = document.getElementById('input');

input.textContent = "0";

    // add event listener
buttCon.addEventListener ('click', (e)  => {

    // check if input is 0, if i write anything will delete it
    if(input.textContent === '0'){
        input.textContent = " ";
    }

    if(e.currentTarget === e.target) return;

    const target = e.target.getAttribute('value');

        // Press on equal button
    if(e.target.classList.contains('equal')){
        try{
            // will check if input is 0, if it's not 0 will put 0
            if(input.textContent === ' '){
                input.textContent = "0";
            }

            input.textContent = eval(input.textContent);

        }catch(e){
            return;
        }

        // Press on All clear button
    }else if (e.target.classList.contains('ac')){
        input.textContent = '0';

         // Press on delete button
    }else if(e.target.classList.contains('delete')){
        
        input.textContent = input.textContent.slice(0, -1);
        
    } else{
        input.textContent += target;
    }
})