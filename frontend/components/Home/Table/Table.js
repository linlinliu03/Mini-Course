import React, {Component} from "react";
import Item from "./Item";
import ActiveItem from "./ActiveItem";

class Table extends Component{
    constructor(){
        super()
    }

    render(){
      

        const item = this.props.video_modules.map(video => {
            let handleVideoChange = this.props.handleVideoChange.bind(this, video)
            return (
                video.active? (<ActiveItem
                    key={video.id}
                    title={video.title}
                    description={video.description}
                    handleVideoChange = {handleVideoChange}
                />):
                    (<Item 
                       key={video.id} 
                       title={video.title} 
                       description={video.description}
                       handleVideoChange={handleVideoChange}
                    />)
        )})

        return(
            <div className="pt-5 pb-5">
                <div className="container">
                    <div className="text-center">
                       <h1 className="pt-4 pb-4">React for Rails Developer - Videos</h1>
                    </div>

                    {item}
                </div>
            </div>
        )
    }
}

export default Table;