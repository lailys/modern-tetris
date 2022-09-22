export const createBoard = () => {
    const board=Array(23);
    for(let i=0;i<24;i++){
        board[i]=Array(13).fill(0);
    }
    return board;
  }
export const randomShape = () => {
    const shapes=["o","i","l","c","s"];
    const index=Math.floor(Math.random() * (4 - 0 + 1) + 0);
    return shapes[index];
  }
export const randomRotation = () => {
    const rotations=[0,90,180,360];
    const index=Math.floor(Math.random() * (3 - 0 + 1) + 0);
    return rotations[index];
  }