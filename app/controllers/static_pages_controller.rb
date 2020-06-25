class StaticPagesController < ApplicationController
    def root
    end 

    def episodes
      
        @episodes = Course.first.episodes

        render json: {data: @episodes}
    end 
end
