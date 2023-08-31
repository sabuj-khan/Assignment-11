function multiplicationTable(num) {
    for (let i = 1; i <= 10; i++) {
        const product = num * i;
        console.log(`${num} x ${i} = ${product}`);
        const output = document.getElementById("output");
        output.textContent += `${num} x ${i} = ${product}\n`;
    }
}


multiplicationTable(15); 
