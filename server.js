const express = require("express");
const bp = require("body-parser");
const morgan = require("morgan");
const cors = require('cors');
const config = require('./src/config').getConfig();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bp.urlencoded({ extended: true }));
app.use(bp.json());
app.use(morgan("dev"));
app.use(cors(config.cors));

// handle all players routes inside a sub route
const PlayersRoutes = require("./src/modules/players/players.routes");
app.use("/players", PlayersRoutes);

app.use('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to node server'
  })
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(PORT, () => {
  console.log(`server connecting on http://localhost:${PORT}`);
});
