import { FaTrashAlt } from 'react-icons/fa';

const Content = ({items, name, nameHandler, handleClick, handleClick2, handleCheck, handleDelete}) => {
    return (
        <main>
            <p onDoubleClick={handleClick}>Hello {name}</p>
            <button onClick={nameHandler}>Change Name</button>
            <button onClick={handleClick}>Click to Count</button>
            <button onClick={handleClick2}>Click Me</button>
            {(items.length) ? (
            <ul>
                {items.map((item) => (
                    <li className="item" key={item.id}>
                        <input
                            type="checkbox"
                            onChange={() => handleCheck(item.id)}
                            checked={item.checked} />
                        <label
                            style = {(item.checked) ?
                                {textDecoration : 'line-through'} : null }
                            onDoubleClick={() => handleCheck(item.id)}
                        >
                            {item.item}
                        </label>
                        {/* <button>Delete</button> */}
                        <FaTrashAlt
                            onClick={() => handleDelete(item.id)}
                            role="button"
                            tabIndex="0"
                        />
                    </li>
                ))}
            </ul>
            ) : (
                <p style={{marginTop : '2rem'}}> Your List is Empty</p>
            )}
        </main>
    )
}

export default Content;