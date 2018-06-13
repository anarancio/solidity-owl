import React from "react";

export  const dummyDeposits = [
    {
        createdOn: "08/05/2018",
        amount: 40
    },
    {
        createdOn: "01/05/2018",
        amount: 800
    },
    {
        createdOn: "18/05/2018",
        amount: 110
    },
    {
        createdOn: "28/05/2018",
        amount: 140
    },
    {
        createdOn: "01/05/2018",
        amount: 8100
    },
    {
        createdOn: "18/05/2018",
        amount: 1110
    },{
        createdOn: "08/05/2018",
        amount: 430
    },
    {
        createdOn: "01/05/2018",
        amount: 10
    },
    {
        createdOn: "13/05/2018",
        amount: 110
    }
]


const mintBurnBtns = (id) => {
    return(
        <div className="text-center">
            <i className="fas fa-check-circle mx-1 text-success fa-1x" onClick={() => {alert("Mint transaction "+id)}}></i>
            <i className="fas fa-times-circle mx-1 text-danger fa-1x" onClick={() => {alert("Burn transaction " + id)}}></i>
        </div>
    )
};




export const dummyTransactions = [
    {
        id: "958641",
        user: "John Holmes",
        type:"Withdraw",
        amount: 960,
        date:"2018/04/01",
        state: "Pending",
        remove: mintBurnBtns(958641)

    },
    {
        id: "932164",
        user: "John Holmes",
        type:"Bank Deposit",
        amount: 160,
        date:"2018/03/11",
        state: "Accepted",
        remove: mintBurnBtns(932164)

    },
    {
        id: "898312",
        user: "John Holmes",
        type:"Withdraw",
        amount: 96,
        date:"2018/02/21",
        state: "Cancelled",
        remove: mintBurnBtns(898312)
    },
    {
        id: "886431",
        user: "John Holmes",
        type:"Bank Deposit",
        amount: 960,
        date:"2018/03/11",
        state: "Accepted",
        remove: mintBurnBtns(886431)

    }
]


export const dummySendTokens = [
    {
        receiver: "reto53489113dsf15431sd151133d13241989",
        amount: 960,
        date:"2018/04/01",
    },
    {
        receiver: "reto53489113dsf15431sd151133d13241989",
        amount: 960,
        date:"2018/04/01",
    }, {
        receiver: "reto53489113dsf15431sd151133d13241989",
        amount: 960,
        date:"2018/04/01",
    }, {
        receiver: "reto53489113dsf15431sd151133d13241989",
        amount: 960,
        date:"2018/04/01",
    }, {
        receiver: "reto53489113dsf15431sd151133d13241989",
        amount: 960,
        date:"2018/04/01",
    }, {
        receiver: "reto53489113dsf15431sd151133d13241989",
        amount: 960,
        date:"2018/04/01",
    }, {
        receiver: "reto53489113dsf15431sd151133d13241989",
        amount: 960,
        date:"2018/04/01",
    }, {
        receiver: "reto53489113dsf15431sd151133d13241989",
        amount: 960,
        date:"2018/04/01",
    }
]

