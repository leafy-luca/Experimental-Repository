

var apiKey = 'b3d5886099de4c38b9c112125242904';

function atualizaInformacoesCard(event)
{
   let respostaJSON = JSON.parse(this.responseText);
   let cidadeNome = respostaJSON.location.name;
   let cidadeCard = document.getElementById(cidadeNome+"Card");
  
   let temp = cidadeCard.querySelector('.temp');
   temp.innerHTML = respostaJSON.current.temp_c + '&deg;';
  
   let condicao = cidadeCard.querySelector('.condition');
   condicao.innerHTML = '<span>Clima</span><span>'+ respostaJSON.current.condition.text +'</span>';
  
   let sense = cidadeCard.querySelector('.sensacao');
   sense.innerHTML = '<span>Sensação Témica</span><span>'+ respostaJSON.current.feelslike_c +'</span>';
}


function atualizaCard(nomeCidade,chaveAPI)
{
    let req = new XMLHttpRequest();
    req.addEventListener('load', atualizaInformacoesCard);
    req.open("GET", "http://api.weatherapi.com/v1/current.json?key="+chaveAPI+"&q="+nomeCidade+"&aqi=no&lang=pt");
    req.send();
}


function iniciaPagina()
{
    let cards = document.getElementsByClassName('cityName')
            for (let i = 0;i < cards.length; i +=1)
            {
             atualizaCard(cards[i].innerHTML,apiKey); 
            }
}
