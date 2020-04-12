export function onBlur(el) {
 if(!el.value){
     el.classList.add('invalid');
     return false;
 } else {
     el.classList.remove('invalid');
     el.classList.add('valid');
     return true;
}

}

