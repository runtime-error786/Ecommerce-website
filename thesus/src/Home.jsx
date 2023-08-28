import React from "react";
import './index.css';

let count=0;
function HJ()
{
    
    let INC = function()
    {
        document.getElementById('O1').innerHTML="";
        document.getElementById('O2').innerHTML="";
        document.getElementById('O3').innerHTML="";
        count = count + 1;
        if(count==5)
        {
            count=0;
        }
        if(count==1)
        {
            document.getElementById('O1').innerHTML = `
            <img src='./pe2.jpg' class='card-img-top' width="3%" height="200px" style={{borderRadius:"10px"}} alt=''/>
            <div class='card-body'>
                <h5 class='card-title'>Rizwan Riaz</h5>
                <p class='card-text'>I can surely that their teachings got me out of many troubles. Sometimes I got really puzzled when I fell my account was not working in a proper way. Angvo sorted out my problems and briefed me the better ways of proceedings.</p>
            </div>
        `;
        
        document.getElementById('O2').innerHTML= `
        <img src='./pe3.jpg' class='card-img-top' width="3%" height="200px" style={{borderRadius:"10px"}} alt=''/>
        <div class='card-body'>
            <h5 class='card-title'>Hamza Iftikhar</h5>
            <p class='card-text'>I can surely that their teachings got me out of many troubles. Sometimes I got really puzzled when I fell my account was not working in a proper way. Angvo sorted out my problems and briefed me the better ways of proceedings.</p>
        </div>
    `;
        document.getElementById('O3').innerHTML= `
        <img src='./pe4.jpg' class='card-img-top' width="3%" height="200px" style={{borderRadius:"10px"}}  alt=''/>
        <div class='card-body'>
            <h5 class='card-title'>Faizan Zahid</h5>
            <p class='card-text'>I can surely that their teachings got me out of many troubles. Sometimes I got really puzzled when I fell my account was not working in a proper way. Angvo sorted out my problems and briefed me the better ways of proceedings.</p>
        </div>
    `;
        }
        else if(count==2)
        {
            document.getElementById('O1').innerHTML = `
            <img src='./pe3.jpg' class='card-img-top' width="3%" height="200px" style={{borderRadius:"10px"}} alt=''/>
            <div class='card-body'>
                <h5 class='card-title'>Hamza Iftikhar</h5>
                <p class='card-text'>I can surely that their teachings got me out of many troubles. Sometimes I got really puzzled when I fell my account was not working in a proper way. Angvo sorted out my problems and briefed me the better ways of proceedings.</p>
            </div>
        `;
        
        document.getElementById('O2').innerHTML= `
        <img src='./pe4.jpg' class='card-img-top' width="3%" height="200px" style={{borderRadius:"10px"}} alt=''/>
        <div class='card-body'>
            <h5 class='card-title'>Faizan Zahid</h5>
            <p class='card-text'>I can surely that their teachings got me out of many troubles. Sometimes I got really puzzled when I fell my account was not working in a proper way. Angvo sorted out my problems and briefed me the better ways of proceedings.</p>
        </div>
    `;
        document.getElementById('O3').innerHTML= `
        <img src='./pe5.jpg' class='card-img-top' width="3%" height="200px" style={{borderRadius:"10px"}} alt=''/>
        <div class='card-body'>
            <h5 class='card-title'>TATA</h5>
            <p class='card-text'>I can surely that their teachings got me out of many troubles. Sometimes I got really puzzled when I fell my account was not working in a proper way. Angvo sorted out my problems and briefed me the better ways of proceedings.</p>
        </div>
    `;

        }
        else if(count==3)
        {
            document.getElementById('O1').innerHTML = `
            <img src='./pe4.jpg' class='card-img-top'  width="3%" height="200px" style={{borderRadius:"10px"}} alt=''/>
            <div class='card-body'>
                <h5 class='card-title'>Faizan Zahid</h5>
                <p class='card-text'>I can surely that their teachings got me out of many troubles. Sometimes I got really puzzled when I fell my account was not working in a proper way. Angvo sorted out my problems and briefed me the better ways of proceedings.</p>
            </div>
        `;
        
        document.getElementById('O2').innerHTML= `
        <img src='./pe5.jpg' class='card-img-top' width="3%" height="200px" style={{borderRadius:"10px"}} alt=''/>
        <div class='card-body'>
            <h5 class='card-title'>TATA</h5>
            <p class='card-text'>I can surely that their teachings got me out of many troubles. Sometimes I got really puzzled when I fell my account was not working in a proper way. Angvo sorted out my problems and briefed me the better ways of proceedings.</p>
        </div>
    `;
        document.getElementById('O3').innerHTML= `
        <img src='./pe1.jpg' class='card-img-top' width="3%" height="200px" style={{borderRadius:"10px"}} alt=''/>
        <div class='card-body'>
            <h5 class='card-title'>Mustafa Rizwan</h5>
            <p class='card-text'>I can surely that their teachings got me out of many troubles. Sometimes I got really puzzled when I fell my account was not working in a proper way. Angvo sorted out my problems and briefed me the better ways of proceedings.</p>
        </div>
    `;

        }
        else if(count==4)
        {
            document.getElementById('O1').innerHTML = `
            <img src='./pe5.jpg' class='card-img-top' width="3%" height="200px" style={{borderRadius:"10px"}}  alt=''/>
            <div class='card-body'>
                <h5 class='card-title'>TATA</h5>
                <p class='card-text'>I can surely that their teachings got me out of many troubles. Sometimes I got really puzzled when I fell my account was not working in a proper way. Angvo sorted out my problems and briefed me the better ways of proceedings.</p>
            </div>
        `;
        
        document.getElementById('O2').innerHTML= `
        <img src='./pe1.jpg' class='card-img-top' width="3%" height="200px" style={{borderRadius:"10px"}} alt=''/>
        <div class='card-body'>
            <h5 class='card-title'>Mustafa Rizwan</h5>
            <p class='card-text'>I can surely that their teachings got me out of many troubles. Sometimes I got really puzzled when I fell my account was not working in a proper way. Angvo sorted out my problems and briefed me the better ways of proceedings.</p>
        </div>
    `;
        document.getElementById('O3').innerHTML= `
        <img src='./pe2.jpg' class='card-img-top' width="3%" height="200px" style={{borderRadius:"10px"}} alt=''/>
        <div class='card-body'>
            <h5 class='card-title'>Rizwan Riaz</h5>
            <p class='card-text'>I can surely that their teachings got me out of many troubles. Sometimes I got really puzzled when I fell my account was not working in a proper way. Angvo sorted out my problems and briefed me the better ways of proceedings.</p>
        </div>
    `;

        }
        
        else{
            document.getElementById('O1').innerHTML = `
            <img src='./pe1.jpg' class='card-img-top' width="3%" height="200px" style={{borderRadius:"10px"}} alt=''/>
            <div class='card-body'>
                <h5 class='card-title'>Mustafa Rizwan</h5>
                <p class='card-text'>I can surely that their teachings got me out of many troubles. Sometimes I got really puzzled when I fell my account was not working in a proper way. Angvo sorted out my problems and briefed me the better ways of proceedings.</p>
            </div>
        `;
        
        document.getElementById('O2').innerHTML= `
        <img src='./pe2.jpg' class='card-img-top' width="3%" height="200px" style={{borderRadius:"10px"}} alt=''/>
        <div class='card-body'>
            <h5 class='card-title'>Rizwan Riaz</h5>
            <p class='card-text'>I can surely that their teachings got me out of many troubles. Sometimes I got really puzzled when I fell my account was not working in a proper way. Angvo sorted out my problems and briefed me the better ways of proceedings.</p>
        </div>
    `;
        document.getElementById('O3').innerHTML= `
        <img src='./pe3.jpg' class='card-img-top' width="3%" height="200px" style={{borderRadius:"10px"}} alt=''/>
        <div class='card-body'>
            <h5 class='card-title'>Hamza Iftikhar</h5>
            <p class='card-text'>I can surely that their teachings got me out of many troubles. Sometimes I got really puzzled when I fell my account was not working in a proper way. Angvo sorted out my problems and briefed me the better ways of proceedings.</p>
        </div>
    `;
        }
    }

    let DEC = function()
    {
        document.getElementById('O1').innerHTML="";
        document.getElementById('O2').innerHTML="";
        document.getElementById('O3').innerHTML="";
        count = count - 1;
        if(count<0)
        {
            count=4;
        }
        if(count==1)
        {
            document.getElementById('O1').innerHTML = `
            <img src='./pe2.jpg' class='card-img-top' width="3%" height="200px" style={{borderRadius:"10px"}}  alt=''/>
            <div class='card-body'>
                <h5 class='card-title'>Rizwan Riaz</h5>
                <p class='card-text'>I can surely that their teachings got me out of many troubles. Sometimes I got really puzzled when I fell my account was not working in a proper way. Angvo sorted out my problems and briefed me the better ways of proceedings.</p>
            </div>
        `;
        
        document.getElementById('O2').innerHTML= `
        <img src='./pe3.jpg' class='card-img-top' width="3%" height="200px" style={{borderRadius:"10px"}} alt=''/>
        <div class='card-body'>
            <h5 class='card-title'>Hamza Iftikhar</h5>
            <p class='card-text'>I can surely that their teachings got me out of many troubles. Sometimes I got really puzzled when I fell my account was not working in a proper way. Angvo sorted out my problems and briefed me the better ways of proceedings.</p>
        </div>
    `;
        document.getElementById('O3').innerHTML= `
        <img src='./pe4.jpg' class='card-img-top' width="3%" height="200px" style={{borderRadius:"10px"}}  alt=''/>
        <div class='card-body'>
            <h5 class='card-title'>Faizan Zahid</h5>
            <p class='card-text'>I can surely that their teachings got me out of many troubles. Sometimes I got really puzzled when I fell my account was not working in a proper way. Angvo sorted out my problems and briefed me the better ways of proceedings.</p>
        </div>
    `;
        }
        else if(count==2)
        {
            document.getElementById('O1').innerHTML = `
            <img src='./pe3.jpg' class='card-img-top' width="3%" height="200px" style={{borderRadius:"10px"}} alt=''/>
            <div class='card-body'>
                <h5 class='card-title'>Hamza Iftikhar</h5>
                <p class='card-text'>I can surely that their teachings got me out of many troubles. Sometimes I got really puzzled when I fell my account was not working in a proper way. Angvo sorted out my problems and briefed me the better ways of proceedings.</p>
            </div>
        `;
        
        document.getElementById('O2').innerHTML= `
        <img src='./pe4.jpg' class='card-img-top' width="3%" height="200px" style={{borderRadius:"10px"}} alt=''/>
        <div class='card-body'>
            <h5 class='card-title'>Faizan Zahid</h5>
            <p class='card-text'>I can surely that their teachings got me out of many troubles. Sometimes I got really puzzled when I fell my account was not working in a proper way. Angvo sorted out my problems and briefed me the better ways of proceedings.</p>
        </div>
    `;
        document.getElementById('O3').innerHTML= `
        <img src='./pe5.jpg' class='card-img-top' width="3%" height="200px" style={{borderRadius:"10px"}} alt=''/>
        <div class='card-body'>
            <h5 class='card-title'>TATA</h5>
            <p class='card-text'>I can surely that their teachings got me out of many troubles. Sometimes I got really puzzled when I fell my account was not working in a proper way. Angvo sorted out my problems and briefed me the better ways of proceedings.</p>
        </div>
    `;

        }
        else if(count==3)
        {
            document.getElementById('O1').innerHTML = `
            <img src='./pe4.jpg' class='card-img-top'  width="3%" height="200px" style={{borderRadius:"10px"}}  alt=''/>
            <div class='card-body'>
                <h5 class='card-title'>Faizan Zahid</h5>
                <p class='card-text'>I can surely that their teachings got me out of many troubles. Sometimes I got really puzzled when I fell my account was not working in a proper way. Angvo sorted out my problems and briefed me the better ways of proceedings.</p>
            </div>
        `;
        
        document.getElementById('O2').innerHTML= `
        <img src='./pe5.jpg' class='card-img-top' width="3%" height="200px" style={{borderRadius:"10px"}} alt=''/>
        <div class='card-body'>
            <h5 class='card-title'>TATA</h5>
            <p class='card-text'>I can surely that their teachings got me out of many troubles. Sometimes I got really puzzled when I fell my account was not working in a proper way. Angvo sorted out my problems and briefed me the better ways of proceedings.</p>
        </div>
    `;
        document.getElementById('O3').innerHTML= `
        <img src='./pe1.jpg' class='card-img-top' width="3%" height="200px" style={{borderRadius:"10px"}} alt=''/>
        <div class='card-body'>
            <h5 class='card-title'>Mustafa Rizwan</h5>
            <p class='card-text'>I can surely that their teachings got me out of many troubles. Sometimes I got really puzzled when I fell my account was not working in a proper way. Angvo sorted out my problems and briefed me the better ways of proceedings.</p>
        </div>
    `;

        }
        else if(count==4)
        {
            document.getElementById('O1').innerHTML = `
            <img src='./pe5.jpg' class='card-img-top' width="3%" height="200px" style={{borderRadius:"10px"}}  alt=''/>
            <div class='card-body'>
                <h5 class='card-title'>TATA</h5>
                <p class='card-text'>I can surely that their teachings got me out of many troubles. Sometimes I got really puzzled when I fell my account was not working in a proper way. Angvo sorted out my problems and briefed me the better ways of proceedings.</p>
            </div>
        `;
        
        document.getElementById('O2').innerHTML= `
        <img src='./pe1.jpg' class='card-img-top' width="3%" height="200px" style={{borderRadius:"10px"}}  alt=''/>
        <div class='card-body'>
            <h5 class='card-title'>Mustafa Rizwan</h5>
            <p class='card-text'>I can surely that their teachings got me out of many troubles. Sometimes I got really puzzled when I fell my account was not working in a proper way. Angvo sorted out my problems and briefed me the better ways of proceedings.</p>
        </div>
    `;
        document.getElementById('O3').innerHTML= `
        <img src='./pe2.jpg' class='card-img-top' width="3%" height="200px" style={{borderRadius:"10px"}}  alt=''/>
        <div class='card-body'>
            <h5 class='card-title'>Rizwan Riaz</h5>
            <p class='card-text'>I can surely that their teachings got me out of many troubles. Sometimes I got really puzzled when I fell my account was not working in a proper way. Angvo sorted out my problems and briefed me the better ways of proceedings.</p>
        </div>
    `;

        }
        
        else{
            document.getElementById('O1').innerHTML = `
            <img src='./pe1.jpg' class='card-img-top' width="3%" height="200px" style={{borderRadius:"10px"}}  alt=''/>
            <div class='card-body'>
                <h5 class='card-title'>Mustafa Rizwan</h5>
                <p class='card-text'>I can surely that their teachings got me out of many troubles. Sometimes I got really puzzled when I fell my account was not working in a proper way. Angvo sorted out my problems and briefed me the better ways of proceedings.</p>
            </div>
        `;
        
        document.getElementById('O2').innerHTML= `
        <img src='./pe2.jpg' class='card-img-top' width="3%" height="200px" style={{borderRadius:"10px"}} alt=''/>
        <div class='card-body'>
            <h5 class='card-title'>Rizwan Riaz</h5>
            <p class='card-text'>I can surely that their teachings got me out of many troubles. Sometimes I got really puzzled when I fell my account was not working in a proper way. Angvo sorted out my problems and briefed me the better ways of proceedings.</p>
        </div>
    `;
        document.getElementById('O3').innerHTML= `
        <img src='./pe3.jpg' class='card-img-top' width="3%" height="200px" style={{borderRadius:"10px"}}  alt=''/>
        <div class='card-body'>
            <h5 class='card-title'>Hamza Iftikhar</h5>
            <p class='card-text'>I can surely that their teachings got me out of many troubles. Sometimes I got really puzzled when I fell my account was not working in a proper way. Angvo sorted out my problems and briefed me the better ways of proceedings.</p>
        </div>
    `;
        }
    }

    
    return(
        <>
            <div id="carouselExampleIndicators" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>

  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="./cl.jpg" class="d-block w-100" width="100%" height="600px" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="./p1.jpg" class="d-block w-100" width="100%" height="600px" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="./e2.jpg" class="d-block w-100" width="100%" height="600px" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="./g2.jpg" class="d-block w-100" width="100%" height="600px" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="./s2.jpg" class="d-block w-100"  width="100%" height="600px" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

<div className="J1">

<div className="J2">
 How We Works
</div>

<div className="J3">
Customer Reviews
</div>

<div className="J4">
knows about our customer says
</div>
<div class="card-group J5">
  <div class="card m-3" id="O1" style={{borderRadius:"10px"}}>
    <img src="./pe1.jpg" class="card-img-top" width="3%" height="200px" style={{borderRadius:"10px"}}  alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Mustafa Rizwan</h5>
      <p class="card-text">I can surely that their teachings got me out of many troubles. Sometimes I got really puzzled when I fell my account was not working in a proper way. Angvo sorted out my problems and briefed me the better ways of proceedings.</p>
    </div>
  </div>
  <div class="card   m-3" id="O2" style={{borderRadius:"10px"}}>
    <img src="./pe2.jpg" class="card-img-top" width="3%" height="200px" style={{borderRadius:"10px"}} alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Rizwan Riaz</h5>
      <p class="card-text">I can surely that their teachings got me out of many troubles. Sometimes I got really puzzled when I fell my account was not working in a proper way. Angvo sorted out my problems and briefed me the better ways of proceedings.</p>
    </div>
  </div>
  <div class="card  m-3" id="O3" style={{borderRadius:"10px"}}>
    <img src="./pe3.jpg" class="card-img-top"  width="3%" height="200px" style={{borderRadius:"10px"}} alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Hmaza iftikhar</h5>
      <p class="card-text">I can surely that their teachings got me out of many troubles. Sometimes I got really puzzled when I fell my account was not working in a proper way. Angvo sorted out my problems and briefed me the better ways of proceedings.</p>
    </div>
  </div>
</div>
<button onClick={INC} id="i1"><i class="fa-solid fa-chevrons-right fa-shake fa-2xl"></i></button>
<button onClick={DEC} id="i2"><i class="fa-solid fa-chevrons-left fa-shake fa-2xl"></i></button>
</div>



        </>
    )
}

export default HJ;