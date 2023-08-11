import Card from '../../Card/Card'
import { specializationList } from '../../../utils/constants';


function Specialization() {
  return (
    <Card 
    title='Специализация'
    list={specializationList}
    flex={'flex items-baseline'}
    />
  );
}
export default Specialization;
