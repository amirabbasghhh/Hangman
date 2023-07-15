let gess=document.getElementById('gess')
let desc=document.getElementById('desc')
let mistake=0;
const ax=document.getElementById('ax')
let secretwords=['amirali','bahar','hamid','bahram','ali','amirabbas','sara','mahsa','mina','reza','shabnam']
function randomchoose(){
    let rand=Math.floor((Math.random())*secretwords.length)
    let randomword=secretwords[rand]
    return randomword
}
let a=randomchoose()
let gesss=[]
for (let i=0;i<a.length;i++){
    gesss.push('_')
}
gess.innerHTML=gesss.join(' ')
const button=document.querySelectorAll('#key')
for(var j=0;j<button.length;j++){
    button[j].addEventListener('click',handler)

}
function handler(e){
    e.target.className='used'
    let b=e.target.innerHTML.toLocaleLowerCase()
    if(a.includes(b)){
        for(var i=0;i<10;i++){
            if(a[i]==b){
                gesss[i]=b
                gess.innerHTML=gesss.join(' ')
                
            }
            console.log(gess.innerHTML)
            for(let item of secretwords){
                if(item==gess.innerHTML.split(" ").join("")){
                    ax.src='./images/winner.png';
                    desc.innerText='Congragulation .You win the game';
                     
                }
            }
        }}

    else{
        mistake++;
        if(mistake==1){ax.src='./images/hangman1.png'}
        else if(mistake==2){ax.src='./images/hangman2.png'}
        else if(mistake==3){ax.src='./images/hangman3.png'}
        else if(mistake==4){ax.src='./images/hangman4.png'}
        else if(mistake==5){ax.src='./images/hangman5.png'}
        else if(mistake==6){
            ax.src='./images/hangman6.png'
            desc.innerText='Game  Over'
            gess.innerHTML=`Random Word is :${a}`
        
        }
    }
}
