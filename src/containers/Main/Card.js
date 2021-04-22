import React from 'react';
import {BsArrowUp,BsArrowDown} from 'react-icons/bs';
import {CgArrowsHAlt} from 'react-icons/cg';

export default function Card({data}) {
    const {ID,CharCode,Nominal,Name,Previous,Value} = data;
    const valute = Previous - Value;
    return (
        <div className="card">
            <div className="card__title">{Name}</div>
            <div className="card__inner">
                <div className="card__block">
                    <div className="card__text">
                        {Nominal}
                        {" "} 
                        {CharCode}
                    </div>
                    <CgArrowsHAlt className="card__text-icon" />
                    <div className="card__text">
                        {Value}
                        {" "} RUB
                    </div>
                </div>
                <div className={Value < Previous?"card__text card__text--danger":"card__text--success"}>
                    {Value < Previous?<BsArrowDown />:<BsArrowUp />}
                    {valute.toFixed(4).replace('.',',').replace('-',' ')}
                </div>
            </div>
        </div>
    )
}
