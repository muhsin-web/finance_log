import { invoice } from './classes/invoice.js';
import { payment } from './classes/payment.js';
import { listTemplates } from './templates/listTemplates.js';
const form = document.querySelector('.new-item-form');
const type = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// list templates instance
const ul = document.querySelector('ul');
const list = new listTemplates(ul);
const clear = function () {
    type.value = '';
    toFrom.value = '';
    details.value = '';
    amount.value = '';
};
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    let values;
    values = [toFrom.value, details.value, amount.valueAsNumber];
    if (type.value === 'invoice') {
        doc = new invoice(...values);
        console.log(doc);
        clear();
    }
    else {
        doc = new payment(...values);
        console.log(doc);
        clear();
    }
    list.render(doc, type.value, 'end');
});
