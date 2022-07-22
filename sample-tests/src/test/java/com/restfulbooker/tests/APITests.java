/*
 * MIT License
 *
 * Copyright (c) 2022 Wasiq Bhamla
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 */

package com.restfulbooker.tests;

import static com.github.wasiqb.boyka.builders.ApiRequest.createRequest;
import static com.github.wasiqb.boyka.enums.RequestMethod.POST;
import static com.github.wasiqb.boyka.manager.ApiManager.execute;

import com.github.wasiqb.boyka.builders.ApiResponse;
import com.github.wasiqb.boyka.enums.ContentType;
import com.restfulbooker.requests.BookingData;
import com.restfulbooker.requests.BookingDataBuilder;
import com.restfulbooker.requests.PartialBookingData;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

/**
 * Api Tests with RestfulBooker.
 *
 * @author Faisal Khatri
 * @since 22/07/2022
 */
public class APITests {

    private static final String      API_CONFIG_KEY = "test_restfulbooker";
    private              int         bookingId;
    private              BookingData newBooking;

    @BeforeTest
    public void setupTest () {
        final BookingDataBuilder builder = new BookingDataBuilder ();
        this.newBooking = builder.bookingDataBuilder ();
        final BookingData updatedBooking = builder.bookingDataBuilder ();
        final PartialBookingData partialUpdateBooking = builder.partialBookingBuilder ();
    }

    @Test
    public void testCreateBooking () {
        final var createBookingRequest = createRequest ().configKey (API_CONFIG_KEY)
            .method (POST)
            .contentType (ContentType.JSON)
            .header ("Accept", "application/json")
            .path ("")  // FIXME: Needs to make Path optional.
            .bodyObject (this.newBooking)
            .create ();

        final ApiResponse response = execute (createBookingRequest);
        response.verifyStatusCode ()
            .isEqualTo (200);
        response.verifyTextField ("bookingid")
            .isNotNull ();
        response.verifyTextField ("booking.firstname")
            .isEqualTo (this.newBooking.getFirstname ());
    }
}
