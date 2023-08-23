//Recursion

function show()
{
 console.log('Hi');
}

show();


let num=1;
function shows()
{
 console.log('Hey ',num);
 num++;

  if(num<=10350)
  shows();
}

shows();