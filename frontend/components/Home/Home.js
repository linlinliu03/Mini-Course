import React, {Component} from "react";
import Jumbotron from "./Jumbotron";
import Table from './Table/Table';
import axios from "axios";

class Home extends Component{
   constructor(){
       super()
       this.state = {
           video_modules : []
       }

       this.handleVideoChange = this.handleVideoChange.bind(this)
   }

   componentDidMount(){
     
       axios.get("/episodes.json")
            .then(data => {
               let response = data.data.data

               let state = [];

               response.map( data => {
                   state.push({id: data.id, title: data.title, description:data.description, active:false})
               })

               this.setState({ video_modules: state })
            })
            .catch(error => {
                console.log(error)
            })
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