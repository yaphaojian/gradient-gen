/*
let a = ['xiaomi', 'samsung', 'apple' ];

for (b = 0; b < a.length; b++){
    console.log(a[b]);
}
*/

//6 * 19

/*
let mul = 1, num = 6, res;
while (mul < 12){
    mul++;
    num = num+6;   

}
console.log(num);
*/
/*
for(index=0; index < 10; index ++){
    console.log(index);
}
*/

/*
let index = 0;
while(index < 10){
    console.log(index);
    index++;
}
*/
/*
let counter = 0;
function timer(){
    setTimeout(function(){
        if(counter < 10){
        counter++;
        console.log(counter);
        timer();
        }
        else console.log('time out!');
    }, 1000);};


timer();
*/

let timer = (function(){
    let count = 0;

    function print(){
        console.log(count);
    }
    
    return {
        set: function(value){
            value=count;
        },
        timer10Sec: function(){
            setTimeout(function(){
                if (count < 10){
                count += 1;
                print();
                timer.timer10Sec();
                }
                else console.log('Time out!'),
                1000
            })
        }
    }

})()

timer.set(0);
timer.timer10Sec();