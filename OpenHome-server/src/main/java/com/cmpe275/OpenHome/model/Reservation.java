package com.cmpe275.OpenHome.model;

import org.hibernate.annotations.ColumnDefault;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.Objects;

@Entity
@Table(name = "reservations", schema = "Openhome", catalog = "")
public class Reservation {
    private int bookingId;
    private String hostEmailId;
    private String tenantEmailId;
    private Timestamp startDate;
    private Integer postingId;
    private Timestamp endDate;
    private Double bookingCost;
    private Byte isCancelled;
    private Timestamp checkIn;
    private Timestamp checkOut;
    private String dayAvailability;
    private Integer reservationRating;
    private String reservationReview;
    private Integer userRating;
    private String userReview;

    @Id
    @Column(name = "booking_id")
    public int getBookingId() {
        return bookingId;
    }

    public void setBookingId(int bookingId) {
        this.bookingId = bookingId;
    }

    @Basic
    @Column(name = "host_email_id")
    public String getHostEmailId() {
        return hostEmailId;
    }

    public void setHostEmailId(String hostEmailId) {
        this.hostEmailId = hostEmailId;
    }

    @Basic
    @Column(name = "tenant_email_id")
    public String getTenantEmailId() {
        return tenantEmailId;
    }

    public void setTenantEmailId(String tenantEmailId) {
        this.tenantEmailId = tenantEmailId;
    }

    @Basic
    @Column(name = "start_date")
    public Timestamp getStartDate() {
        return startDate;
    }

    public void setStartDate(Timestamp startDate) {
        this.startDate = startDate;
    }

    @Basic
    @Column(name = "posting_id")
    public Integer getPostingId() {
        return postingId;
    }

    public void setPostingId(Integer postingId) {
        this.postingId = postingId;
    }

    @Basic
    @Column(name = "end_date")
    public Timestamp getEndDate() {
        return endDate;
    }

    public void setEndDate(Timestamp endDate) {
        this.endDate = endDate;
    }

    @Basic
    @Column(name = "booking_cost")
    public Double getBookingCost() {
        return bookingCost;
    }

    public void setBookingCost(Double bookingCost) {
        this.bookingCost = bookingCost;
    }

    @Basic
    @Column(name = "isCancelled")
    public Byte getIsCancelled() {
        return isCancelled;
    }

    public void setIsCancelled(Byte isCancelled) {
        this.isCancelled = isCancelled;
    }

    @Basic
    @Column(name = "checkIn")
    public Timestamp getCheckIn() {
        return checkIn;
    }

    public void setCheckIn(Timestamp checkIn) {
        this.checkIn = checkIn;
    }

    @Basic
    @Column(name = "checkOut")
    public Timestamp getCheckOut() {
        return checkOut;
    }

    public void setCheckOut(Timestamp checkOut) {
        this.checkOut = checkOut;
    }

    @Basic
    @Column(name = "DAY_AVAILABILITY")
    public String getDayAvailability() {
        return dayAvailability;
    }

    public void setDayAvailability(String dayAvailability) {
        this.dayAvailability = dayAvailability;
    }

    @Basic
    @ColumnDefault("0")
    @Column(name = "reservationRating")
    public Integer getReservationRating() {
        return reservationRating;
    }

    public void setReservationRating(Integer reservationRating) {
        this.reservationRating = reservationRating;
    }

    @Basic
    @ColumnDefault("")
    @Column(name = "reservationReview")
    public String getReservationReview() {
        return reservationReview;
    }

    public void setReservationReview(String reservationReview) {
        this.reservationReview = reservationReview;
    }

    @Basic
    @Column(name = "userRating")
    @ColumnDefault("0")
    public Integer getUserRating() {
        return userRating;
    }

    public void setUserRating(Integer userRating) {
        this.userRating = userRating;
    }

    @Basic
    @Column(name = "userReview")
    @ColumnDefault("")
    public String getUserReview() {
        return userReview;
    }

    public void setUserReview(String userReview) {
        this.userReview = userReview;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Reservation that = (Reservation) o;
        return bookingId == that.bookingId &&
                Objects.equals(hostEmailId, that.hostEmailId) &&
                Objects.equals(tenantEmailId, that.tenantEmailId) &&
                Objects.equals(startDate, that.startDate) &&
                Objects.equals(postingId, that.postingId) &&
                Objects.equals(endDate, that.endDate) &&
                Objects.equals(bookingCost, that.bookingCost) &&
                Objects.equals(isCancelled, that.isCancelled) &&
                Objects.equals(checkIn, that.checkIn) &&
                Objects.equals(checkOut, that.checkOut) &&
                Objects.equals(dayAvailability, that.dayAvailability) &&
                Objects.equals(reservationRating, that.reservationRating) &&
                Objects.equals(reservationReview, that.reservationReview) &&
                Objects.equals(userRating, that.userRating) &&
                Objects.equals(userReview, that.userReview);
    }

    @Override
    public int hashCode() {
        return Objects.hash(bookingId, hostEmailId, tenantEmailId, startDate, postingId, endDate, bookingCost, isCancelled, checkIn, checkOut, dayAvailability, reservationRating, reservationReview, userRating, userReview);
    }
}
