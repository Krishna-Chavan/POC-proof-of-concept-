import React from 'react'
import './Card.css'
import { useHistory } from 'react-router'

export default function Card(props) {
    let history = useHistory();
    function slideImages(){
        history.push('/slidehome');
    }

    function favorite(){
        history.push('/login');
    }

    return (
        <div className="col-md-4 mt-3">
            <div className="div-1">
                <div className="card">
                    <img src={props.Image} onClick={slideImages} classNameName="card-img-top" alt="my home"  />
                    <span className="span"><i class="far fa-lg fa-heart" onClick={favorite}></i></span>
                    <div classNameName="card-body">
                        <p className="card-text"><input type="checkbox" checked />House For Sale</p>
                        <h5 className="card-title">{props.HouseNo}</h5>
                        <p className="card-text">{props.Amount}</p>
                        <p className="card-text">{props.Type}</p>
                        <p className="card-text">{props.Address}</p>
                    </div>
                </div>
            </div>
            {/* <div class="card">
                <img src={props.Image} alt="Homes" style={{width:"100%"}} />
                <h1></h1>
                <p class="price">{props.Amount}</p>
                <p>{props.Address}</p>
            </div> */}
        </div>
    )
}
