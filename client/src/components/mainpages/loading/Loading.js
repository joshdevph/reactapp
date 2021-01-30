import React from 'react'
import './loading.css'
function Loading() {
    return (
        <div className="load-page w-3/4 m-auto mt-36">
            <div className="loader">
                <div>
                    <div>
                        <div>
                            <div>
                                <div>
                                    <div>
                                        <div>
                                            <div></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <span className="m-auto flex items-center justify-center w-full mt-10 font-bold">Loading Products ...</span>
        </div>
    )
}

export default Loading
