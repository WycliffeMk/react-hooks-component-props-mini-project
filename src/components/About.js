import React from "react";
import blogData from "../data/blog";

console.log(blogData);

function about(){
    return(
        <aside>
            <img src={blogData.image} alt="blog logo"/>
            <p>{blogData.about}</p>
        </aside>
    )
} 