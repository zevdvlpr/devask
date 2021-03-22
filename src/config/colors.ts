export const colors = {
  black: '#000',
  white: '#FFF',
  purple: '#6F3BFF',
};

export function getColors() {
  return colors;
}

export type ColorsType = ReturnType<typeof getColors>;
