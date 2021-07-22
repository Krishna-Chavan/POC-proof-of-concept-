import React from 'react'
import Card from '../homedetails/Card';


export default function AddHome() {

    const addHome = [
        {
            id: 1,
            image:'https://images5.alphacoders.com/343/343728.jpg',
            houseNo: 44,
            amount: '$199,990',
            address: "Gulbarga Karnataka-585102",
            type: "single family"
        },
        {
            id: 2,
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWENwiVTmO-hovk7YwrtLtMhn9g5xVPaiMPg&usqp=CAU',
            houseNo: 46,
            amount: '$178,990',
            address: "Kalaburgi Karnataka-585102",
            type: "Multi family"
        },
        {
            id: 3,
            image:'https://images.unsplash.com/photo-1509592149237-bc44977d96d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NjR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
            houseNo: 60,
            amount: '$219,990',
            address: "khanadal gulbarga Karnataka-585102",
            type: "Multi family"
        },
        {
            id: 4,
            image:'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80',
            houseNo: 48,
            amount: '$150,00',
            address: "banglore Karnataka-585102",
            type: "single family"
        },
        {
            id: 5,
            image:'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8OXx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60',
            houseNo: 50,
            amount: '$125,000',
            address: "bidar Karnataka-585102",
            type: "single family"
        },
        {
            id: 6,
            image:'https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
            houseNo: 52,
            amount: '$200,990',
            address: "ballari Karnataka-585102",
            type: "single family"
        }
    ];

    return (
        <div className="container mt-3">
        {/* <div className="col-md-3"> */}
        <div className="row">
            {
                addHome.map(item =>
                    <Card
                        Image={item.image}
                        HouseNo={item.houseNo}
                        Amount={item.amount}
                        Address={item.address}
                        Type={item.type}
                    />)
            }

        </div>
    </div>
    // </div>
    )
}
