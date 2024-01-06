import css from './ImageGalleryItem.module.css'

export const ImageGalleryItem = (props) => {

   return (
      <li className={css.ImageGalleryItem} onClick={() => props.onClick(props.image.largeImageURL)}>
<img className={css.ImageGalleryItemImage} src={props.image.webformatURL} alt={props.image.tags} />
      </li>

   )
}