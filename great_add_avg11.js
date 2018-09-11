
let rama=function (a,b,c,d,e){
   let sum;
   
    if(a>b && a>c && a>d && a>e)
{
    console.log('the max number is:'+a);
    }
    else if(b>a && b>c && b>d && b>e)
    {
        console.log(+b);
    }
    else if(c>a && c>b && c>d && c>e)
{console.log(+c);
}
else if(d>a && d>b && d>c && d>e)
{console.log(+d);
}
else 
{console.log(+e);
}
sum=a+b+c+d+e;
console.log('the sum is:'+sum);

}
rama(2,3,4,5,6);