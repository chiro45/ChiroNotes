
import { NothingSelected } from './NothingSelected'
import { Sidebar } from './Sidebar'
import { NoteScreen } from '../notes/NoteScreen'
import { useSelector } from 'react-redux'

export const JournalScreen = () => {
    //obtenemos el active de las notes
    const {active} = useSelector(state => state.notes)


    return (
        
        
       
        <div className='journal__main-content animate__animated animate__fadeIn animate__faster'>
         <Sidebar/>
           

            
            <main>
                {
                    //verificamos si hay una nota activa en el caso de que no este, se muestra el componente nothinScreen
                    (active)
                    ? <NoteScreen/>
                    : <NothingSelected/>
                }
               
            </main>
            
        </div>
        
        
    )
}
