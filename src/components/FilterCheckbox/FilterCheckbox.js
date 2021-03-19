import './FilterCheckbox.css';

function FilterCheckbox(props) {
    return (
        <div className={`checkbox ${props.isFilter ? '' : 'checkbox__disabled'}`}>
            <input type="checkbox" value="None" id="filter" name="check" className="checkbox__input" />
            <label onClick={props.filterFlims} htmlFor="filter" className="checkbox__label"></label>
        </div>

    );
}

export default FilterCheckbox;