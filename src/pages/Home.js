import React from 'react';
import './Home.css';
import MainRightHome from '../components/MainRightHome';
import MainLeftHome from '../components/MainLeftHome';

export default (props) => {
    return (
        <div className="Home">
            <div className="container">
               <div className="row" >
                   <div className="col-5">
                       <MainLeftHome/>
                   </div>
                   <div className="col-7">
                       <MainRightHome/>
                   </div>
               </div>
            </div>
        </div>
    );
}