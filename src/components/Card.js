import Input from './Input';

function Card() {
    return (
        <div className="Card">
            <Input type="text" name={"Pedalboard Name"} placeholder="Enter a pedalboard name" />
        </div>
    );
}

export default Card;