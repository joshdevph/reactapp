import React,{useContext} from 'react'
import {GlobalState} from "../../../GlobalState"

function History() {
    const state = useContext(GlobalState)
    const [history] = state.userAPI.history
    return (
        <div className="md:w-3/4 bg-white shadow-sm mt-5 m-auto">
            <div className="flex flex-col justify-center items-center p-10">
                <h1 className="uppercase font-bold text-2xl tracking-widest"> Order History</h1>
                <h1 className="mt-5 font-semibold"> You have ({history.length}) payment history</h1>
            </div>
            {
                history.length
                ?
                <div className="md:w-5/6 md:m-auto p-10">
                    <table className="w-full">
                            <thead >
                                <tr className="border-2 border-black">
                                <th className="border-2 border-black p-3 bg-red-200 uppercase tracking-wider"> Payment ID</th>
                                <th className="border-2 border-black p-3 bg-red-200 uppercase tracking-wider"> Date Purchased</th>
                                <th className="border-2 border-black p-3 bg-red-200 uppercase tracking-wider"> View</th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                history.map(item => (
                                    <tr key={item._id}>
                                        <td className="border-2 border-black p-2 truncate tracking-wide text-center">{item.paymentID}</td>
                                        <td className="border-2 border-black p-2 truncate text-center tracking-widest">{new Date(item.createdAt).toLocaleDateString()}</td>
                                        <td className="border-2 border-black p-2 truncate text-center">View</td>
                                    </tr>
                                ))
                            }
                            </tbody>
                    </table>
                </div>
                :
                " "

            }

        </div>
    )
}

export default History
