import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import '../Footer/styles/footer.css';


const Footer = () =>{
    return  (
    <Container className="footer">
    <div className="container lg">
        <div className="row">
            <div className="col-md-7">
                <h5 className="display-6"><i className="fa fa-copyright"></i> Celestial</h5>
                <ul className="nav">
                <li className="nav-item"><a href="" className="nav-link pl-0"><i className="fa fa-facebook fa-lg"></i></a></li>
                <li className="nav-item"><a href="" className="nav-link"><i className="fa fa-twitter fa-lg"></i></a></li>
                <li className="nav-item"><a href="" className="nav-link"><i className="fa fa-github fa-lg"></i></a></li>
                <li className="nav-item"><a href="" className="nav-link"><i className="fa fa-instagram fa-lg"></i></a></li>
            </ul>
                <div className="row">
                    <div className="col-6">
                        <ul className="list-unstyled">
                            <li><a href="">Mission</a></li>
                            <li><a href="">Goal</a></li>
                            <li><a href="">Partners</a></li>
                            <li><a href="">Team</a></li>
                        </ul>
                    </div>
                    <div className="col-6">
                        <ul className="list-unstyled">
                            <li><a href="">Documentation</a></li>
                            <li><a href="">Support</a></li>
                            <li><a href="">Legal Terms</a></li>
                            <li><a href="">About</a></li>
                        </ul>
                    </div>
                </div>

                <br></br>
            </div>
           
            <div className="col-md-5">
            <h5 className="text-md-right">Contact Us</h5>
                <form>
                    <fieldset className="form-group">
                        <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email"/>
                    </fieldset>
                    <fieldset className="form-group">
                        <textarea className="form-control" id="exampleMessage" placeholder="Message"></textarea>
                    </fieldset>
                    <fieldset className="form-group text-xs-right">
                        <button type="button" className="btn btn-secondary-outline btn-lg ">Send</button>
                    </fieldset>
                </form>
            </div>
        </div>
    </div>
</Container>
    )
   
}

export default Footer

