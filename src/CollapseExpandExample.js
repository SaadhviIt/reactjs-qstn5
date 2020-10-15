import React from 'react' 

export default function CollapseExpandExample({ data }){
 return ( 
 <div>
    <p>Favourite list</p>
    <button >
      Collapse
    </button> 
        <div>
          { data.map(item => (
              <p key={item.id}>{ item.name }</p>
            ))
          }
        </div> 
  </div>
 )
}