import React, {Component} from "react";
import Jumbotron from "./Jumbotron";
import Table from './Table/Table';

class Home extends Component{
   constructor(){
       super()
       this.state = {
           video_modules : [
               {id:1, title:"1. Setting up a new Ruby on Rails App with React.", description: "lorem ipsum", active: false},
               { id: 2, title: "2. Adding React to an Existing Rails App.", description: "lorem ipsum", active: false},
               { id: 3, title: "3. Building a Hello World App.", description: "lorem ipsum", active: false},
               { id: 4, title: "4. Adding REact Router Dom to your App.", description: "lorem ipsum", active: false}
           ]
       }

       this.handleVideoChange = this.handleVideoChange.bind(this)
   }

   handleVideoChange(item, e){
       e.preventDefault();
       
       let video_modules = [...this.state.video_modules];

       video_modules.map(data => {
           data.active = false
       })

       item.active = !item.active

       video_modules[item.id-1] = item;

       this.setState({video_modules})

   }


   render(){
       return(
           <div>
               <Jumbotron/>
               <Table handleVideoChange = {this.handleVideoChange} video_modules = {this.state.video_modules}/>
           </div>
       )
   }
}

export default Home;