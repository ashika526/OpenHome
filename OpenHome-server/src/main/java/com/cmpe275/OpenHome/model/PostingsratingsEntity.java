package com.cmpe275.OpenHome.model;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "postingsratings", schema = "Openhome", catalog = "")
public class PostingsratingsEntity {
    private int ratingId;
    private Integer postingId;
    private String userId;
    private Integer rating;
    private String review;
    private Integer bookingId;

    @Id
    @Column(name = "RATING_ID")
    public int getRatingId() {
        return ratingId;
    }

    public void setRatingId(int ratingId) {
        this.ratingId = ratingId;
    }

    @Basic
    @Column(name = "POSTING_ID")
    public Integer getPostingId() {
        return postingId;
    }

    public void setPostingId(Integer postingId) {
        this.postingId = postingId;
    }

    @Basic
    @Column(name = "USER_ID")
    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    @Basic
    @Column(name = "RATING")
    public Integer getRating() {
        return rating;
    }

    public void setRating(Integer rating) {
        this.rating = rating;
    }

    @Basic
    @Column(name = "REVIEW")
    public String getReview() {
        return review;
    }

    public void setReview(String review) {
        this.review = review;
    }

    @Basic
    @Column(name = "booking_id")
    public Integer getBookingId() {
        return bookingId;
    }

    public void setBookingId(Integer bookingId) {
        this.bookingId = bookingId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        PostingsratingsEntity that = (PostingsratingsEntity) o;
        return ratingId == that.ratingId &&
                Objects.equals(postingId, that.postingId) &&
                Objects.equals(userId, that.userId) &&
                Objects.equals(rating, that.rating) &&
                Objects.equals(review, that.review) &&
                Objects.equals(bookingId, that.bookingId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(ratingId, postingId, userId, rating, review, bookingId);
    }
}
