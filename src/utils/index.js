export const createBoard = () => {
    const board=Array(27);
    for(let i=0;i<27;i++){
        board[i]=Array(13).fill([0,null]);
    }
    return board;
  }
export const randomShape = () => {
    const shapes=["o","i","l","c","s"];
    const index=Math.floor(Math.random() * (4 - 0 + 1) + 0);
    return shapes[index];
  }
export const getStartPostion = () => {
    const y=Math.floor(Math.random() * (10 - 0 + 1) + 0)
    const x=Math.floor(Math.random() * (23 - 0 + 1) + 0)
    return [0,y]
}
export const randomRotation = () => {
    const rotations=[0,90,180,360];
    const index=Math.floor(Math.random() * (3 - 0 + 1) + 0);
    return rotations[index];
  }
export const rotate = (curr) => {
   return curr===360?0:curr+90;
}