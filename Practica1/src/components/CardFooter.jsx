import { useAppContext } from '../hooks/useAppContext';

export const CardFooter = () => {
    
    const person = useAppContext();
    console.log(person);
  return (
    <div>CardFooter</div>
  )
}
