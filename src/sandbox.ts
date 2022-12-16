import { invoice } from './classes/invoice.js'
import { payment } from './classes/payment.js'
import { hasFormatter } from './interfaces/hasFormatter.js'
import { listTemplates } from './templates/listTemplates.js';


const form = document.querySelector('.new-item-form') as HTMLFormElement;

const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

// list templates instance

const ul = document.querySelector('ul') !;
const list = new listTemplates(ul)

const clear = function () {
    type.value = ''
    toFrom.value = ''
    details.value = ''
    amount.value = ''
}

form.addEventListener('submit', (e: Event) =>{

    e.preventDefault();
    let doc : hasFormatter;
    
    let values : [string, string, number]
    values = [toFrom.value, details.value, amount.valueAsNumber]

    if(type.value === 'invoice'){ 
        doc = new invoice(...values)
        console.log(doc)
        clear()
    }else{
        doc = new payment(...values)
        console.log(doc)
        clear()
    }
    list.render(doc, type.value, 'end')
}) 