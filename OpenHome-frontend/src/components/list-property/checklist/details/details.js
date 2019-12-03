import React, { Component } from 'react';
import serialize from 'form-serialize';

class PropertyDetails extends Component {

    constructor(props) {
        super(props);


    }


    saveActionHandle = (e) => {
        e.preventDefault();
        var form = serialize(e.target, { hash: true });
        if (this.validation(form)) {
            this.props.onSave(form);
        }
    }

    validation(data) {
        return true;
    }

    render() {

        var showThisBlock = {
            display: this.props.visible ? 'block' : 'none'
        }

        return (
            <form onSubmit={this.saveActionHandle}>
                <div className="full-width no-bg" id="nav-frames" style={showThisBlock} >
                    <div className="row no-bg justify-content-center">
                        <div className="location-checklist" style={{ margin: '20px 15px 10px 10px', width: '100%' }}>
                            <h3 style={{ fontSize: '16px', fontWeight: '700' }}>Describe your property</h3>
                        </div>
                        <div style={{ margin: '10px 15px 10px 10px', width: '100%', height: '1px', background: '#D3D8DE' }}></div>
                    </div>

                    <div className="row no-bg justify-content-center">

                        <div className="form-element" style={{ height: '170px' }}>
                            <div className="form-label">
                                <label className="form-label">Property Description</label>
                            </div>
                            <div className="street-address" style={{ margin: '20px 0px 0px 3px' }}>
                                <textarea name="description" rows="5" style={{ marginLeft: '5px', marginTop: '5px', width: '95%', border: 'none', background: 'transparent' }} placeholder="Enter the Description" />
                            </div>
                        </div>

                        <div className="form-element">
                            <div className="form-label">
                                <label className="form-label">Property Type</label>
                            </div>
                            <div className="selector" style={{ margin: '20px 0px 0px 3px' }}>
                                <select name="propertyType" className="no-bg" style={{ marginLeft: '3px', width: '98%' }} >
                                    <option value="HOUSE" selected>HOUSE</option>
                                    <option value="TOWN_HOUSE">TOWN_HOUSE</option>
                                    <option value="APARTMENT">APARTMENT</option>
                                    <option value="OTHER">OTHER</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-element">
                            <div className="form-label">
                                <label className="form-label">Bedrooms</label>
                            </div>
                            <div className="selector child-margin" style={{ marginTop: '20px' }}>
                                <input className="form-control no-bg" aria-label="Bedrooms" aria-invalid="false" name="noOfBedrooms" step="1" defaultValue="2" placeholder="2" type="number" style={{ border: 'none', background: 'transparent', fontSize: '16px' }} />
                            </div>
                        </div>

                        <div className="form-element">
                            <div className="form-label">
                                <label className="form-label">Sharing Type</label>
                            </div>
                            <div className="selector" style={{ margin: '20px 0px 0px 3px' }}>
                                <select name="sharingType" className="no-bg" style={{ marginLeft: '3px', width: '98%' }} >
                                    <option value="PLACE" selected>PLACE</option>
                                    <option value="PRIVATE_ROOM">PRIVATE_ROOM</option>
                                    <option value="APARTMENT">APARTMENT</option>
                                    <option value="OTHER">OTHER</option>
                                </select>
                            </div>
                        </div>


                        <div className="form-element">
                            <div className="form-label">
                                <label className="form-label">Total Area (sqft)</label>
                            </div>
                            <div className="street-address child-margin">
                                <input type="number" name="placeArea" placeholder="in sqft" style={{ background: 'transparent' }} />
                            </div>
                        </div>

                        <div className="form-element">
                            <div className="form-label">
                                <label className="form-label">Total Area of Private Room (sqft)</label>
                            </div>
                            <div className="street-address child-margin">
                                <input type="number" name="privateRoomArea" placeholder="in sqft" style={{ background: 'transparent' }} />
                            </div>
                        </div>


                        <div className="form-element">
                            <div className="form-label">
                                <label class="form-check-label" for="hasPrivateBr">Is Private bathroom Available</label>
                            </div>
                            <input type="checkbox" class="form-check-input" id="hasPrivateBr" name="hasPrivateBr" />
                        </div>


                        <div className="form-element">
                            <div className="form-label">
                                <label class="form-check-label" htmlFor="hasPrivateShower">Is Private shower Available</label>
                            </div>
                            <input type="checkbox" class="form-check-input" id="hasPrivateShower" name="hasPrivateShower" />
                        </div>


                        <div className="form-element">
                            <div className="form-label">
                                <label class="form-check-label" htmlFor="parkingAvailable">Is Parking Available</label>
                            </div>
                            <input type="checkbox" class="form-check-input" id="parkingAvailable" name="parkingAvailable" />
                        </div>


                        <div className="form-element">
                            <div className="form-label">
                                <label class="form-check-label" htmlFor="onsiteLaundry">Has onsiteLaundry</label>
                            </div>
                            <input type="checkbox" class="form-check-input" id="onsiteLaundry" name="onsiteLaundry" />
                        </div>


                        <div className="form-element">
                            <div className="form-label">
                                <label class="form-check-label" htmlFor="cityView">Has City View</label>
                            </div>
                            <input type="checkbox" class="form-check-input" id="cityView" name="cityView" />
                        </div>

                        <div className="form-element">
                            <div className="form-label">
                                <label class="form-check-label" htmlFor="cityView">Is Smoking Allowed</label>
                            </div>
                            <input type="checkbox" class="form-check-input" id="smokingAllowed" name="smokingAllowed" />
                        </div>



                        <div className="form-element">
                            <div className="form-label">
                                <label className="form-label">WIFI Availibility</label>
                            </div>
                            <div className="selector" style={{ margin: '20px 0px 0px 3px' }}>
                                <select name="wifi" className="no-bg" style={{ marginLeft: '3px', width: '98%' }} >
                                    <option value="FREE_WIFI" selected>FREE_WIFI</option>
                                    <option value="PAID_WIFI">PAID_WIFI</option>
                                    <option value="NO_WIFI">NO_WIFI</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-element">
                            <div className="form-label">
                                <label className="form-label">Days Availibility</label>
                            </div>
                            <div className="selector" style={{ margin: '20px 0px 0px 3px' }}>

                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" id="sun" name="sun" value="1" />
                                    <label class="form-check-label" htmlFor="sun">Sunday</label>
                                </div>

                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" id="mon" name="mon" value="1" />
                                    <label class="form-check-label" htmlFor="mon">Monday</label>
                                </div>

                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" id="tue" name="tue" value="1" />
                                    <label class="form-check-label" htmlFor="tue">Tuesday</label>
                                </div>

                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" id="wed" name="wed" value="1" />
                                    <label class="form-check-label" htmlFor="wed">Wednesday</label>
                                </div>

                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" id="thur" name="thur" value="1" />
                                    <label class="form-check-label" htmlFor="thur">Thursday</label>
                                </div>

                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" id="fri" name="fri" value="1" />
                                    <label class="form-check-label" htmlFor="fri">Friday</label>
                                </div>

                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" id="sat" name="sat" value="1" />
                                    <label class="form-check-label" htmlFor="sat">Saturday</label>
                                </div>


                            </div>
                        </div>




                    </div>

                    <div className="row justify-content-center mt-2">
                        <div className="col-md-2">
                            <button className="btn btn-default btn-block btn-rounded btn-cancel">Cancel </button>
                        </div>
                        <div className="col-md-2"></div>

                        <div className="col-md-2">
                            <button type="submit" className="btn btn-primary btn-block btn-rounded btn-save" >Save</button>
                        </div>
                    </div>

                </div>
            </form>

        );
    }
}

export default PropertyDetails;