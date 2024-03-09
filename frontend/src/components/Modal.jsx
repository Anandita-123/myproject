import React from 'react'

export default function Modal({ title, radio }) {
    return (
        <>
            {/* Button trigger modal */}
            <button type="button" class="btn btn-outline-secondary d-flex align-items-center gap-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <img src="https://cdn.iconscout.com/icon/free/png-512/free-filter-3583346-3007732.png?f=webp&w=256" alt="Icon" width="20px"/>
                <span>Filter</span>
            </button>

            {/* Modal */}
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">{title}</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body d-flex">
                            <aside>
                                Sort By
                            </aside>
                            <ul className='modal-body d-flex flex-column gap-3'>
                                {
                                    radio.map((item) => (
                                        <li className='list-group-item d-flex align-items-center gap-2'>
                                            <input type='radio' id={item.name} style={{height: "18px", width: "18px",}}/>
                                            <label htmlFor={item.name}>{item.name}</label>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Clear All</button>
                            <button type="button" class="btn btn-primary">Apply</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
