import Card from '../card/card.component';
import './card-list.styles.css';

const CardList = ({ monsters }) => {
  return (<
    div className='card-list' > {
      monsters.map((monster) => {
        const { name, email, id } = monster;
        return (< Card key={id} monster={monster} />
        )
      })
    }

  </div>
  )
}


export default CardList;