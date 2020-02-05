export class Movimiento {
  idMovimiento: number;
  tipoMovimiento: string;
  fechaMovimiento: Date;
  descMovimiento: string;
  valorMovimiento: number;
  estadoMovimiento: string;
  codigoAuth: string;
  detMovimiento: string;
  idCuenta: number;

  constructor(){
    this.fechaMovimiento = new Date();
  }
  
}
