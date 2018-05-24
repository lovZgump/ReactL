let operatorName = ['+','-','/','*','(',')'];

function isOperator(data,priorarr){
    let rev = false;
    priorarr.forEach(element => {
        if(data === element){
            rev = true;
        }
    });
    return rev;
}

const getSpValue =(str)=>{
    let newArr = [];
    let newStr = '';
    let strArr = str.split(' ');
    strArr.forEach(ele=>{
        if(!isOperator(ele,operatorName)&&ele!==''){
            let n = Number(ele);
            if(isNaN(n)){
            }
        }
        newArr.push(ele);
    })
    newStr = newArr.join(' ');
    return newStr;
}




export default getSpValue;