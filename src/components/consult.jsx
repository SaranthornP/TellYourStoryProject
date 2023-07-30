import { Component } from "react";

class ObjTag extends Component {
    render() {
        return (
            <h6 className="ObjTag mx-3 p-2 bg-white rounded-pill text-black border">{this.props.val}</h6>

        );
    }
}

function Consult() {
    return (
        <div className="container consultPage">
            <div className="row text-center">
                <div className="col-12 mb-3">
                    <h1 className="fw-bold">The Home of your <br /> dream <span className="Heart">HEART</span></h1>
                </div>
                <div className="col-12 mb-5 searchArea d-inline-flex justify-content-center">
                    <form id="formSearch" className="d-flex align-items-center border rounded-pill p-3 me-3">
                        <i className="bi bi-search"></i>
                        <input className="form-control me-2 rounded-pill" type="search" placeholder="Type..." aria-label="Search">
                        </input>
                    </form>
                    <button className="btn rounded-pill px-4 fs-5" form="formSearch" type="submit">
                        <i className="bi bi-search pe-2"></i>ค้นหา
                    </button>
                </div>
                <div className="col-12 my-5">
                    <h5>Trending search</h5>
                </div>
                <div id="TrendingTag" className="col-12 d-flex justify-content-center">
                    <ObjTag val="family" />
                    <ObjTag val="family" />
                </div>
            </div>
        </div>
    );
}

export default Consult;
