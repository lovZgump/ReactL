function Stack(){
    this.dataStore = [];
    this.top = 0;
    this.push = push;
    this.pop = pop;
    this.peek = peek;
    this.clear = clear;
    this.length = length;
    this.isempty = isempty;
    //注意++操作符的位置，它放在this.top的后面，这样新入栈的元素就被放在top的当前位置对应的位置，同时top自加1，指向下一个位置
    function push(element){
        this.dataStore[this.top++] = element;
    }
    //返回栈顶元素，同时top的位置减1
    function pop(){
        //return this.dataStore[--this.top];
        let peekdata = this.dataStore[this.top-1];
        this.top--;
        return peekdata;
    }
    //peek()方法返回数组的第top-1个位置的元素，即栈顶元素
    function peek(){
        return this.dataStore[this.top-1];
    }
    //将top的值设置0，即清空一个栈
    function clear(){
        this.top = 0;
    }
    //返回变量top的值即为栈内元素的个数
    function length(){
        return this.top;
    }
    function isempty(){
        return this.top === 0;
    }
}


let operatorName = ['+','-','/','*','(',')'];
let priorValue = {};
//优先级函数
function initPrior(){
    priorValue['+'] = 100;
    priorValue['-'] = 100;
    priorValue['*'] = 200;
    priorValue['/'] = 200;
    priorValue['('] = 1000;
    priorValue[')'] = 0;
}

//判断是否为操作符
function isOperator(data,priorarr){
    let rev = false;
    priorarr.forEach(element => {
        if(data === element){
            rev = true;
        }
    });
    return rev;
}


//中缀转后缀
function suffixExpression(str){
    initPrior();

    let strarr = str.split(" ");
    var stack = new Stack();
    var outStack = [];
    while(strarr.length!==0){
        if(strarr[0]===''){
            strarr.shift();
            continue;
        } else if(!isOperator(strarr[0],operatorName)){
            outStack.push(strarr[0])
        } else{
            if(strarr[0]==='('){
                stack.push(strarr[0])
            } else if(strarr[0]===')'){
                while(stack.peek()!=='('){
                    outStack.push(stack.pop());
                }
                stack.pop()
            } else{
                if(stack.isempty()){
                    stack.push(strarr[0]);
                } else{
                    if(priorValue[strarr[0]] > priorValue[stack.peek()]){
                        stack.push(strarr[0]);
                    } else{
                        while(!stack.isempty()&&priorValue[stack.peek()]>=priorValue[strarr[0]]&&stack.peek()!=='('){
                            outStack.push(stack.pop());
                        }
                        stack.push(strarr[0]);
                    }
                }
            }
        }
        strarr.shift();
    }

    while(!stack.isempty()){
        outStack.push(stack.pop());
    }
    let revData = countSuffixExpression(outStack);
    return revData;
}

function countSuffixExpression(revarr){
    let stack =  new Stack();
    while(revarr.length!==0){

        if(!isOperator(revarr[0],operatorName)){
            stack.push(revarr[0]);
        } else{
            let topdata = stack.pop();
            let followdata = stack.peek();
            let result = 0;
            switch (revarr[0]) {
                case '+':
                    result = Number(followdata) + Number(topdata);break;
                case '-':
                    result = Number(followdata) - Number(topdata);break;
                case '*':
                    result = Number(followdata) * Number(topdata);break;
                case '/':
                    result = Number(followdata) / Number(topdata);break;
                default:
                    return revarr[0];
            }
            stack.pop();
            stack.push(result);
        }
        revarr.shift();
    }
    let resultData = stack.pop();
    if(isNaN(resultData)) resultData = '错误';
    if(resultData === Infinity) resultData = '无穷';
    return resultData;
}


export default suffixExpression;