import React, {Component} from "react"
import './item-status-filter.css'
export default class ItemStatusFilter extends Component{
 render(){
    return(
        <div className="mybtn_info">
            <button type="button"
            className="btn mybtn btn-info">All</button>
            <button type="button"
            className="btn mybtn btn-outline-secondary">Active</button>
            <button type="button"
            className="btn mybtn btn-outline-secondary">Done</button>
        </div>
    ) 
 }
}
 

