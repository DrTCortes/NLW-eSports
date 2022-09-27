interface ButtonsProps{
title: string
}

function Button(props: ButtonsProps){
  return(
    <button>
      {props.title}
    </button>
  )
}

function App() {

  return (
    <div>
      <Button title="send"/>
    </div>
  )
}

export default App
