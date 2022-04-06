import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import "../assets/css/order.css";
import 'font-awesome/css/font-awesome.min.css'
import markLogo from "../assets/img/mark-logo.png";
import studioLogo from "../assets/img/studios-logo.png";
import cardsLogo from "../assets/img/card-group.png";

function Order() {
  return (
    <div>
        <div className="main-section">
            <div className="sidebar">
                <div className="sidebar-content">
                    <div className="logo-upper">
                    <a href="/" className="logo-bar">
                        <img src={markLogo} alt="mark-logo"/>
                        <img src={studioLogo} alt="studio-logo"/>
                    </a>
                    </div>
                    <ul className="nav flex-column">
                        <li>
                            <a href="/">
                                <i className="fa fa-tachometer"></i>
                                <span>Dashboard</span>
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <i className="fa fa-shopping-basket"></i>
                                <span>My Orders</span>
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <i className="fa fa-envelope"></i>
                                <span>Inbox</span>
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <i className="fa fa-user"></i>
                                <span>Editors</span>
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <i className="fa fa-cubes"></i>
                                <span>Packages</span>
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <i className="fa fa-commenting-o"></i>
                                <span>Support</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>    
            <div className="main-content">
                <h3>Order Summary</h3>

                <section className="inner-content"> 
                    <h3 className="inner-heading">Plan</h3>

                    <Row className="equal-row">
                        <Col sm={7}>
                            <div className="package-column">
                                <div className="inner-head">
                                    <h4>Single Package</h4>
                                    <button className="btn btn-edit">Edit Package</button>
                                </div>
                                <div className="inner-body">
                                    <h4 className="body-heading color-lblue">Includes</h4>
                                    <ul className="item-list">
                                        <li>1 Video</li>
                                        <li>1 Thumbnail</li>
                                    </ul>
                                </div>
                                <div className="inner-footer">
                                    <div className="row align-items-center">
                                        <div className="col-sm-6 total-text">
                                            <h4>Total Package</h4>
                                            <p>(Include 7.5% Sales tax)</p>
                                        </div>
                                        <div className="col-sm-6 total-value">
                                            <h4 className="text-right">$20</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col sm={5}>
                            <div className="payment-column bg-blue">
                                <h4 className="main-head">Payment Details</h4>

                                <form action="">
                                    <label className="color-lblue">Card Information</label>
                                    <div className="row input-row">
                                        <div className="col-sm-12">
                                            <input type="text" className="form-control first-input" placeholder="Name on card" />
                                        </div>
                                        <div className="col-sm-12">
                                            <div className="credit-group">
                                                <img className="credit-cards" src={cardsLogo} />
                                                <input type="text" className="form-control second-input" placeholder="Credit Card Number" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row full-width mx-0">
                                        <div className="col-sm-6">
                                            <input type="text" className="form-control" placeholder="MM/YY" />
                                        </div>
                                        <div className="col-sm-6">
                                            <input type="text" className="form-control" placeholder="CVC" />
                                        </div>
                                    </div>

                                    <div className="button-group">
                                        <button className="btn btn-purchase">Complete Purchase</button>
                                        <button className="btn button-default">Cancel</button>
                                    </div>
                                </form>
                            </div>
                        </Col>
                    </Row>
                </section>
            </div>
        </div>       
    </div>
  )
}

export default Order