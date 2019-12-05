import React, { Component } from 'react';

class PropertyOverviewRight extends Component {
    constructor(props){
        super(props)
        
        this.bookNowHandler = this.bookNowHandler.bind(this);
    }

    bookNowHandler = (e)=> {
        this.props.onSave();
    }

    getNumberOfWeekDaysAndWeekEnds = (start, end) => {
        let startDate = new Date(start);
        const endDate = new Date(end);

        const days = {
            numberOfWeekends:0,
            numberOfWeekdays:0
        }

        const milliSecondInOneDay = 24 * 60 * 60 * 1000;
        while (startDate.getTime() <= endDate.getTime()) {
            const day = startDate.getDay();
            if (day == 1 || day == 2 || day == 3 || day == 4) {
                days.numberOfWeekdays += 1;
            }
            else {
                days.numberOfWeekends += 1;
            }
            startDate = new Date(startDate.getTime() + milliSecondInOneDay);
        }

        return days;
    }


    render() { 
        
        const startDate = this.props.startDate;
        const endDate = this.props.endDate;
        const { weekendRent,weekRent } = this.props.data;
        const { userId,contactNumber } = this.props.data;
        const { numberOfWeekends,numberOfWeekdays} = this.getNumberOfWeekDaysAndWeekEnds(startDate,endDate);
        const bookingCost = numberOfWeekends*weekendRent + numberOfWeekdays*weekRent;
        const disableBookNow = !this.props.userLoggedIn;
        
        return (  
            <div>
                <div className="row pl-2">
                    <div className="col-md-6">
                        <h1 className="clearfix">$ {weekRent}</h1>
                        <p>Weekday Rent</p>
                    </div>

                    <div className="col-md-6">
                        <h1 className="clearfix">$ {weekendRent}</h1>
                        <p>Weekend Rent</p>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-6 check-in-col-border">
                        <p className="clearfix mb-0 right-p">Check in</p>
                        <h2 className="mt-0 right-h2">{startDate}</h2>
                    </div>
                    <div className="col-md-6 check-out-col-border">
                        <p className="clearfix mb-0 right-p">Check Out</p>
                        <h2 className="mt-0 right-h2">{endDate}</h2>
                    </div>
                </div>
                <div className="row justify-content-center guests-in-col-border">
                    <div className="col-md-6">
                        <h3 className="clearfix mb-0">Total</h3>
                    </div>
                    <div className="col-md-6">
                        <h3 className="clearfix mb-0" style={{textAlign:'left'}}>${bookingCost}</h3>
                    </div>
                </div>

                <div className="row justify-content-center mt-2">
                    <div className="col-md-6">
                        <p className="clearfix mb-0">Host Email</p>
                    </div>
                    <div className="col-md-6">
                        <p className="clearfix mb-0" style={{textAlign:'left'}}>{userId}</p>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <p className="clearfix mb-0">Contact Number</p>
                    </div>
                    <div className="col-md-6">
                        <p className="clearfix mb-0" style={{textAlign:'left'}}>{contactNumber}</p>
                    </div>
                </div>

                <div className="row justify-content-center mt-2">
                    <div className="col-md-8">
                        <button className="btn btn-primary btn-lg btn-block" disabled={disableBookNow} onClick={this.bookNowHandler} >Book Now</button>
                    </div>
                </div>

            </div>
        );
    }
}
 
export default PropertyOverviewRight;