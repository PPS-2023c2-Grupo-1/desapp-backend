import { Message } from '../entities';

export const passwordResetMessage = (
  receiverEmail: string,
  resetPasswordUrl: string,
) =>
  new Message(
    receiverEmail,
    'camila.bertolani@estudiantes.unahur.edu.ar',
    'Reestablecimiento de contraseña | Diseño industrial UNAHUR',
    `Hola! Un administrador ha reestablecido tu contraseña`,
    `<div>
    <p>Tu contraseña ha sido reestablecida por un administrador.</p>
    <p>Para generar tu nueva contraseña ingresa al siguiente link <a href="${resetPasswordUrl}">Reestablecer contraseña</a></p>
</div>`,
  );
