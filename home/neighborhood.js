console.log('Hello World!')
const robin = document.getElementById("red")
const roadHouse = document.getElementById("texas")
const button = document.getElementById("random")
    document.addEventListener('click', (event) => {
        event.preventDefault();
        const randomNum = Math.floor(Math.random() * 2)
        if (randomNum === 0) robin.click(); 
        else if (randomNum === 1) roadHouse.click();
    });
 