import React from 'react';
import './Client.css'

const Client = () => {
    return (
        <>
        <div className='client-heading'>
        <h1 className='fw-bolder text-center'>Client say about me</h1> 
         <p className='fst-italic text-center'>Replenish man have thing gathering lights yielding shall you</p>  
        </div>
        <div className=" row client-section">
            <div className="col-lg-3 col-sm-12">
                <img className='client-img' src={'img/clients/pexels-buro-millennial-1438081.jpg'} alt="" />
               <div className='client-after-img-heading'>
               <h5 className='fw-bold text-center'>Jain Redmel</h5>
                <p className='fst-italic text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo beatae quod, vero inventore ducimus eius voluptate placeat !</p>
               </div>
            </div>
            <div className="col-lg-3 col-sm-12">
                <img className='client-img' src={'img/clients/pexels-mikhail-nilov-8101929.jpg'} alt="" />
              <div className='client-after-img-heading'>
              <h5 className='fw-bold text-center'>Jain Druncola</h5>
                <p className='fst-italic text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo beatae quod, vero inventore ducimus eius voluptate placeat !</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-12">
                <img className='client-img' src= {'img/clients/pexels-anna-shvets-5324947.jpg'} alt="" />
              <div className='client-after-img-heading'>
              <h5 className='fw-bold text-center'>David Cameron</h5>
                <p className='fst-italic text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo beatae quod, vero inventore ducimus eius voluptate placeat !</p>
              </div>
            </div>
            <div className="col-lg-3">
                <img src= {'img/clients/pexels-andrea-piacquadio-3760514 (1).jpg'} alt="" style={{width:'290px'}} />
                <div className='client-after-img-heading'>
                <h5 className='fw-bold text-center'>Christopher</h5>
                <p className='fst-italic text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo beatae quod, vero inventore ducimus eius voluptate placeat !</p>
                </div>
            </div>
        </div>
        </>
    );
};

export default Client;