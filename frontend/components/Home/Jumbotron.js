import React from "react";
import styled from "styled-components";

const Section = styled.section`
    background-color: #d74234;
    min-height: 550px;
    padding: 100px 0;
    color: #fff;
`

const Header = styled.h1`
    color: #fff;
    font-weight: 700;
    font-size: 40px;
    line-height: 52px;
` 

const Subhead = styled.p`
    font-size: 18px;
    font-weight: 500;
` 

const Jumbotron = () => {
    return(
       <Section>
           <div className="container">
               <div className="row">
                  <div className="col col-sm-12 col-md-5">
                      <div className="pt-4 mt-4">
                          <Header>React For Rails Developers!</Header>
                          <Subhead>Supercharge your Ruby on Rails App with React.js</Subhead>
                      </div>
                  </div>
                  <div className="col col-sm-12 col-md-7">
                       <div className="pt-4 mt-4 text-center">
                          <iframe width="560" height="315" src="http://www.youtube.com/embed/5F_JUvPq410" framBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                       </div>
                  </div>
               </div>
           </div>
       </Section>
    )
}


export default Jumbotron;