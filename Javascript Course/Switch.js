var num = '30'

switch(num) {
    case 30:
        console.log(typeof num);
        break;
    case '30':
        console.log(typeof num);
        break;
    default:
        console.log('No case accurate');
}
