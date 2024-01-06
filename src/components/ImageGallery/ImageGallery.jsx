import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem"
import css from './ImageGallery.module.css'
export const ImageGallery = ({images, onClick}) => {

  
      return (
         
         <ul className={css.ImageGallery}>
            {images.map((image) => (
               <ImageGalleryItem key={image.id}  image={image} onClick={onClick}/>
            ))}

         </ul>
      )

}