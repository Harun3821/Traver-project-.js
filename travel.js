const allbtn = document.getElementsByClassName("btn-Add");
let count = 0;
let cost = 4;

for(const btn of allbtn){
    btn.addEventListener('click', function(e){
    count = count + 1;
    SetinnerText("card-count", count);
    if(count + 1 > 5){
      alert("limit cores")
      return;
    }
     
    cost = cost - 1;
    SetinnerText("total-cost", cost);

  


         

      const plesName = e.target.parentNode.childNodes[1].innerText;
      const price = e.target.parentNode.childNodes[3].childNodes[1].innerText;
      e.target.parentNode.childNodes[5].style.backgroundColor = "#fff000";
      e.target.setAttribute("disabled", false)

      
 
     

      const SelectcontinerText = document.getElementById("Select-continer");
      const div = document.createElement("div");
      const p = document.createElement("p");
      p.innerText = plesName;
      const p2 = document.createElement("p")
      p2.innerText = price;
      div.appendChild(p)
      div.appendChild(p2)
      SelectcontinerText.appendChild(div);
      div.style.display = "flex";
      div.style.gap = '6px'


      const totalBught = document.getElementById("total-bught").innerText;
      const connvatBught = parseInt(totalBught);
   
      if(connvatBught - parseInt(price)<0 ){
        alert("low buget pleass unmore")
        return;
      }
      document.getElementById("total-bught").innerText = connvatBught - parseInt(price);

  //  const totalPrce = document.getElementById("total-price").innerText;
  //  const connvatPrice = parseInt(totalPrce);
  // //  document.getElementById("total-price").innerText = connvatPrice + parseInt(price);
  //  const sum = connvatPrice + parseInt(price);
  //  SetinnerText("total-price", sum);

      totalPrice("total-price", parseInt(price));
    //  GranTotalPrice("Gran-Total", parseInt(price));

  //  const GranTotal = document.getElementById("Gran-Total").innerText;
  //  const connvatValue = parseInt(GranTotal);
  //  const sum2 = connvatValue + parseInt(price);
  //  document.getElementById("Gran-Total").innerText = connvatValue + parseInt(price);
  //  SetinnerText("Gran-Total", sum2);

})
}


function  totalPrice(id, value){
 const totalCost = document.getElementById(id).innerText;
 const connvatPrice =  parseInt(totalCost);
  const sum = connvatPrice + parseInt(value);
  SetinnerText("total-price", sum);

}


 
 function GranTotalPrice(catagorey){
  const totalPrce = document.getElementById("total-price").innerText;
  const connvatPrice = parseInt(totalPrce);
   if(catagorey == "bus"){
   SetinnerText("Gran-Total", connvatPrice + 100);
  }
  else if (catagorey == "train"){
    SetinnerText("Gran-Total", connvatPrice - 200);
  }
  if (catagorey == "flight"){
    SetinnerText("Gran-Total", connvatPrice + 500);
  }
}








function SetinnerText(id, value){
  document.getElementById(id).innerText = value;
  }






