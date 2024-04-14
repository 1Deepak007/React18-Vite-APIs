import React, { useState } from 'react'

export default function CondiRend() {

    const [showImg, setShowImg] = useState(true);


    const [todos, setTodos] = useState([
        { title: 'Coding', desc: 'Code for 5 hours' },
        { title: 'Gym', desc: 'Gym for 1 hours' },
        { title: 'Swimming', desc: 'Swim for 1 hours' },
        { title: 'Sleep', desc: 'Code for 7 hours' }
    ])
    const Todo = ({ todo }) => {
        return (<>
            <div className="todo">{todo.title}</div>
            <div className="todo">{todo.desc}</div>
        </>)
    }

    return (
        <div className='container'>
            <h3 style={{ background: 'linear-gradient(to right, #f0f2f0, #000c40)' }}>Conditional Rendering</h3>

            {
                showImg ? <img src='../src/assets/flower.jpg' style={{ height: '200px' }} /> : "Image is hidden"
            }
            <br />
            {/* OR    below is used when we use only 'if'*/}
            {/* {
            showImg &&  <img src='../src/assets/flower.jpg' style={{height:'200px'}}/>
        } */}
            <button onClick={() => setShowImg(!showImg)}>{showImg ? 'Hide Image' : 'Show Image'}</button>


            <hr />


            {todos.map(
                todo => {
                    // return <Todo todo={todo} key={todo.title}/>

                    return <div key={todo.title}>
                        <div className="row">
                            <div className="col">{todo.title}</div>
                            <div className="col">{todo.desc}</div>
                        </div>

                        {/* <table className="table table-primary my-3">
                            <tbody>
                                <tr>
                                    <td>{todo.title}</td>
                                    <td>{todo.desc}</td>
                                </tr>
                            </tbody>
                        </table> */}
                    </div>
                }
            )
            }
        </div>
    )
}
