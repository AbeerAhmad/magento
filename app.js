var createError = require("http-errors");
var express = require("express");
var config = require("./config");
var mongoose = require("mongoose");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");
var mailSender = require("./mailSender");
var appRouter = require("./routes/appsRouter");
var {
  pushNotificationRouter,
  sendNotification
} = require("./routes/pushNotificationRouter");

// Db connection
mongoose.connect(config.dbUrl, { useNewUrlParser: true }, err => {
  if (err) return console.log(err);
  console.log("DB connected");
});


const ordersRouter = require('./routes/sales/orders/order')
const invoiceRouter = require('./routes/sales/invoices/invoice')
const billsRouter = require('./routes/sales/bills/bill')
const transactionRouter = require('./routes/sales/transactions/transaction')
const pickupRouter = require('./routes/sales/pickups/pickup')
const shipmentRouter = require('./routes/sales/shipments/shipment')
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
const allStoreRoute = require('./routes/store/allstore')
const StatusRouter = require('./routes/store/order_status')
const dispatch=require('./routes/sales/Dispatches/dispatch')


var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "build")));
app.use(cors());

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/apps", appRouter);
app.use("/subscribe", pushNotificationRouter);
app.use("/sales/order", ordersRouter);
app.use("/sales/invoice", invoiceRouter);
app.use("/sales/bill", billsRouter);
app.use("/sales/transaction", transactionRouter);
app.use("/sales/shipment", shipmentRouter);
app.use("/sales/pickup", pickupRouter);
app.use("/store/all_store",allStoreRoute)
app.use("/store/order_status",allStoreRoute)
app.use("/store/dispatch",dispatch)
app.use(express.static('./'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json(err);
});

module.exports = app;
