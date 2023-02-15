import React from 'react'
import { Link } from 'react-router-dom'
import { data } from '../shared/data'

function Works() {
    return <div>
        {data.map((item)=>{
            return <div key ={item.id}>
            {item.id} : <Link to={`/works/${item.id}`}>{item.todo}</Link>
            </div>
        })}
    </div>
}

export default Works