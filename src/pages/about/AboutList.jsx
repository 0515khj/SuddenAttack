import React from 'react';
import { AboutListWrap } from './AboutStyle';
import AboutItem from './AboutItem';

const AboutList = ({data}) => {
    return (
        <AboutListWrap>
            <ul>
            {
                data.map(item=> <AboutItem key={item.id} item={item}/> )
            }
            </ul>
        </AboutListWrap>
    );
};

export default AboutList;