import logo from './logo.svg';
import './App.css';
import r1 from './Api';
import './index.css';

function Fui({v1})
{
    const imageStyle = {
        width: "500px", // Set the width to 200px
        height: "200px", // Set the height to 200px
      };

      let card={
        width: "18rem",
        display: 'inline-block',
        margin: "15px 15px",
        position: 'relative',
        left: "100px"
      }
    return(

<div class="card" style={card}>
  <img src={v1.img} class="card-img-top" alt="..." style={{width:"286px",height:"200px"}}/>
  <div class="card-body">
    <h5 class="card-title">Product Name : {v1.name}</h5>
    <p class="card-text"><b>Price :</b> {v1.price} Rs</p>
    <a href="#" class="btn btn-warning">Go somewhere</a>
  </div>
</div>

    )
}

function GH({v})
{
  return(
    <>
        <Fui v1={v} ></Fui>
    </>
  )
}
export default Fui;

export {GH};