export const colors = {
  header: '#1B1F23',
  input: '#121214',

  background: '#202A32',  

  black: '#000',
  white: '#FFF',
};

export function getColors() {
  return colors;
}

export type ColorsType = ReturnType<typeof getColors>;
