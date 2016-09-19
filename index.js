/*******************************************************************************
 * Copyright (c) 2016 Red Hat, Inc.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v10.html
 *
 * 	Contributors:
 * 		 Red Hat Inc. - initial API and implementation and/or initial documentation
 *******************************************************************************/
"use strict";
var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

var Book = require('./book.js');
var myFavoriteBook = getMyFavoriteBook();

app.get('/', function(req, res) {
    res.send(myFavoriteBook);
});

app.listen(port, function() {
    console.log('Listening on port ' + port);
});

function getMyFavoriteBook() {
    return new Book('Nineteen Eighty-Four', 'George Orwell');
}