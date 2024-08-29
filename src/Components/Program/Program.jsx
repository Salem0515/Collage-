import React from 'react';
import './Program.css';
import program_1 from '../../assets/program-1.png';
import program_2 from '../../assets/program-2.png';
import program_3 from '../../assets/program-3.png';
import program_icon_1 from '../../assets/program-icon-1.png';
import program_icon_2 from '../../assets/program-icon-2.png';
import program_icon_3 from '../../assets/program-icon-3.png';

const Program = () => {
    return (
        <div className='program-container'>
            <div className="title">
                <p>Our Program</p>
                <h3>What We Offer</h3>
            </div>
            <div className='graduations'>
                <div className="grad_One">
                    <img src={program_1} alt="Program 1" className='picturs' />
                    <img src={program_icon_1} alt="Icon 1" className='Icon' />
                    <p>Graduation Degree</p>
                </div>
                <div className="grad_two">
                    <img src={program_2} alt="Program 2" className='picturs' />
                    <img src={program_icon_2} alt="Icon 2" className='Icon' />
                    <p>Master Degree</p>
                </div>
                <div className="grad_three">
                    <img src={program_3} alt="Program 3" className='picturs' />
                    <img src={program_icon_3} alt="Icon 3" className='Icon' />
                    <p>Post Graduation</p>
                </div>
            </div>
        </div>
    );
}

export default Program;
