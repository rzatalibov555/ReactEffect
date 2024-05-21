import React, { Component, useEffect, useState } from 'react';

import './App.css';

class Say extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 1
    }
  }

  chaNumber = () => {
    this.setState(
      (prev) => ({
        number: prev.number + 1
      })
    )
  }

  render() {

    const { number } = this.state

    return (
      <div>
        <h1>{number}</h1>
        <button onClick={this.chaNumber}>Send</button>
      </div>
    )
  }





}

const Header = () => {
  return (
    <div>
      <h1>Hello</h1>
    </div>
  )
}

const Counter = () => {

  // const [counter, setCounter] = useState(
  //   [
  //     { id: 1, name: "Rza" },
  //     { id: 2, name: "Rza" },
  //     { id: 3, name: "Rza" },
  //     { id: 4, name: "Rza" },
  //     { id: 5, name: "Rza" },
  //     { id: 6, name: "Rza" },
  //     { id: 7, name: "Rza" },
  //   ]
  // )

  // console.log(counter.length)


  // return (
  //   <div>
  //     <h1>{counter}</h1>
  //   </div>
  // )





  // const [text, setText] = useState("Start")

  // const chText = () => {
  //   setText("Stop")
  // }


  // return (
  //   <div>
  //     <h1>{text}</h1>
  //     <button onClick={chText}>Klikle</button>
  //   </div>
  // )






  // const [counter, setCounter] = useState(10)


  // const plus = () => {
  //   setCounter((prev) => prev + 1)
  // }

  // const minus = () => {
  //   setCounter((prev) => prev - 1)
  // }

  // return (
  //   <div>
  //     <h1>{counter}</h1>
  //     <button onClick={minus}>Prev</button>
  //     <button onClick={plus}>Next</button>
  //   </div>
  // )


}

// const Demo = () => {

//   // const [reqem, setReqem] = useState(1)
//   // const [soz, setSoz] = useState("Necesen")
//   const [reqemArtir, setReqemArtir] = useState(10)

//   useEffect(() =>{
//     const time = setInterval(() => {
//       setReqemArtir((prev) => prev - 1)
//       console.log(reqemArtir)
//     },1000)

//     return(()=>{
//       clearInterval(time)
//     })
    
//   },[])


const Demo = () => {
  const [reqemArtir, setReqemArtir] = useState(10);

  useEffect(() => {
    const time = setInterval(() => {
      setReqemArtir(prev => {
        if (prev === 0) {
          clearInterval(time); // Clear the interval when count reaches 0
          return reqemArtir; // Return the same value
        }
        return prev - 1; // Decrement count otherwise
      });
    }, 1000);

    return () => {
      clearInterval(time);
    };
  }, []);





  // const chReqem = () => {
  //   setReqem((prev) => prev + 1)
  // }

  // const chSoz = () => {
  //   setSoz("Yaxsiyam")
  // }

  // const artir = () => {
  //   setReqemArtir((prev) => prev + 1)
  // }




  return(
    <div>
      <h1>{reqemArtir}</h1>
      {/* <h1>{reqem}</h1>
      <h1>{reqemArtir}</h1>
      <h1>{soz}</h1> */}
      {/* <button onClick={chReqem}>Click</button> */}
      {/* <button onClick={artir}>Click</button>
      <button onClick={chSoz}>text</button> */}
    </div>
  )


}





const Apis = () => {
  // const [data, setData] = useState([])

  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/posts')
  //     .then(response => response.json())
  //     .then(json => setData(json))
  // }, [])

  // return (
  //   <div className='hooks'>

  //     {data.map(item =>
  //       <div key={item.id}>
  //         <h1>{item.title}</h1>
  //         <p>{item.body}</p>
  //       </div>
  //     )}

  //   </div>
  // )
  // =========================================================================
}


const Pagination = () => {

  // const [page, setPage] = useState(1)

  // const addPage = () => {
  //   setPage(page + 1)
  // }

  // return(
  //   <div className="App">
  //     <div>Page: {page}</div>
  //     <button onClick={addPage}>Next page</button>
  //     <hr />
  //     <Post page={page}/>
  //   </div>
  // )


}


const Example = () => {

  // const [count, setCount] = useState(10)

  // useEffect(() => {
  //   setInterval(() => {
  //      setCount((prev) => prev - 1)
  //   },1000)
  // },[])


  // return <h1>{count}</h1>

}


function App() {
  return (

    <div>
      <Demo/>
      {/* <Say />
      <Header /> */}
      {/* <Counter /> */}
    </div>



  )
}

export default App;
