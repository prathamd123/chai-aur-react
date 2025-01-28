import React from 'react'

const Card = ({username,item="#345",price}) => {
  return (
    <div className=" w-72 flex flex-col rounded-xl glass  min-h-72 mt-3 ">
    <div>
      <img
        src="https://images.pexels.com/photos/30379636/pexels-photo-30379636/free-photo-of-woman-in-winter-clothes-enjoying-snowy-forest.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        alt="test"
        width="300"
        height="300"
        className="rounded-t-xl w-full"
      />
    </div>
    <div className="flex flex-col py-3 px-3 pb-7 -mt-4 bg-black rounded-b-xl ">
      <div className="flex justify-between">
        <h1 className="font-RubikBold ">{username}</h1>
        <h1 className="font-bold font-RubikBold">Price</h1>
      </div>
      <div className="flex  justify-between font-mono">
        <p>{item}</p>
        <p>{price}</p>
      </div>
    </div>
  </div>
  )
}

export default Card
