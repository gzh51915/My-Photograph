import React from 'react'


function Tab2({ tab2 }) {
    
    return (
            <div id="tab-list">
                {
                    
                    tab2.title.map((ele,idx)=>{
                           return <a key={idx}>
                                 <img src={tab2.src[idx]}/><span>{ele}</span>
                             </a>
                        })
                }
            </div>
    )
}

// 类组件的写法
// Tab.contextType = MyContext
// 在组件内部通过：this.context.completeItem

export default Tab2;