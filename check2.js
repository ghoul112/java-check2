function reverse(ch){
    ph="";
    for (let i = ch.length-1; i >-1 ; i--) {
      ph=ph+ch.charAt(i);
      }
      return(ph);
  }
function calculc(ch){
    return ch.length
}
function upper(ch){
    ch=ch[0].toUpperCase+ch.substring(1,);
}
function upper(ch){
    k=ch.charAt(0).toUpperCase();
    ph=k+ch.substring(1,ch.length);
    kh=ph
    while(ph.indexOf(" ")!=-1){
     ph=(ph.charAt((ph.indexOf(" "))+1)).toUpperCase()
    }
    
 }
 function max(arr){
    max=arr[0];
    for (i=0;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i];
        }
        
    }
    return max
  }
  function min(arr){
    min=arr[0];
    for (i=0;i<arr.length;i++){
        if(arr[i]<max){
            max=arr[i];
        }
        
    }
    return min
  }
  function sum(arr){
    var s=0;
    for (i=0;i<arr.length;i++){
        s+=arr[i];
        
    }
    return s
  }
  function fact(n){
    s=n
  for (i=1;i<n;i++){
      s=s*i;
  }
  return s
}
function fibanocci(u1,u2,n){
    if(n==2){
        return u2;
    }
    else {
        return fibanocci(u2,u1+u2,n-1)
    }
    

}
function premier(n){
    var i=2;
    while(n%i!==0 && i<n/2){
        i++;}
    return n%i!==0
        

    

}
function cap(ch){
    ph=ch;
    ch=ch.charAt(0).toUpperCase()+ch.substring(1,ch.length);
    while (ph.indexOf(" ")!==-1){
        ch=ch.replace(ph.charAt(ph.indexOf(" ")+1),(ph.charAt(ph.indexOf(" ")+1)).toUpperCase());
        ph=ph.substring(ph.indexOf(" ")+1,);
        console.log(ph);
        
    }
    return ch
}
function filter(){
    arr=[
        { name :"amin" , age:33},
        { name :"mouhamed" , age:90},
        { name :"ghoul" , age:115},
    ];
    console.log(arr.filter((el)=>el.age<90));
}
