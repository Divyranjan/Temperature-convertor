document.getElementById("h1").textContent="Temperature Convertor";


const input=document.getElementById("input");
const far=document.getElementById("far");
const deg=document.getElementById("deg");
const result=document.getElementById("result");
let temp;

function convert()
{
    if(far.checked)
    {
        temp=Number(document.getElementById("input").value);
        temp=temp*(9/5)+32;
        result.textContent=temp.toFixed(2) +" Farhanite";
    }

    else if(deg.checked)
    {
        temp=Number(document.getElementById("input").value);
        temp=(temp-32)/1.8;
        result.textContent=temp.toFixed(2) +" Degree";

    }

    else{
        result.textContent="Select a Unit."
    }

}