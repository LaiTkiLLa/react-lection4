export const FileManager = (props: {handleSelect: any}) => {
    return (
        <div className='container-select'>
            <div className="blockSelect">Click to select</div>
            <input type="file" onChange={props.handleSelect}/>
        </div >
    )
}