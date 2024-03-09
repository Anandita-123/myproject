import React from 'react'

export default function RadioButton({name}) {
    return (
        <div className="d-flex flex-column">
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name={name} id={name} value={name}/>
                <label class="form-check-label" for={name}>{name}</label>
            </div>
        </div>
    )
}
