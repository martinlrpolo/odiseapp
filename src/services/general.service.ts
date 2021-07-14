import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  static WS_URL: string = "http://localhost/odiseappws/public/ws/";
  static PIC_URL: string = "http://localhost/odiseappws/public/uploads/";

  constructor() { }

  openmsg(msg, type)
  {
    if(type == 'success')
    {
      Swal.fire(
        'Correcto!',
        msg,
        'success'
      )
    }else{
      Swal.fire(
        'Error!',
        msg,
        'error'
      )
    }
    
  }
}
