import css from './Modal.module.css'

export const Modal = ({onClick, selectedImage}) => {
   return (
      
         <div className={css.Overlay} onClick={onClick}>
            <div className={css.Modal}>
               <img src={selectedImage} alt="Large version"/>
            </div>
         </div>
      
   )
}