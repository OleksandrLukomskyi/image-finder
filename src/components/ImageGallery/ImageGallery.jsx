import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem"
import css from './ImageGallery.module.css'

export const ImageGallery = ({images, onClick}) => {

   const uniqueKeys = new Set();
     
      return (
            <ul className={css.ImageGallery}>
            {images.map((image) => {
               const key = image.id;
               
               // Перевіряємо, чи ключ ще не використаний
               if (!uniqueKeys.has(key)) {
                  uniqueKeys.add(key); // Додаємо ключ у Set для відстеження його використання
                  return <ImageGalleryItem key={key}  image={image} onClick={onClick}/>
                  }
               return null; // Якщо ключ вже використаний, пропускаємо елемент
            })}

         </ul>
      )

}

