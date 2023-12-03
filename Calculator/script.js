var ans ,str
var count = 0
function operator(value)
{
    document.getElementById('inputbox').value+=value
}
function deletescreen()
{
    document.getElementById('inputbox').value=''
    str = '';
    count=0;
}
function output()
{
    try
    {
     ans = document.getElementById('inputbox').value=eval(document.getElementById('inputbox').value)
    }
    catch(error)
    {
        document.getElementById('inputbox').value='Error'
    }
}
function delonebyone()
{
    var x = document.getElementById('inputbox').value
    document.getElementById('inputbox').value=x.slice(0,-1)
}
function memory()
{
    /*alert("hii")*/
    if(count%2==0){
     str = ans
    count++
    }
    else
    {
        //document.getElementById('inputbox').value='';
        //console.log(str)
        document.getElementById('inputbox').value=str;
    }
}