import React from 'react'
import { Signup } from '../Component/Signup'
import { FcBarChart } from 'react-icons/fc';
import '../Saas/Components/home.scss';


export default function HomeScreen() {
    return (
        <>
            {/* <div className='home left'>
                <div class="centered">
                    <FcBarChart size={'60%'} />

                   
                </div>
            </div>
            <div className='home right'>
                <Signup />
            </div> */}
            <div className="container-fluid pt-3 pb-4 h-100 w-100" style={{ backgroundColor: '#ebecf5' }}>
                <div className="row">
                    <div className="col-md-6 ">
                        <div className='d-flex align-content-center justify-content-center'>
                            <FcBarChart size={'60%'} />
                        </div>
                        <h2>Choose a date range</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                    <div className="col-md-6 my-auto" style={{ backgroundColor: '#ffffff' }}>
                        <Signup />

                    </div>
                </div>
            </div>
        </>
    )
}