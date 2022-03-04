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

package com.github.wasiqb.boyka.testng.api.requests;

import lombok.Builder;
import lombok.Getter;

/**
 * User class.
 *
 * @author Wasiq Bhamla
 * @since 04-Mar-2022
 */
@Getter
@Builder (builderMethodName = "createUser", buildMethodName = "create")
public class User {
    private final String job;
    private final String name;
}
