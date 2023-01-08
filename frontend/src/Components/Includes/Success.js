import React from 'react'
import Swal from 'sweetalert2';

const Success = (message) => {
    return (
        Swal.fire({
            position: "top-end",
            toast: true,
            icon: "success",
            title: message,
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true
        })
    );
}

export default Success;