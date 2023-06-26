export const Converter = ({handleChange, convertColor}: {convertColor: string, color: string, handleChange: any}) => {

    return (
        <div className='container'>
            <form onChange={handleChange}>
                <input type="text" id='color'/>
                <div><label htmlFor="color">{convertColor}</label></div>
            </form>
        </div>
    )
}