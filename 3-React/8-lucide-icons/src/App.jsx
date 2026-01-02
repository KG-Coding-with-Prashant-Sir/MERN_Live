import {Camera, Trash2, Icon} from 'lucide-react';
import { bottleBaby, burger } from '@lucide/lab';

function App() {

  return (
    <>
      <Camera color="blue" size={72} strokeWidth={1}/>
      <Trash2 />
      <Icon iconNode={bottleBaby} color="blue" size={72} strokeWidth={1}/>

      <Icon iconNode={burger} color="red" size={72} strokeWidth={2}/>
    </>
  )
}

export default App
