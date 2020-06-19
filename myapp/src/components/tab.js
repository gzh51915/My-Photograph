import React from 'react'


function Tab({ tab }) {
    
    return (
            <div id="tab-list">
                {
                    
                    tab.title.map((ele,idx)=>{
                           return <a key={idx}>
                                 <img src={tab.src[idx]} alt=""/><span>{ele}</span>
                             </a>
                        })
                }
            </div>
    )
}

// 类组件的写法
// Tab.contextType = MyContext
// 在组件内部通过：this.context.completeItem

export default Tab;