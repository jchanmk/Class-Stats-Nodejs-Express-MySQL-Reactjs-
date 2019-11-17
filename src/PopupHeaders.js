const PopupHeaders = (props) => {
    return (
        <div>
            <div className="row mb-3 mt-3 pl-3">
                <div className="col">
                    <h3 className="popupHeader">RATE A CLASS</h3>
                </div>
            </div>
            <div className="row pl-3">
                <div className="col">
                    <p className="popupSubheader">
                        We noticed you took
                                            <span className="popupClassInfo"> {props.ClassName} </span>
                        with <span className="popupClassInfo"> Professor {props.Professor} </span>
                    </p>
                </div>
            </div>
            <div className="row pl-3">
                <div className="col">
                    <p className="popupSubheader">
                        Please take 3-5 seconds to provide a few ratings for your peers!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default PopupHeaders; 