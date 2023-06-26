import uuid from "react-uuid";

export const Files = (props: {files: any, handleClose: any}) => {
    return (
        <div className="container-image-block">
            {props.files.map((url: any) => (
                <div className="image-block" key={uuid()}>
                    <img src={url} />
                    <button className="fa-times material-symbols-outlined" onClick={() => props.handleClose(url)}>close</button>
                </div>
            ))}
        </div>
    )
}