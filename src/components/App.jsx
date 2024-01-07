import React, {Component} from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';
import { getAllImages }from '../services/imagesApi';
import css from './App.module.css';


export class App extends Component {

  state = {
  images: [],
  isLoading: false,
  error: '',
  page: 1,
  query: '',
  isModalOpen: false,
  selectedImage:'',
  hasMoreImages: false,

}



 componentDidUpdate(_, prevState){
  if(prevState.page!==this.state.page || this.state.query!== prevState.query){
   if(this.state.query.trim() !== ''){
    this.getImages();
   }
    
  }
 }

 getImages = async () => {
  try { 
    this.setState({isLoading: true, error: ''})
    const {query, page} = this.state;
    
const response =  await getAllImages(page, query);

this.setState((prev) => ({
  images: (prev.images ? [...prev.images, ...response.hits] : response.hits),
  
  hasMoreImages: response.hits.length > 0,
 
}))

  } catch (error) {
    this.setState({error: error.message});
  } finally {
    this.setState({isLoading: false})
  }
 }

 handleAddQuery = (query) => {
   this.setState({query: query, page: 1, images: [], 
   
   });
 }

handleLoadMore = () => {
  this.setState((prev) => ({page: prev.page + 1}))
}

opeModal = (largeImageURL) => {
  this.setState({isModalOpen: true, selectedImage: largeImageURL});
  document.addEventListener('keydown', this.handleKeyDown);
};

closeModal = () => {
  this.setState({isModalOpen: false, selectedImage:''});
  document.removeEventListener('keydown', this.handleKeyDown);
}

handleKeyDown = (e) => {
  if (e.key === 'Escape') {
    this.closeModal();
  }
}

handleOverlayClick = (e) => {
  if (e.target === e.currentTarget) {
    this.closeModal();
  }
}


render() {
   const {images, isLoading, error, isModalOpen, selectedImage, hasMoreImages} = this.state;

  return (
    <div className={css.Container}>
      
      <Searchbar onSubmit={this.handleAddQuery}/>
      {error && <h1>{error}</h1>}
      {images.length > 0 && <ImageGallery images={images} onClick={this.opeModal}/> }
     { hasMoreImages && <Button onClick={this.handleLoadMore}/>}
     {isLoading && <Loader/>}
     {isModalOpen && <Modal selectedImage={selectedImage} onClick={this.handleOverlayClick}/>}
    </div>
  );
}
  
};

