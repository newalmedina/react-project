import React from 'react'
import Swal from 'sweetalert2';

const Error = (message) => {
    return (
        Swal.fire({
            position: "top-end",
            toast: true,
            icon: "error",
            title: message,
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true
        })
    );
}

export default Error;