export default interface Invitacion {
  id?: number;
  nombre?: string;
  confirmacion?: boolean;
  fecha?: Date;
  mesa: string;
  showTimer?: boolean;
  cantidad?: number;
}
