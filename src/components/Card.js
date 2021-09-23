import Input from './Input';

function Card(props) {
    return (
        <div className="Card">
            <Input type="text" name={"Pedalboard-" + props.id} placeholder="Enter a pedalboard name" />
        </div>
    );
}

export default Card;