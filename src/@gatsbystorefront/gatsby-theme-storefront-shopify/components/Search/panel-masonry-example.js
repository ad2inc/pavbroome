import React from 'react'
import { Link } from 'gatsby'
import styled from "styled-components"
const CustomBox = styled.div`

padding:1rem;

.masonry { /* Masonry container */
    column-count: 4;
    column-gap: 1em;
}

.item { /* Masonry bricks or child elements */
    background-color: #eee;
    display: inline-block;
    margin: 0 0 1em;
    width: 100%;
}
.wrapper {
    width: 95%;
    margin: 3em auto;
}

.masonry {
    margin: 1.5em 0;
    padding: 0;
    -moz-column-gap: 1.5em;
    -webkit-column-gap: 1.5em;
    column-gap: 1.5em;
    font-size: .85em;
}

.item {
    display: inline-block;
    background: #fff;
    padding: 1em;
    margin: 0 0 1.5em;
    width: 100%;
	-webkit-transition:1s ease all;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-shadow: 2px 2px 4px 0 #ccc;
}
.item img{max-width:100%;}

@media only screen and (min-width: 400px) {
    .masonry {
        -moz-column-count: 2;
        -webkit-column-count: 2;
        column-count: 2;
    }
}

@media only screen and (min-width: 700px) {
    .masonry {
        -moz-column-count: 3;
        -webkit-column-count: 3;
        column-count: 3;
    }
}

@media only screen and (min-width: 900px) {
    .masonry {
        -moz-column-count: 4;
        -webkit-column-count: 4;
        column-count: 4;
    }
}

@media only screen and (min-width: 1100px) {
    .masonry {
        -moz-column-count: 5;
        -webkit-column-count: 5;
        column-count: 5;
    }
}

@media only screen and (min-width: 1280px) {
    .wrapper {
        width: 1260px;
    }
}

`
const PanelMasonry = () => (
<CustomBox>

<h2>Occassions</h2>
    
<div className="masonry">
   <div className="item"><img src="https://source.unsplash.com/random/1200x12002" alt="rando" /></div>
   <div className="item"><img src="https://source.unsplash.com/random/1200x12002" alt="rando" /></div>
   <div className="item"><img src="https://source.unsplash.com/random/1200x12002" alt="rando" /></div>
   
   <div className="item"><img src="https://source.unsplash.com/random/1200x12002" alt="rando" /></div>

   <div className="item"><img src="https://source.unsplash.com/random/1200x12002" alt="rando" /></div>

   <div className="item"><img src="https://source.unsplash.com/random/1200x12002" alt="rando" /></div>


   <div className="item"><img src="https://source.unsplash.com/random/1200x12002" alt="rando" /></div>


   <div className="item"><img src="https://source.unsplash.com/random/1200x12002" alt="rando" /></div>


   <div className="item"><img src="https://source.unsplash.com/random/1200x12002" alt="rando" /></div>


   <div className="item"><img src="https://source.unsplash.com/random/1200x12002" alt="rando" /></div>


   <div className="item"><img src="https://source.unsplash.com/random/1200x12002" alt="rando" /></div>


   <div className="item"><img src="https://source.unsplash.com/random/1200x12002" alt="rando" /></div>



</div>




</CustomBox>
)
export default PanelMasonry