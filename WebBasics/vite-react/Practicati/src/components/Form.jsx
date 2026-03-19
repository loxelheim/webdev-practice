import React from 'react'

function Form() {
    function funClickFunction(event) {
        event.preventDefault();

        console.clear()
        console.log("CLICKEDY-CLICK!")
    }
    return (
        <form onSubmit={ (e) => e.preventDefault() }>
            <h1>I am a Form!</h1>
            <input name="form-input" type="text" onInput={ (e) => console.log(e.target.value) }/>
            <button onClick={ (e) => funClickFunction(e) }>CLICK CLICK</button>
        </form>
    )
}

export default Form