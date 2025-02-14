// components/AuthPixelAlert/AuthPixelAlert.jsx
import './AuthPixelAlert.css';
import Swal from 'sweetalert2';
import photo from '../../../assets/icons/rapi.gif';

const AuthPixelAlert = {





  success: (title = 'Success!', text = '') => {
    return Swal.fire({
      title: title,
      text: text,
      icon: 'success',
      customClass: {
        popup: 'pixel-alert-popup',
        title: 'pixel-alert-title',
        confirmButton: 'pixel-alert-button',
        icon: 'pixel-alert-icon'
      },
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    });
  },

  error: (title = 'Error!', text = '') => {
    
    const customIcon = `<img src="${photo}" width="80" height="80" />`
    return Swal.fire({
      title: title,
      text: text,
      
      iconHtml: customIcon,
      customClass: {
        popup: 'pixel-alert-popup',
        title: 'pixel-alert-title',
        confirmButton: 'pixel-alert-button',
        icon: 'no-border',
        title: 'custom-alert-text'
      },
      showClass: {
        popup: 'animate__animated animate__shakeX'
      }
    });
  },

  confirm: (title = 'Are you sure?', text = '') => {
    return Swal.fire({
      title: title,
      text: text,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
      customClass: {
        popup: 'pixel-alert-popup',
        title: 'pixel-alert-title',
        confirmButton: 'pixel-alert-button',
        cancelButton: 'pixel-alert-cancel-button',
        icon: '../../../assets/icons/rabia.png'
      },
      showClass: {
        popup: 'animate__animated animate__bounceIn'
      }
    });
  },

  loading: (title = 'Loading...') => {
    return Swal.fire({
      title: title,
      allowOutsideClick: false,
      customClass: {
        popup: 'pixel-alert-popup',
        title: 'pixel-alert-title'
      },
      didOpen: () => {
        Swal.showLoading();
      }
    });
  }
};

export default AuthPixelAlert;