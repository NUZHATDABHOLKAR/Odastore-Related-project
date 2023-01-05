import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import React from 'react'

function Card(props) {
  return (
    <div>
        <ReactCompareSlider 
  itemOne={<ReactCompareSliderImage  ClassName='p-12' src={props.IMG} srcSet={props.IMG} alt="Image one" />}
  itemTwo={<ReactCompareSliderImage  ClassName='p-12' src={props.IMG2} srcSet={props.IMG2} alt="Image two" />}
/>
    </div>
  )
}

export default Card