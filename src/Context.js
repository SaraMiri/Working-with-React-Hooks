import React, {useState, useContext, createContext} from "react"

const UserContext = createContext ([{
  firstName: 'Hannah',
  lastName: 'Thompson',
  suffix: 1,
  email:"hannahthompson@example.es"
},
obj => obj
]);

const ContextComponent = () => {
  const userState = useState ({
    firstName: "Maria",
    lastName: "Rico",
    suffix: 2,
    email:"mariarico@example.com"
  })

  return (
    <UserContext.Provider value={userState}>
       <h1>useContext Example</h1>
      <h1>First level</h1>
      <LevelTwo/>
    </UserContext.Provider>
  )
}

const LevelTwo = () => (
  <div>
    <h2>Second Level</h2>
    <LevelThree/>
    </div>
)

const LevelThree = () => (
  <div>
    <h3>Third Level</h3>
    <LevelFour/>
  </div>
)

const LevelFour = () => (
  <div>
    <h3>Fourth Level</h3>
    <LevelFive/>
  </div>
)
const LevelFive = () => {
  const [user, setUser]= useContext (UserContext);

  return (
    <div>
      <h5>{`${user.firstName} ${user.lastName} the ${user.suffix} born`}</h5>
      <button onClick={() =>{
        setUser(Object.assign({}, user, {suffix: user.suffix +1}));
      }}>
        Increment
      </button>
    </div>
  )
}




export default ContextComponent;