export default (input)=> {
  return input.replace(/s'(\s|$)/gim, 's’$1')
}
